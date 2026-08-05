import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
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

  const [word, setWord] = useState("");

  function addProject(project) {
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        ...project,
      },
    ]);
  }

  // filter projects based on the search word
  const filteredProjects = projects.filter((item) =>
    item.title.toLowerCase().includes(word.toLowerCase()),
  );

  return (
    <div className="container">
      <Header />
      <ProjectForm addProject={addProject} />
      <SearchBar word={word} setWord={setWord} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
