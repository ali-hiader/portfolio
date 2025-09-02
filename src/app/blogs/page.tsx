"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { FormEvent, useState } from "react";

function BlogsPage() {
  const [clicked, setClicked] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => setClicked(false), 5000);
  }
  return (
    <main className="px-4 sm:px-[10%] mt-24 sm:mt-0 flex flex-col items-center justify-start sm:justify-center min-h-[calc(100vh-12vh)] ">
      <SparklesText>
        <AuroraText className="sm:text-6xl lg:text-7xl text-5xl font-extrabold mb-6">
          {" "}
          Coming Soon
        </AuroraText>
      </SparklesText>
      <p className="max-w-xl px-4 text-center text-lg font-medium text-gray-500">
        I am almost there! Subscribe to my blogs to get ahead in your skills and
        services.
      </p>

      <form
        onSubmit={onSubmit}
        className="outline outline-[#008058]/40 mt-10 min-h-10 flex bg-gray-100"
      >
        <input
          placeholder="Please enter your email address"
          type="text"
          required
          className="outline-none border-none px-4 min-w-80"
        />
        <button className="cursor-pointer px-6 border border-[#008058] bg-[#008058] text-white text-sm">
          Notify me
        </button>
      </form>

      <p
        className={`text-gray-600 text-center mt-4 ${
          clicked ? "block" : "hidden"
        }`}
      >
        Appreciate your subscription! Stay tuned for my first blog—it’s coming
        soon.
      </p>
    </main>
  );
}

export default BlogsPage;
