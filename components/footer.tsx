import Link from "next/link";

const footerLinks = [
  { href: "/stadiums", label: "Stadiums" },
  { href: "/travel-guide", label: "Travel Guide" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact-erica", label: "Contact Erica" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] px-6 md:px-20 pt-8 pb-6">
      <div className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-[#E5E7EB] mb-5 gap-4">
        <span className="text-lg font-extrabold text-[#1B4FF0]">
          Erica Travels Qatar
        </span>
        <ul className="flex gap-6 md:gap-9 list-none flex-wrap justify-center items-center">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#0D0E14] ${link.href === "/contact"
                  ? "text-[#1B4FF0] hover:text-[#163DD0] font-semibold"
                  : "text-[#6B7280]"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-[13px] font-medium text-[#6B7280] text-center">
        Website Designer: Suhail Jaber | Year 11 | Doha, Qatar | All Rights Reserved &copy;
      </p>
    </footer>
  );
}