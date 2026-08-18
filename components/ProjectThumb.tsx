import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectThumbProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectThumb({ project, priority = false }: ProjectThumbProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#efefeb] dark:bg-[#191918]">
        {project.coverVideo ? (
          <video
            src={project.coverVideo.src}
            aria-label={project.coverVideo.title}
            muted
            autoPlay
            loop
            playsInline
            preload={priority ? "auto" : "metadata"}
            className="h-full w-full object-contain transition duration-300 ease-out group-hover:scale-[1.025] group-hover:brightness-[1.04]"
          />
        ) : (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 46vw, (min-width: 768px) 45vw, 100vw"
            className="object-contain transition duration-300 ease-out group-hover:scale-[1.025] group-hover:brightness-[1.04]"
          />
        )}
      </div>
    </Link>
  );
}
