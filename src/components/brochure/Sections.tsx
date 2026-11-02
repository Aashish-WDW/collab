import { useState } from "react";
import { content as c, waLink } from "@/content/content";
import { CurationMark, Icon, Logo, Photo, Reveal, Tag } from "./ui";

const wrap = "mx-auto w-full max-w-[1100px] px-6 md:px-10";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-ink/70 to-transparent">
      <div className={`${wrap} flex h-16 items-center justify-between text-paper`}>
        <a href="#home"><Logo /></a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {[["about", "About"], ["experiences", "Experiences"], ["retreats", "Retreats"], ["events", "Events"], ["for-organizations", "Organizations"], ["partners", "Partners"]].map(([id, t]) => (
            <a key={id} href={`#${id}`} className="opacity-85 hover:opacity-100">{t}</a>
          ))}
        </nav>
        <a href={waLink(c.messages.customer)} target="_blank" rel="noreferrer" className="rounded-full bg-sunset px-4 py-2 text-sm font-semibold text-ink">
          Talk to us
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-paper">
      <Photo src={c.hero.image} alt={c.hero.alt} eager className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-overlay" />
      <div className={`${wrap} relative pb-28 md:pb-24`}>
        <h1 className="h-display max-w-3xl font-medium">{c.hero.tagline}</h1>
        <p className="mt-5 max-w-xl text-lg text-paper/85">{c.hero.sub}</p>
        <a href="#about" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-paper/70">
          <span className="h-8 w-px animate-pulse bg-sunset" /> Scroll
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className={`${wrap} grid items-center gap-10 md:grid-cols-2 md:gap-16`}>
        <Reveal><Photo src={c.about.image} alt={c.about.alt} className="aspect-[4/5] w-full rounded-2xl" /></Reveal>
        <Reveal delay={100}>
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
    <section id="difference" className="bg-paper py-20 md:py-32">
      <div className={wrap}>
        <Reveal className="max-w-3xl">
          <p className="label-eyebrow">{d.label}</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{d.headline}</h2>
          <p className="mt-6 text-xl text-muted-foreground md:text-2xl">{d.intro}</p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {d.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="rounded-2xl bg-cream p-7">
              <Icon name={p.icon} />
              <h3 className="mt-5 text-2xl">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-3xl">
          <div className="grid grid-cols-2 text-xs font-semibold uppercase tracking-[0.2em]">
            <div className="bg-muted p-5 text-muted-foreground md:p-7">Listing platform</div>
            <div className="bg-ink p-5 text-sunset md:p-7">GoLookAround</div>
          </div>
          {d.compare.map(([a, b], i) => (
            <div key={a} className="grid grid-cols-2">
              <div className="border-t border-border bg-muted p-5 text-muted-foreground line-through decoration-muted-foreground/30 md:p-7 md:text-lg">{a}</div>
              <Reveal delay={i * 120} className="border-t border-paper/10 bg-ink p-5 font-serif text-lg text-paper md:p-7 md:text-2xl">{b}</Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  return (
    <div className="relative">
      <div
        className="flex snap-x snap-mandatory overflow-x-auto rounded-2xl [scrollbar-width:none]"
        onScroll={(e) => setI(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
      >
        {images.map((src, k) => (
          <Photo key={src} src={src} alt={`${alt} (${k + 1} of ${images.length})`} className="aspect-[3/2] w-full shrink-0 snap-center" />
        ))}
      </div>
      <CurationMark size={68} className="absolute right-4 top-4 text-paper/90" />
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
          {images.map((_, k) => <span key={k} className={`h-1.5 rounded-full transition-all ${k === i ? "w-5 bg-sunset" : "w-1.5 bg-paper/60"}`} />)}
        </div>
      )}
    </div>
  );
}

export function Experiences() {
  const e = c.experiences;
  return (
    <section id="experiences" className="bg-ink py-20 text-paper md:py-32">
      <div className={wrap}>
        <Reveal className="max-w-3xl">
          <p className="label-eyebrow">{e.label}</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{e.headline}</h2>
          <p className="mt-6 text-paper/75">{e.intro}</p>
          <div className="mt-6 flex flex-wrap gap-2">{e.tags.map((t) => <Tag key={t} tone="dark">{t}</Tag>)}</div>
        </Reveal>
        <div className="mt-16 space-y-20">
          {e.items.map((x, i) => (
            <Reveal key={x.title} className={`grid items-center gap-8 md:grid-cols-5 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="md:col-span-3"><Gallery images={x.images} alt={x.alt} /></div>
              <div className="md:col-span-2">
                <h3 className="text-3xl md:text-4xl">{x.title}</h3>
                <p className="signature mt-2 text-xl">{x.promise}</p>
                <p className="mt-4 text-paper/75">{x.copy}</p>
                {c.flags.showSafetyLine && x.safety && <p className="mt-3 text-sm text-sage">{x.safety}</p>}
                {x.whyWeChoseIt && (
                  <p className="mt-5 inline-block rounded-full bg-sunset/15 px-4 py-2 text-sm text-sunset">
                    <strong>Why we chose it:</strong> {x.whyWeChoseIt}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-24 border-t border-paper/15 pt-10">
          <p className="max-w-2xl font-serif text-2xl text-paper/90 md:text-3xl">{e.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Retreats() {
  const r = c.retreats;
  return (
    <section id="retreats" className="bg-cream">
      <Photo src={r.image} alt={r.alt} className="h-[55vh] w-full md:h-[75vh]" />
      <div className={`${wrap} -mt-20 pb-24 md:-mt-32`}>
        <Reveal className="relative mx-auto max-w-2xl rounded-3xl bg-cream p-8 md:p-14">
          <p className="label-eyebrow text-sage">{r.label}</p>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">{r.headline}</h2>
          <div className="mt-6 space-y-4 font-light text-muted-foreground">{r.body.map((p) => <p key={p}>{p}</p>)}</div>
          <p className="signature mt-8 text-xl">{r.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Events() {
  const e = c.events;
  const spans = ["md:col-span-4 md:row-span-2", "md:col-span-2 md:row-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2"];
  return (
    <section id="events" className="bg-paper pt-20 md:pt-32">
      <div className={wrap}>
        <Reveal className="max-w-3xl">
          <p className="label-eyebrow">{e.label}</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{e.headline}</h2>
          <p className="mt-6 font-serif text-xl md:text-2xl">{e.lead}</p>
          <p className="mt-4 text-muted-foreground">{e.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">{e.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        </Reveal>
        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-6">
          {e.images.map((src, i) => (
            <Photo key={src} src={src} alt={e.alts[i]} className={`h-full w-full rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""} ${spans[i]}`} />
          ))}
        </div>
      </div>
      <div className="mt-20 bg-sunset py-12 text-center">
        <p className="font-serif text-3xl text-ink md:text-4xl">{e.band}</p>
      </div>
    </section>
  );
}

export function Organizations() {
  const o = c.organizations;
  return (
    <section id="for-organizations" className="py-20 md:py-32">
      <div className={wrap}>
        <Photo src={o.teamImage} alt={o.teamAlt} className="aspect-[16/9] w-full rounded-3xl" />
        <Reveal className="mt-14 max-w-3xl">
          <p className="label-eyebrow">{o.label}</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{o.headline}</h2>
          <p className="mt-6 text-muted-foreground">{o.intro}</p>
        </Reveal>
        <Reveal className="mt-12 rounded-3xl bg-ink p-8 text-paper md:p-12">
          <h3 className="text-3xl">{o.corporate.title}</h3>
          <p className="mt-4 max-w-[60ch] text-paper/75">{o.corporate.text}</p>
          <div className="mt-6 flex flex-wrap gap-2">{o.corporate.pills.map((p) => <Tag key={p} tone="dark">{p}</Tag>)}</div>
        </Reveal>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {o.cards.map((k) => (
            <Reveal key={k.title} className="rounded-3xl bg-paper p-8">
              <h3 className="text-2xl">{k.title}</h3>
              <p className="mt-3 text-muted-foreground">{k.text}</p>
            </Reveal>
          ))}
        </div>
        <Photo src={o.communityImage} alt={o.communityAlt} className="mt-12 aspect-[16/9] w-full rounded-3xl" />
        <div className="mt-16">
          <p className="label-eyebrow">How it works</p>
          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {o.steps.map((s, i) => (
              <Reveal key={s} delay={i * 100} className="border-t-2 border-sunset pt-5">
                <span className="font-serif text-4xl text-sunset">0{i + 1}</span>
                <p className="mt-3 text-lg">{s}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
      <div className={`${wrap} mt-20`}>
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-sunset p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <p className="max-w-xl font-serif text-2xl text-ink md:text-3xl">{o.cta}</p>
          <a href={waLink(c.messages.organization)} target="_blank" rel="noreferrer" className="shrink-0 rounded-full bg-ink px-6 py-3 font-semibold text-paper">
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
    <section id="partners" className="bg-paper pt-20 md:pt-32">
      <div className={`${wrap} grid gap-14 md:grid-cols-2`}>
        <Reveal>
          <p className="label-eyebrow">{p.label}</p>
          <h2 className="h-display mt-4">{p.headline}</h2>
          <p className="mt-6 font-serif text-xl">{p.lead}</p>
          <p className="mt-4 text-muted-foreground">{p.body}</p>
          <div className="mt-10 grid grid-cols-2 gap-3">
            {p.lookFor.map((l) => <div key={l} className="rounded-xl bg-cream p-4 text-sm font-medium">{l}</div>)}
          </div>
        </Reveal>
        <ol className="relative border-l border-sunset/40 pl-8">
          {p.steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[45px] top-0 flex size-8 items-center justify-center rounded-full bg-ink font-serif text-sm text-sunset">{i + 1}</span>
              <p className="text-lg"><strong className="font-serif text-2xl font-medium">{t}</strong> <span className="text-muted-foreground">{d}</span></p>
            </Reveal>
          ))}
        </ol>
      </div>
      <div className="mt-24 bg-ink py-14 text-center">
        <p className="font-serif text-3xl text-paper md:text-4xl">{p.band}</p>
      </div>
    </section>
  );
}

export function Closing() {
  const k = c.closing;
  const ct = c.contact;
  const items = [
    ct.website && { label: ct.website, href: `https://${ct.website}` },
    ct.email && { label: ct.email, href: `mailto:${ct.email}` },
    ct.phone && { label: ct.phone, href: `tel:${ct.phone}` },
    ct.instagram && { label: ct.instagram, href: `https://instagram.com/${ct.instagram.replace("@", "")}` },
  ].filter(Boolean) as { label: string; href: string }[];
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-paper">
      <Photo src={k.image} alt={k.alt} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-ink/70" />
      <div className={`${wrap} relative py-24 pb-32 md:py-36`}>
        <CurationMark size={90} className="text-sunset" />
        <h2 className="h-display mt-8 max-w-3xl">{k.headline}</h2>
        <p className="mt-5 max-w-xl text-lg text-paper/80">{k.sub}</p>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {k.cards.map((x) => (
            <a key={x.title} href={waLink(c.messages[x.msg])} target="_blank" rel="noreferrer"
              className="group rounded-2xl border border-paper/20 bg-ink/50 p-7 backdrop-blur transition hover:border-sunset">
              <h3 className="text-2xl">{x.title}</h3>
              <p className="mt-2 text-sm text-paper/70">{x.text}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-sunset">Talk to us on WhatsApp →</span>
            </a>
          ))}
        </div>
        {items.length > 0 && (
          <ul className="mt-12 flex flex-wrap gap-6 text-sm text-paper/80">
            {items.map((i) => <li key={i.href}><a href={i.href}>{i.label}</a></li>)}
          </ul>
        )}
        <footer className="mt-16 flex items-center justify-between border-t border-paper/15 pt-6 text-xs text-paper/60">
          <Logo className="text-base text-paper" />
          <span>© {new Date().getFullYear()} GoLookAround</span>
        </footer>
      </div>
    </section>
  );
}
