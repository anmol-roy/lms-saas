"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Companions", href: "/companions" },
  { label: "Home", href: "/" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === href ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
