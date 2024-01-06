import PrimaryButton from "../ui/PrimaryButton";
import SparklesIconButton from "../ui/SparklesIconButton";

export default function MainContent() {
  return (
    <div className="flex flex-col gap-12">
      <SparklesIconButton>Hey I'm Dhanush Theijas</SparklesIconButton>

      <div className="text-5xl font-bold text-white">
        Frontend Developer
        <span className="mt-1.5 block text-[38px]">
          I build things for the web.
        </span>
      </div>

      <p className="max-w-lg text-white opacity-70">
        I'm a Full Stack Software Engineer with experience in Website, Mobile,
        and Software development. Check out my projects and skills.
      </p>

      <PrimaryButton classname="-mt-5">Let's Connect</PrimaryButton>
    </div>
  );
}
