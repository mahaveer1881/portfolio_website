import ProjectsFilter from "./ProjectsFilter";
import { useEffect, useState } from "react";
import ProjectsList from "./ProjectsList";
import ProjectGrid from "./ProjectGrid";
import { ProjectDataType } from "@/constants/projects";

function ProjectsSection({ projects }: { projects: ProjectDataType[] }) {
  const [filter, setFilter] = useState<string>("all");
  const [view, setView] = useState<string>("grid");
  const [filteredProjects, setFilteredProjects] = useState<ProjectDataType[]>(
    []
  );

  useEffect(() => {
    if (filter !== "all") {
      const newD = projects.filter((item) => item.category === filter);
      setFilteredProjects(newD);
    } else {
      setFilteredProjects(projects);
    }
  }, [filter]);

  return (
    <div id="projects" className="mx-auto w-[80%] mb-48">
      <div>
        <ProjectsFilter
          filter={filter}
          setFilter={setFilter}
          view={view}
          setView={setView}
        />
        {view === "list" ? (
          <ProjectsList projects={filteredProjects} />
        ) : (
          <ProjectGrid projects={filteredProjects} />
        )}
      </div>
    </div>
  );
}

export default ProjectsSection;
