import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import client1 from "@/assets/clients/client-1.jpg";
import client2 from "@/assets/clients/client-2.jpg";
import client3 from "@/assets/clients/client-3.jpg";
import client4 from "@/assets/clients/client-6.jpg";

import {
  assets,
  lejverabilImages,
  lineaImages,
  revisorvenImages,
} from "@/assets/assets";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const testimonials = [
  {
    name: "Jodie McNamara",
    location: "Dublin, Ireland",
    message:
      "Ali rebuilt my business website after my old one was lost. The new site is fast, beautifully designed, and works flawlessly. I’m very pleased with the outcome.",
    clientImage: client1,
  },
  {
    name: "Werner H.",
    location: "Berlin, Germany",
    message:
      "Ali asked the right questions and offered valuable insights throughout the website creation. His approach was thoughtful and professional. Great work overall!",
    clientImage: client2,
  },
  {
    name: "MJ Tech LLC",
    location: "Austin, USA",
    message:
      "Ali was quick to respond, easy to work with, and always ready to help with our questions. His professionalism made the process smooth and stress-free for our team.",
    clientImage: client3,
  },
  {
    name: "James Z.",
    location: "Toronto, Canada",
    message:
      "This was my first time using this type of service, and Ali made it simple. He understood exactly what I wanted and delivered a site that exceeded my expectations.",
    clientImage: client4,
  },
];

export const filterOptions = [
  "All",
  "Scheduling Platform",
  "E-commerce",
  "AI Integrated",
];

export const projects = [
  {
    title: "Linea - Modern E-Commerce Shirt Store",
    type: "E-commerce",
    periodISO: "2025-07-01",
    periodLabel: "Jul 2025 - Aug 2025",
    description:
      "Developed a responsive e-commerce platform showcasing a catalog of shirts with search, filtering, and category browsing for easy product discovery. Implemented add-to-cart and checkout flows with secure Stripe payments. Built an admin dashboard for product management, enabling the admin to add, edit, or remove shirts. Created with Next.js, Node.js, PostgreSQL, and Stripe to ensure performance and scalability.",
    images: lineaImages,
    techUsed: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "Stripe"],
    actions: [
      {
        href: "https://linea-by-ali.vercel.app/",
        label: "Live Demo",
        variant: "primary" as const,
      },
    ],
  },
  {
    title: "Revisorven.dk - Accounting & Business Advisory Website",
    type: "AI Integrated",
    periodISO: "2025-04-01",
    periodLabel: "Apr 2025 - May 2025",
    description:
      "Developed a modern, SEO-optimized website for an accounting and business advisory firm, focusing on performance, clarity, and professional branding. This project was built in collaboration with Ammar while working as devode.pro agency.",
    images: revisorvenImages,
    techUsed: ["Next.js", "TailwindCSS", "Node.js"],
    actions: [
      {
        href: "https://revisorven.dk/",
        label: "Visit website",
        variant: "primary" as const,
      },
    ],
  },
  {
    title: "Lejvarebil.dk - Vehicle Rental Booking Platform",
    type: "Scheduling Platform",
    periodISO: "2025-06-01",
    periodLabel: "Jun 2025 - Jul 2025",
    description:
      "Built a responsive vehicle rental website with an integrated booking system, focusing on usability, mobile-first design, and performance optimization. This project was developed in collaboration with Ammar while working at devode.pro agency.",
    images: lejverabilImages,
    techUsed: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
    actions: [
      {
        href: "https://lejvarebil.dk/#book",
        label: "Visit website",
        variant: "primary" as const,
      },
    ],
  },

  {
    title: "CoachHub - Multi-Coach Scheduling Platform",
    type: "Scheduling Platform",
    periodISO: "2025-06-01",
    periodLabel: "Jun 2025 - Jul 2025",
    description:
      "Designed and developed a booking platform that allows clients to browse coaches from different industries and book their preferred expert. Features include personalized coach profiles, real-time availability, and secure Stripe payments. Admins can manage coaches, while each coach has their own dashboard to handle schedules and bookings. Built using Next.js, Node.js, PostgreSQL, and Stripe.",
    images: [],
    techUsed: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "Stripe"],
    actions: [
      {
        href: "https://your-coachhub-link.vercel.app/",
        label: "Live Demo",
        variant: "primary" as const,
      },
    ],
  },
];

export const certificatesData = [
  {
    image: assets.htmlCssCertificate,
    title: "Build Responsive Real-World Websites with HTML and CSS",
    instructor: "Jonas Schmedtmann",
  },
  {
    image: assets.jsCertificate,
    title: "Modern JavaScript From The Beginning 2.0 (2024)",
    instructor: "Brad Traversy",
  },
  {
    image: assets.reactCertificate,
    title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    instructor: "Maximilian Schwarzmüller",
  },
  {
    title: "Next.js 15 & React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    instructor: "Jonas Schmedtmann",
  },
];
