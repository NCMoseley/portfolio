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
    description: `A small business for connecting car owners with buyers here in Switzerland.`,
    tech: ["TypeScript", "Next.js", "TailwindCSS"],
    cards: {
      a: {
        title: "Modern Reactive UI",
        text: `This site offers a clean, modern, and fully responsive design. Built to be sleek and dynamic, it leverages the latest front-end technologies to ensure a smooth and engaging user experience.`,
      },
      b: {
        title: "Easy Customization & Integration",
        text: `Seamlessly customize the app to support additional languages and features.`,
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
  //       title: "",
  //       text: ``,
  //     },
  //     b: {
  //       title: "",
  //       text: ``,
  //     },
  //   },
  // },
];
