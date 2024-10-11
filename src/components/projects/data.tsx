import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "Accurate Auto Value",
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
    tech: [
      "i18n",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Shadcn/UI",
      "Prisma",
      "Neon",
      "Resend",
    ],
    cards: {
      a: {
        title: "Modern Reactive UI",
        text: `This site offers a clean, modern, and fully responsive design. Built to be sleek and dynamic, it leverages the latest front-end technologies to ensure a smooth and engaging user experience. Allow the system to decide between dark and light mode automaticaly, or let the user decide.`,
      },
      b: {
        title: "Advanced Language Switching and Other Features",
        text: `Designed for an international country, we allow the user to switch between 4 languages seamlessly. The use of Next.js enables server-side rendering, ensuring that content is dynamically generated based on the user's preferred language. Additionally, the integration of Prisma ORM allows for efficient database interactions, making it easy to manage and update language-specific content. The combination of these technologies ensures a fast, scalable, and maintainable solution for language switching, enhancing the overall user experience.`,
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
    description: `A vacation management tool, similar to Airbnb.`,
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
        title: "Seamless User Experience",
        text: `Unlock a world of possibilities with our cutting-edge, user-centric design. When you copy a world class application you get that baked in. 😜`,
      },
      b: {
        title: "Easy Customization & Integration",
        text: `This project was built using a combination of cutting-edge technologies. TypeScript was used for its strong typing and better code maintainability. Next.js was chosen for its server-side rendering capabilities and fast page loads. TailwindCSS was used for its utility-first approach to styling, making it easy to write and maintain consistent UI. Prisma was utilized for its powerful ORM capabilities, allowing for efficient database interactions. NextAuth was used for its seamless authentication integration. Finally, MongoDB was chosen as the database for its flexibility and scalability.`,
      },
    },
  },
];
