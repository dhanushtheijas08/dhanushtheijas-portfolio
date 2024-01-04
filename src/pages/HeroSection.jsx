import { motion } from "framer-motion";
import Blackhole from "../assets/blackhole.webm";
export default function HeroSection() {
  return (
    <div className="h-screen w-full relative flex flex-col z-0">
      <video
        autoPlay
        loop
        muted
        className="rotate-180 absolute -translate-y-[38.5%]  left-0 object-cover w-full"
      >
        <source src={Blackhole} type="video/webm" />
      </video>

      <motion.div className="flex gap-5 justify-between items-center z-10 px-5 md:px-10 lg:px-20 font-nunito-sans mt-24 md:mt-44 lg:mt-52">
        <div className="flex flex-col gap-12">
          <button className="welcome-box px-2 py-1.5  border border-[#7042f88b] opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-2 h-2 md:w-4 md:h-4 lg:w-6 lg:h-6 text-[#b49bff]"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="welcome-text  ml-2 text-xs md:text-sm lg:text-base">
              Hey I'm Dhanush Theijas
            </h1>
          </button>

          <div className="text-5xl font-bold text-white">
            Frotnend Developer
            <span className="mt-1.5 block text-[38px]">
              I build things for the web.
            </span>
          </div>

          <p className="opacity-70 text-white max-w-lg">
            I'm a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my projects and skills.
          </p>

          <button className="button-primary transition-all duration-150 max-w-fit text-white -mt-5 px-6  py-2 rounded-md">
            Let's Connect
          </button>
        </div>
      </motion.div>
    </div>
  );
}
