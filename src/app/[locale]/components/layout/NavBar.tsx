"use client";

import { useEffect, useState } from "react";
import LocaleSwitcher from "../locale/LocaleSwitcher";
import { useTranslations } from 'next-intl';
import { Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="bg-principal rounded-full py-3 px-4 flex items-center justify-between w-[90%] xl:w-[80%] mx-auto shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 z-50">

      {/* Botón del menú hamburguesa en pantallas pequeñas */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} className="cursor-pointer" /> : <Menu size={28} />}
      </button>
      <div className="lg:hidden flex">
        <LocaleSwitcher />
      </div>

      {/* Menú en pantallas grandes */}
      <ul className="hidden lg:flex gap-6 justify-between w-full">
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

      {/* Menú desplegable en móviles */}
      <div
        className={`fixed top-0 right-0 h-full w-[100%] shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full opacity-0"
          } lg:hidden flex flex-col items-center pt-16`}
      >
        <div className="bg-principal w-full rounded-2xl p-4 flex flex-col items-center justify-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                handleClick(link.id);
                setIsOpen(false);
              }}
              className={`w-[80%] py-2 text-base rounded-full text-center transition-all ${activeSection === link.id
                ? "bg-secundary text-white font-semibold"
                : "text-white hover:opacity-80"
                }`}
            >
              {t(`${link.key}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Fondo oscuro cuando el menú está abierto */}
      {isOpen && (
        <div
          className="fixed inset-0 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}