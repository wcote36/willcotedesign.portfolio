import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectVideoSection } from "@/components/ProjectVideoSection";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | William Cote`,
      description: project.description,
      images: [project.cover.src]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 pb-16 pt-12 sm:px-8 md:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)] lg:px-12 lg:pb-24">
        <FadeIn>
          <p className="text-[12px] font-medium uppercase leading-none text-muted">{project.category}</p>
          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,9vw,9.5rem)] font-normal leading-[0.92] tracking-normal">
            {project.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{project.description}</p>
        </FadeIn>

        <FadeIn className="self-end border-t border-rule pt-5">
          <dl className="grid grid-cols-[96px_1fr] gap-x-5 gap-y-4 text-sm">
            <dt className="text-muted">Year</dt>
            <dd>{project.year}</dd>
            <dt className="text-muted">Client</dt>
            <dd>{project.client}</dd>
            <dt className="text-muted">Role</dt>
            <dd>{project.role}</dd>
            <dt className="text-muted">Tools</dt>
            <dd>{project.tools.join(", ")}</dd>
            <dt className="text-muted">Duration</dt>
            <dd>{project.duration}</dd>
          </dl>
        </FadeIn>
      </section>

      <ProjectGallery images={project.gallery} title={project.title} />

      <section className="mx-auto max-w-[1600px] px-5 pt-24 sm:px-8 lg:px-12">
        <div className="grid gap-14 border-t border-rule pt-10">
          {project.sections.map((section) => (
            <FadeIn key={section.title} className="grid gap-6 md:grid-cols-[0.65fr_1.35fr]">
              <div>
                {section.eyebrow ? (
                  <p className="text-[12px] font-medium uppercase leading-none text-muted">{section.eyebrow}</p>
                ) : null}
              </div>
              <div className="max-w-3xl">
                <h2 className="text-3xl font-normal leading-tight sm:text-5xl">{section.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{section.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {project.videos ? <ProjectVideoSection videos={project.videos} /> : null}
    </main>
  );
}
