import { motion } from "framer-motion";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

// const animateVariants = {
//   initial: {
//     opacity: 0,
//     y: "-100%",
//   },
//   animate: (index) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.06 * index,
//       duration: 0.6,
//       ease: "linear",
//     },
//   }),
// };

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
      className={`fixed z-10 mt-4 flex w-[95%] items-center justify-between  rounded-md px-4 py-3 ${"nav-bar"} `}
    >
      <div className="font-space-grotesk text-2xl font-bold text-white">
        Dhanush Theijas
      </div>
      <ul className="font-nunito hidden items-center gap-10 text-lg font-semibold md:flex dark:text-white">
        {navLinks.map((link, index) => (
          <p key={index} className="cursor-pointer  hover:text-[#ff00ff]">
            {link.name}
          </p>
        ))}
      </ul>
      {/* <div className="welcome-box flex items-center gap-4">
        <div className="hidden text-white md:flex">Resume</div>
      </div> */}
      <button className="button-primary max-w-fit rounded-md px-6 py-2 text-white  transition-all duration-150">
        Resume
      </button>
    </motion.nav>
  );
}
