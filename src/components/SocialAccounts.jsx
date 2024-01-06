import { RiTwitterXFill } from "react-icons/ri";
import { LiaLinkedinIn } from "react-icons/lia";
import { LiaGithub } from "react-icons/lia";

const socialAccounts = [
  {
    name: "Twitter",
    link: "https://twitter.com/dhanush_theijas",
    icon: <RiTwitterXFill />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dhanush-theijas/",
    icon: <LiaLinkedinIn />,
  },
  {
    name: "GitHub",
    link: "https://github.com/dhanushtheijas08",
    icon: <LiaGithub />,
  },
];
export default function SocialAccounts() {
  const renderSocialAccounts = socialAccounts.map((account, index) => (
    <li>
      <a
        href={account.link}
        key={index}
        target="_blank"
        className="text-xl text-[#a8b2d1] transition-colors duration-200 hover:text-[#f1f0f0]"
      >
        {account.icon}
      </a>
    </li>
  ));

  return (
    <ul className="fixed bottom-5 left-5 z-10 hidden flex-col items-center gap-5 after:block after:h-[90px] after:w-[1.5px] after:bg-[#a8b2d1] lg:flex">
      {renderSocialAccounts}
    </ul>
  );
}
