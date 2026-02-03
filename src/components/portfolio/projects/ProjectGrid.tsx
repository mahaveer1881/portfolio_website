import { PATH_ROUTES } from "@/constants/path";
import { useNavigate } from "react-router-dom";
import project1 from "@/assets/project_1.png";
import { ProjectDataType } from "@/constants/projects";
import { ExternalLink, Github } from "lucide-react";

export interface ProjectsData {
  title: string;
  id: string;
  desc: string;
  year: string;
}

function ProjectGrid({ projects }: { projects: ProjectDataType[] }) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10 sm:mx-10">
      {projects.map((project, index) => (
        <div
          onClick={() =>
            navigate(`${PATH_ROUTES.PROJECT_DESC}?id=${project.id}`)
          }
          key={index}
          className="relative rounded-xl h-[350px] shadow-2xl cursor-pointer overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl group"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.2)), url(${project1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl"></div>
          <div className="absolute top-4 left-4 px-4 py-1 border-gray-500 rounded-full text-sm font-bold shadow-lg border border-yellow- bg-white/20 backdrop:blur-md     text-white">
            {project.year}
          </div>
          {project.live ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (project.live) {
                  window.open(project.live, "_blank");
                }
              }}
              className="absolute bottom-4 right-20 bg-white/20 backdrop:blur-md px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:bg-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-2xl"
            >
              <ExternalLink size={18} />
            </div>
          ) : null}
          {project.github ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (project.live) {
                  window.open(project.github, "_blank");
                }
              }}
              className="absolute bottom-4 right-4 bg-white/20 backdrop:blur-md px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-yellow-500 hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-2xl"
            >
              <Github size={18} color="white" />
            </div>
          ) : null}

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[70%]">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-100 leading-relaxed line-clamp-3">
              {project.short_desc}
            </p>
            <div className="mt-6 text-sm sm:text-lg font-medium opacity-90">
              <div className="flex flex-wrap justify-center items-center gap-1">
                {project?.stack.map((item, index) => (
                  <p className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-full text-xs font-medium text-white shadow-sm">
                    {item}
                    {project.stack.length - 1 !== index && ","}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
