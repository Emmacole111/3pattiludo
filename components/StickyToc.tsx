"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

export default function StickyToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside
      aria-label="Article table of contents"
      className="hidden lg:block"
    >
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto thin-scroll">
        <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            On this page
          </p>
          <nav className="mt-3">
            <ol className="space-y-0.5 text-sm">
              {items.map((item, i) => {
                const active = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`group relative flex gap-2.5 rounded-md px-2 py-1.5 transition-colors ${
                        active
                          ? "bg-accent/10 text-accent"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-y-1.5 left-0 w-[2px] rounded-full transition-all ${
                          active
                            ? "bg-accent shadow-glow"
                            : "bg-transparent"
                        }`}
                      />
                      <span
                        className={`tabular-nums ${
                          active
                            ? "text-accent"
                            : "text-slate-500 group-hover:text-slate-300"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-snug">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </aside>
  );
}
