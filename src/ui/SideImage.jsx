import MianIcon from "../assets/mainIconsdark.svg";

export default function SideImage() {
  return (
    <img
      src={MianIcon}
      alt="Icons"
      className=" hidden md:block md:h-40 lg:h-[28rem]"
    />
  );
}
