"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobile-menu";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/blogs", label: "Blog" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-4 py-3 sm:py-5 bg-white">
      <Link href={"/"} className="flex items-center  gap-4">
        <h2 className="sm:text-2xl text-xl font-extrabold headingFont text-black uppercase">
          Muhammad Ali Haider
        </h2>
      </Link>
      <div className="hidden fixed z-50 top-0 right-0 -translate-x-10 w-fit bg-white md:flex my-4">
        <ul className="relative flex items-center border border-black/10 bg-white px-1.5 py-1 shadow-md">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="relative list-none">
                <Link
                  href={href}
                  className={`block px-3 sm:px-4 py-1.5 text-sm font-medium transition
              ${
                isActive
                  ? "text-primary-light"
                  : "text-gray-700 hover:text-primary-light"
              }`}
                >
                  {label}
                </Link>

                {/* Subtle Glow */}
                {isActive && (
                  <span className="absolute inset-0 -z-10">
                    <div className="absolute -top-[8px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-primary-light shadow-[0_0_12px_4px_rgba(30,58,138,0.25)]">
                      <div className="absolute -top-1 left-0 h-4 w-8 rounded-full bg-primary-light/30 blur-md"></div>
                    </div>
                  </span>
                )}
              </li>
            );
          })}

          {/* CTA Button */}
          <li className="list-none">
            <Link
              className="relative inline-block cursor-pointer bg-primary-light px-4 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-light/80 whitespace-nowrap"
              href="/#contact"
            >
              Let&apos;s Talk
              <div
                aria-hidden="true"
                className="absolute bottom-0 h-1/3 w-full -translate-x-2 bg-primary-light/40 blur-md shadow-[0_0_15px_6px_rgba(30,58,138,0.2)]"
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu /> */}

      <MobileMenu />
    </nav>
  );
}
