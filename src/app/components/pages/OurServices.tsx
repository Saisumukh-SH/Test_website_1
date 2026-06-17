import { useState } from "react";
import { Link } from "react-router-dom";

export function Services() {
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);

  const journeys = [
    {
      title: "Updating A Room",
      subtitle: "Kitchen & Bathroom Renovations",
      target: "room",
      image: "/images/main1.webp",
    },
    {
      title: "Expanding My Home",
      subtitle: "Home Extensions",
      target: "extension",
      image: "/images/extension.webp",
    },
    {
      title: "Complete Transformation",
      subtitle: "Full Home Renovations",
      target: "full-home",
      image: "/images/full-home.webp",
    },
  ];

  return (
    <div className="bg-[#F8F5F0] text-[#2B2B2B]">
      {/* HERO */}
      <section className="min-h-screen flex items-center py-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs uppercase tracking-[0.35em] text-[#74695E] mb-6">
              Our Services
            </p>

            <h1 className="editorial-heading text-5xl md:text-6xl leading-[1.05] text-[#1A2B3C] mb-8">
              What Best
              <br />
              Describes Your
              <br />
              <span
                style={{
                  WebkitTextStroke: "1.5px #523724",
                  WebkitTextFillColor: "transparent",
                  display: "block",
                }}
              >
                Project?
              </span>
            </h1>

            <p className="text-[#5E564F] text-xl max-w-2xl mx-auto">
              Choose the option that best matches your renovation and we'll
              guide you toward the right solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {journeys.map((journey) => (
              <button
                key={journey.target}
                onClick={() => {
                  setSelectedJourney(journey.target);

                  document.getElementById(journey.target)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="
                  group
                  bg-white
                  border
                  border-[#DDD3C7]
                  overflow-hidden
                  text-left
                  hover:border-[#B08D6D]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={journey.image}
                    alt={journey.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                <div className="p-8">
                  <h2 className="editorial-heading text-3xl text-[#1A2B3C] mb-3">
                    {journey.title}
                  </h2>

                  <p className="text-[#5E564F] mb-6">{journey.subtitle}</p>

                  <span className="text-[#B08D6D] font-medium">Explore →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ROOM RENOVATIONS */}
      <section id="room" className="py-32 bg-white border-t border-[#DDD3C7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-4">
              Updating A Room
            </p>

            <h2 className="editorial-heading text-4xl md:text-5xl text-[#1A2B3C] mb-6">
              Kitchen &
              <br />
              Bathroom
              <br />
              Renovations
            </h2>

            <p className="text-[#5E564F] text-xl leading-relaxed">
              Whether you're upgrading the kitchen that brings everyone together
              or creating a bathroom that feels like a retreat, we handle every
              stage from planning to completion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Kitchen */}

            <div className="group border border-[#DDD3C7] bg-[#F8F5F0] overflow-hidden">
              <div className="h-[450px] overflow-hidden">
                <img
                  src="/images/main1.webp"
                  alt="Kitchen Renovation"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    "
                />
              </div>

              <div className="p-10">
                <span className="text-[#B08D6D] text-sm tracking-[0.3em]">
                  01
                </span>

                <h3 className="editorial-heading text-4xl mt-4 mb-6 text-[#1A2B3C]">
                  Kitchen Renovations
                </h3>

                <ul className="space-y-3 text-[#5E564F] mb-8">
                  <li>• Custom cabinetry</li>
                  <li>• Stone benchtops</li>
                  <li>• Splashbacks</li>
                  <li>• Lighting upgrades</li>
                  <li>• Layout redesign</li>
                </ul>

                <Link
                  to="/gallery?category=kitchen"
                  className="text-[#B08D6D] font-medium"
                >
                  View Kitchen Projects →
                </Link>
              </div>
            </div>

            {/* Bathroom */}

            <div className="group border border-[#DDD3C7] bg-[#F8F5F0] overflow-hidden">
              <div className="h-[450px] overflow-hidden">
                <img
                  src="/images/bathroom-reno.webp"
                  alt="Bathroom Renovation"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    "
                />
              </div>

              <div className="p-10">
                <span className="text-[#B08D6D] text-sm tracking-[0.3em]">
                  02
                </span>

                <h3 className="editorial-heading text-4xl mt-4 mb-6 text-[#1A2B3C]">
                  Bathroom Renovations
                </h3>

                <ul className="space-y-3 text-[#5E564F] mb-8">
                  <li>• Waterproofing</li>
                  <li>• Custom vanities</li>
                  <li>• Premium tiling</li>
                  <li>• Modern fixtures</li>
                  <li>• Storage solutions</li>
                </ul>

                <Link
                  to="/gallery?category=bathroom"
                  className="text-[#B08D6D] font-medium"
                >
                  View Bathroom Projects →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTENSIONS */}
      <section id="extension" className="bg-[#F5F1EB] py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* IMAGE */}

            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="/images/extension.webp"
                  alt="Home Extension Melbourne"
                  className="
                    w-full
                    h-[750px]
                    object-cover
                    transition-transform
                    duration-1000
                    hover:scale-105
                    "
                />
              </div>

              <div
                className="
                    absolute
                    -bottom-10
                    -right-10
                    bg-white
                    border
                    border-[#DDD3C7]
                    p-8
                    hidden
                    lg:block
                "
              >
                <div
                  className="text-[#B08D6D] editorial-heading text-7xl mt-4 mb-4 ">
                  60+
                </div>

                <p className="text-[#5E564F]">Extensions Completed</p>
              </div>
            </div>

            {/* CONTENT */}

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#74695E] mb-6">
                Expanding My Home
              </p>

              <h2 className="editorial-heading text-5xl md:text-6xl text-[#1A2B3C] mb-8">
                More Space.
                <br />
                Same Address.
              </h2>

              <p className="text-[#5E564F] text-xl leading-relaxed mb-10">
                Need more room without moving? Our home extensions are designed
                to seamlessly blend with your existing home while creating the
                additional space your family needs.
              </p>

              <div className="space-y-5 mb-12">
                <div className="flex items-start gap-4">
                  <span className="text-[#B08D6D]">✦</span>
                  <p>Rear extensions</p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[#B08D6D]">✦</span>
                  <p>Open-plan living areas</p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[#B08D6D]">✦</span>
                  <p>Indoor-outdoor integration</p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[#B08D6D]">✦</span>
                  <p>Additional bedrooms</p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-[#B08D6D]">✦</span>
                  <p>Structural alterations</p>
                </div>
              </div>

              <Link
                to="/gallery?category=extensions"
                className="
                    inline-flex
                    items-center
                    gap-3
                    bg-[#213A5C]
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    hover:opacity-90
                    transition
                "
              >
                View Extension Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FULL HOME RENOVATIONS */}
      <section id="full-home" className="py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <p className="text-xs uppercase tracking-[0.35em] text-[#74695E] mb-6">
              Complete Transformation
            </p>

            <h2 className="editorial-heading text-5xl md:text-6xl text-[#1A2B3C] mb-8">
              Reimagine
              <br />
              Your Entire Home.
            </h2>

            <p className="text-[#5E564F] text-xl leading-relaxed">
              When a single room isn't enough, we coordinate complete home
              renovations from concept and planning through construction and
              final handover.
            </p>
          </div>

          {/* JOURNEY */}

          <div className="grid lg:grid-cols-3 gap-10">
            {/* BEFORE */}

            <div className="group">
              <div className="overflow-hidden mb-8">
                <img
                  src="/images/before-home.webp"
                  alt="Before renovation"
                  className="
                    w-full
                    h-[450px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    "
                />
              </div>

              <span className="text-[#B08D6D] tracking-[0.3em] text-sm">
                STAGE 01
              </span>

              <h3 className="editorial-heading text-4xl mt-4 mb-4 text-[#1A2B3C]">
                Existing Home
              </h3>

              <p className="text-[#5E564F] leading-relaxed">
                We evaluate your current layout, identify opportunities, and
                create a strategy that aligns with your lifestyle and goals.
              </p>
            </div>

            {/* DURING */}

            <div className="group">
              <div className="overflow-hidden mb-8">
                <img
                  src="/images/construction.webp"
                  alt="Renovation construction"
                  className="
                    w-full
                    h-[450px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    "
                />
              </div>

              <span className="text-[#B08D6D] tracking-[0.3em] text-sm">
                STAGE 02
              </span>

              <h3 className="editorial-heading text-4xl mt-4 mb-4 text-[#1A2B3C]">
                Transformation
              </h3>

              <p className="text-[#5E564F] leading-relaxed">
                Structural works, extensions, kitchens, bathrooms, flooring and
                finishes are coordinated as one seamless project.
              </p>
            </div>

            {/* AFTER */}

            <div className="group">
              <div className="overflow-hidden mb-8">
                <img
                  src="/images/full-home.webp"
                  alt="Completed renovation"
                  className="
                    w-full
                    h-[450px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    "
                />
              </div>

              <span className="text-[#B08D6D] tracking-[0.3em] text-sm">
                STAGE 03
              </span>

              <h3 className="editorial-heading text-4xl mt-4 mb-4 text-[#1A2B3C]">
                New Beginning
              </h3>

              <p className="text-[#5E564F] leading-relaxed">
                The finished result is a home that feels entirely new while
                remaining uniquely yours.
              </p>
            </div>
          </div>

          {/* CTA */}

          <div className="text-center mt-24">
            <Link
              to="/gallery?category=full-renovation"
              className="
                inline-flex
                items-center
                gap-3
                bg-[#213A5C]
                text-white
                px-10
                py-5
                rounded-xl
                hover:opacity-90
                transition
                "
            >
              View Full Renovation Projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
