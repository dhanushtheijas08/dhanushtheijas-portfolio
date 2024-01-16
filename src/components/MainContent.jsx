import PrimaryButton from "../ui/PrimaryButton";
import SecondaryPara from "../ui/SecondaryPara";
import SparklesIconButton from "../ui/SparklesIconButton";

export default function MainContent() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      <SparklesIconButton>
        Hey I'm <span className="font-semibold">Dhanush Theijas</span>
      </SparklesIconButton>

      <div className="xs:text-[34px] text-center font-sen text-[28px] font-bold leading-tight text-white sm:text-left sm:text-4xl md:text-[38px] md:leading-snug lg:text-[54px]">
        Fullstack Developer
        <span className="xs:text-[26px] mt-1.5 block text-[22px] md:text-[28px] lg:text-[38px]">
          I build things for the web.
        </span>
      </div>

      <SecondaryPara classname="md:max-w-sm md:text-base lg:max-w-md lg:text-[18px]">
        I'm a Full Stack Software Engineer with experience in Website, Mobile,
        and Software development. Check out my projects below.
      </SecondaryPara>

      <PrimaryButton classname="lg:-mt-5">Let's Connect</PrimaryButton>
    </div>
  );
}
