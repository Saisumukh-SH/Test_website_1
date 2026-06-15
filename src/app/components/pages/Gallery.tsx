import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
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
      image: "/images/japandi material.webp",

      description:
        "A thoughtfully curated Japandi kitchen that combines the warmth of Scandinavian design with the simplicity and craftsmanship of Japanese interiors. The project focused on creating a calm, functional and timeless space through natural materials, clean lines and considered detailing.",

      storyboard: {
        moodboard: "/images/projects/japandi_material/moodboard.webp",
        sketch: "/images/projects/japandi_material/sketch.webp",
        floorplan: "/images/projects/japandi_material/floorplan.webp",
        render: "/images/projects/japandi_material/render.webp",
      },

      clientGoals: [
        {
          goal: "Create a Calm Living Environment",
          outcome:
            "The design embraces simplicity, natural textures and a restrained colour palette to promote a sense of tranquillity.",
        },
        {
          goal: "Maximise Functionality",
          outcome:
            "Storage, workflow and usability were carefully considered to support everyday living.",
        },
        {
          goal: "Introduce Natural Materials",
          outcome:
            "Timber, stone and organic finishes create warmth and authenticity throughout the space.",
        },
        {
          goal: "Achieve Timeless Design",
          outcome:
            "A minimalist approach ensures the kitchen remains elegant and relevant for years to come.",
        },
      ],

      designDecisions: [
        {
          title: "Natural Oak Joinery",
          description:
            "Selected to introduce warmth, texture and a strong connection to nature.",
        },
        {
          title: "Integrated Appliances",
          description:
            "Concealed appliances maintain visual simplicity and support the minimalist aesthetic.",
        },
        {
          title: "Stone Benchtops",
          description:
            "Durable natural stone adds subtle visual interest while complementing the material palette.",
        },
        {
          title: "Soft Layered Lighting",
          description:
            "Carefully positioned lighting enhances functionality while creating a warm atmosphere.",
        },
      ],

      result:
        "The completed kitchen successfully balances functionality, warmth and simplicity. Through thoughtful planning and carefully selected materials, the space now embodies the principles of Japandi design while providing a highly practical environment for everyday living.",
    },

    {
      id: 2,
      title: "Brighton Coastal Home",
      category: "Bathroom",
      location: "Brighton, Victoria",
      image: "/images/project2.webp",

      description:
        "Inspired by Brighton's coastal character, this bathroom renovation combines natural textures, soft tones and premium finishes to create a calm retreat that feels both luxurious and timeless.",

      storyboard: {
        moodboard: "/images/projects/brighton/moodboard.webp",
        sketch: "/images/projects/brighton/sketch.webp",
        floorplan: "/images/projects/brighton/floorplan.webp",
        render: "/images/projects/brighton/render.webp",
      },

      clientGoals: [
        {
          goal: "Create a Spa Experience",
          outcome:
            "The space was designed to provide a calming, resort-style atmosphere for everyday use.",
        },
        {
          goal: "Maximise Storage",
          outcome:
            "Custom vanity cabinetry and concealed storage solutions reduced visual clutter.",
        },
        {
          goal: "Improve Functionality",
          outcome:
            "The new layout improved circulation and made daily routines more efficient.",
        },
        {
          goal: "Introduce Natural Elements",
          outcome:
            "Organic textures and coastal-inspired materials created warmth and character.",
        },
      ],

      designDecisions: [
        {
          title: "Natural Stone Finishes",
          description:
            "Selected to add texture, durability and a timeless coastal aesthetic.",
        },
        {
          title: "Floating Timber Vanity",
          description:
            "Creates visual openness while providing generous storage.",
        },
        {
          title: "Frameless Shower Screen",
          description:
            "Maintains clean sightlines and enhances the sense of space.",
        },
        {
          title: "Layered Lighting",
          description:
            "A combination of task and ambient lighting creates both functionality and atmosphere.",
        },
      ],

      result:
        "The completed renovation transformed an outdated bathroom into a sophisticated coastal sanctuary that balances luxury, practicality and timeless design.",
    },

    {
      id: 3,
      title: "Hawthorn Interior",
      category: "Living",
      location: "Hawthorn, Victoria",
      image: "/images/project3.webp",

      description:
        "A refined living space transformation designed to bring warmth, sophistication and functionality into the heart of the home. The design balances contemporary elegance with everyday comfort through carefully curated materials and bespoke detailing.",

      storyboard: {
        moodboard: "/images/projects/hawthorn/moodboard.webp",
        sketch: "/images/projects/hawthorn/sketch.webp",
        floorplan: "/images/projects/hawthorn/floorplan.webp",
        render: "/images/projects/hawthorn/render.webp",
      },

      clientGoals: [
        {
          goal: "Create a More Inviting Space",
          outcome:
            "The layout was reconfigured to improve comfort and encourage social interaction.",
        },
        {
          goal: "Increase Natural Light",
          outcome:
            "Lighter finishes and strategic furniture placement enhanced brightness throughout the room.",
        },
        {
          goal: "Improve Functionality",
          outcome:
            "Custom storage and a more considered floor plan improved daily usability.",
        },
        {
          goal: "Achieve a Timeless Look",
          outcome:
            "A restrained palette and premium materials ensure the design remains relevant for years to come.",
        },
      ],

      designDecisions: [
        {
          title: "Custom Feature Joinery",
          description:
            "Designed to provide practical storage while creating a striking architectural focal point.",
        },
        {
          title: "Layered Material Palette",
          description:
            "Natural timber, stone and soft textiles introduce warmth and depth.",
        },
        {
          title: "Open Living Arrangement",
          description:
            "Furniture layouts were carefully planned to improve flow and flexibility.",
        },
        {
          title: "Architectural Lighting",
          description:
            "A combination of ambient and feature lighting enhances mood and highlights key design elements.",
        },
      ],

      result:
        "The completed living space feels sophisticated, welcoming and effortlessly functional, creating an environment that supports both relaxation and entertaining.",
    },

    {
      id: 4,
      title: "Modern Family Extension",
      category: "Full Renovation",
      location: "Kew, Victoria",
      image: "/images/project4.webp",

      description:
        "A thoughtfully designed home extension created to accommodate a growing family while enhancing the connection between indoor and outdoor living. The project focused on increasing space, functionality and natural light without compromising the home's architectural character.",

      storyboard: {
        moodboard: "/images/projects/kew/moodboard.webp",
        sketch: "/images/projects/kew/sketch.webp",
        floorplan: "/images/projects/kew/floorplan.webp",
        render: "/images/projects/kew/render.webp",
      },

      clientGoals: [
        {
          goal: "Create Additional Living Space",
          outcome:
            "The extension introduced generous open-plan areas tailored to modern family life.",
        },
        {
          goal: "Improve Indoor–Outdoor Connection",
          outcome:
            "Large openings and carefully planned sightlines seamlessly connected the home to the backyard.",
        },
        {
          goal: "Increase Natural Light",
          outcome:
            "Skylights, glazing and spatial planning transformed previously dark areas into bright living spaces.",
        },
        {
          goal: "Future-Proof the Home",
          outcome:
            "Flexible spaces were designed to adapt to the family's changing needs over time.",
        },
      ],

      designDecisions: [
        {
          title: "Open-Plan Living",
          description:
            "The layout was designed to improve family interaction while creating a sense of openness.",
        },
        {
          title: "Architectural Glazing",
          description:
            "Large windows and sliding doors maximise daylight and strengthen the relationship with the outdoors.",
        },
        {
          title: "Material Continuity",
          description:
            "Consistent finishes create a seamless transition between the original home and the extension.",
        },
        {
          title: "Flexible Family Spaces",
          description:
            "Rooms were designed to support multiple functions as family requirements evolve.",
        },
      ],

      result:
        "The completed extension transformed the home into a bright, spacious and highly functional environment that supports modern family living while respecting the character of the original residence.",
    },

    {
      id: 5,
      title: "Minimalist Kitchen Studio",
      category: "Kitchen",
      location: "South Yarra, Victoria",
      image: "/images/kitchen2.webp",

      description:
        "A sophisticated kitchen renovation centred around simplicity, functionality and timeless design. Clean lines, integrated storage and a restrained material palette create a space that feels calm, refined and effortlessly elegant.",

      storyboard: {
        moodboard: "/images/projects/south-yarra/moodboard.webp",
        sketch: "/images/projects/south-yarra/sketch.webp",
        floorplan: "/images/projects/south-yarra/floorplan.webp",
        render: "/images/projects/south-yarra/render.webp",
      },

      clientGoals: [
        {
          goal: "Achieve a Minimal Aesthetic",
          outcome:
            "Every design decision focused on reducing visual clutter while maintaining practicality.",
        },
        {
          goal: "Maximise Storage",
          outcome:
            "Integrated cabinetry and hidden storage solutions created a highly organised kitchen.",
        },
        {
          goal: "Improve Workflow",
          outcome:
            "The layout was optimised to support efficient cooking and entertaining.",
        },
        {
          goal: "Create a Timeless Space",
          outcome:
            "A neutral palette and quality materials ensure long-term appeal.",
        },
      ],

      designDecisions: [
        {
          title: "Handleless Cabinetry",
          description:
            "Provides a clean, uninterrupted appearance that reinforces the minimalist aesthetic.",
        },
        {
          title: "Integrated Appliances",
          description:
            "Appliances were concealed within joinery to maintain visual consistency.",
        },
        {
          title: "Monolithic Island",
          description:
            "A sculptural island became the centrepiece of the space while improving functionality.",
        },
        {
          title: "Soft Neutral Palette",
          description:
            "Subtle tones and textures create a calm and welcoming environment.",
        },
      ],

      result:
        "The completed kitchen delivers a refined balance of beauty and practicality, creating a timeless space that supports both everyday living and entertaining.",
    },

    {
      id: 6,
      title: "Architectural Living Space",
      category: "Living",
      location: "Camberwell, Victoria",
      image: "/images/project6.webp",

      description:
        "A contemporary living space designed around architectural simplicity, natural materials and purposeful functionality. The project focused on creating a refined environment where form and function work seamlessly together, resulting in a space that feels both sophisticated and inviting.",

      storyboard: {
        moodboard: "/images/projects/camberwell/moodboard.webp",
        sketch: "/images/projects/camberwell/sketch.webp",
        floorplan: "/images/projects/camberwell/floorplan.webp",
        render: "/images/projects/camberwell/render.webp",
      },

      clientGoals: [
        {
          goal: "Create a Statement Living Area",
          outcome:
            "The design introduced strong architectural features that became focal points within the home.",
        },
        {
          goal: "Improve Spatial Flow",
          outcome:
            "Furniture placement and circulation paths were carefully planned to enhance movement and functionality.",
        },
        {
          goal: "Bring Warmth to Modern Design",
          outcome:
            "Natural materials and layered textures softened the contemporary aesthetic.",
        },
        {
          goal: "Enhance Entertaining",
          outcome:
            "The layout encourages connection and interaction while maintaining comfort and flexibility.",
        },
      ],

      designDecisions: [
        {
          title: "Architectural Feature Wall",
          description:
            "A bespoke feature element anchors the room and introduces visual depth.",
        },
        {
          title: "Natural Material Palette",
          description:
            "Timber, stone and textured fabrics create warmth and timeless appeal.",
        },
        {
          title: "Layered Lighting Strategy",
          description:
            "Multiple lighting sources provide flexibility while enhancing atmosphere.",
        },
        {
          title: "Open Yet Defined Zones",
          description:
            "The layout balances openness with clearly defined functional areas.",
        },
      ],

      result:
        "The completed living space delivers a harmonious balance of architecture, comfort and functionality. Through thoughtful planning and refined material selections, the home now feels more connected, inviting and tailored to modern living.",
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
                  group
                  absolute
                  top-6
                  right-6

                  w-12
                  h-12

                  rounded-full
                  bg-white/90
                  backdrop-blur-sm

                  text-[#213A5C]

                  cursor-pointer

                  transition-all
                  duration-300
                  ease-out

                  hover:bg-white
                  hover:scale-110
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  hover:border hover:border-[#213A5C]/20
                "
              >
                <X
                  size={18}
                  className="
                    mx-auto

                    transition-all
                    duration-300

                    group-hover:rotate-90
                  "
                />
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
                    src={selectedProject.storyboard.moodboard}
                    alt="Moodboard"
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
                    src={selectedProject.storyboard.sketch}
                    alt="Sketch"
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
                    src={selectedProject.storyboard.floorplan}
                    alt="Floorplan"
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
                    src={selectedProject.storyboard.render}
                    alt="Render"
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
                    alt="Final Result"
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

                {/* CONTACT CTA */}
                <div className="border-t border-[#D8CEC2] pt-16 mt-16">
                  <div
                    className="
      bg-white
      border border-[#D8CEC2]
      rounded-[32px]
      p-10 md:p-14

      text-center

      shadow-[0_20px_60px_rgba(0,0,0,0.05)]
    "
                  >
                    <p
                      className="
        text-[11px]
        uppercase
        tracking-[0.3em]
        text-[#74695E]
        mb-4
      "
                    >
                      Start Your Project
                    </p>

                    <h3
                      className="
        text-3xl md:text-4xl
        font-light
        text-[#213A5C]
        mb-6
      "
                    >
                      Inspired by this transformation?
                    </h3>

                    <p
                      className="
        max-w-2xl
        mx-auto
        text-[#5E564F]
        leading-relaxed
        mb-8
      "
                    >
                      Whether you're planning a kitchen renovation, bathroom
                      upgrade, extension or complete home transformation, we'd
                      love to discuss your vision and help bring it to life.
                    </p>

                    <Link
                      to="/contact"
                      className="
        inline-flex
        items-center
        gap-3

        bg-[#213A5C]
        text-white

        px-8
        py-4

        rounded-full

        transition-all
        duration-300

        hover:bg-[#2B4B73]
        hover:gap-5
        hover:shadow-[0_15px_40px_rgba(33,58,92,0.25)]
      "
                    >
                      Book a Consultation
                      <ArrowRight
                        size={18}
                        className="
          transition-transform
          duration-300
        "
                      />
                    </Link>
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
