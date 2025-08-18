import Contact from "./_components/contact";
import HeroPage from "./_components/hero";
import NavPage from "./_components/nav";
import Skills from "./_components/skills";
const Page = () => {
  return (
    <main className="px-16  bg-white/80 font-poppins">
      <header className="grid mt-20 rounded-[40px] border-2 bg-lime-50 border-lime-100 h-[500px]">
        <NavPage />
        <HeroPage />
      </header>
      <Skills />
      <Contact />
    </main>
  );
};

export default Page;
