import { useState } from "react";
import Form from "../components/Form";
import SectionHeading from "../ui/SectionHeading";
import toast from "react-hot-toast";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("dhanushtheijas08@gmail.com");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
      toast.success("Copied Successfully 😊");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
      toast.success("Can't Copy");
    }
  };
  return (
    <section
      id="contact"
      className="z-10 mt-10 flex flex-col justify-between gap-10 px-5 py-10 font-nunito-sans text-white md:flex-row md:px-10 lg:px-20"
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-0 md:flex-col md:justify-start md:gap-8">
        <div className="space-y-6">
          <SectionHeading classname="text-2xl sm:text-2xl">
            Let's work together!
          </SectionHeading>
          <p className="max-w-md text-white opacity-70 sm:max-w-xs md:max-w-md lg:text-lg">
            Feel free to reach out if you're looking for a developer, have a
            question, or are interested in building some super cool stuff
            together.
          </p>
        </div>

        <div
          data-content={`${
            isCopied ? "Copied Successfully 😊" : "Click to Copy"
          }`}
          className="group relative flex cursor-pointer items-center divide-x divide-[#7042f88b] overflow-hidden rounded border border-[#7042f88b] transition-transform duration-500 before:absolute before:left-0 before:top-0 before:z-10  before:flex before:h-full before:w-full before:translate-x-3 before:translate-y-56 before:rotate-12 before:skew-x-0 before:skew-y-12 before:items-center before:justify-center before:rounded before:bg-[#7042f89c] before:text-center before:text-sm  before:transition-transform before:duration-500 before:content-[attr(data-content)] hover:before:z-10 hover:before:translate-x-0 hover:before:translate-y-0 hover:before:rotate-0 hover:before:skew-x-0 hover:before:skew-y-0 hover:before:transition-transform hover:before:duration-500 sm:w-1/2 sm:self-end md:w-fit md:max-w-sm md:self-start md:before:translate-y-40 md:before:text-xl"
          onClick={copyToClipboard}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mx-4 h-5 w-5 md:h-6 md:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <span className="px-5 py-4 text-sm opacity-100  transition-opacity duration-500 group-hover:opacity-15 sm:px-4 md:px-5 lg:text-[1.3rem]">
            dhanushtheijas08@gmail.com
          </span>
        </div>
      </div>
      <Form />
    </section>
  );
}
