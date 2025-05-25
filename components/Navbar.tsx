import Link from "next/link";
import Image from "next/image";
import Navitems from "./Navitems";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between mx-auto w-full px-14 py-4 bg-white max-sm:px-4">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg" // make sure this path starts with a slash
            alt="logo"
            width={46}
            height={47}
            className="rounded-full"
          />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <Navitems />
        <p>Sign In</p>
      </div>
    </nav>
  );
};

export default Navbar;
