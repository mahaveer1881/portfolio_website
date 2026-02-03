import project from "@/assets/project_1.png";
import AboutContact from "../components/portfolio/AboutContact";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
import { personalProjects } from "@/constants/projects";
import { BsGithub } from "react-icons/bs";
import { ExternalLink } from "lucide-react";

function ProjectDesc() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("id");

  const Project = personalProjects.find((item) => item.id === projectId);

  return (
    <div>
      <div>
        <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10">
          <div
            className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
            tabIndex={0}
            style={{ transform: "none" }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down text-white text-2xl"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mt-40 mx-auto w-[80%] flex justify-between items-center">
          <button
            onClick={() => navigate("/projects")}
            className="flex justify-start items-center gap-2 text-xl text-gray-500"
          >
            <span>
              <IoIosArrowBack />
            </span>
            <span>Back</span>
          </button>

          <div className="flex justify-between items-center gap-4">
            {Project?.live && (
              <button
                onClick={() => window.open(Project.live, "_blank")}
                className="bg-gray-800 hover:bg-gray-900 text-sm text-white px-4 py-2 rounded-lg shadow-lg transition duration-300 flex justify-between items-center gap-2 hover:scale-110"
              >
                <span>
                  <ExternalLink size={18} />
                </span>
                Live Demo
              </button>
            )}
            {Project?.github && (
              <button
                onClick={() => window.open(Project.github, "_blank")}
                className="bg-gray-800 hover:bg-gray-900 text-sm text-white px-4 py-2 rounded-lg shadow-lg transition duration-300 flex justify-between items-center gap-2 hover:scale-110"
              >
                <span>
                  <BsGithub size={18} />
                </span>
                GitHub
              </button>
            )}
          </div>
        </div>
        <div className="min-h-screen flex justify-center items-center -mt-40">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0 px-48">
            <div className="min-h-screen sm:min-h-0 flex justify-center items-start flex-col mb-5 space-y-10 mx-auto">
              <div>
                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                  Project
                </h2>
                <h1 className="text-4xl font-medium text-neutral-900 tracking-wide">
                  {Project?.title}
                </h1>
              </div>
              <div>
                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                  Technology
                </h2>
                <div className="flex flex-wrap justify-start items-center gap-2 w-[70%] ">
                  {Project?.stack.map((item) => (
                    <p className="text-2xl font-normal text-neutral-900">
                      {item},
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                  Year
                </h2>
                <p className="text-2xl font-normal text-neutral-900">
                  {Project?.year}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-col mb-5 pr-20">
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Description
              </h2>
              <p
                className="text-xl text-justify tracking-wide font-normal text-gray-500 mb-5"
                style={{ textAlign: "justify" }}
              >
                {Project?.desc}
              </p>
              {/* <p
                className="text-xl text-justify tracking-wide font-normal text-gray-500 mb-5"
                style={{ textAlign: "justify" }}
              ></p> */}
            </div>
          </div>
        </div>

        <div className="mx-auto w-full md:w-[70%] ">
          {/* Objective */}
          <div>
            <h2 className="uppercase text-gray-400 tracking-widest text-sm md:text-base mb-2">
              Objective
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              The goal of this project was to create a modern, responsive, and
              user-friendly platform that showcases my skills in frontend
              development while providing an interactive experience for
              visitors. It emphasizes clean code, performance, and accessibility
              across devices.
            </p>
          </div>

          {/* Description & Features */}
          <div className="mt-20">
            <h2 className="uppercase text-gray-400 tracking-widest text-sm md:text-base mb-2">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg">
              <li>Responsive design compatible with all devices.</li>
              <li>Interactive UI with smooth animations and transitions.</li>
              <li>Built using React, TailwindCSS, and Typescript.</li>
              <li>Optimized for performance, accessibility, and SEO.</li>
            </ul>
          </div>

          {/* Challenges & Learnings */}
          <div className="mt-20">
            <h2 className="uppercase text-gray-400 tracking-widest text-sm md:text-base mb-2">
              Challenges & Learnings
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              One challenge was ensuring the website remained fully responsive
              while maintaining performance. I learned advanced TailwindCSS
              techniques, component reusability in React, and best practices for
              accessibility and responsive design.
            </p>
          </div>

          {/* Optional Metrics */}
          {/* <div className="flex gap-8 mt-5">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">5K+</p>
              <p className="text-gray-500 text-sm">Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">⭐ 300</p>
              <p className="text-gray-500 text-sm">GitHub Stars</p>
            </div>
          </div> */}

          {/* Images Carousel */}
          <div className="grid grid-cols-1 w-full mb-40 mt-20">
            <h2 className="uppercase text-gray-400 tracking-widest text-sm md:text-base mb-5">
              Screenshots
            </h2>

            <div className="w-full h-auto text-center flex flex-col justify-center items-center gap-10">
              <img src={project} className="w-[70vw] h-[70vh] mx-20" />
              <img src={project} className="w-[70vw] h-[70vh] mx-20" />
              <img src={project} className="w-[70vw] h-[70vh] mx-20" />
            </div>
          </div>
        </div>
      </div>
      <AboutContact />
    </div>
  );
}

export default ProjectDesc;
