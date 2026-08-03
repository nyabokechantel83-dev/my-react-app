import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React."
    },
    {
      id: 2,
      title: "Restaurant Landing Page",
      description: "A landing page for a local restaurant."
    }
  ]);

  const [search, setSearch] = useState("");

  function addProject(project) {
    const newProject = {
      id: projects.length + 1,
      title: project.title,
      description: project.description
    };

    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Header />

      <ProjectForm addProject={addProject} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;