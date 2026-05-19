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
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600",
    },

    {
      id: 2,
      title: "Brighton Coastal Home",
      category: "Bathroom",
      location: "Brighton, Victoria",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600",
    },

    {
      id: 3,
      title: "Hawthorn Interior",
      category: "Living",
      location: "Hawthorn, Victoria",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600",
    },

    {
      id: 4,
      title: "Modern Family Extension",
      category: "Full Renovation",
      location: "Kew, Victoria",
      image:
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=1600",
    },

    {
      id: 5,
      title: "Minimalist Kitchen Studio",
      category: "Kitchen",
      location: "South Yarra, Victoria",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600",
    },

    {
      id: 6,
      title: "Architectural Living Space",
      category: "Living",
      location: "Camberwell, Victoria",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600",
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
              Contemporary Renovations
              <span className="block text-[#5E564F]">
                Designed For Modern Living
              </span>
            </h1>

            <p className="text-[#5E564F] text-lg leading-relaxed max-w-2xl">
              Explore a curated portfolio of luxury renovations inspired by
              contemporary Australian interiors, architectural detail and
              timeless material palettes.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURED PROJECT */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600"
                alt="Featured Project"
                className="w-full h-[650px] object-cover hover:scale-[1.03] transition duration-700"
              />

            </div>

            {/* CONTENT */}
            <div className="space-y-8">

              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-4">
                  Featured Project
                </p>

                <h2 className="text-5xl font-semibold leading-tight mb-6">
                  Toorak Residence
                </h2>

                <p className="text-[#5E564F] text-lg leading-relaxed">
                  Inspired by warm Australian minimalism, this renovation
                  combines travertine stone, oak timber joinery and ambient
                  architectural lighting to create a timeless contemporary home.
                </p>

              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3">

                {[
                  "Travertine",
                  "Warm Oak",
                  "Architectural",
                  "Contemporary",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-4 py-2 rounded-full
                      border border-[#D8CEC2]
                      bg-white
                      text-sm text-[#5E564F]
                    "
                  >
                    {tag}
                  </span>
                ))}

              </div>

              <Link
                to="/contact"
                className="
                  inline-flex items-center gap-3
                  bg-[#B08D6D]
                  text-white
                  px-8 py-4 rounded-xl
                  hover:opacity-90 transition
                "
              >
                Start Similar Project
                <ArrowRight size={18} />
              </Link>

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
                      ? "bg-[#B08D6D] text-white border-[#B08D6D]"
                      : "border-[#D8CEC2] bg-white text-[#5E564F] hover:border-[#B08D6D] hover:text-[#B08D6D]"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group"
              >

                <div
                  className="
                    relative overflow-hidden rounded-[28px]
                    border border-[#DDD3C7]
                    bg-white
                    shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                  "
                >

                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full h-[420px] object-cover
                      transition duration-700
                      group-hover:scale-[1.04]
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#2B2B2B]/80
                      via-[#2B2B2B]/10
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition duration-500
                      flex items-end
                    "
                  >

                    <div className="p-8">

                      <p className="text-xs uppercase tracking-[0.25em] text-[#F5F1EB]/70 mb-3">
                        {project.category}
                      </p>

                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {project.title}
                      </h3>

                      <p className="text-[#F5F1EB]">
                        {project.location}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 bg-[#EFE7DD] border-t border-[#DDD3C7]">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-5">
            Begin Your Renovation Journey
          </p>

          <h2 className="text-5xl font-semibold leading-tight mb-8">
            Designed Around
            <span className="block text-[#5E564F]">
              Your Lifestyle
            </span>
          </h2>

          <p className="text-[#5E564F] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            From concept to completion, we create thoughtfully designed
            spaces tailored to contemporary Australian living.
          </p>

          <Link
            to="/contact"
            className="
              inline-flex items-center gap-3
              bg-[#B08D6D]
              text-white
              px-8 py-4
              rounded-xl
              hover:opacity-90
              transition
            "
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}