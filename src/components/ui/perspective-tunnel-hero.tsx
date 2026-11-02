"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type TunnelImage = { src: string; title: string };

export type PerspectiveTunnelHeroProps = {
  images: TunnelImage[];
  eyebrow?: string;
  /** Headline lines, rendered on separate lines. */
  title: string[];
  subtitle?: string;
  /** Small prompt at the bottom that fades once the tunnel starts moving. */
  prompt?: string;
  /** Rendered under the subtitle, e.g. a call-to-action. */
  children?: ReactNode;
  /** Total scroll length of the hero, as a multiple of the viewport height. */
  scrollScreens?: number;
  id?: string;
  ariaLabel?: string;
};

interface TunnelCardData {
  item: TunnelImage;
  angleCos: number;
  angleSin: number;
  radiusFactorX: number;
  radiusFactorY: number;
  rotationZ: number;
  index: number;
}

function buildCards(images: TunnelImage[]): TunnelCardData[] {
  return images.map((item, i) => {
    const goldenAngle = i * 137.5 * (Math.PI / 180);
    return {
      item,
      angleCos: Math.cos(goldenAngle),
      angleSin: Math.sin(goldenAngle),
      radiusFactorX: 0.28 + (i % 3) * 0.08,
      radiusFactorY: 0.26 + (i % 2) * 0.09,
      rotationZ: (i % 2 === 0 ? 1 : -1) * (3 + (i % 5) * 2),
      index: i,
    };
  });
}

const SPRING_CONFIG = { stiffness: 60, damping: 25, mass: 0.5 };

interface StageDimensions {
  width: number;
  height: number;
  isMobile: boolean;
}

function useCameraParallax(enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING_CONFIG);
  const y = useSpring(rawY, SPRING_CONFIG);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, rawX, rawY]);

  return { x, y };
}

interface TunnelCardProps {
  card: TunnelCardData;
  progress: MotionValue<number>;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  total: number;
  stage: StageDimensions;
}

function TunnelCard({ card, progress, pointer, total, stage }: TunnelCardProps) {
  const staggerSpan = 0.55;
  const start = (card.index / total) * (1 - staggerSpan);
  const end = start + staggerSpan;

  const localProgress = useTransform(progress, [start, end], [0, 1]);

  const farZ = stage.isMobile ? -1200 : -1700;
  const nearZ = stage.isMobile ? 350 : 500;
  const z = useTransform(localProgress, [0, 1], [farZ, nearZ]);

  const opacity = useTransform(localProgress, [0, 0.18, 0.82, 0.98], [0, 1, 1, 0]);

  const cardWidth = stage.isMobile
    ? Math.max(110, Math.min(150, stage.width * 0.34))
    : Math.max(180, Math.min(270, stage.width * 0.18));

  const baseX = card.angleCos * (stage.width * card.radiusFactorX);
  // On phones the text fills the middle, so push the photos toward the top and bottom edges.
  const baseY = card.angleSin * (stage.height * card.radiusFactorY) * (stage.isMobile ? 1.55 : 1);
  const panStrength = stage.isMobile ? 20 : 45;

  const transform = useTransform([z, pointer.x, pointer.y], (latest: number[]) => {
    const [currZ = 0, px = 0, py = 0] = latest;
    const offsetX = baseX - px * panStrength;
    const offsetY = baseY - py * panStrength;
    return `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), ${currZ}px) rotateZ(${card.rotationZ}deg)`;
  });

  return (
    <motion.div
      style={{ width: cardWidth, transform, opacity, zIndex: card.index + 1 }}
      className="pointer-events-none absolute left-1/2 top-1/2 aspect-[4/5] select-none will-change-transform"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-ink shadow-2xl shadow-black/60 ring-1 ring-white/20">
        <img
          src={card.item.src}
          alt=""
          draggable={false}
          loading={card.index < 3 ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/5 to-transparent p-4 sm:p-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white drop-shadow-md sm:text-sm">
            {card.item.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PerspectiveTunnelHero({
  images,
  eyebrow,
  title,
  subtitle,
  prompt = "Scroll to explore",
  children,
  scrollScreens = 2.6,
  id,
  ariaLabel,
}: PerspectiveTunnelHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const cards = useRef(buildCards(images));
  cards.current = buildCards(images);

  const [stage, setStage] = useState<StageDimensions>({ width: 1440, height: 900, isMobile: false });

  useEffect(() => {
    const update = () =>
      setStage({ width: window.innerWidth, height: window.innerHeight, isMobile: window.innerWidth < 768 });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // The tunnel is driven by page scroll over the hero's own height, so the rest
  // of the page stays reachable on wheel, trackpad, touch and keyboard.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.0001 });
  const still = useMotionValue(0.3);
  const driven = reduce ? still : smoothScroll;
  // Begin part-way in, so the first screen already has photos drifting out of the dark.
  const progress = useTransform(driven, [0, 1], [0.16, 1]);

  const pointer = useCameraParallax(!reduce);

  const titleScale = useTransform(driven, [0, 0.5, 1], [0.95, 1, 1.25]);
  const titleOpacity = useTransform(driven, [0, 0.8, 0.95], [1, 1, 0]);
  const promptOpacity = useTransform(driven, [0, 0.1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-label={ariaLabel}
      className="relative scroll-mt-0 focus:outline-none"
      style={{ height: reduce ? "100svh" : `${scrollScreens * 100}svh` }}
    >
      <div
        className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden bg-gradient-dark text-white"
        style={{ perspective: stage.isMobile ? "900px" : "1200px", transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(147,197,253,0.22)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_55%,transparent_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.28)_0%,rgba(124,58,237,0.12)_40%,transparent_72%)]" />
        <div className="pointer-events-none absolute h-[48vmin] w-[48vmin] rounded-full border border-brand-light/20" />
        <div className="pointer-events-none absolute h-[76vmin] w-[76vmin] rounded-full border border-dashed border-white/10" />

        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="z-30 flex max-w-3xl flex-col items-center px-6 text-center"
        >
          {eyebrow && (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-brand-light">{eyebrow}</p>
          )}
          <h1 className="bg-gradient-to-b from-white via-white to-white/55 bg-clip-text pb-[0.12em] text-5xl font-extrabold uppercase leading-[0.95] tracking-tighter text-transparent sm:text-7xl md:text-8xl">
            {title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          {subtitle && <p className="mt-5 max-w-[40ch] text-sm font-light text-white/75 sm:text-lg">{subtitle}</p>}
          {children}
        </motion.div>

        <motion.div
          style={{ opacity: promptOpacity }}
          className="pointer-events-none absolute bottom-8 z-20 flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
        >
          <span>{prompt}</span>
          <div className="h-6 w-px bg-gradient-to-b from-brand-light to-transparent" />
        </motion.div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {cards.current.map((card) => (
            <TunnelCard
              key={card.item.src}
              card={card}
              progress={progress}
              pointer={pointer}
              total={cards.current.length}
              stage={stage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
