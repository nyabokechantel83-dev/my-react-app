import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !desc.trim()) {
      alert("All fields are required");
      return;
    }

    addProject({ title, description: desc });

    // Reset form fields
    setTitle("");
    setDesc("");
  }

  return (
    <div className="project-form">
      <h2>New Project</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project title..."
          />
        </label>

        <label>
          Description
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="What is this project about?..."
          />
        </label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ProjectForm;
