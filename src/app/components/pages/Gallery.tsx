import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

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
      title: "Japandi Material",
      category: "Kitchen",
      location: "Melbourne, Victoria",
      image: "/images/japandi material.png",

      description:
        "A warm Japandi-inspired kitchen combining natural timber textures, integrated storage solutions and minimalist detailing to create a calm and functional living space.",

      clientGoals: [
        {
          goal: "Increase Storage",
          outcome:
            "Custom joinery and integrated storage solutions maximise every available space.",
        },
        {
          goal: "Improve Functionality",
          outcome: "A refined layout enhances workflow and daily usability.",
        },
        {
          goal: "Create Warmth",
          outcome:
            "Natural timber finishes and soft neutral tones establish a welcoming atmosphere.",
        },
        {
          goal: "Timeless Design",
          outcome:
            "A restrained material palette ensures longevity beyond changing trends.",
        },
      ],

      designDecisions: [
        {
          title: "Natural Oak Joinery",
          description:
            "Selected to introduce warmth, texture and a connection to nature.",
        },
        {
          title: "Integrated Appliances",
          description:
            "Concealed elements maintain clean lines and visual simplicity.",
        },
        {
          title: "Stone Surfaces",
          description:
            "Chosen for durability while providing subtle visual depth.",
        },
        {
          title: "Layered Lighting",
          description:
            "Task and ambient lighting work together to enhance functionality and mood.",
        },
      ],

      result:
        "The completed kitchen balances functionality, warmth and timeless design principles. Through careful material selection and thoughtful planning, the space now serves as both a practical workspace and a welcoming gathering place for family and friends.",

      moodboard: [
        "/images/japandi material.png",
        "/images/japandi material.png",
        "/images/japandi material.png",
        "/images/japandi material.png",
      ],
    },

    {
      id: 2,
      title: "Brighton Coastal Home",
      category: "Bathroom",
      location: "Brighton, Victoria",
      image: "/images/project2.jpg",
    },

    {
      id: 3,
      title: "Hawthorn Interior",
      category: "Living",
      location: "Hawthorn, Victoria",
      image: "/images/project3.jpg",
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
      image: "/images/kitchen2.webp",
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
    <div className="bg-[#EFE7DD] text-[#2B2B2B] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.18)]">
      {/* HERO */}
      <section className="pt-32 pb-24 border-b border-[#DDD3C7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-5">
              Our Projects
            </p>

            <h1 className="text-6xl md:text-7xl font-semibold leading-tight tracking-tight mb-8">
              Featured
              <span className="block text-[#5E564F]">Renovation Projects</span>
            </h1>

            <p className="text-[#5E564F] text-lg leading-relaxed max-w-2xl">
              Explore a collection of thoughtfully designed kitchen, bathroom
              and home renovation projects crafted with quality materials,
              expert workmanship and timeless design.
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
                A complete transformation featuring custom joinery, premium
                stone surfaces, integrated appliances and contemporary finishes
                designed for modern living.
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
              <span className="block text-[#5E564F]">Renovation Projects</span>
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

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[#213A5C]
                      font-medium
                      cursor-pointer
                      transition-all
                      duration-300
                      hover:text-[#74695E]
                      hover:gap-4
                    "
                  >
                    View Project
                    <ArrowRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="
            fixed inset-0 z-50
            bg-[#0F172A]/40
            backdrop-blur-md
            p-4 md:p-8
            overflow-y-auto
          "
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              max-w-6xl mx-auto
              bg-[#EFE7DD]
              border border-[#D8CEC2]
              rounded-[32px]
              overflow-hidden
              shadow-[0_40px_120px_rgba(0,0,0,0.18)]
            "
          >
            {/* HERO */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="
                  w-full
                  h-[500px]
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/35
                  via-black/5
                  to-transparent
                "
              />

              <button
                onClick={() => setSelectedProject(null)}
                className="
                  absolute
                  top-6
                  right-6
                  w-12
                  h-12
                  rounded-full
                  bg-white/90
                  text-[#213A5C]
                  text-2xl
                "
              >
                ×
              </button>

              <div className="absolute bottom-10 left-10 text-white">
                <p
                  className="
                      uppercase
                      tracking-[0.4em]
                      text-[11px]
                      text-white/75
                      mb-4
                    "
                >
                  {selectedProject.category}
                </p>

                <h2
                  className="
                      text-5xl
                      md:text-6xl
                      font-light
                      tracking-tight
                      mb-3
                    "
                >
                  {selectedProject.title}
                </h2>

                <p className="text-white/80">{selectedProject.location}</p>
              </div>
            </div>

            <div className="px-10 md:px-20 py-16">
              {/* OVERVIEW */}
              <div className="pt-16">
                <p
                  className="
    text-xs
    uppercase
    tracking-[0.35em]
    text-[#74695E]

    flex
    items-center
    gap-4
  "
                >
                  <span className="w-12 h-px bg-[#D8CEC2]" />
                  Project Overview
                </p>

                <p
                  className="
                      text-xl
                      leading-[1.9]
                      text-[#5E564F]
                      max-w-2xl
                    "
                >
                  {selectedProject.description}
                </p>
              </div>

              {/* DESIGN STORYBOARD */}
              <div className="border-t border-[#D8CEC2] pt-16 mt-16">
                <p
                  className="
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-[#74695E]
                        mb-10
                      "
                >
                  Design Storyboard
                </p>

                <div
                  className="
    relative
    h-[900px]
    md:h-[800px]

    [&_img]:transition-all
    [&_img]:duration-700
    [&_img]:ease-out
  "
                >
                  {/* Main Moodboard */}

                  <img
                    src="/images/japandi material moodboard.webp"
                    alt=""
                    className="
                          absolute
                          top-0
                          left-0
                          w-[55%]
                          h-[380px]
                          object-cover
                          rounded-[28px]
                          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                          border border-[#D8CEC2]
                          hover:scale-[1.03]
  hover:-translate-y-2
  hover:shadow-[0_35px_80px_rgba(0,0,0,0.15)]
                        "
                  />

                  {/* Sketch */}

                  <img
                    src="/images/japandi material sketch.webp"
                    alt=""
                    className="
                          absolute
                          top-20
                          right-0
                          w-[35%]
                          h-[260px]
                          object-cover
                          rounded-[24px]
                          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                          rotate-2
hover:rotate-0
                          border border-[#D8CEC2]
                          hover:scale-[1.03]
  hover:-translate-y-2
  hover:shadow-[0_35px_80px_rgba(0,0,0,0.15)]
                        "
                  />

                  {/* Floorplan */}

                  <img
                    src="/images/floorplan.jpg"
                    alt=""
                    className="
                          absolute
                          top-[420px]
                          left-[8%]
                          w-[30%]
                          h-[220px]
                          object-cover
                          rounded-[24px]
                          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                          -rotate-2
hover:rotate-0
                          border border-[#D8CEC2]
                          hover:scale-[1.03]
  hover:-translate-y-2
  hover:shadow-[0_35px_80px_rgba(0,0,0,0.15)]
                        "
                  />

                  {/* Render */}

                  <img
                    src="/images/japandi material 3D.webp"
                    alt=""
                    className="
                          absolute
                          top-[340px]
                          right-[10%]
                          w-[42%]
                          h-[300px]
                          object-cover
                          rounded-[28px]
                          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                          border border-[#D8CEC2]
                          hover:scale-[1.03]
  hover:-translate-y-2
  hover:shadow-[0_35px_80px_rgba(0,0,0,0.15)]
                        "
                  />

                  {/* Final Result */}
                  <img
                    src={selectedProject.image}
                    alt=""
                    className="
                          absolute
                          bottom-0
                          left-1/2
                          -translate-x-1/2
                          w-[55%]
                          h-[280px]
                          object-cover
                          rounded-[28px]
                          shadow-2xl
                          border border-[#D8CEC2]
                          hover:scale-[1.03]
  hover:-translate-y-2
  hover:shadow-[0_35px_80px_rgba(0,0,0,0.15)]
                        "
                  />
                </div>
              </div>

              {/* FEATURES */}
              <div className="border-t border-[#D8CEC2] pt-16 mt-16">
                <div className="border-t border-[#D8CEC2] pt-16 mt-16">
                  <div
                    className="
    w-12
    h-[2px]
    bg-[#213A5C]

    mb-6

    transition-all
    duration-500

    group-hover:w-24
  "
                  />

                  <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-10">
                    Client Goals
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {selectedProject.clientGoals?.map(
                      (
                        item: {
                          goal: string;
                          outcome: string;
                        },
                        index: number,
                      ) => (
                        <div
                          key={index}
                          className="
    bg-white/70
    backdrop-blur-sm

    border
    border-[#D8CEC2]

    rounded-[24px]

    p-8

    transition-all
    duration-500

    hover:-translate-y-2
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
  "
                        >
                          <h4
                            className="
                          text-xl
                          font-medium
                          text-[#213A5C]
                          mb-3
                        "
                          >
                            {item.goal}
                          </h4>
                          <div
                            className="
    text-6xl
    font-bold
    text-[#213A5C]/10
    mb-4
  "
                          >
                            0{index + 1}
                          </div>

                          <p className="text-[#5E564F] leading-relaxed">
                            {item.outcome}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="border-t border-[#D8CEC2] pt-16 mt-16">
                  <div
                    className="
    w-12
    h-[2px]
    bg-[#213A5C]

    mb-6

    transition-all
    duration-500

    group-hover:w-24
  "
                  />

                  <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-10">
                    Design Decisions
                  </p>

                  <div className="grid md:grid-cols-2 gap-10">
                    {selectedProject.designDecisions?.map(
                      (
                        item: {
                          title: string;
                          description: string;
                        },
                        index: number,
                      ) => (
                        <div
                          key={index}
                          className="
    group

    bg-[#F8F5F0]

    border
    border-[#D8CEC2]

    rounded-[24px]

    p-8

    transition-all
    duration-500

    hover:border-[#213A5C]/30
    hover:-translate-y-2
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
  "
                        >
                          <h4
                            className="
                          text-2xl
                          font-medium
                          text-[#213A5C]
                          mb-3
                        "
                          >
                            {item.title}
                          </h4>

                          <p className="text-[#5E564F] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="border-t border-[#D8CEC2] pt-16 mt-16">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-10">
                    The Result
                  </p>

                  <div className="max-w-3xl">
                    <p
                      className="
                    text-2xl
                    leading-[1.8]
                    text-[#5E564F]
                  "
                    >
                      <div
                        className="
    bg-white/60
    border
    border-[#D8CEC2]

    rounded-[32px]

    p-10

    shadow-[0_20px_60px_rgba(0,0,0,0.05)]
  "
                      >
                        <p
                          className="
      text-2xl
      leading-[1.8]
      text-[#5E564F]
    "
                        >
                          {selectedProject.result}
                        </p>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
            <span className="block">As Unique As The People Who Use It</span>
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
            Whether you're planning a complete renovation or simply exploring
            ideas, we're here to guide you through every step of the journey.
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
