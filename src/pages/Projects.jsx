import ProjectItem from "../components/ProjectItem";
import SectionHeading from "../ui/SectionHeading";

import project1Image from "../assets/project-1.png";
import project0Image from "../assets/project-0.png";
import project2Image from "../assets/project-img-1.png";
import project3Image from "../assets/project-2.png";

const projectData = [
  {
    image: project0Image,
    heading: "BuildUp Resume Builder",
    desc: "Developed a Next.js application enabling users to create and customize resumes based on job type and experience, featuring real-time previews and downloadable PDFs. Utilized local storage for guest users and PostgreSQL for logged-in users, with a responsive design using Tailwind CSS.",
    githubLink: "https://github.com/dhanushtheijas08/resume-builder",
    liveLink: "https://buildup-resume.vercel.app/",
    githubText: "dhanushtheijas08/resume-builder",
    linkLinkText: "buildup-resume.vercel.app",
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

// import project2Image from "../assets/project-2.png";
// import project3Image from "../assets/project-3.png";
//  {
//     image: project2Image,
//     heading: "Pepperoni Express",
//     desc: "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
//     githubLink: "https://github.com/dhanushtheijas08/pizza-ordering-website",
//     liveLink: "https://pepperoni-express.vercel.app/",
//     githubText: "dhanushtheijas08/pepperoni",
//     linkLinkText: "pepperoni.vercel.app",
//   },
//   {
//     image: project3Image,
//     heading: "Bloom",
//     desc: "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
//     githubLink: "https://github.com/dhanushtheijas08/react-hotel-booking-v2",
//     liveLink: "https://bloom-spin.vercel.app/",
//     githubText: "dhanushtheijas08/pepperoni",
//     linkLinkText: "pepperoni.vercel.app",
//   },
