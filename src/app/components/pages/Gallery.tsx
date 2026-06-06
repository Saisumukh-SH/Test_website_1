import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Gallery() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchParams] = useSearchParams();

  const categories = [
    "All",
    "Kitchen",
    "Bathroom",
    "Living",
    "Full Renovation",
  ];

  useEffect(() => {

    const category = searchParams.get("category");

    if (!category) {
      setSelectedCategory("All");
      return;
    }

    const formattedCategory =
      category === "kitchen"
        ? "Kitchen"
        : category === "bathroom"
        ? "Bathroom"
        : category === "living"
        ? "Living"
        : category === "full-renovation"
        ? "Full Renovation"
        : "All";

    setSelectedCategory(formattedCategory);

  }, [searchParams]);

  const projects = [
    {
      id: 1,
      title: "Toorak Residence",
      category: "Kitchen",
      location: "Melbourne, Victoria",
      image: "/images/project1.jpg"
    },

    {
      id: 2,
      title: "Brighton Coastal Home",
      category: "Bathroom",
      location: "Brighton, Victoria",
      image: "/images/project2.jpg"
    },

    {
      id: 3,
      title: "Hawthorn Interior",
      category: "Living",
      location: "Hawthorn, Victoria",
      image: "/images/project3.jpg"
    },

    {
      id: 4,
      title: "Modern Family Extension",
      category: "Full Renovation",
      location: "Kew, Victoria",
      image: "/images/project4.jpg",
    },

    {
      id: 5,
      title: "Minimalist Kitchen Studio",
      category: "Kitchen",
      location: "South Yarra, Victoria",
      image: "/images/project5.jpg",
    },

    {
      id: 6,
      title: "Architectural Living Space",
      category: "Living",
      location: "Camberwell, Victoria",
      image: "/images/project6.jpg",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#F8F5F0] text-[#2B2B2B] overflow-hidden">

      {/* HERO */}
      <section className="pt-32 pb-24 border-b border-[#DDD3C7]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-5">
              Our Projects
            </p>

            <h1 className="text-6xl md:text-7xl font-semibold leading-tight tracking-tight mb-8">
              Featured
              <span className="block text-[#5E564F]">
                Renovation Projects
              </span>
            </h1>

            <p className="text-[#5E564F] text-lg leading-relaxed max-w-2xl">
              Explore a collection of thoughtfully designed kitchen,
              bathroom and home renovation projects crafted with
              quality materials, expert workmanship and timeless design.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURED PROJECT */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[#74695E]
                  mb-4
                "
              >
                Featured Project
              </p>

              <h2
                className="
                  text-5xl
                  md:text-6xl
                  font-semibold
                  leading-tight
                  mb-8
                "
              >
                Kitchen Renovation
              </h2>

              <div className="space-y-4 mb-8">

                <p className="text-lg">
                  <strong>Location:</strong> Melbourne
                </p>

                <p className="text-lg">
                  <strong>Duration:</strong> 8 Weeks
                </p>

                <p className="text-lg">
                  <strong>Scope:</strong> Full Kitchen Renovation
                </p>

              </div>

              <p
                className="
                  text-[#5E564F]
                  text-lg
                  leading-relaxed
                  mb-10
                  max-w-xl
                "
              >
                A complete transformation featuring custom joinery,
                premium stone surfaces, integrated appliances and
                contemporary finishes designed for modern living.
              </p>

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#213A5C]
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  hover:opacity-90
                  transition-all
                  duration-300
                "
              >
                Get A Cost Estimate
              </Link>

            </div>

            {/* RIGHT IMAGE */}
            <div>

              <img
                src="/images/inside_1.jpeg"
                alt="Kitchen Renovation"
                className="
                  w-full
                  h-[650px]
                  object-cover
                  rounded-[24px]
                  border border-[#D8CEC2]
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* FILTERS */}
      <section className="pb-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-4">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-3 rounded-full border transition-all duration-300
                  ${
                    selectedCategory === category
                      ? "bg-[#213A5C] text-white border-[#213A5C]"
                      : "border-[#D8CEC2] bg-white text-[#5E564F] hover:border-[#213A5C] hover:text-[#213A5C]"
                  }
                `}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* PROJECT GRID */}
      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-[#74695E]
                mb-4
              "
            >
              Portfolio
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-semibold
              "
            >
              Explore More
              <span className="block text-[#5E564F]">
                Renovation Projects
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="
                  bg-white
                  border border-[#D8CEC2]
                  overflow-hidden
                  rounded-[24px]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  transition-all duration-300
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[320px]
                    object-cover
                  "
                />

                <div className="p-8">

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-[#74695E]
                      mb-3
                    "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      mb-3
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      text-[#5E564F]
                      mb-6
                    "
                  >
                    {project.location}
                  </p>

                  <Link
                    to="/contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-[#213A5C]
                      font-medium
                    "
                  >
                    View Project
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section
        className="
          py-32
          bg-[#213A5C]
          text-white
        "
      >

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/70
              mb-5
            "
          >
            Ready To Begin?
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              leading-tight
              mb-8
            "
          >
            Your Kitchen Should Be
            <span className="block">
              As Unique As The People
              Who Use It
            </span>
          </h2>

          <p
            className="
              text-lg
              text-white/80
              max-w-2xl
              mx-auto
              leading-relaxed
              mb-10
            "
          >
            Whether you're planning a complete renovation
            or simply exploring ideas, we're here to guide
            you through every step of the journey.
          </p>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              gap-3
              bg-white
              text-[#213A5C]
              px-10
              py-5
              rounded-xl
              font-medium
              hover:scale-105
              transition-all
            "
          >
            Get A Cost Estimate
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}