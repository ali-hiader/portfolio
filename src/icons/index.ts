import { ArrowRight } from "./arrow-right";
import { DiscordIcon } from "./discord";
import { DockerIcon } from "./docker";
import { EslintIcon } from "./es-lint";
import { ExpressjsIcon } from "./express-js";
import { FigmaIcon } from "./figma";
import { GitIcon } from "./git";
import { GithubLogo } from "./git-hub";
import { JavascriptIcon } from "./java-script";
import { MongodbIcon } from "./mongoDb";
import { MysqlIcon } from "./my-sql";
import { NextjsIcon } from "./next-js";
import { NodejsIcon } from "./node-js";
import { NpmIcon } from "./npm";
import { PnpmIcon } from "./pnpm";
import { PostgresqlLogo } from "./postgresql";
import { React } from "./react";
import { SvelteIcon } from "./svelte";
import { TailwindcssIcon } from "./tailwind-css";
import { TypescriptIcon } from "./type-script";
import { VercelIcon } from "./vercel";

export const icons = {
  ArrowRight,
};

export const technologies = [
  {
    name: "React",
    href: "https://reactjs.org/",
    src: React,
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    src: NextjsIcon,
  },
  {
    name: "TailwindCSS",
    href: "https://tailwindcss.com/",
    src: TailwindcssIcon,
  },
  { name: "Javascript", href: "#", src: JavascriptIcon },
  {
    name: "Typescript",
    href: "https://www.typescriptlang.org/",
    src: TypescriptIcon,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/",
    src: NodejsIcon,
  },
  {
    name: "Express.js",
    href: "https://expressjs.com/",
    src: ExpressjsIcon,
  },
  {
    name: "Svelte",
    href: "https://svelte.dev/",
    src: SvelteIcon,
  },
  { name: "NPM", href: "https://www.npmjs.com/", src: NpmIcon },
  { name: "PNPM", href: "https://pnpm.io/", src: PnpmIcon },
  { name: "Git", href: "https://git-scm.com/", src: GitIcon },
  {
    name: "Github",
    href: "https://github.com",
    src: GithubLogo,
  },
  { name: "Figma", href: "https://figma.com/", src: FigmaIcon },
  { name: "PostgreSQL", href: "#", src: PostgresqlLogo },
  {
    name: "MySQL",
    href: "https://www.mysql.com/",
    src: MysqlIcon,
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    src: MongodbIcon,
  },
  {
    name: "Discord.js",
    href: "https://discord.js.org/",
    src: DiscordIcon,
  },
  {
    name: "Docker",
    href: "https://www.docker.com/",
    src: DockerIcon,
  },
  {
    name: "Vercel",
    href: "https://vercel.com/",
    src: VercelIcon,
  },
  {
    name: "ESLint",
    href: "https://eslint.org/",
    src: EslintIcon,
  },
];
