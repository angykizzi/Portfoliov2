"use client";

import { useEffect, useState } from "react";
import LocaleSwitcher from "../locale/LocaleSwitcher";
import { useTranslations } from 'next-intl';

const navLinks = [
  { key: "home", id: "home" },
  { key: "about", id: "about" },
  { key: "service", id: "service" },
  { key: "project", id: "project" },
  { key: "contact", id: "contact" },
];

export default function NavBar() {
  const t = useTranslations('NavBar');
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      for (const section of navLinks) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-principal rounded-full py-3 px-4 flex items-center justify-center w-[80%] mx-auto shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex gap-6 justify-between w-full">
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleClick(link.id)}
              className={`px-8 py-2 rounded-full transition-all ${activeSection === link.id
                ? "bg-secundary text-white font-semibold"
                : "text-white hover:opacity-80"
                }`}
            >
              {t(`${link.key}`)}
            </button>
          </li>
        ))}
        <LocaleSwitcher />
      </ul>
    </nav>
  );
}