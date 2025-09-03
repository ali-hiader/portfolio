import React from "react";
import { icons } from "@/icons";
import Link from "next/link";

function ContactBtn() {
  return (
    <Link
      href="/#contact"
      className="relative cursor-pointer group border bg-[#D4AF37] w-80 px-4 py-2 font-medium text-black transition-all duration-300 hover:bg-[#E0BA4A] hover:border-transparent flex items-center gap-2 text-lg justify-center"
    >
      Let’s Chat
      <icons.ArrowRight className="group-hover:translate-x-1 transition-all size-4" />
    </Link>
  );
}

export default ContactBtn;
