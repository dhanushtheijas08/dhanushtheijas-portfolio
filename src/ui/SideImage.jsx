import MianIcon from "../assets/mainIconsdark.svg";

export default function SideImage() {
  return (
    <img
      src={MianIcon}
      alt="Icons"
      className="hidden sm:block sm:w-64 md:w-[45%] lg:w-[40%]"
    />
  );
}
