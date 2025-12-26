import ProjectItem from "../components/ProjectItem";
import SectionHeading from "../ui/SectionHeading";
import resumeData from "../data/resumeData";

import project0Image from "../assets/project-0.png";
import project1Image from "../assets/project-1.png";
import project2Image from "../assets/project-img-1.png";
import project3Image from "../assets/project-2.png";

const projectData = [
  {
    image: project0Image,
    heading: resumeData.projects[0].title,
    desc: "Full-stack resume generator with Next.js and Prisma for real-time customization and PDF downloads. Features dynamic forms, live preview, and responsive design using Tailwind CSS, React Redux, and Zod validation.",
    githubLink: resumeData.projects[0].repo,
    githubText: "dhanushtheijas08/resume-builder",
    liveLink: null,
    linkLinkText: "",
    isScrollAble: false,
  },
  {
    image: null,
    heading: resumeData.projects[1].title,
    desc:
      resumeData.projects[1].points[0] + " " + resumeData.projects[1].points[1],
    githubLink: resumeData.projects[1].repo,
    githubText: "dhanushtheijas08/auth-node",
    liveLink: null,
    linkLinkText: "",
    isScrollAble: false,
  },
  {
    image: project2Image,
    heading: "House GRW",
    desc: "House GRW is a house rental application designed to streamline the booking process and provide a seamless experience for users.",
    githubLink: "https://github.com/dhanushtheijas08/house-rental-react-app",
    liveLink: "https://house-rental-react-app.vercel.app/",
    githubText: "dhanushtheijas08/house-GRW",
    linkLinkText: "house-grw.vercel.app",
    isScrollAble: true,
  },
  {
    image: project3Image,
    heading: "Pepperoni Express",
    desc: "The Pizza Ordering Website is a React-based web app where users can browse, customize, and order pizzas for delivery or pickup. Built with Vite, it ensures a fast and responsive user experience.",
    githubLink: "https://github.com/dhanushtheijas08/pizza-ordering-website",
    liveLink: "https://pepperoni-express.vercel.app/",
    githubText: "dhanushtheijas08/pepperoni",
    linkLinkText: "pepperoni.vercel.app",
    isScrollAble: false,
  },
  {
    image: project1Image,
    heading: "Coinflow",
    desc: "Coinflow is an react crypto app that allows users to search for information about various cryptocurrencies in real-time.",
    githubLink: "https://github.com/dhanushtheijas08/coinflow-v2",
    liveLink: "https://coinflow-lime.vercel.app/",
    githubText: "dhanushtheijas08/coinflow",
    linkLinkText: "coinflow.vercel.app",
    isScrollAble: true,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="z-10 mt-10 flex flex-col gap-5 px-5 py-10 font-nunito-sans text-white  md:px-10 lg:px-20"
    >
      <SectionHeading>Projects</SectionHeading>

      <div className="mt-12 flex w-full flex-col gap-12">
        {projectData.map((project, index) => (
          <ProjectItem
            key={index}
            image={project.image}
            heading={project.heading}
            desc={project.desc}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            githubText={project.githubText}
            linkLinkText={project.linkLinkText}
            isScrollAble={project.isScrollAble}
          />
        ))}
      </div>
    </section>
  );
}
