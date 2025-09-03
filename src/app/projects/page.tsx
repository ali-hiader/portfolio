"use client";

import ContactBtn from "@/components/contact-btn";
import ProjectShowcase from "@/components/project";
import { filterOptions, projects } from "@/lib/utils";
import { useEffect, useState } from "react";

function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [openFilters, setOpenFilters] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setFilteredProjects(
      filter === "All"
        ? projects
        : projects.filter((project) => project.type === filter)
    );
  }, [filter]);

  function updateFilter(name: string) {
    setFilter(name);
  }

  return (
    <main className="pt-12 px-4 sm:px-[10%]">
      <hgroup>
        <h2
          id="projects"
          className="mb-1 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.8rem] font-[750] motion-reduce:transition-none"
        >
          Projects I&apos;ve Worked on
          <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-transparent dark:from-[#a2facf] dark:to-[#64acff]">
            .
          </span>
        </h2>
        <p></p>
      </hgroup>

      <button
        onClick={() => setOpenFilters((prev) => !prev)}
        className={`${
          openFilters === true && "bg-primary text-white"
        } px-4 py-1 mt-4 border border-primary-foreground/80 cursor-pointer inline-block md:hidden transition-all`}
      >
        Filters
      </button>

      <section
        className={`${
          openFilters ? "flex" : "hidden md:flex"
        } flex md:flex-row flex-col max-w-2/3 sm:max-w-1/2 md:max-w-full gap-2 mt-4`}
      >
        {filterOptions.map((filterOption) => (
          <FilterBtn
            updateFilter={updateFilter}
            name={filterOption}
            currentFilter={filter}
            key={filterOption}
          />
        ))}
      </section>

      <section className="my-16 space-y-12">
        {filteredProjects.map((project) => (
          <ProjectShowcase
            key={project.title}
            project={{
              title: project.title,
              periodISO: project.periodISO,
              periodLabel: project.periodLabel,
              description: project.description,
              images: project.images,
              techUsed: project.techUsed,
              actions: project.actions,
            }}
          />
        ))}
      </section>
      <div className="w-full mb-12 mt-6 flex justify-center">
        <ContactBtn />
      </div>
    </main>
  );
}

interface FilterBtnProps {
  name: string;
  currentFilter: string;
  updateFilter: (name: string) => void;
}

function FilterBtn({ name, currentFilter, updateFilter }: FilterBtnProps) {
  return (
    <button
      onClick={() => updateFilter(name)}
      className={`${
        currentFilter === name && "bg-secondary text-white border-secondary/80"
      } px-4 py-1 border border-secondary-foreground/80 cursor-pointer whitespace-nowrap transition-all`}
    >
      {name}
    </button>
  );
}

export default ProjectsPage;
