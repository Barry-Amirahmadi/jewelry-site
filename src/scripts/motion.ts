/**
 * Motion — dial 6/10 (Standard: scroll reveals and grid stagger, no pinning).
 *
 * The grid stagger is the preset from design-system/jewelry-site/MASTER.md.
 * Hero and text reveals use expo.out instead, because an overshoot on large
 * editorial type reads as restless.
 *
 * Three things matter here and are easy to get wrong:
 *
 * 1. Reveals are attached as `scrollTrigger` on the tween rather than a bare
 *    ScrollTrigger.create({onEnter}). onEnter does not fire for an element that
 *    is ALREADY inside the viewport when the trigger is created, which leaves
 *    every above-the-fold reveal stuck at opacity 0 — page headers included.
 *
 * 2. The opacity-0 start state is gated on the `.motion-ready` class, which this
 *    module adds. If this file fails to load or GSAP errors, the class is never
 *    added and all content renders visible instead of blank.
 *
 * 3. `astro:page-load` fires on the initial load as well as after each
 *    ClientRouter swap, so it is the only place build() is wired up. Calling
 *    build() directly as well would double-run and revert in-flight tweens.
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let pluginsReady = false;
let mm: gsap.MatchMedia | null = null;

function build() {
  if (!pluginsReady) {
    gsap.registerPlugin(ScrollTrigger);
    pluginsReady = true;
  }

  // Tear down whatever the previous page left behind.
  mm?.revert();
  ScrollTrigger.getAll().forEach((instance) => instance.kill());
  mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set('[data-reveal]', { opacity: 1, y: 0, scale: 1 });
  });

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    // Hero — already in view, so it plays on load rather than on scroll.
    const hero = gsap.utils.toArray<HTMLElement>('[data-hero] [data-reveal]');
    if (hero.length) {
      gsap.fromTo(
        hero,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.09, ease: 'expo.out', delay: 0.05 },
      );
    }

    // Grid stagger — MASTER.md preset, one trigger per container.
    gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((container) => {
      const items = gsap.utils.toArray<HTMLElement>('[data-reveal]', container);
      if (!items.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.92, y: 16 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: { each: 0.06, from: 'start', grid: 'auto' },
          ease: 'back.out(1.4)',
          scrollTrigger: { trigger: container, start: 'top 88%', once: true },
        },
      );
    });

    // Everything else: not in the hero, not inside a stagger container.
    gsap.utils
      .toArray<HTMLElement>('[data-reveal]')
      .filter((el) => !el.closest('[data-stagger]') && !el.closest('[data-hero]'))
      .forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          },
        );
      });
  });
}

/**
 * Which path the current tween set was built for.
 *
 * This module is a deferred import, so on a cold load `astro:page-load` has
 * usually already fired by the time the listener below is attached — waiting for
 * it alone means the first page never animates at all. So build() is called
 * directly as well, and this key stops the two paths from running twice and
 * reverting each other's in-flight tweens.
 */
let builtFor: string | null = null;

function buildOnce() {
  const key = location.pathname;
  if (builtFor === key) return;
  builtFor = key;
  build();
}

export function initMotion() {
  // Only now is it safe to hide the reveal targets: this module has loaded and
  // buildOnce() is about to run.
  document.documentElement.classList.add('motion-ready');

  buildOnce();
  document.addEventListener('astro:page-load', buildOnce);
  document.addEventListener('astro:before-swap', () => {
    builtFor = null;
    mm?.revert();
    ScrollTrigger.getAll().forEach((instance) => instance.kill());
  });
}
