import type { Img } from "@/content";

type PhotoProps = Img & {
  className?: string;
  priority?: boolean;
  /** Gelijke uitsnede, nooit groter dan de eigen breedte. */
  frame?: "4/3";
};

/** Toont een foto nooit breder dan de native breedte, en altijd binnen de kolom. */
export default function Photo({ src, width, height, alt, className = "", priority = false, frame }: PhotoProps) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={frame ? `h-auto max-h-full w-auto max-w-full ${className}` : `h-auto w-full max-w-full ${className}`}
      style={{ maxWidth: width }}
    />
  );
  if (!frame) return img;
  return (
    <div
      className="flex aspect-[4/3] w-full min-w-0 items-center justify-center overflow-hidden"
      style={{ maxWidth: width }}
    >
      {img}
    </div>
  );
}
