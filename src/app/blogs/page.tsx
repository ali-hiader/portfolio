import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import React from "react";

function BlogsPage() {
  return (
    <main className="px-4 sm:px-[10%] flex flex-col items-center justify-center  min-h-[calc(100vh-80px)] ">
      <SparklesText>
        <AuroraText className="text-7xl font-extrabold mb-6">
          {" "}
          Coming Soon
        </AuroraText>
      </SparklesText>
      <p className="max-w-xl text-center text-lg font-medium text-gray-500">
        I am almost there! Subscribe to my blogs to get ahead in your skills and
        services.
      </p>

      <form className="outline outline-[#008058]/40 mt-10 min-h-10 flex bg-gray-100">
        <input
          placeholder="Please enter your email address"
          type="text"
          className="outline-none border-none px-4 min-w-80"
        />
        <button className="cursor-pointer px-6 border border-[#008058] bg-[#008058] text-white text-sm">
          Notify me
        </button>
      </form>
    </main>
  );
}

export default BlogsPage;
