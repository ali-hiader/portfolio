import { Button } from "@/components/ui/button";
import { Handshake } from "@/lib/icons/handshake";
import { MessageIcon } from "@/lib/icons/message";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="my-28 rounded-2xl bg-lime-50 flex flex-col gap-6 items-center justify-center px-6 py-16">
      <div className="rounded-full p-5 bg-lime-100">
        <Handshake className="size-18 text-lime-600" />
      </div>
      <h2 className="text-3xl font-medium text-gray-800 max-w-xl text-center">
        Colabrate with me to create impactful results
      </h2>
      <div className="flex items-center gap-2">
        <Link
          href="mailto:foronlineworking05@gmail.com"
          className="bg-lime-600 hover:bg-lime-700 transition-all px-4 rounded-lg py-2 text-white text-sm flex gap-2 justify-center "
        >
          <MessageIcon className="size-5" />
          Email Me
        </Link>
      </div>
    </section>
  );
};

export default Contact;
