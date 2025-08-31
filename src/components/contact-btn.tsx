import React from "react";
import { icons } from "@/icons";
import Link from "next/link";

function ContactBtn() {
  return (
    <Link
      href="/#contact"
      className="relative cursor-pointer group bg-emerald-600 w-72 px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-emerald-700 flex items-center gap-2 text-lg justify-center"
    >
      Let’s Chat
      <icons.ArrowRight className="group-hover:translate-x-1 transition-all size-4" />
    </Link>
  );
}

export default ContactBtn;
