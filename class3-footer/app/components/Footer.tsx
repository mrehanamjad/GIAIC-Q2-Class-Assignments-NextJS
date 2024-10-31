import React from "react";
import Logo from "./Logo";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full p-4 lg:px-20 min-h-32 text-white bg-slate-950 grid sm:grid-cols-2 md:grid-cols-3  gap-3 items-center ">
      <Logo />
      <div className="space-x-1 md:space-x-2">
        <p className="font-bold text-xl mb-1 px-1 sm:px-2">Links</p>
        <Link href={"/"}>Home</Link>
        <Link href={"/rendering"}>Rendering</Link>
        <Link href={"/dynamic-routes"}>Dynamic Routes</Link>
      </div>
      <div className="space-x-1 md:space-x-2">
        <p className="font-bold text-xl mb-1 px-1 sm:px-2">Created By</p>
        <i>M.Rehan Amjad</i>
        <div className="flex gap-2 pl-1 pt-1">
        <Link href={"https://github.com/mrehanamjad"} className="p-1 px-2 rounded bg-slate-500" target="_blank">
         Github
        </Link>
        <Link href={"https://www.linkedin.com/in/mrehanamjad/"} className="p-1 px-2 rounded   bg-blue-600" target="_blank">
          LinkedIn
        </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
