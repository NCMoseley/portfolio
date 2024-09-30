import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "Accurate Auto",
    projectUrls: {
      site: {
        url: "https://accurate-auto-value.vercel.app/en",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        name: "accurate-auto-value",
        owner: "ncmoseley",
        showStarCount: true,
      },
    },
    imageUrl: "/images/accurate-auto.png",
    description: `A small business for connecting car owners with buyers in Switzerland.`,
    tech: ["TypeScript", "Next.js", "TailwindCSS"],
    cards: {
      a: {
        title: "Modern Reactive UI",
        text: `This site offers a clean, modern, and fully responsive design. Built to be sleek and dynamic, it leverages the latest front-end technologies to ensure a smooth and engaging user experience. Allow the system to decide between dark and light mode automaticaly, or let the user decide.`,
      },
      b: {
        title: "Advanced Language Switching Features",
        text: `Seamlessly customize the app to support additional languages.`,
      },
    },
  },
  {
    title: "Super Host",
    projectUrls: {
      site: {
        url: "https://vacation-mgmt.vercel.app",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        name: "vacation-mgmt",
        owner: "ncmoseley",
        showStarCount: true,
      },
    },
    imageUrl: "/images/super-host.png",
    description: `A vacation management tool, similar to AirBnB.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "NextAuth",
      "MongoDB",
    ],
    cards: {
      a: {
        title: "Reactive UI",
        text: `This site offers a clean, modern, and fully responsive design. Built to be sleek and dynamic, it leverages the latest front-end technologies to ensure a smooth and engaging user experience.`,
      },
      b: {
        title: "Easy Customization & Integration",
        text: `Seamlessly customize the app to support additional languages and features.`,
      },
    },
  },
];
