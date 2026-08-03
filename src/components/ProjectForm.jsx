import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title === "" || description === "") {
      alert("Please fill in all fields.");
      return;
    }

    addProject({
      title: title,
      description: description,
    });

    setTitle("");
    setDescription("");
  }

  return (
    <div className="project-form">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <label>Project Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter project title"
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter project description"
        ></textarea>

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;