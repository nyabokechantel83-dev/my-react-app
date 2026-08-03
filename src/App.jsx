import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  // Project data
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Vehicle Rental App",
      description: "Rent vehicles online.",
    },
    {
      id: 2,
      title: "House Hunting App",
      description: "Find houses to rent.",
    },
    {
      id: 3,
      title: "Recipe Finder App",
      description: "Search for recipes.",
    },
  ]);

  const [search, setSearch] = useState("");
// To add a new project to the list
  function addProject(project) {
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        title: project.title,
        description: project.description,
      },
    ]);
  }
// filter the project based on the search 
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <Header />

      <ProjectForm addProject={addProject} />

      <SearchBar search={search} setSearch={setSearch} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
