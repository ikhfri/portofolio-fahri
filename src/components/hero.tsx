import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "./spotlight";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



export function Hero() {
  return (
    <div className="h-[50rem] w-full flex dark:bg-black bg-slate-200 dark:bg-grid-big-white/[0.05] bg-grid-black/[0.05] relative  items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <Spotlight/>
      <div className="flex flex-col   items-center justify-center">
        <Image
          src={"/fahri2.jpg"}
          alt="profile"
          width={150}
          height={150}
          className="rounded-full outline outline-4 outline-white"
        />
        <h1 className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 bg-slate-900">
          Ikhsan Fahri Gultom
        </h1>

        <p className="text-lg text-center sm:text-xl font-medium text-slate-400 dark:text-neutral-300 relative z-20 mt-2 w-[40rem]">
          Web developer focused on creating modern, responsive, and
          user-friendly websites and applications.
        </p>
        <div className="py-6 flex gap-4">
          <button className="bg-gray-900 hover:bg-transparent hover:outline hover:outline-2 hover:outline-white-900 text-white p-2 rounded-xl" ><Link href={"/cv.pdf"} target="_blank" download="ikhsan_fahri_gultom_cv">Download CV</Link></button>
          <button className="bg-transparent outline outline-2 outline-white text-white p-2 rounded-xl hover:bg-white hover:text-gray-900" ><Link href={"/"}>Contact me here</Link></button>
        </div>

        <div className="flex gap-6">
          <Link href={"/"}><CiLinkedin size={40} /></Link>
          <Link href={"/"}><FaGithub size={40} /></Link>
          <Link href={"/"}><FaInstagram size={40} /></Link>
        </div>
      </div>
    </div>
  );
}
