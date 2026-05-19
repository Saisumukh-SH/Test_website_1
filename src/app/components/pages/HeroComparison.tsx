import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroComparison() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Comparison Slider */}
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src="/before.jpg"
            alt="Before renovation"
            className="object-cover"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="/after.jpg"
            alt="After renovation"
            className="object-cover"
          />
        }
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <div className="max-w-xl space-y-6">

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              From Outdated
              <span className="block text-neutral-300">
                To Architectural Luxury
              </span>
            </h1>

            <p className="text-lg text-neutral-300">
              Drag the slider to experience the transformation.
              We design and build high-end renovations across Melbourne.
            </p>

            <div className="flex gap-4">

              <Link
                to="/journal"
                className="bg-white text-black px-8 py-4 rounded-xl flex items-center gap-2 hover:scale-[1.02] transition"
              >
                Get Free Quote
                <ArrowRight size={18}/>
              </Link>

              <Link
                to="/gallery"
                className="border border-white/40 px-8 py-4 rounded-xl backdrop-blur-md hover:bg-white/10 transition"
              >
                View Projects
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* Before / After labels */}
      <div className="absolute bottom-10 left-10 text-white text-sm tracking-wider">
        BEFORE
      </div>

      <div className="absolute bottom-10 right-10 text-white text-sm tracking-wider">
        AFTER
      </div>

    </section>
  );
}