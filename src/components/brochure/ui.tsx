import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0, from = "up" }: { children: ReactNode; className?: string; delay?: number; from?: "up" | "left" | "right" | "scale" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} data-from={from} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Photo({ src, alt, className = "", eager = false }: { src: string | null; alt: string; className?: string; eager?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <div role="img" aria-label={alt} className={`bg-placeholder ${className}`} />;
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

export function CurationMark({ size = 72, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-label="Handpicked by GoLookAround" role="img">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" className="curation-spin" />
      <text x="50" y="48" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="8.6" fontWeight="700" letterSpacing="1" fill="currentColor">HANDPICKED</text>
      <text x="50" y="61" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="6.8" fill="currentColor">by GoLookAround</text>
    </svg>
  );
}

export function Tag({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span className={`inline-block rounded-full border px-3.5 py-1 text-sm font-semibold ${tone === "dark" ? "border-paper/20 bg-paper/10 text-paper/90" : "border-[#ece7ff] bg-accent text-brand-deep"}`}>
      {children}
    </span>
  );
}

export function Icon({ name, className = "text-brand", size = 36 }: { name: string; className?: string; size?: number }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {name === "hand" && <path {...p} d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12m0-1.5v-6a1.5 1.5 0 0 1 3 0V12m0-5.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-.5a6 6 0 0 1-5-2.7L3 15a1.5 1.5 0 0 1 2.5-1.7L8 16" />}
      {name === "heart" && <path {...p} d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />}
      {name === "users" && <g {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.2A5 5 0 0 1 21 19" /></g>}
      {name === "shield" && <g {...p}><path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></g>}
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img src="/golookaround-logo.webp" alt="" width={32} height={32} className="size-7 shrink-0 object-contain sm:size-8" />
      <span className="text-brand-gradient text-base font-semibold leading-none tracking-tight sm:text-lg">
        GoLookAround
      </span>
    </span>
  );
}

// Intro: the eye fades in, slides left, the wordmark reveals, then it all fades out.
const SPLASH_MS = 1900;

export function Splash() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("splash-lock");
    const t = window.setTimeout(() => setShow(false), SPLASH_MS);
    return () => {
      window.clearTimeout(t);
      root.classList.remove("splash-lock");
    };
  }, []);
  useEffect(() => {
    if (!show) document.documentElement.classList.remove("splash-lock");
  }, [show]);
  if (!show) return null;
  return (
    <div aria-hidden="true" className="splash">
      <div className="flex items-center">
        <img src="/golookaround-logo.webp" alt="" width={80} height={80} className="splash-icon size-14 shrink-0 object-contain sm:size-20" />
        <span className="splash-word">
          <span className="text-brand-gradient block pr-1 text-3xl font-semibold leading-none tracking-tight sm:text-5xl">GoLookAround</span>
        </span>
      </div>
    </div>
  );
}
