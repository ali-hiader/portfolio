"use client";

import { useCallback, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { icons } from "@/icons";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import ClipIcon from "@/icons/clip";
import { technologies } from "@/icons";
import { useRouter } from "next/navigation";

export type ProjectLink = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export type Project = {
  title: string;
  periodISO?: string;
  periodLabel?: string;
  description: string;
  images: StaticImageData[];
  techUsed: string[];
  actions?: ProjectLink[];
};

export default function ProjectShowcase({ project }: { project: Project }) {
  const router = useRouter();
  const {
    title,
    periodISO,
    periodLabel,
    description,
    images,
    techUsed,
    actions,
  } = project;

  const [index, setIndex] = useState(0);

  const total = images.length;
  const safeIndex = useMemo(
    () => Math.max(0, Math.min(index, total - 1)),
    [index, total]
  );

  // images control functions
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const jumpTo = useCallback((i: number) => setIndex(i), []);

  return (
    <div
      id={title.split(" ")[0].toLowerCase()}
      className="overflow-hidden duration-200 motion-reduce:transition-none"
    >
      {/* Heading */}
      <h3
        onClick={() => router.push(`#${title.split(" ")[0].toLowerCase()}`)}
        className="mb-2 text-2xl font-bold tracking-[-0.03em] text-primary-foreground cursor-pointer"
      >
        {title}
      </h3>
      {(periodISO || periodLabel) && (
        <time
          className="my-2 block text-sm font-normal leading-none text-primary-foreground/80"
          dateTime={periodISO}
        >
          {periodLabel}
        </time>
      )}
      <p className="mb-6 mt-2 text-primary-foreground md:w-3/4 ">
        {description}
      </p>

      {/* HERO IMAGE + CONTROLS */}
      <div className="mb-6">
        <div className="space-y-4">
          <div
            className="relative"
            role="region"
            aria-label={`${title} screenshots`}
          >
            {images[safeIndex] && (
              <Image
                priority={safeIndex === 0}
                alt={""}
                src={images[safeIndex].src}
                width={1920}
                height={1080}
                className="aspect-video object-top h-auto cursor-pointer  border border-black/10 object-cover duration-200 hover:opacity-90 dark:border-neutral-800"
              />
            )}

            {/* Prev / Next */}
            {total > 1 && (
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 transition-opacity hover:opacity-100">
                <button
                  aria-label="Previous image"
                  onClick={prev}
                  className=" bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                >
                  <ArrowLeft className="size-5" />
                </button>
                <button
                  aria-label="Next image"
                  onClick={next}
                  className=" bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                >
                  <ArrowRight className="size-5" />
                </button>
              </div>
            )}

            {/* Index pill */}
            {total > 1 && (
              <div className="absolute bottom-4 left-4  bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
                {safeIndex + 1} / {total}
              </div>
            )}
          </div>

          {/* THUMBNAILS */}
          {total > 1 && (
            <div className="grid grid-cols-6 sm:gap-2 gap-1">
              {images.map((img, i) => {
                const active = i === safeIndex;
                return (
                  <button
                    key={img.src + i}
                    onClick={() => jumpTo(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={
                      "relative overflow-hidden  border-2 transition-all " +
                      (active
                        ? "border-primary/90 ring-2 ring-primary/20"
                        : "border-black/10 hover:border-black/20 dark:border-neutral-800 dark:hover:border-primatext-primary-foreground")
                    }
                  >
                    <Image
                      alt={""}
                      src={img.src}
                      width={200}
                      height={120}
                      className="aspect-video h-auto w-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* TECH STACK */}
      {techUsed?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {techUsed.map((tech) => (
            <div
              key={tech}
              className="flex cursor-default items-center gap-2 border border-black/20 px-2 py-1 font-mono text-sm font-medium text-neutral-600 duration-200 hover:bg-black/5 motion-reduce:transition-none"
            >
              {technologies
                .filter((technology) => technology.name === tech)
                .map((t) => (
                  <t.src key={t.name} className="size-5" />
                ))}
              {tech}
            </div>
          ))}
        </div>
      ) : null}

      {/* ACTIONS */}
      {actions?.length ? (
        <div className="mt-6 flex flex-wrap gap-4">
          {actions.map((action) => (
            <Link
              key={action.href + action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={
                action.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={
                "group flex w-fit items-center  px-4 py-2 font-medium duration-200 motion-reduce:transition-none " +
                (action.variant === "primary"
                  ? "bg-secondary/90 text-white hover:bg-secondary"
                  : "border border-primary-foreground hover:bg-rose-100")
              }
            >
              <ClipIcon className="mr-2 size-5 stroke-2" />
              {action.label}
              <icons.ArrowRight />
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* ----------------------------------
USAGE EXAMPLE
-----------------------------------

// app/page.tsx (or wherever)
import ProjectShowcase, { Project } from "@/components/ProjectShowcase";

const bookingProject: Project = {
  title: "Online Booking Platform - Next.js",
  periodISO: "2024-12-31T19:00:00.000Z",
  periodLabel: "January 31, 2025 - Now",
  description:
    "A comprehensive online booking platform built with Next.js for accommodation services, travel experiences, cruises, car rentals, real estate, and travel agencies. Features responsive design with modern UI, dedicated booking and listing templates, and interactive components including listing cards, modal galleries, and checkout pages. Built with React 18.x, HeadlessUI components, Google Map React, React-datepicker, and follows best practices with PropTypes checking, React hooks, and Prettier formatting.",
  images: [
    { src: "/assets/online-booking/1.png", alt: "Online booking platform main page" },
    { src: "/assets/online-booking/2.png", alt: "Online booking platform listing page" },
    { src: "/assets/online-booking/3.png", alt: "Online booking platform booking interface" },
    { src: "/assets/online-booking/4.png", alt: "Online booking platform checkout page" },
    { src: "/assets/online-booking/5.png", alt: "Online booking platform mobile responsive design" },
    { src: "/assets/online-booking/6.png", alt: "Online booking platform interactive components" },
  ],
  tech: [
    { name: "Next.js", iconSrc: "/assets/tech/next.svg" },
    { name: "React", iconSrc: "/assets/tech/react.svg" },
    { name: "TypeScript", iconSrc: "/assets/tech/typescript.svg" },
    { name: "Tailwind CSS", iconSrc: "/assets/tech/tailwindcss.svg" },
    { name: "HeadlessUI", iconSrc: "/assets/tech/react.svg" },
    { name: "Google Maps", iconSrc: "/assets/tech/javascript.svg" },
  ],
  actions: [
    { href: "https://example.com", label: "Visit website", variant: "primary" },
    { href: "https://github.com/yourrepo", label: "View on Github", variant: "secondary" },
  ],
};

export default function Page() {
  return (
    <main className="px-4 py-10">
      <ProjectShowcase project={bookingProject} />
    </main>
  );
}

*/
