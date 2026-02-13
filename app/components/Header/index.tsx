"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import NavButton from "@/app/components/Header/navbutton";
import Logo from "../../../public/assets/logo_without_bg.svg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black border-b-4 border-white shadow-lg"
          : "bg-transparent"
      }
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative"
          >
            <div className="bg-linear-to-r from-blue-500 to-blue-950 px-4 py-2 border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:cursor-pointer transition-all">
              <Image src={Logo} alt="logo" />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavButton
                key={link.id}
                buttonLabel={link.label}
                onScroll={() => scrollToSection(link.id)}
                isMobileMenu={false}
              />
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="ml-2 px-6 py-2 bg-linear-to-r from-blue-500 to-purple-500 text-white font-black border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all hover:cursor-pointer"
            >
              HIRE ME
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 bg-white text-black border-4 border-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b-4 border-white mt-1">
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <NavButton
                  key={link.id}
                  onScroll={() => scrollToSection(link.id)}
                  isMobileMenu={true}
                  buttonLabel={link.label}
                />
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-black border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
              >
                HIRE ME
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
