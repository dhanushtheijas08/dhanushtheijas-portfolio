export default function NavLinks({ navLinks, handleClick }) {
  const renderNavLinks = navLinks.map((link, index) => (
    <a
      key={index}
      href={link.path}
      onClick={() => handleClick(link.name.toLowerCase())}
      className="cursor-pointer text-white hover:text-opacity-70"
    >
      {link.name}
    </a>
  ));

  return (
    <ul className="font-nunito hidden items-center gap-10 text-lg font-semibold lg:flex dark:text-white">
      {renderNavLinks}
    </ul>
  );
}
