export default function Logo({ children }) {
  return (
    <a
      href="#home"
      className="font-space-grotesk text-lg font-bold text-white sm:text-2xl lg:text-2xl"
    >
      {children}
    </a>
  );
}
