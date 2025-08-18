import Link from "next/link";

const HeroPage = () => {
  return (
    <main className="grid grid-cols-2 items-center pl-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold font-yujiMai">
          I&apos;m Muhammad Ali Haider
        </h1>
        <p className="">
          A young full stack web developer. My passion burns brighter than my
          years of experience. I've tackled complex integrations like Google
          Maps API, authentication, and database management. While still growing
          in my career, my passion drives me to approach every project with
          expert-level dedication, delivering innovative, high-quality web
          applications
        </p>
        <div className="mt-4 flex gap-2 items-center">
          <Link
            href="#contact"
            className="px-4 w-fit py-2 bg-lime-300 border-lime-200 border rounded-xl hover:bg-lime-400 transition-all"
          >
            Let&apos;s connect
          </Link>
          <Link
            href="#contact"
            className="px-6 w-fit py-2 border-lime-600 border rounded-xl hover:bg-lime-400 transition-all"
          >
            Skills
          </Link>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="bg-[url(/seven.png)] rounded-2xl bg-cover size-60 "></div>
      </section>
    </main>
  );
};

export default HeroPage;
