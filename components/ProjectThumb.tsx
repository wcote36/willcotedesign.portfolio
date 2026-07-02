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
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 46vw, (min-width: 768px) 45vw, 100vw"
          className="object-contain transition duration-300 ease-out group-hover:scale-[1.025] group-hover:brightness-[1.04]"
        />
      </div>
      <div className="mt-4 grid grid-cols-[1fr_auto] gap-4 text-[13px] leading-snug sm:text-sm">
        <h2 className="font-medium">{project.title}</h2>
        <p className="text-muted">{project.year}</p>
        <p className="col-span-2 text-muted">{project.category}</p>
      </div>
    </Link>
  );
}
