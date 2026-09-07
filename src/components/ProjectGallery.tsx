import Image from "next/image";
import type { ProjectImage } from "@/types/content";

/**
 * Screenshots under "What I built": two up on wider screens, stacked below.
 * They sit well down the page, so they stay lazy-loaded.
 */
export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2">
      {images.map((image) => (
        <li key={image.src}>
          <figure>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="rounded-sm border border-rule"
            />
            {image.caption ? (
              <figcaption className="mt-2 text-sm leading-relaxed text-muted">
                {image.caption}
              </figcaption>
            ) : null}
          </figure>
        </li>
      ))}
    </ul>
  );
}
