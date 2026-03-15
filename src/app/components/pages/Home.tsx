import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { HeroComparison } from "./HeroComparison";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { ProjectBoard } from "./ProjectBoard";

export function Home() {

  

  const services = [
    "Kitchen Remodeling",
    "Bathroom Renovation",
    "Home Extensions",
    "Interior Design",
    "Flooring & Tiling",
    "Painting & Decoration",
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="bg-neutral-950 text-white">

{/* HERO */}
<section className="bg-neutral-950 text-white pt-24 pb-20">

  <div className="max-w-7xl mx-auto px-6 space-y-10">

    {/* Text Content */}
    <div className="text-center max-w-3xl mx-auto space-y-6">

      <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
        Luxury Renovation
        <span className="block text-neutral-400">
          Crafted With Precision
        </span>
      </h1>

      <p className="text-neutral-300 text-lg leading-relaxed">
        We design and build high-end residential renovations that blend
        architecture, craftsmanship, and modern living.
      </p>

      <div className="flex gap-4 justify-center flex-wrap">

        <Link
          to="/booking"
          className="bg-white text-black px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:scale-[1.03] transition"
        >
          Get Free Quote
          <ArrowRight size={18}/>
        </Link>

        <Link
          to="/gallery"
          className="px-8 py-4 rounded-xl border border-white/40 hover:bg-white/10 transition"
        >
          View Projects
        </Link>

      </div>

    </div>

    {/* Before After Slider */}
    <div className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01]">

      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src="/before.jpg"
            alt="Before renovation"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="/after.jpg"
            alt="After renovation"
          />
        }
      />

    </div>

    {/* Slider hint */}
    <p className="text-center text-neutral-400 text-sm">
      ← Drag the slider to reveal the transformation →
    </p>

    

  </div>

</section>


      {/* STATS */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10 text-center">

            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-10 rounded-2xl bg-neutral-800 border border-neutral-700 hover:border-neutral-500 transition"
              >
                <div className="text-4xl font-semibold mb-2">{stat.value}</div>
                <p className="text-neutral-400">{stat.label}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="bg-[url('/board-texture.jpg')] bg-cover py-32">
<ProjectBoard />
</section>

      {/* SERVICES */}
      <section className="py-28 bg-neutral-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-semibold mb-4">
              Premium Renovation Services
            </h2>

            <p className="text-neutral-400">
              From concept design to final construction, our team delivers
              exceptional renovations tailored to your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition"
              >
                <CheckCircle className="mb-4 text-white" size={24} />

                <h3 className="text-xl mb-2">{service}</h3>

                <p className="text-neutral-400">
                  High quality craftsmanship and tailored design solutions
                  delivered with architectural precision.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* FEATURE PROJECT */}
      <section className="py-28 bg-neutral-900">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400"
            alt="Luxury project"
            className="rounded-2xl shadow-2xl"
          />

          <div className="space-y-6">

            <h2 className="text-4xl font-semibold">
              Designed For Modern Living
            </h2>

            <p className="text-neutral-400">
              Our renovation philosophy blends timeless architecture with
              modern functionality. Every project is carefully designed to
              elevate the beauty and value of your home.
            </p>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-70"
            >
              Explore Our Projects
              <ArrowRight size={18}/>
            </Link>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="py-28 bg-white text-black text-center">

        <div className="max-w-3xl mx-auto px-6 space-y-6">

          <h2 className="text-4xl font-semibold">
            Start Your Renovation Journey
          </h2>

          <p className="text-neutral-600">
            Book a consultation today and discover how we can transform
            your home into a modern architectural masterpiece.
          </p>

          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl hover:scale-[1.02] transition"
          >
            Schedule Consultation
            <ArrowRight size={18}/>
          </Link>

        </div>

      </section>

    </div>
  );
}