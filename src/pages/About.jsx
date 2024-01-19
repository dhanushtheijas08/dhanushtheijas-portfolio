import MyImage from "../assets/about-sec-image.jpeg";
import SectionHeading from "../ui/SectionHeading";
export default function About() {
  return (
    <section className="z-10 mt-10 flex flex-col-reverse justify-center gap-10 px-5 py-10 font-nunito-sans text-white sm:flex-row md:justify-between md:px-10 lg:px-20">
      <div className="flex flex-col gap-6">
        <SectionHeading classname="hidden sm:block">About</SectionHeading>

        <div className="mx-auto max-w-sm font-sen text-[19px] font-bold leading-tight text-white xs:text-[26px] sm:text-left md:mx-0 md:leading-[1.3]  lg:max-w-xl lg:text-[38px]">
          I'm Dhanush. I Live in India coding the future into reality
          {/* <span className="block text-[19px] xs:block xs:text-[26px] md:text-[28px] lg:text-[38px]">
            coding the future into reality
          </span> */}
        </div>
        <p className="max-w-lg self-center text-pretty text-base leading-relaxed  tracking-wide opacity-85 lg:max-w-xl lg:text-lg">
          I am a self-driven, career-oriented software developer specializing in
          front-end development and open-source, currently pursuing a bachelors
          degree in computer science. My expertise lies in building interactive
          web applications on the client side. Primarily working with
          technologies like JavaScript, Next.js, TypeScript and Python.
        </p>
        <p className="max-w-lg self-center text-pretty text-base leading-relaxed tracking-wide opacity-85 md:hidden lg:block lg:max-w-xl lg:text-lg">
          I strongly believe in continuous learning and improving myself, so I
          try my best to learn in any situation possible, unfavorable or not.
        </p>
      </div>

      <div className="flex max-w-sm flex-col gap-5 self-center md:self-end lg:self-start">
        <img
          src={MyImage}
          loading="lazy"
          alt="dhanush image"
          className="max-h-96 rounded-md"
        />
        <div className="flex gap-2">
          <button className="welcome-box group flex-1 justify-center gap-2.5 rounded-md border border-[#7042f88b] px-2 py-1.5  text-xl font-bold opacity-90">
            View Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" relative h-5 w-5 text-white transition-all duration-700 group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
          <button className="welcome-box rounded-md border border-[#7042f88b]  px-2 py-1.5 text-xl opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </div>
      </div>

      <SectionHeading classname="sm:hidden block">About</SectionHeading>
    </section>
  );
}
