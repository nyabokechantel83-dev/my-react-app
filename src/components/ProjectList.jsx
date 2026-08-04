import ProjectCard from "./ProjectCard";
// Project grid container
function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
