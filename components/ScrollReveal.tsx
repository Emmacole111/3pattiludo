"use client";

import { createElement, useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: "div" | "section" | "article" | "li" | "ul" | "ol";
  rootMargin?: string;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  rootMargin = "0px 0px -10% 0px",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return createElement(
    as,
    {
      ref,
      className: `reveal ${delayClass} ${className}`.trim(),
    },
    children
  );
}
