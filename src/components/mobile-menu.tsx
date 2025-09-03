"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BlogIcon from "@/icons/blog";
import CommandIcon from "@/icons/command";
import HomeIcon from "@/icons/home";
import ProjectIcon from "@/icons/project";
import UserIcon from "@/icons/user";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/about", label: "About", icon: UserIcon },
  { href: "/projects", label: "Work", icon: ProjectIcon },
  { href: "/blogs", label: "Blog", icon: BlogIcon },
];

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger>
        <span className="md:hidden inline-flex items-center justify-center gap-2 text-sm font-medium transition-all rounded-2xl cursor-pointer disabled:pointer-events-none disabled:opacity-50 hover:bg-white/5 hover:text-accent-foreground focus:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 dark:hover:bg-accent/50 size-9 group">
          <CommandIcon />
        </span>
      </DialogTrigger>
      <DialogContent className="rounded-md">
        <DialogHeader>
          <DialogTitle className="hidden">Mobile Menu</DialogTitle>
          <DialogDescription>
            <h2 className="text-xs mb-4 ml-4 text-start">Navigation</h2>
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`${
                  link.href === pathname
                    ? "bg-primary/10 "
                    : "bg-primary/5 hover:bg-primary/15"
                } group mx-1 flex cursor-pointer items-center rounded-lg px-2 py-1.5 transition-all duration-200  mb-1.5`}
              >
                {/* Icon Container */}
                <div
                  className={`${
                    pathname === link.href
                      ? "bg-primary text-slate-50"
                      : "bg-zinc-300"
                  } mt-0.5 rounded-lg p-2 transition-all`}
                >
                  <link.icon
                    className={`${
                      pathname === link.href ? "text-white" : "text-primary"
                    } size-4`}
                  />
                </div>

                {/* Text Container */}
                <div className="ml-3 flex flex-1 flex-col">
                  <span className="text-foreground line-clamp-1 flex items-center text-sm font-medium">
                    {link.label}
                    {pathname === link.href && (
                      <span className="bg-primary/10 ml-auto text-primary inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px]">
                        Current
                      </span>
                    )}
                  </span>
                  {/* <span className="mt-0.5 line-clamp-1 text-xs text-neutral-600 group-hover:text-black">
                    Welcome to my forever work-in-progress!
                  </span> */}
                </div>
              </Link>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MobileMenu;
