"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/stadiums", label: "Stadiums" },
  { href: "/travel-guide", label: "Travel Guide" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#E5E7EB] h-16 flex items-center justify-between px-6 md:px-20 sticky top-0 z-50">
      <Link href="/" className="text-lg font-extrabold text-[#1B4FF0] tracking-tight">
        Erica Travels
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 list-none items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-[15px] font-medium transition-colors hover:text-[#1B4FF0] ${pathname === link.href
                ? "text-[#1B4FF0]"
                : "text-[#0D0E14] opacity-80"
                }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contact"
            className={`text-[15px] font-semibold px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5 ${pathname === "/contact erica"
              ? "bg-[#163DD0] text-white"
              : "bg-[#1B4FF0] text-white hover:bg-[#163DD0]"
              }`}
          >
            Contact Erica
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6 text-[#0D0E14]" />
        ) : (
          <Menu className="h-6 w-6 text-[#0D0E14]" />
        )}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-[#E5E7EB] md:hidden">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-6 py-3 text-[15px] font-medium transition-colors hover:bg-[#F3F4F6] ${pathname === link.href
                    ? "text-[#1B4FF0]"
                    : "text-[#0D0E14] opacity-80"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-6 pt-2 pb-1">
              <Link
                href="/contact"
                className={`block text-center py-2.5 text-[15px] font-semibold rounded-lg transition-colors ${pathname === "/contact"
                  ? "bg-[#163DD0] text-white"
                  : "bg-[#1B4FF0] text-white hover:bg-[#163DD0]"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Erica
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}