import image1 from "../assets/1.png";
import image2 from "../assets/car.webp";
import ProjectItem from "../components/ProjectItem";
import SectionHeading from "../ui/SectionHeading";

const projectData = [
  {
    image: image1,
    heading: "Coindom",
    desc: "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
  },
  {
    image: image2,
    heading: "Coindom",
    desc: "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
  },
  {
    image: image1,
    heading: "Coindom",
    desc: "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
  },
];

export default function Projects() {
  return (
    <section className="z-10 mt-10 flex flex-col gap-5 px-5 py-10 font-nunito-sans text-white  md:px-10 lg:px-20">
      <SectionHeading>Projects</SectionHeading>

      <div className="mt-12 flex w-full flex-col gap-12">
        {projectData.map((project, index) => (
          <ProjectItem
            key={index}
            image={project.image}
            heading={project.heading}
            desc={project.desc}
          />
        ))}
      </div>
    </section>
  );
}
