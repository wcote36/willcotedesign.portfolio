import { FadeIn } from "@/components/FadeIn";
import { ProjectThumb } from "@/components/ProjectThumb";
import { getFeaturedProjects } from "@/lib/projects";
import { profile } from "@/lib/profile";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main>
      <section id="work" aria-label="Selected work" className="mx-auto max-w-[1600px] px-5 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} as="article">
              <ProjectThumb project={project} priority={index < 2} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-8 px-5 pt-28 sm:px-8 md:grid-cols-[1fr_2fr] lg:px-12">
        <p className="text-[12px] font-medium uppercase leading-none text-muted">Contact</p>
        <div className="max-w-3xl">
          <p className="text-2xl leading-tight sm:text-4xl">
            Available for junior graphic design, brand, editorial, print, and production design roles.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm uppercase">
            <a href={profile.emailHref} className="underline hover:no-underline">
              {profile.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
