export default function PrimaryButton({
  children,
  classname,
  btn = true,
  href = "",
  onClick = "",
}) {
  if (btn) {
    return (
      <button
        className={`button-primary rounded-md px-6 py-2 font-semibold text-white transition-all duration-150 hover:scale-105 sm:max-w-fit lg:block ${classname}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      className={`button-primary rounded-md px-6 py-2 font-semibold text-white transition-all duration-150 hover:scale-105 sm:max-w-fit lg:block ${classname}`}
    >
      {children}
    </a>
  );
}
