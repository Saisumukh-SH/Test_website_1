import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Blog() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Renovation Tips",
    "Interiors",
    "Materials",
    "Architecture",
  ];

  const articles = [
    {
      id: 1,
      title: "Luxury Kitchen Trends In Melbourne",
      category: "Interiors",
      excerpt:
        "Discover the latest contemporary kitchen trends shaping modern Australian homes in 2026.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600",
      date: "May 2026",
    },

    {
      id: 2,
      title: "Natural Stone vs Porcelain",
      category: "Materials",
      excerpt:
        "A refined comparison of luxury surfaces for contemporary bathroom and kitchen renovations.",
      image:
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=1600",
      date: "April 2026",
    },

    {
      id: 3,
      title: "Contemporary Australian Minimalism",
      category: "Architecture",
      excerpt:
        "How warm minimalism and architectural restraint continue shaping premium residential interiors.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600",
      date: "March 2026",
    },

    {
      id: 4,
      title: "Planning A Full Home Renovation",
      category: "Renovation Tips",
      excerpt:
        "Everything homeowners should consider before beginning a large-scale renovation project.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600",
      date: "February 2026",
    },

    {
      id: 5,
      title: "Designing Open Living Spaces",
      category: "Interiors",
      excerpt:
        "A guide to creating calm, connected and light-filled living environments.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600",
      date: "January 2026",
    },

    {
      id: 6,
      title: "Material Palettes For Timeless Homes",
      category: "Materials",
      excerpt:
        "Warm oak, limestone and natural textures continue defining modern Australian luxury.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600",
      date: "December 2025",
    },
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="bg-[#F8F5F0] text-[#2B2B2B] overflow-hidden">

      {/* HERO */}
      <section className="pt-32 pb-24 border-b border-[#DDD3C7]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-5">
              Blog & Inspiration
            </p>

            <h1 className="text-6xl md:text-7xl font-semibold leading-tight tracking-tight mb-8">
              Design Insights
              <span className="block text-[#5E564F]">
                & Contemporary Living
              </span>
            </h1>

            <p className="text-[#5E564F] text-lg leading-relaxed max-w-2xl">
              Explore renovation inspiration, architectural thinking and
              contemporary Australian interior design through our curated blog.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <div className="
              relative overflow-hidden rounded-[32px]
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            ">

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600"
                alt="Featured Article"
                className="
                  w-full h-[650px] object-cover
                  hover:scale-[1.03]
                  transition duration-700
                "
              />

            </div>

            {/* CONTENT */}
            <div className="space-y-8">

              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-4">
                  Featured Article
                </p>

                <h2 className="text-5xl font-semibold leading-tight mb-6">
                  Luxury Kitchen Trends
                  In Melbourne
                </h2>

                <p className="text-[#5E564F] text-lg leading-relaxed">
                  Explore the evolving materials, finishes and layouts shaping
                  premium Australian kitchens and contemporary renovation design.
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                {[
                  "Kitchen Design",
                  "Luxury Interiors",
                  "Minimalism",
                  "Architecture",
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

              <button
                className="
                  inline-flex items-center gap-3
                  bg-[#213A5C]
                  text-white
                  px-8 py-4 rounded-xl
                  hover:opacity-90
                  transition
                "
              >
                Read Article
                <ArrowRight size={18} />
              </button>

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
                      : "border-[#D8CEC2] bg-white text-[#5E564F] hover:border-[#B08D6D] hover:text-[#213A5C]"
                  }
                `}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* ARTICLE GRID */}
      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group"
              >

                <div className="
                  bg-white
                  border border-[#DDD3C7]
                  rounded-[28px]
                  overflow-hidden
                  shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                ">

                  {/* IMAGE */}
                  <div className="overflow-hidden">

                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="
                        w-full h-[320px] object-cover
                        group-hover:scale-[1.04]
                        transition duration-700
                      "
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-8">

                    <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-4">
                      {article.category}
                    </p>

                    <h3 className="text-2xl font-semibold leading-snug mb-4">
                      {article.title}
                    </h3>

                    <p className="text-[#5E564F] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">

                      <span className="text-sm text-[#74695E]">
                        {article.date}
                      </span>

                      <button
                        className="
                          inline-flex items-center gap-2
                          text-[#B08D6D]
                          hover:gap-3
                          transition-all duration-300
                        "
                      >
                        Read More
                        <ArrowRight size={16} />
                      </button>

                    </div>

                  </div>

                </div>

              </article>
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
            Thoughtful Design.
            <span className="block text-[#5E564F]">
              Timeless Living.
            </span>
          </h2>

          <p className="text-[#5E564F] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Discover how contemporary Australian renovation design can transform
            your lifestyle and living experience.
          </p>

          <button
            className="
              inline-flex items-center gap-3
              bg-[#213A5C]
              text-white
              px-8 py-4 rounded-xl
              hover:opacity-90
              transition
            "
          >
            Contact Us
            <ArrowRight size={18} />
          </button>

        </div>

      </section>

    </div>
  );
}