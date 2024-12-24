"use client"
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-4 w-full z-10">
      <ul className="flex gap-10 py-3 px-11 font-bold rounded-full backdrop-blur-xl bg-gray-900 bg-opacity-40  items-center max-w-fit mx-auto">
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
