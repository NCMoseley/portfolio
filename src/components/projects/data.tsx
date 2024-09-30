import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "Nathan Moseley",
    projectUrls: {
      site: {
        url: "https://wip.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      repo: {
        name: "portfolio",
        owner: "ncmoseley",
        showStarCount: true,
      },
    },
    imageUrl: "/images/.png",
    description: `An open-source, opinionated portfolio.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Aceternity UI",
      "Framer Motion",
    ],
    cards: {
      a: {
        title: "Modern Reactive UI",
        text: `This portfolio template offers a clean, modern, and fully responsive design. Built to be sleek and dynamic, it leverages the latest front-end technologies to ensure a smooth and engaging user experience, perfect for showcasing your projects and skills.`,
      },
      b: {
        title: "Easy Customization & Integration",
        text: `Seamlessly customize the portfolio to fit your unique style and preferences. With support for easy integration into various data sources, this opinionated template is designed to simplify the process of building a single-page application (SPA) portfolio that truly reflects your work.`,
      },
    },
  },
  // {
  //   title: "",
  //   projectUrls: {
  //     site: {
  //       url: "",
  //       icon: <RiExternalLinkLine size={20} />,
  //     },
  //   },
  //   videoUrl: "",
  //   description: ``,
  //   tech: [
  //     "TypeScript",
  //     "Next.js",
  //     "TailwindCSS",
  //     "Framer Motion",
  //     "tRPC",
  //     "Sanity",
  //   ],
  //   cards: {
  //     a: {
  //       title: "Fast & Responsive Performance",
  //       text: `Built with Next.js, this cinematography portfolio ensures lightning-fast page speeds and smooth navigation. High-quality video and image assets load efficiently, offering a seamless viewing experience without compromising on performance.`,
  //     },
  //     b: {
  //       title: "",
  //       text: ``,
  //     },
  //   },
  // },
];
