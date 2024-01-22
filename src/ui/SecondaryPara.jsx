export default function SecondaryPara({
  children,
  maxWidth = "max-w-xs",
  classname,
}) {
  return (
    <p className={`text-sm text-white  opacity-70  ${maxWidth} ${classname}`}>
      {children}
    </p>
  );
}
