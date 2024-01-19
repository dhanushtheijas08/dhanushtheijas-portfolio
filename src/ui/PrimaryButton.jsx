export default function PrimaryButton({ children, classname }) {
  return (
    <button
      className={`button-primary rounded-md px-6 py-2 font-semibold text-white transition-all duration-150 sm:max-w-fit lg:block ${classname}`}
    >
      {children}
    </button>
  );
}
