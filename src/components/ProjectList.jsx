import ProjectCard from "./ProjectCard";
// list the projects
function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <div className="project-list">
      {/* loops through the projects */}
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectList;