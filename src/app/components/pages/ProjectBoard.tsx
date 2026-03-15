import { Link } from "react-router-dom";

export function ProjectBoard() {
  const projects = [
    {
      image: "/project1.jpg",
      title: "Brighton Kitchen Renovation",
    },
    {
      image: "/project2.jpg",
      title: "Modern Bathroom Upgrade",
    },
    {
      image: "/project3.jpg",
      title: "Luxury Living Room Remodel",
    },
    {
      image: "/project4.jpg",
      title: "Architectural Home Extension",
    },
    {
      image: "/project5.jpg",
      title: "Minimalist Interior Design",
    },
  ];

  return (
    <section className="bg-neutral-900 py-32 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <h2 className="text-4xl font-semibold mb-4">
            Featured Project Highlights
          </h2>

          <p className="text-neutral-400">
            A glimpse into the transformations we’ve crafted for our clients.
          </p>
        </div>

        {/* Board */}
        <div className="relative min-h-[500px]">

          {projects.map((project, index) => {
            const rotations = [
              "rotate-2",
              "-rotate-2",
              "rotate-3",
              "-rotate-3",
              "rotate-1",
            ];

            const positions = [
              "top-0 left-10",
              "top-20 right-20",
              "top-40 left-1/3",
              "bottom-10 right-1/4",
              "bottom-0 left-1/4",
            ];

            return (
              <div
                key={index}
                className={`absolute ${positions[index]} w-60 bg-white text-black rounded-xl shadow-2xl p-2 ${rotations[index]} hover:rotate-0 hover:scale-105 transition-all duration-300`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-2"
                />

                <p className="text-sm font-medium px-1 pb-1">
                  {project.title}
                </p>
              </div>
            );
          })}

        </div>

        {/* Button */}
        <div className="text-center mt-20">
          <Link
            to="/gallery"
            className="border border-white/40 px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
          >
            View All Projects
          </Link>
        </div>

      </div>

    </section>
  );
}