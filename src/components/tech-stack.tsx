import { technologies } from "@/icons";
export default function TechStack() {
  return (
    <section className="my-6 mb-16">
      <h2
        id="tech"
        className="mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none"
      >
        Technologies I use
        <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">
          .
        </span>
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300">
        Over the years, I have worked with a variety of technologies. Here are
        some of the technologies I have experience with:
      </p>

      <div className="mt-4 flex flex-wrap gap-4">
        {technologies.map((tech) => (
          <a
            key={tech.name}
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-2 border border-black/10 px-2 py-1 font-mono font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5"
          >
            <tech.src className="size-5" />
            {tech.name}
          </a>
        ))}
      </div>

      <p className="mt-4 text-center text-neutral-700 dark:text-neutral-400">
        ...and many more!
      </p>
    </section>
  );
}
