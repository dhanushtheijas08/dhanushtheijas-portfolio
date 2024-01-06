const navLinks = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

export default function NavLinks() {
  const renderNavLinks = navLinks.map((link, index) => (
    <a
      key={index}
      href={link.path}
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
