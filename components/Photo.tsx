import type { Img } from "@/content";

type PhotoProps = Img & {
  className?: string;
  priority?: boolean;
};

/** Toont een foto nooit breder dan de native breedte. */
export default function Photo({ src, width, height, alt, className = "", priority = false }: PhotoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`h-auto max-w-full ${className}`}
      style={{ width: "100%", maxWidth: width }}
    />
  );
}
