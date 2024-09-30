import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "",
  glowText: "nextMotion",
  subTitle: "A sleek UI starter for an unforgettable portfolio",
  highlight: ["unforgettable"],
};

export const profileCard = {
  title: "Nathan Moseley",
  subTitle: "Fullstack Software Developer",
  body: `Passionate about building scalable, user-friendly web applications. Always exploring new technologies and best practices to improve development processes.`,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/ncmoseley/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      url: "https://github.com/ncmoseley",
      icon: <IoLogoGithub size={20} />,
    },
  ],
  tooltip: {
    imagePath: "https://avatars.githubusercontent.com/u/106707326?v=4",
    title: "Hey...",
    subTitle: "That's me!",
  },
};
