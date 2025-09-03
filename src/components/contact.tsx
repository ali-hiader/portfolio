"use client";

import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import EmailIcon from "@/icons/email";
import { icons } from "@/icons";
import { LinkedinIcon } from "@/icons/linkedin";

function ContactPage() {
  const [message, setMessage] = useState("");
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLInputElement;

    if (name.value === "" || email.value === "" || message.value === "") {
      return toast.error("Please fill out all fields!");
    }

    if (!email.value.includes("@") || email.value.length < 5) {
      return toast.error("Please enter a valid email!");
    }

    if (message.value.length > 500) {
      return toast.error("Message should be less than 500 chracters!");
    }

    name.value = "";
    email.value = "";
    message.value = "";
  }

  return (
    <section className="mb-12" id="contact">
      <h2 className="mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none">
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
          onSubmit={submitHandler}
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
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>

            <div className="flex items-center justify-between w-full">
              {message.length >= 500 && (
                <p className="text-slate-600 text-sm">
                  Message should be less than 500 chracters
                </p>
              )}
              <span className="text-neutral-700  ml-auto text-xs opacity-50">
                {message.length}/500 characters
              </span>
            </div>
          </div>
          <button
            className="group flex w-fit items-center px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 ml-auto mt-4 cursor-pointer"
            type="submit"
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
          target="_blank"
          className="group flex w-fit items-center px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none border text-neutral-700 hover:bg-[#f2f3f5] dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021] gap-2"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@alihaider.tech"
          rel="noopener noreferrer"
        >
          <EmailIcon />
          Email
          <icons.ArrowRight className="lucide lucide-arrow-right ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>
        <a
          target="_blank"
          className="group flex w-fit items-center px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none border text-neutral-700 hover:bg-[#f2f3f5] dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021] gap-2"
          href="https://www.linkedin.com/in/softwaredeveloperali/"
        >
          <LinkedinIcon />
          Linkedin
          <icons.ArrowRight className="lucide lucide-arrow-right ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
        </a>
      </div>
      <ToastContainer />
    </section>
  );
}

export default ContactPage;
