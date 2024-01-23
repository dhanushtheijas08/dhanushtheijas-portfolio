import { useState } from "react";
import { motion } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";
import toast from "react-hot-toast";

import Logo from "../ui/Logo";
import NavLinks from "./NavLinks";
import PrimaryButton from "../ui/PrimaryButton";

const navLinks = [
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Contact",
    path: "#contact",
  },
  {
    name: "GuestBook",
    path: "#guestBook",
  },
];

export default function NavBar({ handleClick }) {
  const [shouldVisible, setShouldVisible] = useState(true);
  const { scrollY } = useScroll();
  const handleBtnClick = function () {
    toast.error("Feature yet to be complete");
  };
  useMotionValueEvent(scrollY, "change", (latest) =>
    latest < scrollY.getPrevious()
      ? setShouldVisible(true)
      : setShouldVisible(false),
  );
  return (
    <motion.nav
      variants={{
        visible: { y: 0, transition: { type: "just" } },
        hidden: { y: "-150%", transition: { type: "just" } },
      }}
      animate={shouldVisible ? "visible" : "hidden"}
      className="nav-bar fixed z-50 mt-4 flex w-[93%] items-center justify-between rounded-md px-4 py-2 sm:w-[95%] sm:py-3 "
    >
      <Logo>Dhanush Theijas</Logo>
      <NavLinks navLinks={navLinks} handleClick={handleClick} />
      <PrimaryButton onClick={handleBtnClick} classname={"hidden"}>
        Resume
      </PrimaryButton>
    </motion.nav>
  );
}
