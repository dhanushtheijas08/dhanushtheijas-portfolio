export default function PrimaryButton({ children, classname }) {
  return (
    <button
      className={`button-primary hidden max-w-fit rounded-md px-6 py-2 font-semibold text-white transition-all  duration-150 lg:block ${classname}`}
    >
      {children}
    </button>
  );
}
