import { FadeIn } from "@/components/FadeIn";
import { ProjectThumb } from "@/components/ProjectThumb";
import { getFeaturedProjects } from "@/lib/projects";
import { profile } from "@/lib/profile";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main>
      <section className="mx-auto max-w-[1600px] px-5 pb-10 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <FadeIn className="max-w-[720px]">
          <p className="text-[12px] font-medium uppercase leading-none text-muted">William Cote</p>
          <h1 className="mt-5 text-[clamp(2.5rem,8vw,7.8rem)] font-normal leading-[0.98] tracking-normal">
            Graphic Designer
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            Brand Identity • Editorial • Apparel • Digital
          </p>
        </FadeIn>
      </section>

      <section id="work" aria-label="Selected work" className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
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
