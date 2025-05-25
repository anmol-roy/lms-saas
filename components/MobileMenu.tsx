"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavItems } from "./Navitems";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".mobile-menu-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="md:hidden mobile-menu-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 bg-white shadow-lg z-50 p-4 space-y-3">
          <NavItems mobile />
          <div className="pt-3 border-t border-gray-100">
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};