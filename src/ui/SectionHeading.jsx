export default function SectionHeading({ children, classname }) {
  return (
    <h1
      className={`font-space-grotesk text-[35px] font-bold sm:text-[40px] lg:text-5xl ${classname}`}
    >
      {children}
    </h1>
  );
}
