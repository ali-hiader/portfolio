import HomeIcon from "@/lib/icons/home";
import { MessageIcon } from "@/lib/icons/message";
import ProjectIcon from "@/lib/icons/project";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex bg-white/90 items-center left-[50%] -translate-x-1/2  fixed top-4 justify-center py-2 border border-border shadow rounded-xl">
      <Link
        href="#about"
        className="text-sm flex items-center gap-2 border-r border-border px-5 hover:underline underline-offset-2 duration-200 hover:text-lime-600 transition-all"
      >
        <HomeIcon className="size-4 " />
        About
      </Link>
      <Link
        href="#projects"
        className="text-sm flex items-center gap-2 border-r border-border px-5 hover:underline underline-offset-2 duration-200 hover:text-lime-600 transition-all"
      >
        <ProjectIcon className="size-4" />
        Projects
      </Link>
      <Link
        href="#contact"
        className="text-sm flex items-center gap-2 border-r border-border px-5 hover:underline underline-offset-2 duration-200 hover:text-lime-600 transition-all"
      >
        <MessageIcon className="size-4" />
        Contact
      </Link>
    </nav>
    // </main>
  );
};

export default Nav;
