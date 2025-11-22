"use client";

import { useState } from "react";

interface MobileMenuProps {
  navItems: Array<{ href: string; label: string }>;
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col gap-1.5 p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-[#FFD700] transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#FFD700] transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#FFD700] transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-[#1A1A1A] border-l border-[#2A2A2A] z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <button
            onClick={closeMenu}
            className="self-end text-[#FFD700] text-2xl"
            aria-label="Close menu"
          >
            ✕
          </button>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-white hover:text-[#FFD700] transition-colors text-lg font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
