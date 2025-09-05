// src/Components/Navbar.jsx
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls = (to, variant = "ghost") => {
    const active = location.pathname === to;
    if (variant === "primary") {
      return [
        "px-3 py-2 rounded-lg text-sm font-medium transition",
        "bg-[#7FFFD4] text-slate-900 hover:bg-emerald-300/90",
        "hover:underline underline-offset-4 decoration-2 decoration-slate-900",
        active ? "underline" : "",
      ].join(" ");
    }
    return [
      "px-3 py-2 rounded-lg text-sm font-medium transition",
      "text-slate-200/90 hover:text-[#7FFFD4] hover:bg-white/5",
      "hover:underline underline-offset-4 decoration-2 decoration-[#7FFFD4]",
      active ? "text-[#7FFFD4] underline" : "",
    ].join(" ");
  };

  const dashActive = location.pathname.startsWith("/dashboard");

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`border-b border-white/10 backdrop-blur-md transition-colors ${
          scrolled ? "bg-slate-900/70" : "bg-slate-900/50"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="text-lg font-bold tracking-tight">
              <span className="text-[#7FFFD4]">Fake</span>book
            </a>

            <nav className="hidden md:flex items-center gap-1">
              <a
                href="/"
                aria-current={location.pathname === "/" ? "page" : undefined}
                className={linkCls("/")}
              >
                Home
              </a>
              <a
                href="/dashboard"
                aria-current={dashActive ? "page" : undefined}
                className={`${linkCls("/dashboard")} ${dashActive ? "text-[#7FFFD4] underline" : ""}`}
              >
                Dashboard
              </a>
              <a
                href="/register"
                aria-current={location.pathname === "/register" ? "page" : undefined}
                className={linkCls("/register")}
              >
                Register
              </a>
              <a
                href="/login"
                aria-current={location.pathname === "/login" ? "page" : undefined}
                className={linkCls("/login", "primary")}
              >
                Login
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200/90 hover:text-[#7FFFD4] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4]/40"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden border-b border-white/10 backdrop-blur-md bg-slate-900/70 transition ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
          <a
            href="/"
            aria-current={location.pathname === "/" ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={linkCls("/")}
          >
            Home
          </a>
          <a
            href="/dashboard"
            aria-current={dashActive ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`${linkCls("/dashboard")} ${dashActive ? "text-[#7FFFD4] underline" : ""}`}
          >
            Dashboard
          </a>
          <a
            href="/register"
            aria-current={location.pathname === "/register" ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={linkCls("/register")}
          >
            Register
          </a>
          <a
            href="/login"
            aria-current={location.pathname === "/login" ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={linkCls("/login", "primary")}
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;