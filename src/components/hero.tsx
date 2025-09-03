import { Testimonials } from "./testimonials";
import { ClientVideoDialog } from "./client-video-dialog";

export default function Hero() {
  return (
    <section id="hero" className="relative text-white bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6 max-w-md md:max-w-xl flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold headingFont text-center">
            Professional booking systems to grow your business
          </h1>
          <p className="sm:text-lg text-base px-4 text-center text-white/90">
            With seamless client scheduling, secure payments, and workflow
            automation, all you have to do is show up on time.
          </p>

          <div className="space-y-2 flex items-start gap-3">
            {/* <Link
              href="/get-started?type=professional&btn=home-hero"
              className="inline-block bg-white text-black px-6 py-3 shadow hover:bg-gray-100 transition border border-primary font-semibold"
            >
              Get started
            </Link> */}
            <ClientVideoDialog />
          </div>
        </div>
      </div>

      <Testimonials />
    </section>
  );
}
