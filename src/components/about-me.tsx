import Link from "next/link";
import React from "react";
import HighlightText from "./highlight-text";
import { ArrowRight } from "@/icons/arrow-right";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { TypingAnimation } from "./magicui/typing-animation";

interface Props {
  isAboutPage?: boolean;
}

function AboutMe({ isAboutPage }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-24 text-primary-foreground">
      <section className="mb-12">
        <h2
          id="about"
          className="mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none"
        >
          {isAboutPage ? (
            <TypingAnimation className="typingFont">
              Hello, world!
            </TypingAnimation>
          ) : (
            "Hello world!"
          )}
        </h2>

        <div className="prose-quoteless prose prose-dark">
          <p className="mb-2">
            I’m{" "}
            <span className="headingFont text-2xl font-bold">
              <HighlightText>Muhammad Ali Haider</HighlightText>
            </span>{" "}
            <br />
            (yeah, it’s a long name—my grandpa said the same!).
          </p>
          <p className="mb-2">
            My coding journey began when two friends introduced me to web
            development. Like many, I grew up fascinated by movies where hackers
            in hoodies saved the world—and I always wanted to be that person.
          </p>
          <span>
            Over time, I discovered that what excites me most is{" "}
            <span className="font-semibold">custom coding</span>—solving complex
            problems, building unique solutions, and working on projects that
            challenge me to think deeper. That’s where I truly feel at home.
          </span>
        </div>
        {!isAboutPage && (
          <div className="mt-6 flex flex-row flex-wrap gap-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="group flex w-fit items-center px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none bg-primary/90 text-white hover:bg-primary"
              href="https://github.com/ali-hiader"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 size-5 fill-white stroke-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5103 0C5.59245 0 0 5.72914 0 12.8169C0 18.4825 3.58327 23.2783 8.55422 24.9757C9.17572 25.1033 9.40337 24.6999 9.40337 24.3606C9.40337 24.0634 9.38289 23.045 9.38289 21.9838C5.90281 22.7478 5.17812 20.4559 5.17812 20.4559C4.61885 18.9705 3.79018 18.5887 3.79018 18.5887C2.65116 17.8036 3.87315 17.8036 3.87315 17.8036C5.13663 17.8885 5.79961 19.1192 5.79961 19.1192C6.9179 21.0713 8.7199 20.5197 9.44486 20.1801C9.54831 19.3525 9.87993 18.7796 10.232 18.4614C7.45642 18.1642 4.53613 17.0609 4.53613 12.1377C4.53613 10.7372 5.03292 9.59137 5.8201 8.70022C5.6959 8.382 5.26083 7.06612 5.94455 5.30493C5.94455 5.30493 7.00087 4.96534 9.38263 6.62055C10.4023 6.33999 11.454 6.19727 12.5103 6.19607C13.5667 6.19607 14.6435 6.34477 15.6378 6.62055C18.0198 4.96534 19.0761 5.30493 19.0761 5.30493C19.7599 7.06612 19.3245 8.382 19.2003 8.70022C20.0083 9.59137 20.4846 10.7372 20.4846 12.1377C20.4846 17.0609 17.5643 18.1429 14.7679 18.4614C15.2237 18.8645 15.6171 19.6283 15.6171 20.8379C15.6171 22.5567 15.5966 23.9361 15.5966 24.3603C15.5966 24.6999 15.8245 25.1033 16.4457 24.9759C21.4167 23.278 24.9999 18.4825 24.9999 12.8169C25.0204 5.72914 19.4075 0 12.5103 0Z"
                ></path>
              </svg>
              View my Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>

            <Link
              className="group flex w-fit items-center px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none border border-primary-foreground hover:bg-emerald-50 hover:border-transparent"
              href="/about#certificates"
            >
              More About me
              <ArrowRight />
            </Link>
          </div>
        )}
      </section>

      <div
        className="mt-8 md:mt-0 flex items-start justify-end"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="max-w-96 max-h-[400px] relative h-fit border border-[#333]  bg-primary text-white shadow flex flex-col">
          <div className="w-fit overflow-hidden">
            <Image
              src={assets.desktopSetup}
              alt="my desktop setup"
              className="object-top"
            />
          </div>
          <div className="-z-50 absolute border-8 top-0 bottom-0 right-0 left-0 translate-y-6 translate-x-6 border-primary"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
