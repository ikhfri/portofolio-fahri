"use client"
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-4 w-full z-10">
      <ul className="flex gap-10 py-3 px-11 rounded-full backdrop-blur-md bg-slate-600 bg-opacity-50  items-center max-w-fit mx-auto">
        <li>
          <Link href={"/"} className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/"} className="text-white">
            About
          </Link>
        </li>
        <li>
          <Link href={"/"} className="text-white">
            Project
          </Link>
        </li>
        <li>
          <Link href={"/"} className="text-white">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
