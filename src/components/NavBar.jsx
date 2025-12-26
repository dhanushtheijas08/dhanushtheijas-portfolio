import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";
import toast from "react-hot-toast";

import Logo from "../ui/Logo";
import NavLinks from "./NavLinks";
import PrimaryButton from "../ui/PrimaryButton";
import resumeData from "../data/resumeData";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const handleBtnClick = function () {
    toast.error("Feature yet to be complete");
  };
  useMotionValueEvent(scrollY, "change", (latest) =>
    latest < scrollY.getPrevious()
      ? setShouldVisible(true)
      : setShouldVisible(false),
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, transition: { type: "just" } },
          hidden: { y: "-150%", transition: { type: "just" } },
        }}
        animate={shouldVisible ? "visible" : "hidden"}
        className="nav-bar fixed z-50 mt-4 flex w-[93%] items-center justify-between rounded-md px-4 py-2 sm:w-[95%] sm:py-3 "
      >
        <Logo>{resumeData.personal.name}</Logo>
        <NavLinks navLinks={navLinks} handleClick={handleClick} />
        <div className="hidden items-center gap-4 lg:flex">
          <PrimaryButton>
            <a
              href="https://drive.google.com/file/d/17f5iR5j-XQTJOwl-gOXkPBSHZIBnPZV-/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </PrimaryButton>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="nav-bar fixed left-0 right-0 top-20 z-40 mx-auto mt-4 w-[93%] rounded-md px-4 py-6 lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={() => {
                      handleClick(link.name.toLowerCase());
                      closeMobileMenu();
                    }}
                    className="block cursor-pointer text-lg font-semibold text-white hover:text-opacity-70"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://drive.google.com/file/d/17f5iR5j-XQTJOwl-gOXkPBSHZIBnPZV-/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMobileMenu}
                  className="block cursor-pointer text-lg font-semibold text-white hover:text-opacity-70"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
