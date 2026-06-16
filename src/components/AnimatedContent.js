"use client";

import { useRef, useEffect } from "react";

const AnimatedContent = ({
  children,
  container,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = "power3.in",
  onComplete,
  onDisappearanceComplete,
  className = "",
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    let st = null;
    let tl = null;
    let mounted = true;

    async function initAnimation() {
      if (typeof window === "undefined" || !ref.current) return;

      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger ||
        scrollTriggerModule.default ||
        scrollTriggerModule;

      if (!mounted || !ref.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const el = ref.current;
      let scrollerTarget =
        container || document.getElementById("snap-main-container") || null;

      if (typeof scrollerTarget === "string") {
        scrollerTarget = document.querySelector(scrollerTarget);
      }

      const axis = direction === "horizontal" ? "x" : "y";
      const offset = reverse ? -distance : distance;
      const startPct = (1 - threshold) * 100;

      gsap.set(el, {
        [axis]: offset,
        scale,
        opacity: animateOpacity ? initialOpacity : 1,
        visibility: "visible",
      });

      tl = gsap.timeline({
        paused: true,
        delay,
        onComplete: () => {
          if (onComplete) onComplete();
          if (disappearAfter > 0) {
            gsap.to(el, {
              [axis]: reverse ? distance : -distance,
              scale: 0.8,
              opacity: animateOpacity ? initialOpacity : 0,
              delay: disappearAfter,
              duration: disappearDuration,
              ease: disappearEase,
              onComplete: () => onDisappearanceComplete?.(),
            });
          }
        },
      });

      tl.to(el, {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        duration,
        ease,
      });

      st = ScrollTrigger.create({
        trigger: el,
        scroller: scrollerTarget,
        start: `top ${startPct}%`,
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          tl?.restart();
        },
        onEnterBack: () => {
          tl?.restart();
        },
        onLeave: () => {
          gsap.to(el, {
            [axis]: offset,
            scale,
            opacity: animateOpacity ? initialOpacity : 1,
            duration: duration * 0.5,
            ease: disappearEase,
          });
        },
        onLeaveBack: () => {
          gsap.to(el, {
            [axis]: offset,
            scale,
            opacity: animateOpacity ? initialOpacity : 1,
            duration: duration * 0.5,
            ease: disappearEase,
          });
        },
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        if (st?.isActive) {
          tl?.restart();
        }
      });
    }

    initAnimation();

    return () => {
      mounted = false;
      st?.kill();
      tl?.kill();
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete,
  ]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ visibility: "hidden" }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
