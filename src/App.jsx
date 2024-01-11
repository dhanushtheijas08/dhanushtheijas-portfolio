import { useEffect } from "react";
import SocialAccounts from "./components/SocialAccounts";
import HeroSection from "./pages/HeroSection";
import Projects from "./pages/Projects";
import scroll from "./utils/scrollAnimation";
import About from "./pages/About";
export default function App() {
  useEffect(() => {
    scroll();
  }, []);
  return (
    <div className="bg-[#030014]">
      <SocialAccounts />
      <HeroSection />
      <Projects />
      <About />
    </div>
  );
}
