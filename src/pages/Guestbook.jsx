import GiscusComponent from "../components/GiscusComponent";
import SecondaryPara from "../ui/SecondaryPara";
import SectionHeading from "../ui/SectionHeading";

export default function Guestbook() {
  return (
    <div
      id="guestBook"
      className="relative z-10 mx-auto space-y-5 px-5 py-10 text-white md:px-10 lg:px-20"
    >
      <SectionHeading>GuestBook</SectionHeading>
      <SecondaryPara classname="text-xl">
        Leave a message {`(~_^)`}
      </SecondaryPara>
      <GiscusComponent />
    </div>
  );
}
