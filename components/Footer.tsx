import { profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="mx-auto mt-28 flex max-w-[1600px] flex-col gap-6 border-t border-rule px-5 py-8 text-[12px] uppercase leading-none text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <p>William Cote © 2026</p>
      <div className="flex gap-5">
        <a href={profile.emailHref} className="hover:text-ink">
          Email
        </a>
      </div>
    </footer>
  );
}
