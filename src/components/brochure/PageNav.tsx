import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sections } from "@/content/content";

// Mobile and tablet floating pills: previous section, current label, next section.
export function PageNav() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight * 0.4;
      let current = 0;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= mid) current = i;
      });
      setIdx(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (i: number) => document.getElementById(sections[i]?.id ?? "")?.scrollIntoView({ behavior: "smooth" });
  const prev = idx > 0 ? sections[idx - 1] : null;
  const next = idx < sections.length - 1 ? sections[idx + 1] : null;
  const pill = "pill-glass flex h-11 min-w-0 items-center rounded-full px-3 text-xs font-medium";

  return (
    <nav aria-label="Page navigation" className="fixed inset-x-0 bottom-3 z-50 flex items-center justify-between gap-2 px-3 lg:hidden">
      <div className="flex flex-1 justify-start">
        {prev && (
          <button onClick={() => go(idx - 1)} className={`${pill} gap-1 pr-4`} aria-label={`Previous: ${prev.title}`}>
            <ChevronLeft className="size-4 shrink-0 text-sunset" />
            <span className="truncate">{prev.title}</span>
          </button>
        )}
      </div>
      <div className={`${pill} shrink-0 justify-center border border-sunset/60 px-4 font-serif text-sm italic text-sunset`} aria-live="polite">
        {sections[idx]?.title}
      </div>
      <div className="flex flex-1 justify-end">
        {next && (
          <button onClick={() => go(idx + 1)} className={`${pill} gap-1 pl-4`} aria-label={`Next: ${next.title}`}>
            <span className="truncate">{next.title}</span>
            <ChevronRight className="size-4 shrink-0 text-sunset" />
          </button>
        )}
      </div>
    </nav>
  );
}
