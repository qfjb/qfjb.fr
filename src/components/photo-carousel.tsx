import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselSlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function PhotoCarousel({ slides }: { slides: CarouselSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function goTo(target: number) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (target + slides.length) % slides.length;
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
    setIndex(clamped);
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setIndex(Math.round(track.scrollLeft / track.clientWidth));
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="scrollbar-none flex snap-x snap-mandatory overflow-x-auto rounded-xl border-4 border-ink"
        >
          {slides.map((s) => (
            <div key={s.src} className="relative aspect-square w-full shrink-0 snap-center">
              <img
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <span className="pop-badge absolute right-3 top-3 bg-ink/80 text-[0.7rem] text-background">
          {index + 1} / {slides.length}
        </span>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Photo précédente"
          className="pop-btn absolute left-3 top-1/2 size-10 -translate-y-1/2 bg-card text-foreground"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Photo suivante"
          className="pop-btn absolute right-3 top-1/2 size-10 -translate-y-1/2 bg-card text-foreground"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
