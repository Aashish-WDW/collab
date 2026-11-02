import { useEffect, useRef, useState, type MouseEvent } from "react";
import { content as c, sections, waLink } from "@/content/content";
import { goToSection, useActiveSection } from "./PageNav";
import PerspectiveTunnelHero from "@/components/ui/perspective-tunnel-hero";
import { RuixenGradientFooter } from "@/components/ui/ruixen-gradient-footer";
import PolaroidLineCarousel from "@/components/ui/polaroid-line-carousel";
import { CurationMark, Icon, Logo, Photo, Reveal, Tag } from "./ui";

const wrap = "mx-auto w-full max-w-[1100px] px-6 md:px-10";

export function Header() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const active = sections[useActiveSection()]?.id;
  const ring = "rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink";
  const jump = (id: string) => (e: MouseEvent) => { e.preventDefault(); goToSection(id); };
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${solid ? "bg-ink-deep/95 shadow-soft backdrop-blur" : "bg-gradient-to-b from-ink-deep/80 to-transparent"}`}>
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-6 px-6 text-paper md:px-10">
        <a href="#home" onClick={jump("home")} aria-label="GoLookAround, back to top" className={`shrink-0 px-1 ${ring}`}><Logo /></a>
        <nav aria-label="Sections" className="hidden items-center gap-0.5 text-sm xl:flex">
          {[["about", "About"], ["difference", "Curation"], ["experiences", "Experiences"], ["retreats", "Retreats"], ["events", "Events"], ["gallery", "Gallery"], ["for-organizations", "Organizations"], ["partners", "Partners"]].map(([id, t]) => (
            <a key={id} href={`#${id}`} onClick={jump(id ?? "")} aria-current={active === id ? "location" : undefined}
              className={`px-3 py-2 transition-opacity aria-[current]:text-brand-light aria-[current]:opacity-100 ${active === id ? "" : "opacity-85 hover:opacity-100"} ${ring}`}>{t}</a>
          ))}
        </nav>
        <a href={waLink(c.messages.customer)} target="_blank" rel="noreferrer" aria-label="Talk to us on WhatsApp (opens in a new tab)" className="shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_28px_-14px_rgb(37_99_235/0.7)] transition hover:-translate-y-0.5">
          Talk to us
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  const h = c.hero;
  return (
    <PerspectiveTunnelHero
      id="home"
      ariaLabel="Home"
      images={h.tunnel}
      eyebrow={h.eyebrow}
      title={h.titleLines}
      subtitle={h.sub}
      prompt={h.prompt}
    >
      <a href="#difference" onClick={(e) => { e.preventDefault(); goToSection("difference"); }} className="mt-8 inline-flex items-center rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-[0_12px_28px_-14px_rgb(37_99_235/0.7)] transition hover:-translate-y-0.5">
        See how we curate
      </a>
    </PerspectiveTunnelHero>
  );
}

export function About() {
  return (
    <section id="about" aria-label="About us" className="scroll-mt-16 focus:outline-none py-20 md:py-32">
      <div className={`${wrap} grid items-center gap-10 md:grid-cols-2 md:gap-16`}>
        <Reveal from="left"><div className="reveal-zoom rounded-3xl"><Photo src={c.about.image} alt={c.about.alt} className="aspect-[4/5] w-full" /></div></Reveal>
        <Reveal from="right" delay={100}>
          <p className="label-eyebrow">{c.about.label}</p>
          <h2 className="h-display mt-4 text-4xl md:text-5xl">{c.about.headline}</h2>
          <div className="mt-6 max-w-[60ch] space-y-4 text-muted-foreground">
            {c.about.body.map((p) => <p key={p}>{p}</p>)}
          </div>
          <p className="signature mt-8 text-2xl">{c.about.signature}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Difference() {
  const d = c.difference;
  return (
    <section id="difference" aria-label="Our difference" className="relative scroll-mt-16 overflow-hidden bg-paper py-20 focus:outline-none md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-gradient-brand opacity-[0.07] blur-3xl" />
      <div className={`${wrap} relative`}>
        <Reveal className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div className="max-w-3xl">
            <p className="label-eyebrow">{d.label}</p>
            <h2 className="h-display mt-4">{d.headline}</h2>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">{d.intro}</p>
          </div>
          <div className="relative hidden size-52 shrink-0 place-items-center rounded-full bg-gradient-dark text-brand-light shadow-soft md:grid">
            <CurationMark size={148} className="-rotate-12" />
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {d.pillars.map((p, i) => {
            const dark = i === 0 || i === 3;
            return (
              <Reveal
                key={p.title}
                from={i % 2 ? "right" : "left"}
                delay={i * 80}
                className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[2rem] p-8 transition duration-500 hover:-translate-y-2 md:min-h-[340px] md:p-10 ${dark ? "bg-gradient-dark text-white shadow-[0_30px_60px_-30px_rgb(19_21_43/0.75)]" : "border border-border bg-white shadow-soft hover:border-brand/30"}`}
              >
                <div aria-hidden="true" className={`pointer-events-none absolute -right-16 -top-16 size-64 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150 ${dark ? "bg-brand/40" : "bg-brand/10"}`} />
                <span aria-hidden="true" className={`pointer-events-none absolute -bottom-6 right-4 select-none text-[9rem] font-extrabold leading-none tracking-tighter md:text-[11rem] ${dark ? "text-white/[0.06]" : "text-brand/[0.07]"}`}>0{i + 1}</span>
                <span className="relative grid size-16 place-items-center rounded-2xl bg-gradient-brand text-white shadow-[0_14px_30px_-12px_rgb(37_99_235/0.8)] transition duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon name={p.icon} className="text-white" size={30} />
                </span>
                <div className="relative mt-10">
                  <span aria-hidden="true" className="mb-5 block h-1 w-10 rounded-full bg-gradient-brand transition-all duration-500 group-hover:w-24" />
                  <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                  <p className={`mt-3 max-w-[34ch] md:text-lg ${dark ? "text-white/70" : "text-muted-foreground"}`}>{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-20 overflow-hidden rounded-3xl border border-border shadow-soft">
          <div className="grid grid-cols-2">
            <div className="bg-muted p-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:p-7">Listing platform</div>
            <div className="bg-gradient-dark p-5 md:p-7"><span className="text-brand-gradient text-lg font-semibold tracking-tight md:text-xl">GoLookAround</span></div>
          </div>
          {d.compare.map(([x, y]) => (
            <div key={x} className="grid grid-cols-2 border-t border-border">
              <div className="flex items-center gap-3 bg-muted p-5 text-muted-foreground md:p-7 md:text-lg">
                <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full bg-white text-xs text-muted-foreground/70">&times;</span>
                <span className="line-through decoration-muted-foreground/30">{x}</span>
              </div>
              <div className="flex items-center gap-3 border-l border-paper/10 bg-gradient-dark p-5 text-lg font-semibold text-paper md:p-7 md:text-2xl">
                <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-xs text-white">&#10003;</span>
                {y}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const AUTOPLAY_MS = 3000;
const IDLE_AFTER_INTERACTION_MS = 6000;

function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const state = useRef<{ hover: boolean; visible: boolean; lastTouch: number; target: number | null }>({ hover: false, visible: false, lastTouch: 0, target: null });

  // Auto-advance every 3s; pauses on hover/focus, recent touch or key input, offscreen, and reduced motion.
  useEffect(() => {
    const el = root.current;
    const sc = scroller.current;
    if (!el || !sc || images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => { state.current.visible = !!e?.isIntersecting; }, { threshold: 0.4 });
    io.observe(el);
    const id = window.setInterval(() => {
      const st = state.current;
      if (!st.visible || st.hover || el.contains(document.activeElement)) return;
      if (Date.now() - st.lastTouch < IDLE_AFTER_INTERACTION_MS) return;
      // A slow smooth scroll may still be in flight; advance from its target, not its current position.
      const inFlight = st.target !== null && Math.abs(sc.scrollLeft - st.target * sc.clientWidth) > 2;
      const base = inFlight ? (st.target as number) : Math.round(sc.scrollLeft / sc.clientWidth);
      st.target = (base + 1) % images.length;
      sc.scrollTo({ left: st.target * sc.clientWidth, behavior: "smooth" });
    }, AUTOPLAY_MS);
    return () => { window.clearInterval(id); io.disconnect(); };
  }, [images.length]);

  const touched = () => { state.current.lastTouch = Date.now(); state.current.target = null; };
  return (
    <div
      ref={root}
      className="relative"
      onMouseEnter={() => { state.current.hover = true; }}
      onMouseLeave={() => { state.current.hover = false; }}
      onTouchStart={touched}
      onWheel={touched}
      onKeyDown={touched}
    >
      <div
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-label={`${alt} photos, ${images.length} image${images.length > 1 ? "s" : ""}. Use arrow keys to scroll.`}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-3xl [scrollbar-width:none]"
        onScroll={(e) => setI(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
      >
        {images.map((src, k) => (
          <Photo key={src} src={src} alt={`${alt} (${k + 1} of ${images.length})`} className="aspect-[3/2] w-full shrink-0 snap-center" />
        ))}
      </div>
      <CurationMark size={68} className="absolute right-4 top-4 text-paper/90" />
      {images.length > 1 && (
        <div aria-hidden="true" className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
          {images.map((_, k) => <span key={k} className={`h-1.5 rounded-full transition-all ${k === i ? "w-5 bg-gradient-brand" : "w-1.5 bg-paper/60"}`} />)}
        </div>
      )}
    </div>
  );
}

export function Experiences() {
  const e = c.experiences;
  return (
    <section id="experiences" aria-label="Experiences" className="scroll-mt-16 focus:outline-none bg-gradient-dark py-20 text-paper md:py-32">
      <div className={wrap}>
        <Reveal className="max-w-3xl">
          <p className="label-eyebrow !text-brand-light">{e.label}</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{e.headline}</h2>
          <p className="mt-6 text-paper/75">{e.intro}</p>
          <div className="mt-6 flex flex-wrap gap-2">{e.tags.map((t) => <Tag key={t} tone="dark">{t}</Tag>)}</div>
        </Reveal>
        <div className="mt-16 space-y-20">
          {e.items.map((x, i) => (
            <Reveal key={x.title} from={i % 2 ? "right" : "left"} className={`grid items-center gap-8 md:grid-cols-5 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="md:col-span-3"><Gallery images={x.images} alt={x.alt} /></div>
              <div className="md:col-span-2">
                <h3 className="text-3xl md:text-4xl">{x.title}</h3>
                <p className="signature mt-2 text-xl">{x.promise}</p>
                <p className="mt-4 text-paper/75">{x.copy}</p>
                {c.flags.showSafetyLine && x.safety && <p className="mt-3 text-sm text-brand-light">{x.safety}</p>}
                {x.whyWeChoseIt && (
                  <p className="mt-5 inline-block rounded-full border border-brand-light/25 bg-brand/15 px-4 py-2 text-sm text-brand-light">
                    <strong>Why we chose it:</strong> {x.whyWeChoseIt}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal from="scale" className="mt-20 flex items-center gap-5">
          <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent to-paper/25" />
          <p className="text-gradient-brand text-4xl font-extrabold tracking-tight md:text-6xl">{e.more}</p>
          <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-transparent to-paper/25" />
        </Reveal>
        <Reveal className="mt-16 border-t border-paper/15 pt-10">
          <p className="max-w-2xl text-2xl font-semibold text-paper/90 md:text-3xl">{e.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Retreats() {
  const r = c.retreats;
  return (
    <section id="retreats" aria-label="Retreats" className="scroll-mt-16 bg-cream py-20 focus:outline-none md:py-32">
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
        <Reveal from="left" className="relative">
          <div className="reveal-zoom rounded-[2rem] shadow-soft"><Photo src={r.image} alt={r.alt} className="aspect-[4/3] w-full lg:aspect-[4/5]" /></div>
        </Reveal>
        <Reveal from="right" delay={100}>
          <p className="label-eyebrow">{r.label}</p>
          <h2 className="h-display mt-4">{r.headline}</h2>
          <div className="mt-6 max-w-[56ch] space-y-4 text-muted-foreground">{r.body.map((p) => <p key={p}>{p}</p>)}</div>
          <ul className="mt-8 grid grid-cols-3 gap-3" aria-label="What we choose retreats for">
            {["Setting", "Pace", "Switch off"].map((t, i) => (
              <li key={t} className="rounded-2xl border border-[#ece7ff] bg-white p-4">
                <span className="text-xs font-bold text-brand/50">0{i + 1}</span>
                <p className="mt-2 text-sm font-semibold md:text-base">{t}</p>
              </li>
            ))}
          </ul>
          <p className="signature mt-8 text-xl md:text-2xl">{r.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}

const FLOW_LINES = Array.from({ length: 11 }, (_, i) => {
  const y = 60 + i * 68;
  const amp = 70 + (i % 4) * 28;
  return {
    d: `M-120 ${y} C 240 ${y - amp}, 520 ${y + amp}, 820 ${y} S 1300 ${y - amp}, 1560 ${y + (i % 2 ? 30 : -30)}`,
    back: i % 2 === 1,
    dur: 9 + (i * 1.7) % 8,
    delay: -((i * 2.3) % 9),
    op: 0.35 + (i % 3) * 0.2,
    w: i % 4 === 0 ? 2.5 : 1.5,
  };
});

function FlowBand({ text }: { text: string }) {
  const [first, ...rest] = text.split(". ");
  const second = rest.join(". ");
  const marquee = `${text.replace(/\.$/, "")} \u2726 `.repeat(6);
  return (
    <div className="relative isolate mt-20 flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-brand px-6 text-center text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_10%,rgb(255_255_255/0.18),transparent_55%),radial-gradient(ellipse_at_85%_90%,rgb(19_21_43/0.55),transparent_60%)]" />
      <div aria-hidden="true" className="glow-drift absolute -left-32 top-1/4 -z-10 size-[28rem] rounded-full bg-[#60a5fa]/40 blur-[110px]" style={{ ["--dur" as string]: "16s" }} />
      <div aria-hidden="true" className="glow-drift absolute -right-32 bottom-0 -z-10 size-[30rem] rounded-full bg-[#a78bfa]/40 blur-[120px]" style={{ ["--dur" as string]: "19s" }} />

      <div aria-hidden="true" className="absolute inset-x-0 top-[8%] -z-10 overflow-hidden whitespace-nowrap">
        <div className="marquee-l flex w-max text-[clamp(4rem,11vw,9rem)] font-extrabold uppercase leading-none tracking-tight outline-text" style={{ ["--dur" as string]: "55s" }}><span>{marquee}</span><span>{marquee}</span></div>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-[8%] -z-10 overflow-hidden whitespace-nowrap">
        <div className="marquee-r flex w-max text-[clamp(4rem,11vw,9rem)] font-extrabold uppercase leading-none tracking-tight outline-text" style={{ ["--dur" as string]: "65s" }}><span>{marquee}</span><span>{marquee}</span></div>
      </div>

      <svg aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
        {FLOW_LINES.map((l, i) => (
          <g key={i}>
            <path d={l.d} className="flow-line" pathLength={1} strokeWidth={1} style={{ strokeDasharray: "none", opacity: 0.1 }} />
            <path d={l.d} pathLength={1} className={`flow-line ${l.back ? "flow-back" : "flow-fwd"}`} strokeWidth={l.w} style={{ opacity: l.op, ["--dur" as string]: `${l.dur}s`, animationDelay: `${l.delay}s`, ["--dash" as string]: l.back ? 0.22 : 0.14 }} />
          </g>
        ))}
      </svg>

      <Reveal className="relative max-w-5xl py-24">
        <p className="text-[clamp(2.75rem,9vw,8rem)] font-extrabold leading-[0.95] tracking-tighter">
          <span className="block">{first}{second && "."}</span>
          {second && <span className="-mb-[0.18em] block bg-gradient-to-r from-white via-[#dbeafe] to-[#ddd6fe] bg-clip-text pb-[0.18em] text-transparent">{second}</span>}
        </p>
      </Reveal>
    </div>
  );
}

export function Events() {
  const e = c.events;
  const spans = ["md:col-span-4 md:row-span-2", "md:col-span-2 md:row-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2"];
  return (
    <section id="events" aria-label="Events" className="scroll-mt-16 focus:outline-none bg-paper pt-20 md:pt-32">
      <div className={wrap}>
        <Reveal className="max-w-3xl">
          <p className="label-eyebrow">{e.label}</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{e.headline}</h2>
          <p className="mt-6 text-xl font-semibold md:text-2xl">{e.lead}</p>
          <p className="mt-4 text-muted-foreground">{e.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">{e.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        </Reveal>
        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-6">
          {e.images.map((src, i) => (
            <Reveal key={src} from="scale" delay={i * 90} className={`${i === 0 ? "col-span-2 row-span-2" : ""} ${spans[i]}`}><div className="reveal-zoom h-full rounded-2xl"><Photo src={src} alt={e.alts[i] ?? ""} className="h-full w-full" /></div></Reveal>
          ))}
        </div>
      </div>
      <FlowBand text={e.band} />
    </section>
  );
}

export function PhotoGallery() {
  const g = c.gallery;
  return (
    <section id="gallery" aria-label="Gallery" className="relative scroll-mt-16 overflow-hidden bg-cream pt-20 focus:outline-none md:pt-32">
      <div className={wrap}>
        <Reveal className="max-w-3xl">
          <p className="label-eyebrow">{g.label}</p>
          <h2 className="h-display mt-4">{g.headline}</h2>
          <p className="mt-6 text-xl text-muted-foreground">{g.intro}</p>
        </Reveal>
      </div>
      <Reveal className="mt-6">
        <PolaroidLineCarousel
          slides={g.slides}
          height="clamp(460px, 74svh, 760px)"
          cardWidth={300}
          autoplay={4000}
          background="transparent"
          ink="var(--ink)"
          string="#9aa3c4"
          ariaLabel="Photo gallery"
        />
      </Reveal>
    </section>
  );
}

export function Organizations() {
  const o = c.organizations;
  return (
    <section id="for-organizations" aria-label="For organizations" className="scroll-mt-16 focus:outline-none py-20 md:py-32">
      <div className={wrap}>
        <Reveal from="scale"><div className="reveal-zoom rounded-3xl"><Photo src={o.teamImage} alt={o.teamAlt} className="aspect-[16/9] w-full" /></div></Reveal>
        <Reveal className="mt-14 max-w-3xl">
          <p className="label-eyebrow">{o.label}</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{o.headline}</h2>
          <p className="mt-6 text-muted-foreground">{o.intro}</p>
        </Reveal>
        <Reveal className="mt-12 rounded-3xl bg-gradient-dark p-8 text-paper md:p-12">
          <h3 className="text-3xl">{o.corporate.title}</h3>
          <p className="mt-4 max-w-[60ch] text-paper/75">{o.corporate.text}</p>
          <div className="mt-6 flex flex-wrap gap-2">{o.corporate.pills.map((p) => <Tag key={p} tone="dark">{p}</Tag>)}</div>
        </Reveal>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {o.cards.map((k) => (
            <Reveal key={k.title} className="rounded-3xl border border-border bg-paper p-8 transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
              <h3 className="text-2xl">{k.title}</h3>
              <p className="mt-3 text-muted-foreground">{k.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal from="scale" className="mt-12"><div className="reveal-zoom rounded-3xl"><Photo src={o.communityImage} alt={o.communityAlt} className="aspect-[16/9] w-full" /></div></Reveal>
        <div className="mt-16">
          <p className="label-eyebrow">How it works</p>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {o.steps.map((s, i) => (
              <Reveal key={s} delay={i * 100} className="border-t-2 border-brand pt-5">
                <span className="text-4xl font-bold text-brand">0{i + 1}</span>
                <p className="mt-3 text-lg">{s}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
      <div className={`${wrap} mt-20`}>
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-brand p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <p className="max-w-xl text-2xl font-bold tracking-tight text-white md:text-3xl">{o.cta}</p>
          <a href={waLink(c.messages.organization)} target="_blank" rel="noreferrer" aria-label={`${o.ctaButton} on WhatsApp (opens in a new tab)`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand shrink-0 rounded-full bg-white px-6 py-3 font-bold text-brand-deep transition hover:-translate-y-0.5">
            {o.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  const p = c.partners;
  return (
    <section id="partners" aria-label="Our partners" className="scroll-mt-16 focus:outline-none bg-paper pt-20 md:pt-32">
      <div className={`${wrap} grid gap-14 md:grid-cols-2`}>
        <Reveal>
          <p className="label-eyebrow">{p.label}</p>
          <h2 className="h-display mt-4">{p.headline}</h2>
          <p className="mt-6 text-xl font-semibold">{p.lead}</p>
          <p className="mt-4 text-muted-foreground">{p.body}</p>
          <div className="mt-10 grid grid-cols-2 gap-3">
            {p.lookFor.map((l) => <div key={l} className="rounded-2xl border border-[#ece7ff] bg-accent p-4 text-sm font-semibold text-brand-deep">{l}</div>)}
          </div>
        </Reveal>
        <ol className="relative border-l border-brand/30 pl-8">
          {p.steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[45px] top-0 flex size-8 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">{i + 1}</span>
              <p className="text-lg"><strong className="text-2xl font-bold">{t}</strong> <span className="text-muted-foreground">{d}</span></p>
            </Reveal>
          ))}
        </ol>
      </div>
      <div className="mt-24 bg-gradient-dark px-6 py-14 text-center">
        <p className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-paper md:text-4xl">{p.band}</p>
      </div>
    </section>
  );
}

export function Closing() {
  const k = c.closing;
  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-16 focus:outline-none relative overflow-hidden bg-ink-deep text-paper">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgb(37_99_235/0.35),transparent_55%),radial-gradient(ellipse_at_90%_100%,rgb(124_58_237/0.3),transparent_55%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-ink-deep/80 to-ink-deep" />
      <div className={`${wrap} relative py-24 md:py-36`}>
        <h2 className="h-display max-w-4xl">{k.headline}</h2>
        <p className="mt-5 max-w-xl text-lg text-paper/80">{k.sub}</p>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {k.cards.map((x, i) => (
            <a key={x.title} href={waLink(c.messages[x.msg])} target="_blank" rel="noreferrer" aria-label={`${x.title} ${x.text} Talk to us on WhatsApp (opens in a new tab)`}
              className={`group flex flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light ${i === 0 ? "border-transparent bg-gradient-brand shadow-[0_24px_50px_-24px_rgb(37_99_235/0.8)]" : "border-paper/15 bg-paper/5 backdrop-blur hover:border-brand-light"}`}>
              <span aria-hidden="true" className="text-sm font-bold text-paper/50">0{i + 1}</span>
              <h3 className="mt-6 text-2xl">{x.title}</h3>
              <p className="mt-2 text-sm text-paper/75">{x.text}</p>
              <span aria-hidden="true" className="mt-8 flex items-center justify-between border-t border-paper/15 pt-5 text-sm font-semibold">
                Talk to us on WhatsApp
                <span className="grid size-9 place-items-center rounded-full bg-white text-brand-deep transition group-hover:translate-x-1">&rarr;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


const FOOTER_NAV: { title: string; links: [string, string][] }[] = [
  { title: "Explore", links: [["about", "About"], ["difference", "Curation"], ["experiences", "Experiences"], ["retreats", "Retreats"], ["events", "Events"], ["gallery", "Gallery"]] },
  { title: "For groups", links: [["for-organizations", "Organizations"], ["partners", "Partners"], ["contact", "Get in touch"]] },
];

export function SiteFooter() {
  const ct = c.contact;
  const reach = [
    ct.email && { label: ct.email, href: `mailto:${ct.email}` },
    ct.phone && { label: ct.phone, href: `tel:${ct.phone.replace(/\s/g, "")}` },
    { label: "WhatsApp", href: waLink(c.messages.customer), external: true },
  ].filter(Boolean) as { label: string; href: string; external?: boolean }[];
  const link = "text-paper/65 transition-colors hover:text-white focus-visible:text-white";
  return (
    <RuixenGradientFooter gradientHeight="50vh" minReveal={0} className="bg-ink-deep text-paper">
      <div className={`${wrap} pt-16 md:pt-24`}>
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-paper/65">Handpicked experiences, retreats and events. Fewer choices, better ones.</p>
            <a href={waLink(c.messages.customer)} target="_blank" rel="noreferrer" aria-label="Talk to us on WhatsApp (opens in a new tab)" className="mt-7 inline-flex rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-[0_12px_28px_-14px_rgb(37_99_235/0.7)] transition hover:-translate-y-0.5">
              Talk to us
            </a>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3 lg:col-span-3">
            {FOOTER_NAV.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">{col.title}</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map(([id, t]) => (
                    <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); goToSection(id); }} className={link}>{t}</a></li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">Contact</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {reach.map((r) => (
                  <li key={r.href}><a href={r.href} {...(r.external ? { target: "_blank", rel: "noreferrer" } : {})} className={link}>{r.label}</a></li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-paper/15 pt-6 pb-2 text-xs text-paper/60 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} GoLookAround</span>
          <span className="signature !text-sm">Curated for the curious.</span>
        </div>
      </div>
    </RuixenGradientFooter>
  );
}
