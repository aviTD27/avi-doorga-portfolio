"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 glass backdrop-blur-md border-b border-cyan-400/20 flex items-center justify-between px-8">
      
      {/* Logo */}
      <div className="text-cyan-300 font-bold text-xl tracking-wide">
        DOORGA Trithikraj (Avi)
      </div>

      {/* Navbar */}
      <nav className="flex gap-8 text-slate-300 font-medium">
        <a href="#about" className="hover:text-cyan-300 transition">About</a>
        <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
        <a href="#experience" className="hover:text-cyan-300 transition">Experience</a>
        <a href="#skills" className="hover:text-cyan-300 transition">Skills</a>
        <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
      </nav>

    </header>
  );
}
