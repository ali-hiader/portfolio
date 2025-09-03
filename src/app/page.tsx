import Link from "next/link";

import ContactPage from "@/components/contact";
import ProjectShowcase from "@/components/project";
import TechStack from "@/components/tech-stack";
import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/utils";

function Home() {
  return (
    <>
      <Hero />
      <main className="px-4 sm:px-[10%]">
        <AboutMe />
        <section className="">
          <h2
            id="projects"
            className="mb-1 scroll-mt-20 text-[1.8rem] font-[750] motion-reduce:transition-none"
          >
            Projects I&apos;ve Worked on
            <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-transparent dark:from-[#a2facf] dark:to-[#64acff]">
              .
            </span>
          </h2>
          <p className="text-neutral-700 mb-6">
            Explore some of my recent projects below.
          </p>
          {projects
            .slice(0, 1)
            .map(
              ({
                actions,
                description,
                images,
                periodISO,
                periodLabel,
                techUsed,
                title,
              }) => (
                <ProjectShowcase
                  key={title}
                  project={{
                    title,
                    periodISO,
                    periodLabel,
                    description,
                    images,
                    techUsed,
                    actions,
                  }}
                />
              )
            )}

          <div className="mt-10 mb-10 flex flex-col items-center">
            <p className="mb-2 text-primary-foreground">Want to see more?</p>
            <Link
              className="group flex w-fit items-center px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none border border-primary-foreground hover:bg-rose-100 hover:border-transparent"
              href="/projects"
            >
              View more projects
              <ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
            </Link>
          </div>
        </section>

        <TechStack />
        <ContactPage />
      </main>
    </>
  );
}

export default Home;
