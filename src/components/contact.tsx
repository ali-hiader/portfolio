import React from "react";

import { icons } from "@/icons";
import TwitterIcon from "@/icons/twitter";
import InstaGramIcon from "@/icons/insta-gram";
import { DiscordIcon } from "@/icons/discord";
import EmailIcon from "@/icons/email";

function ContactPage() {
  return (
    <section className="mb-12">
      <h2
        id="contact"
        className="mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none"
      >
        Contact me
        <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">
          .
        </span>
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300">
        I&apos;m always eager to explore new opportunities and take on exciting
        projects. If you have a project in mind, or just want to say hi, feel
        free to send me a message.
      </p>
      <div className="my-6 flex w-full border border-black/15 bg-white p-5 dark:border-neutral-800 dark:bg-[#161617]">
        <form
          action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          className="relative flex w-full flex-col items-center justify-center"
        >
          <div className="block w-full items-center justify-center gap-4 text-left md:flex">
            <label
              htmlFor="name"
              className="w-full text-left text-sm font-bold tracking-wide text-neutral-700 dark:text-neutral-300"
            >
              Name
              <span
                aria-hidden="true"
                className="cursor-help text-red-500"
                title="Required"
              >
                *
              </span>
              <input
                id="name"
                className="border-neutral-300 text-neutral-800 focus:border-blue-600 dark:border-neutral-800 dark:text-white focus:dark:border-neutral-700 my-2 w-full border p-2 font-normal outline-0 duration-200 dark:bg-transparent"
                placeholder="Your Name"
                type="text"
                name="name"
              />
            </label>
            <label
              htmlFor="email"
              className="w-full text-left text-sm font-bold tracking-wide text-neutral-700 dark:text-neutral-300"
            >
              Email
              <span
                aria-hidden="true"
                className="cursor-help text-red-500"
                title="Required"
              >
                *
              </span>
              <input
                id="email"
                className="border-neutral-300 text-neutral-800 focus:border-blue-600 dark:border-neutral-800 dark:text-white focus:dark:border-neutral-700 my-2 w-full border p-2 font-normal outline-0 duration-200 dark:bg-transparent"
                placeholder="john@doe.com"
                type="email"
                name="email"
              />
            </label>
          </div>
          <div className="mt-2 flex w-full flex-col items-center justify-center gap-1.5">
            <label
              htmlFor="message"
              className="w-full text-left text-sm font-bold tracking-wide text-neutral-700 dark:text-neutral-300"
            >
              Message
              <span
                aria-hidden="true"
                className="cursor-help text-red-500"
                title="Required"
              >
                *
              </span>
              <textarea
                name="message"
                id="message"
                className="border-neutral-300 text-neutral-800 focus:border-blue-600 dark:border-neutral-800 dark:text-white focus:dark:border-neutral-700 mt-2 max-h-40 min-h-24 w-full border p-2 font-normal outline-0 duration-200 dark:bg-transparent"
                placeholder="Hello there, I would like to ask you about..."
              ></textarea>
            </label>
            <span className="text-neutral-700 dark:text-neutral-300 ml-auto text-xs opacity-50">
              0/500 characters
            </span>
          </div>
          <button
            className="group flex w-fit items-center px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 ml-auto mt-4"
            type="submit"
            disabled
          >
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
              className="lucide lucide-send mr-2 size-4"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            Send
          </button>
        </form>
      </div>
      <p className="text-neutral-700 dark:text-neutral-300">
        Or contact me with...
      </p>
      <div className="mt-4 flex flex-wrap gap-4">
        <a
          className="group flex w-fit items-center px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none border text-neutral-700 hover:bg-[#f2f3f5] dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021] gap-2"
          href="mailto:suhaibking310@gmail.com"
        >
          <EmailIcon />
          Email
          <icons.ArrowRight className="lucide lucide-arrow-right ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>
        <a
          className="group flex w-fit items-center px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none border text-neutral-700 hover:bg-[#f2f3f5] dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021] gap-2"
          href="https://discord.gg/sgt4QEyDxK"
        >
          {/* <svg
            className="fill-[#5865F2] size-5"
            viewBox="0 0 71 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"></path>
          </svg> */}
          <DiscordIcon className="fill-[#5865F2] size-5" />
          Discord
          <icons.ArrowRight className="lucide lucide-arrow-right ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>
        <a
          className="group flex w-fit items-center px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none border text-neutral-700 hover:bg-[#f2f3f5] dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021] gap-2"
          href="https://x.com/@suhaibking"
        >
          <TwitterIcon />
          Twitter / X
          <icons.ArrowRight className="lucide lucide-arrow-right ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>
        <a
          className="group flex w-fit items-center px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none border text-neutral-700 hover:bg-[#f2f3f5] dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021] gap-2"
          href="https://www.instagram.com/suhaib_s_z/"
        >
          <InstaGramIcon />
          Instagram
          <icons.ArrowRight className="lucide lucide-arrow-right ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>
      </div>
    </section>
  );
}

export default ContactPage;
