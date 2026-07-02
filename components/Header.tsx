import Link from "next/link";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/92 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-[12px] font-medium uppercase leading-none tracking-normal focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4"
        >
          William Cote
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-4 sm:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[12px] font-medium uppercase leading-none tracking-normal text-ink/78 transition-colors hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
