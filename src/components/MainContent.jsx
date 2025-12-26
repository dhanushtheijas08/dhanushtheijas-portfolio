import PrimaryButton from "../ui/PrimaryButton";
import SecondaryPara from "../ui/SecondaryPara";
import SparklesIconButton from "../ui/SparklesIconButton";
import resumeData from "../data/resumeData";

export default function MainContent() {
  return (
    <div className="flex flex-col gap-10 lg:gap-12">
      <SparklesIconButton>
        Hey I'm{" "}
        <span className="font-semibold">{resumeData.personal.name}</span>
      </SparklesIconButton>

      <div className="text-center font-sen text-[28px] font-bold leading-tight text-white xs:text-[34px] sm:text-left sm:text-4xl md:text-[38px] md:leading-[1.3]  lg:text-[54px]">
        <span className="gradient-text">{resumeData.personal.title}</span>
        <span className="block text-[22px] xs:text-[26px] md:text-[28px] lg:text-[38px]">
          I build things for the web.
        </span>
      </div>

      <SecondaryPara classname="md:max-w-sm md:text-base lg:max-w-xl lg:text-[18px]">
        SDE-1 with hands-on experience building scalable web applications using
        React, Next.js, and Node.js. {/* <br /> */}
        Strong understanding of system design fundamentals, clean architecture,
        and performance optimization.
      </SecondaryPara>

      <PrimaryButton
        btn={false}
        href={resumeData.personal.linkedin}
        classname="lg:-mt-5 text-center"
      >
        Let's Connect
      </PrimaryButton>
    </div>
  );
}
