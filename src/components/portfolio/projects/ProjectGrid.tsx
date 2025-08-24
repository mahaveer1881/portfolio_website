import { PATH_ROUTES } from "@/constants/path";
import { useNavigate } from "react-router-dom";
import project1 from "@/assets/project_1.png";
import { ProjectDataType } from "@/constants/projects";

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
          className="relative border rounded-xl border-black/50 h-[350px] shadow-lg bg-cover bg-center bg-opacity-5 cursor-pointer overflow-hidden group"
          style={{ backgroundImage: `url(${project1})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 rounded-xl"></div>
          <div className="absolute top-4 left-4 bg-white/20 backdrop:blur-md px-4 py-1 rounded-full text-sm font-semibold text-white shadow-md">
            {project.year}
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%]">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-lg">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed line-clamp-3">
              {project.desc}
            </p>
            <p className="mt-6 text-sm sm:text-lg font-medium opacity-90">
              HTML, CSS, JavaScript, React.js
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
