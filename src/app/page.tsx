"use server";
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/projects", {
    next: {
      tags: ["projects"],
    },
  });
  const data = await res.json();

  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;
