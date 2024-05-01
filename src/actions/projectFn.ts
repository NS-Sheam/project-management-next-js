"use server";

const addProject = async (data: any) => {
  const response = await fetch("http://localhost:5000/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const projectInfo = await response.json();
  return projectInfo;
};
const addTask = async (projectId, taskData) => {
  const project = await fetch(`http://localhost:5000/projects/${id}`);
  const projectData = await project.json();
  const newTasks = [...projectData.tasks, taskData];
  const response = await fetch(`http://localhost:5000/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tasks: newTasks }),
    cache: "no-store",
  });
  const projectInfo = await response.json();
  return projectInfo;
};
