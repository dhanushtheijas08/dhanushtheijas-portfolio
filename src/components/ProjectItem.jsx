import { LiaGithub } from "react-icons/lia";
import { MdInsertLink } from "react-icons/md";

export default function ProjectItem({ image, heading, desc }) {
  return (
    <div className="border-tertiary bg-bg-secondary/50  nav-bar-1 flex  flex-col overflow-hidden rounded-md border-[0.8px]  p-4">
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="samp relative h-60 overflow-y-hidden rounded-xl object-center sm:w-full sm:self-center md:w-96">
          <img
            src={image}
            alt=""
            className="absolute rounded-xl object-cover transition-transform duration-[1s] ease-in-out hover:-translate-y-[77.5%]"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="font-sen text-4xl text-white">{heading}</h1>
          <p className="max-w-xl text-sm opacity-80 sm:text-base">{desc}</p>
          <div className="flex flex-wrap gap-3.5 opacity-80">
            <div className="flex gap-2">
              <MdInsertLink className="text-2xl" />
              <a href="" className="text-base">
                <span className="hidden sm:inline">notiger.vercel.app</span>
                <span className="sm:hidden">Live Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 inline h-4 w-4"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

            <div className="links flex gap-2">
              <LiaGithub className="text-2xl" />
              <a href="" className="text-base">
                <span className="hidden sm:inline">
                  dhanushtheijas08/notiger
                </span>
                <span className="sm:hidden">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 inline h-4 w-4"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
