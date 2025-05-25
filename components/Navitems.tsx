"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Companions", href: "/companions" },
  { label: "Home", href: "/" },
  { label: "My Journey", href: "/my-journey" },
];

interface NavItemsProps {
  mobile?: boolean;
}

export const NavItems = ({ mobile = false }: NavItemsProps) => {
  const pathname = usePathname();

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-3">
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${
              pathname === href
                ? "bg-primary/10 text-primary"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={`relative text-sm font-medium transition-colors ${
            pathname === href ? "text-primary" : "text-muted-foreground hover:text-primary"
          } group`}
        >
          {label}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
              pathname === href ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </Link>
      ))}
    </nav>
  );
};