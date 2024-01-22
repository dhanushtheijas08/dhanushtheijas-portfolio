import { Toaster } from "react-hot-toast";

import HomeSection from "./pages/HomeSection";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Guestbook from "./pages/Guestbook";

import SocialAccounts from "./components/SocialAccounts";
import Scroll from "./utils/Scroll";
import StarsCanvas from "./components/StarBg";

export default function App() {
  return (
    <Scroll>
      <StarsCanvas />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background:
              "linear-gradient(180deg, rgba(60, 8, 126, 0) 0%, rgba(60, 8, 126, 0.82) 100%),rgba(113, 47, 255, 0.94)",
            color: "#fff",
            boxShadow: "inset 0 0 3px #bf97ff70",
          },
        }}
      />
      <SocialAccounts />
      <HomeSection />
      <Projects />
      <About />
      <Contact />
      <Guestbook />
    </Scroll>
  );
}
