import { useState } from "react";
import { motion } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";

import Logo from "../ui/Logo";
import NavLinks from "./NavLinks";
import PrimaryButton from "../ui/PrimaryButton";

export default function NavBar() {
  const [shouldVisible, setShouldVisible] = useState(true);
  const [activeLink, setActiveLink] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) =>
    latest < scrollY.getPrevious()
      ? setShouldVisible(true)
      : setShouldVisible(false),
  );

  const navLinks = [
    {
      name: "Home",
      path: "",
    },
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
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0, transition: { type: "just" } },
        hidden: { y: "-150%", transition: { type: "just" } },
      }}
      animate={shouldVisible ? "visible" : "hidden"}
      className="nav-bar fixed z-10 mt-4 flex w-[93%] items-center justify-between rounded-md px-4 py-2 sm:w-[95%] sm:py-3 "
    >
      <Logo>Dhanush Theijas</Logo>
      <NavLinks />
      <PrimaryButton classname={"hidden"}>Resume</PrimaryButton>
    </motion.nav>
  );
}
