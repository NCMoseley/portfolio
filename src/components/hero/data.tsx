import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "",
  glowText: "Nathan Moseley",
  subTitle: "A sleek portfolio",
  highlight: ["unforgettable"],
};

export const profileCard = {
  title: "Nathan Moseley",
  subTitle: "Fullstack Software Developer",
  body: `Software Developer from Western Canada. I find it interesting to build beautiful and cutting edge user experiences.`,
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
    imagePath:
      "https://media.licdn.com/dms/image/v2/C4D03AQE_LnsQ1dNAsQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1531425191503?e=1733356800&v=beta&t=lBflJFa2bvSxx9e0x5RGv313qBynuvxg1egbR2on0Os",
    title: "Here we go again",
    subTitle: "Oh great another new project....",
  },
};
