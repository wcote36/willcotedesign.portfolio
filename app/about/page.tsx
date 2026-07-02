import Image from "next/image";
import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "About William Cote, a recent graphic designer focused on identity systems, editorial design, apparel, and digital work."
};

const focusAreas = ["Brand identity", "Editorial systems", "Print production", "Apparel graphics", "Digital design"];
const skills = ["Typography", "Art direction", "Layout", "Image treatment", "Presentation systems", "Production"];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1600px] px-5 pt-12 sm:px-8 lg:px-12">
      <section className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <FadeIn>
          <p className="text-[12px] font-medium uppercase leading-none text-muted">About</p>
          <h1 className="mt-6 text-[clamp(3rem,9vw,9rem)] font-normal leading-[0.94] tracking-normal">
            William Cote
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl">
            I am a recent University of Connecticut BFA graduate focused on identity systems, editorial
            design, packaging, apparel, and image-led visual systems.
          </p>
        </FadeIn>
      </section>

      <section className="grid gap-12 pt-16 md:grid-cols-[0.9fr_1.1fr] lg:pt-24">
        <FadeIn>
          <Image
            src="/assets/web/about-portrait-book-close.png"
            alt="William Cote portrait study in a spiral-bound book"
            width={3302}
            height={2320}
            priority
            className="h-auto w-full"
          />
        </FadeIn>
        <FadeIn className="grid gap-10">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I believe great design begins with a strong idea and is brought to life through clarity,
              thoughtful craftsmanship, and attention to detail. My work focuses on creating identities
              that are both visually distinctive and built to perform consistently across every
              touchpoint. Whether developing a brand from the ground up or refining an existing one, I
              aim to create work that is timeless, strategic, and memorable.
            </p>
            <p>
              I am looking for junior graphic design roles where I can contribute to brand, editorial,
              print, apparel, and production work while continuing to sharpen my eye and process.
            </p>
          </div>

          <div className="grid gap-8 border-t border-rule pt-8 sm:grid-cols-2">
            <List title="Focus" items={focusAreas} />
            <List title="Skills" items={skills} />
            <div>
              <h2 className="text-[12px] font-medium uppercase leading-none text-muted">Education</h2>
              <p className="mt-4 text-sm leading-relaxed">BFA Graphic Design<br />University of Connecticut</p>
            </div>
            <div>
              <h2 className="text-[12px] font-medium uppercase leading-none text-muted">Links</h2>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a href={profile.emailHref} className="underline hover:no-underline">
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-[12px] font-medium uppercase leading-none text-muted">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
