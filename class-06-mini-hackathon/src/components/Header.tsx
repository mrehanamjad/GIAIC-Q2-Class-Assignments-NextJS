import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import Button from "./Button";
import { HiBars3BottomRight } from "react-icons/hi2";

const navItems = [
  { title: "Used Cars", url: "/", dropDown: true },
  { title: "New Cars", url: "/", dropDown: true },
  { title: "Bikes", url: "/", dropDown: true },
  { title: "Auto  Store", url: "/", dropDown: true },
  { title: "Videos", url: "/", dropDown: false },
  { title: "Forums", url: "/", dropDown: false },
  { title: "Blog", url: "/", dropDown: false },
  { title: "More", url: "/", dropDown: true },
];

function Header() {
  return (
    <header className="px-1 sm:px-4 bg-gradient-to-b from-[#00050c] to-[#031b36]">
      <nav className="w-full max-w-[75rem] mx-auto">
        <div className="flex items-center justify-between  text-white border-b-[0.5px] border-white/40 py-2">
          <div className="flex gap-2 text-sm items-center h-full ">
            <FaMobileAlt size={16} className="text-red-500" />
            <p>Download App via SMS</p>
          </div>
          <ul className="flex gap-1 text-sm cursor-pointer">
            <li className="text-red-600">اردو</li> | <li>Log In</li> |<li>Sign Up</li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row max-md:flex-row max-md:items-center max-md:px-2  lg:items-center justify-between  text-white">
         <Link href={'/'} ><Logo /></Link>
          <ul className="flex flex-wrap max-md:hidden">
            {navItems.map((navItem) => (
              <li key={navItem.title} className="text-white px-2">
                <Link href={navItem.url} className="flex items-center">
                  {navItem.title}
                  {navItem.dropDown && <MdArrowDropDown />}{" "}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="red" className="text-white flex items-center max-md:hidden w-fit">
            Post an Add <MdArrowDropDown />
          </Button>
          <HiBars3BottomRight className="text-4xl font-extrabold cursor-pointer md:hidden"/>
          </div>

      </nav>
    </header>
  );
}

export default Header;
