"""
Generate the Astro route tree for both locales.

Persian is the default locale and lives at the root; English lives under /en.
Each route file is a thin wrapper that passes `lang` to a shared view in
src/views/, so page logic is written once rather than twice.

Run from the project root:  python scripts/gen-routes.py
"""

import io
import os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
PAGES = os.path.join(ROOT, 'src', 'pages')

# (route path relative to its locale root, view name)
STATIC_ROUTES = [
    ('index', 'Home'),
    ('collections/index', 'Collections'),
    ('about', 'About'),
    ('care', 'Care'),
    ('faq', 'Faq'),
    ('journal/index', 'Journal'),
    ('contact', 'Contact'),
    ('404', 'NotFound'),
]

# (route path, view name, collection module export, param name, prop name)
DYNAMIC_ROUTES = [
    ('collections/[slug]', 'CollectionDetail', 'collections', 'collection'),
    ('products/[slug]', 'ProductDetail', 'products', 'product'),
    ('journal/[slug]', 'JournalPost', 'posts', 'post'),
]

LEGAL_ROUTES = [('privacy', 'privacy'), ('terms', 'terms')]


def up(route: str, lang: str) -> str:
    """Relative prefix from a route file back to src/."""
    depth = route.count('/') + (1 if lang == 'en' else 0)
    return '../' * (depth + 1)


def static_page(route: str, view: str, lang: str) -> str:
    rel = up(route, lang)
    return (
        '---\n'
        f"import {view} from '{rel}views/{view}.astro';\n"
        '---\n\n'
        f'<{view} lang="{lang}" />\n'
    )


def dynamic_page(route: str, view: str, source: str, prop: str, lang: str) -> str:
    rel = up(route, lang)
    return (
        '---\n'
        f"import {view} from '{rel}views/{view}.astro';\n"
        f"import {{ {source} }} from '{rel}data/catalog';\n"
        '\n'
        'export function getStaticPaths() {\n'
        f'  return {source}.map((entry) => ({{\n'
        '    params: { slug: entry.slug },\n'
        f'    props: {{ {prop}: entry }},\n'
        '  }));\n'
        '}\n'
        '\n'
        f'const {{ {prop} }} = Astro.props;\n'
        '---\n\n'
        f'<{view} lang="{lang}" {prop}={{{prop}}} />\n'
    )


def legal_page(route: str, kind: str, lang: str) -> str:
    rel = up(route, lang)
    return (
        '---\n'
        f"import Legal from '{rel}views/Legal.astro';\n"
        '---\n\n'
        f'<Legal lang="{lang}" kind="{kind}" />\n'
    )


def write(route: str, lang: str, body: str) -> str:
    prefix = '' if lang == 'fa' else 'en/'
    path = os.path.join(PAGES, f'{prefix}{route}.astro')
    os.makedirs(os.path.dirname(path), exist_ok=True)
    io.open(path, 'w', encoding='utf-8', newline='\n').write(body)
    return os.path.relpath(path, ROOT).replace('\\', '/')


written = []
for lang in ('fa', 'en'):
    for route, view in STATIC_ROUTES:
        written.append(write(route, lang, static_page(route, view, lang)))
    for route, view, source, prop in DYNAMIC_ROUTES:
        written.append(write(route, lang, dynamic_page(route, view, source, prop, lang)))
    for route, kind in LEGAL_ROUTES:
        written.append(write(route, lang, legal_page(route, kind, lang)))

for path in written:
    print(path)
print(f'\n{len(written)} route files')
