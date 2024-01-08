import image1 from "../assets/1.png";
import image2 from "../assets/car.webp";
import { LiaGithub } from "react-icons/lia";
import { MdInsertLink } from "react-icons/md";

export default function Projects() {
  return (
    <section className=" z-10 flex flex-col gap-5 px-5 py-10 font-nunito-sans text-white  md:px-10 lg:px-20">
      <h1 className="font-sen text-4xl">Projects</h1>

      <div className="flex w-full flex-col items-center gap-12">
        <div class="border-tertiary bg-bg-secondary/50  sm nav-bar-1 flex  max-w-5xl flex-col overflow-hidden rounded-md border-[0.8px]  p-4  md:h-60">
          <div className=" flex gap-10">
            <div className="samp relative h-60 w-96  overflow-y-hidden rounded-xl object-center">
              <img
                src={image1}
                alt=""
                className="absolute rounded-xl transition-transform duration-[1s] ease-in-out hover:-translate-y-[77.5%]"
              />
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-4xl text-white">Coindom</h1>
              <p className="max-w-xl opacity-80">
                Coindom is a crypto app that allows users to search for
                information about various cryptocurrencies in real-time.
              </p>
              <div className="flex  gap-3.5 opacity-80">
                <div className="flex gap-2">
                  <MdInsertLink className="text-2xl" />
                  <a href="">
                    notiger.vercel.app
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
                  <a href="">
                    notiger.vercel.app
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

        <div class="border-tertiary bg-bg-secondary/50  sm nav-bar-1 flex  max-w-5xl flex-col overflow-hidden rounded-md border-[0.8px]  p-4  md:h-60">
          <div className=" flex gap-10">
            <div className="samp relative h-60  w-96 rounded-xl object-center">
              <img
                src={image2}
                alt=""
                className="absolute rounded-xl transition-transform duration-[10s] ease-in-out hover:-translate-y-[79%]"
              />
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-4xl text-white">Coindom</h1>
              <p className="max-w-xl opacity-80">
                Coindom is a crypto app that allows users to search for
                information about various cryptocurrencies in real-time.
              </p>
              <div className="flex  gap-3.5 opacity-80">
                <div className="flex gap-2">
                  <MdInsertLink className="text-2xl" />
                  <a href="">
                    notiger.vercel.app
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
                  <a href="">
                    notiger.vercel.app
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

        <div class="border-tertiary bg-bg-secondary/50  sm nav-bar-1 flex  max-w-5xl flex-col overflow-hidden rounded-md border-[0.8px]  p-4  md:h-60">
          <div className=" flex gap-10">
            <div className="samp relative h-60  w-96 rounded-xl object-center">
              <img
                src={image1}
                alt=""
                className="absolute rounded-xl transition-transform duration-[10s] ease-in-out hover:-translate-y-[79%]"
              />
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-4xl text-white">Coindom</h1>
              <p className="max-w-xl opacity-80">
                Coindom is a crypto app that allows users to search for
                information about various cryptocurrencies in real-time.
              </p>
              <div className="flex  gap-3.5 opacity-80">
                <div className="flex gap-2">
                  <MdInsertLink className="text-2xl" />
                  <a href="">
                    notiger.vercel.app
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
                  <a href="">
                    notiger.vercel.app
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
      </div>
    </section>
  );
}
