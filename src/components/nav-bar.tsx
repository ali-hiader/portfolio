"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Work" },
    { href: "/blogs", label: "Blog" },
  ];

  return (
    <nav className="flex items-center px-4 py-9 bg-white ">
      <div className="flex items-center gap-4">
        {/* <Image
          src={assets.logo}
          alt="Ali Haider's Logo"
          className="w-8 h-auto rounded-xl"
        /> */}
        {/* <h2 className="text-3xl font-bold headingFont text-black">
          Muhammad Ali Haider
        </h2> */}
      </div>
      <div className="fixed z-50 top-0 left-1/2 -translate-x-1/2 hidden w-fit  bg-white shadow-lg md:flex my-4">
        <ul className="relative flex items-center space-x-1  border border-black/10 bg-white px-1.5 py-1 shadow-md">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="relative list-none">
                <Link
                  href={href}
                  className={`block px-4 py-1.5 text-sm font-medium transition
              ${
                isActive
                  ? "text-emerald-700"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
                >
                  {label}
                </Link>

                {/* Glow effect for current page */}
                {isActive && (
                  <span className="absolute inset-0 -z-10  bg-emerald-50">
                    <div className="bg-emerald-500 absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full">
                      <div className="bg-emerald-400/30 absolute -top-2 -left-2 h-6 w-12  blur-md"></div>
                      <div className="bg-emerald-400/30 absolute -top-1 h-6 w-8 blur-md"></div>
                      <div className="bg-emerald-400/30 absolute top-0 left-2 h-4 w-4 rounded-lg blur-sm"></div>
                    </div>
                  </span>
                )}
              </li>
            );
          })}

          {/* CTA Button */}
          <li className="list-none">
            <Link
              className="relative inline-block cursor-pointer  bg-emerald-600 px-4 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-700"
              href="\#contact"
            >
              Let&apos;s Talk
              <div
                aria-hidden="true"
                className="absolute bottom-0 h-1/3 w-full -translate-x-4 bg-emerald-600 opacity-30 blur-sm"
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* <AnimatedThemeToggler /> */}
    </nav>
  );
}
