import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume page for William Cote, graphic designer."
};

const skills = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Adobe After Effects",
  "Figma",
  "Canva",
  "DSLR camera/video",
  "Illustration",
  "Microsoft Office"
];

const interests = ["Traveling near and far", "Playing golf", "Curating playlists", "Cartooning", "Learning pickleball"];

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-[1180px] px-5 pb-20 pt-12 sm:px-8 lg:px-12">
      <FadeIn className="border-b border-rule pb-10 text-center">
        <p className="text-[12px] font-medium uppercase leading-none text-muted">Resume</p>
        <h1 className="mt-6 text-[clamp(3rem,8vw,6.5rem)] font-normal leading-[0.94] tracking-normal">
          William Cote
        </h1>
        <p className="mt-5 text-xl leading-tight text-muted sm:text-3xl">Experiential Graphic Designer</p>
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[12px] uppercase leading-none text-muted sm:gap-x-6">
          <span>(203) 216-0084</span>
          <a href={profile.emailHref} className="underline hover:no-underline">
            {profile.email}
          </a>
          <span>Andover, MA</span>
        </div>
      </FadeIn>

      <div className="grid gap-12 pt-12 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-0">
        <FadeIn as="section" className="grid content-start gap-10 lg:border-r lg:border-rule lg:pr-10">
          <ResumeBlock
            title="Education"
            items={[
              {
                heading: "University of Connecticut",
                meta: "Storrs, CT",
                body: "Bachelor of Fine Arts, Graphic Design. May 2026."
              },
              {
                heading: "Central Saint Martins",
                meta: "London, UK",
                body: "Graphic Communication Design. Fall 2025."
              },
              {
                heading: "Massachusetts College of Art",
                meta: "Boston, MA",
                body: "Fine Arts Coursework. Spring 2022."
              }
            ]}
          />
          <TagGroup title="Technical Skills" items={skills} />
          <TagGroup title="Interests" items={interests} />
        </FadeIn>

        <FadeIn as="section" className="grid gap-10 lg:pl-10">
          <section className="border-t border-rule pt-6">
            <h2 className="text-[12px] font-medium uppercase leading-none text-muted">About</h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">
              Creative and detail-oriented designer with professional experience in branding, visual
              storytelling, photography, and digital marketing, complemented by a strong foundation in
              typography, composition, and illustration. Passionate about creating immersive,
              user-centered experiences that connect people with the built environment through
              thoughtful design.
            </p>
          </section>
          <ResumeBlock
            title="Work Experience"
            items={[
              {
                heading: "Freelance Graphic Designer",
                meta: "Professional Skills Basketball, Charlotte, NC | Summer 2025 and 2026",
                bullets: [
                  "Conceptualize and execute a complete summer campaign of visual materials, including print collateral, for PSB Leadership Summit.",
                  "Design logos using typography, composition, and color systems for national and regional merchandise and apparel.",
                  "Collaborate with the marketing department to present mood boards, monitor brand guidelines, and carry projects to completion."
                ]
              },
              {
                heading: "Design Intern",
                meta: "Legacy League Basketball, Norfolk, MA | Summer 2025",
                bullets: [
                  "Captured live-action game photos and created original graphics for the league's social media platforms and website.",
                  "Managed social media by crafting captions, applying hashtags, and generating content to engage followers."
                ]
              }
            ]}
          />
          <ResumeBlock
            title="Senior Project"
            items={[
              {
                heading: "SFA Art Show | Digital Third Spaces",
                meta: "May 2026",
                bullets: [
                  "Investigated how digital communities can function as third spaces.",
                  "Designed a system that moved between critical writing, public installation, and interface prototypes to create social infrastructure, comfort, and identity.",
                  "Developed large-format imagery, measured typography, and interactive artifacts to help the subject feel tangible."
                ]
              }
            ]}
          />
        </FadeIn>
      </div>
    </main>
  );
}

function ResumeBlock({
  title,
  items
}: {
  title: string;
  items: { heading: string; meta: string; body?: string; bullets?: string[] }[];
}) {
  return (
    <section className="border-t border-rule pt-6">
      <h2 className="text-[12px] font-medium uppercase leading-none text-muted">{title}</h2>
      <div className="mt-5 grid gap-6">
        {items.map((item) => (
          <article key={item.heading} className="max-w-3xl">
            <div className="grid gap-1">
              <h3 className="text-base font-medium leading-tight">{item.heading}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.meta}</p>
            </div>
            {item.body ? <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.body}</p> : null}
            {item.bullets ? (
              <ul className="mt-3 grid max-w-3xl list-disc gap-1.5 pl-5 text-sm leading-relaxed text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function TagGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border-t border-rule pt-6">
      <h2 className="text-[12px] font-medium uppercase leading-none text-muted">{title}</h2>
      <ul className="mt-5 grid list-disc gap-2 pl-5 text-sm leading-relaxed text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
