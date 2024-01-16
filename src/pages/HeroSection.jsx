import { motion } from "framer-motion";

import NavBar from "../components/NavBar";
import BlackHole from "../ui/BlackHole";
import MainContent from "../components/MainContent";
import SideImage from "../ui/SideImage";
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center">
      <NavBar />

      <main className="relative z-0 flex w-full flex-col">
        <BlackHole />

        <motion.div className="z-10 mt-24 flex items-center justify-center px-5 font-nunito-sans sm:mt-40 sm:justify-around md:justify-between md:px-10  lg:px-20">
          <MainContent />
          <SideImage />
        </motion.div>
      </main>
    </div>
  );
}
