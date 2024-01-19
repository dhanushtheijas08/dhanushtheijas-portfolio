import { useEffect } from "react";
import SocialAccounts from "./components/SocialAccounts";
import HeroSection from "./pages/HeroSection";
import Projects from "./pages/Projects";
import scroll from "./utils/scrollAnimation";
import About from "./pages/About";
import Guestbook from "./pages/Guestbook";
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
      <Guestbook />
    </div>
  );
}
