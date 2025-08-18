// import { BoltIcon, PackageIcon } from "@/lib/icons"

import { JavascriptIcon } from "@/lib/icons/js";
import { NodeIcon } from "@/lib/icons/nodejs";
import { ReactIcon } from "@/lib/icons/react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col gap-10 items-center max-w-7xl mx-auto pt-28"
    >
      <hgroup className="space-y-2 text-center">
        <h2 className="text-3xl lg:text-4xl font-black text-primary !leading-tight ">
          Skills That Drive My Development
        </h2>

        <p className="text-lg lg:text-xl font-normal md:leading-normal text-foreground">
          My expertise spans front-end and back-end development, ensuring
          seamless user experiences.
        </p>
      </hgroup>

      <ul className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-y-16 xl:gap-x-12 w-full sm:px-4">
        <li className="space-y-3 font-bricolage text-center flex flex-col items-center px-4">
          <div className="size-20 mb-5 rounded-full bg-lime-50 grid place-items-center">
            <JavascriptIcon className="text-secondary size-12 text-lime-400" />
          </div>

          <h4 className="text-2xl font-semibold text-primary">
            Core Technologies I Use{" "}
          </h4>
          <p>HTML, CSS, and JavaScript form the foundation of my projects.</p>
        </li>

        <li className="space-y-3 font-bricolage text-center flex flex-col items-center px-4">
          <div className="size-20 mb-5 rounded-full bg-lime-50 grid place-items-center">
            <ReactIcon className="text-secondary size-12 text-lime-400" />
          </div>

          <h4 className="text-2xl font-semibold text-primary">
            Frameworks and Libraries{" "}
          </h4>
          <p>I leverage React and Next.js for efficient UI development.</p>
        </li>

        <li className="space-y-3 font-bricolage text-center flex flex-col items-center px-4">
          <div className="size-20 mb-5 rounded-full bg-lime-50 grid place-items-center">
            <NodeIcon className="text-secondary size-12 text-lime-400" />
          </div>

          <h4 className="text-2xl font-semibold text-primary">
            Back-End Technologies{" "}
          </h4>
          <p>Node.js and Express.js power my server-side applications.</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
