import Link from "next/link";
import Image from "next/image";
import { NavItems } from "./Navitems";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex items-center justify-between h-16 px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-10 h-10">
            <Image
              src="/images/logo.svg"
              alt="logo"
              fill
              className="rounded-full object-contain"
            />
          </div>
          <span className="text-lg font-semibold hidden sm:inline">YourBrand</span>
        </Link>

        <div className="flex items-center gap-6">
          <NavItems />
          <button className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2">
            Sign In
          </button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};