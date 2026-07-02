import Image from "next/image";
import type { ProjectImage as ProjectImageType } from "@/lib/projects";

type ProjectImageProps = {
  image: ProjectImageType;
  priority?: boolean;
};

export function ProjectImage({ image, priority = false }: ProjectImageProps) {
  const isFull = image.layout === "full";

  return (
    <figure className={isFull ? "md:col-span-6" : "md:col-span-3"}>
      <div className={`relative overflow-hidden bg-[#efefeb] dark:bg-[#191918] ${isFull ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={isFull ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
          className="object-contain"
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-3 max-w-prose text-xs leading-relaxed text-muted">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}
