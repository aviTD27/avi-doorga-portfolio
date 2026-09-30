"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 glass backdrop-blur-md border-b border-cyan-400/20 flex items-center justify-between gap-4 px-4 md:px-8">
      {/* Logo */}
      <a
        href="#hero"
        className="text-cyan-300 font-bold text-base md:text-xl tracking-wide whitespace-nowrap"
      >
        DOORGA Trithikraj (Avi)
      </a>

      {/* Navbar — scrolls horizontally on small screens */}
      <nav className="flex gap-5 md:gap-8 text-slate-300 font-medium text-sm md:text-base overflow-x-auto whitespace-nowrap">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-cyan-300 transition"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}