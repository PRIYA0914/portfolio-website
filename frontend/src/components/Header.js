import React, { useState, useEffect } from "react";
import "../styles/header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ---------------- Scroll + Active Section ---------------- */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          // Scroll progress
          const progress =
            (scrollY / (documentHeight - windowHeight)) * 100;
          setScrollProgress(Math.min(progress, 100));

          // Active section detection (midpoint logic)
          const sections = [
            "home",
            "about",
            "skills",
            "projects",
            "experience",
            "education",
            "contact",
          ];

          for (let section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;

              if (
                scrollY >= top - windowHeight / 2 &&
                scrollY < top + height - windowHeight / 2
              ) {
                setActiveSection(section);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- Close menu on outside / ESC ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(".navbar")) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  /* ---------------- Scroll To Section ---------------- */
  const scrollToSection = (id) => {
    setIsMenuOpen(false);

    setTimeout(() => {
      const el = document.getElementById(id);
      const headerHeight =
        document.querySelector(".header")?.offsetHeight || 0;

      if (el) {
        window.scrollTo({
          top: el.offsetTop - headerHeight,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="brand-icon">PD</span>
          <span className="brand-text">Priya Dharshini</span>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-nav ${isMenuOpen ? "open" : ""}`}>
          {[
            "home",
            "about",
            "skills",
            "projects",
            "experience",
            "education",
            "contact",
          ].map((item) => (
            <li key={item}>
              <button
                className={`nav-link ${
                  activeSection === item ? "active" : ""
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Scroll Progress */}
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
