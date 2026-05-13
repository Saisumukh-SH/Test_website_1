import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
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

  const track = [
    { src: "/accreditations/badge1.png", alt: "Accreditation 1" },
    { src: "/accreditations/badge2.png", alt: "Accreditation 2" },
    { src: "/accreditations/badge3.png", alt: "Accreditation 3" },
    { src: "/accreditations/badge4.png", alt: "Accreditation 4" },
  ];

  const inspirationSlides = [
    {
      projectImage: "/projects/project1.jpg",
      inspirationImage: "/inspirations/inspiration1.jpg",
      title: "Toorak Residence",
      source: "Inspired by est living & The Local Project",
      description:
        "Warm minimalist interiors combining travertine stone, oak timber and ambient architectural lighting.",
      tags: ["Travertine", "Warm Oak", "Soft Minimalism"],
    },

    {
      projectImage: "/projects/project2.jpg",
      inspirationImage: "/inspirations/inspiration2.jpg",
      title: "Brighton Coastal Home",
      source: "Inspired by Australian coastal contemporary interiors",
      description:
        "A calm open-plan renovation focused on natural textures, soft daylight and seamless indoor-outdoor living.",
      tags: ["Limestone", "Natural Light", "Coastal Luxury"],
    },

    {
      projectImage: "/projects/project3.jpg",
      inspirationImage: "/inspirations/inspiration3.jpg",
      title: "Modern Hawthorn Living",
      source: "Inspired by modern Melbourne architectural homes",
      description:
        "A contemporary renovation blending minimalist detailing with warm layered materials and refined spatial flow.",
      tags: ["Minimalism", "Architectural", "Contemporary"],
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % inspirationSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F5F1EB] text-[#2B2B2B] overflow-hidden">

      {/* HERO */}
      <section className="pt-28 pb-24 bg-[#F5F1EB]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto space-y-8">

            <p className="text-xs uppercase tracking-[0.3em] text-[#74695E]">
              Luxury Residential Renovations
            </p>

            <h1 className="text-6xl md:text-7xl font-semibold leading-tight tracking-tight">
              Crafted Spaces
              <span className="block text-[#5E564F]">
                Inspired By Contemporary Design
              </span>
            </h1>

            <p className="text-[#5E564F] text-lg leading-relaxed max-w-2xl mx-auto">
              We design and build high-end residential renovations blending
              architectural precision, timeless materials and modern Australian living.
            </p>

            <div className="flex justify-center gap-5 flex-wrap pt-4">

              <Link
                to="/contact"
                className="bg-[#B08D6D] text-black px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
              >
                Start Your Project
              </Link>

              <Link
                to="/projects"
                className="border border-[#D8CEC2] px-8 py-4 rounded-xl hover:border-[#B08D6D] hover:text-[#B08D6D] transition"
              >
                View Our Projects
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-24 bg-[#EFE7DD] border-y border-[#DDD3C7]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] border border-[#D8CEC2] rounded-3xl p-12 text-center hover:border-[#B08D6D] transition-all duration-500"
              >
                <div className="text-5xl font-semibold mb-3 text-[#2B2B2B]">
                  {stat.value}
                </div>

                <p className="text-[#5E564F] uppercase tracking-wide text-sm">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROJECT BOARD */}
      <section className="bg-[url('/board-texture.jpg')] bg-cover py-32 border-b border-[#DDD3C7]">
        <ProjectBoard />
      </section>

      {/* SERVICES */}
      <section className="py-32 bg-[#F5F1EB]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-20">

            <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-4">
              Services
            </p>

            <h2 className="text-5xl font-semibold leading-tight mb-6">
              Tailored Renovation
              <span className="block text-[#5E564F]">
                Solutions
              </span>
            </h2>

            <p className="text-[#5E564F] text-lg leading-relaxed">
              From concept development to final construction, our team delivers
              refined renovations designed around contemporary Australian lifestyles.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#EFE7DD] border border-[#D8CEC2] rounded-3xl p-10 hover:border-[#B08D6D] hover:-translate-y-1 transition-all duration-500"
              >

                <CheckCircle className="text-[#B08D6D] mb-6" size={26} />

                <h3 className="text-2xl font-medium mb-4">
                  {service}
                </h3>

                <p className="text-[#5E564F] leading-relaxed">
                  Premium craftsmanship and carefully curated material selections tailored to your home.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* DESIGN INSPIRATIONS */}
      <section className="py-32 bg-[#F8F5F0] border-y border-[#DDD3C7] overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-24">

            <p className="text-xs tracking-[0.3em] uppercase text-[#74695E] mb-4">
              Inspired By Australian Design
            </p>

            <h2 className="text-5xl font-semibold leading-tight mb-6">
              Renovations Influenced By
              <span className="block text-[#5E564F]">
                Contemporary Interiors
              </span>
            </h2>

            <p className="text-[#5E564F] text-lg leading-relaxed">
              Inspired by leading Australian architecture and interior publications
              including est living and The Local Project.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div className="relative h-[720px] overflow-hidden rounded-[32px] border border-[#D8CEC2] bg-[#FFFFFF]">

              {inspirationSlides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.projectImage}
                  alt={slide.title}
                  className={`
                    absolute inset-0
                    w-full h-full object-cover
                    transition-all duration-[1800ms] ease-out
                    ${activeSlide === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[1.05]"
                    }
                  `}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/80 via-[#2B2B2B]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-10 max-w-xl z-10">

                <div className="text-8xl font-semibold text-[#F5F1EB]/40 mb-6">
                  0{activeSlide + 1}
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-[#B08D6D] mb-4">
                  Featured Renovation
                </p>

                <h3 className="text-4xl font-semibold mb-5">
                  {inspirationSlides[activeSlide].title}
                </h3>

                <p className="text-[#F5F1EB] leading-relaxed mb-6">
                  {inspirationSlides[activeSlide].description}
                </p>

                <div className="flex flex-wrap gap-3">

                  {inspirationSlides[activeSlide].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-[#F5F1EB]"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="space-y-8">

              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-4">
                  Design Reference
                </p>

                <h3 className="text-4xl font-semibold mb-5">
                  Editorial Australian Inspiration
                </h3>

                <p className="text-[#5E564F] leading-relaxed text-lg">
                  A curated collection of contemporary interiors inspired by luxury Australian architecture.
                </p>

              </div>

              <div className="relative h-[380px] overflow-hidden rounded-[32px] border border-[#D8CEC2] bg-[#FFFFFF]">

                {inspirationSlides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.inspirationImage}
                    alt={slide.title}
                    className={`
                      absolute inset-0
                      w-full h-full object-cover
                      transition-all duration-[1800ms] ease-out
                      ${activeSlide === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-[1.03]"
                      }
                    `}
                  />
                ))}

              </div>

              <div className="bg-[#EFE7DD] border border-[#D8CEC2] rounded-[32px] p-8 backdrop-blur-sm">

                <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-3">
                  Inspiration Source
                </p>

                <p className="text-2xl text-[#2B2B2B] leading-relaxed mb-8">
                  {inspirationSlides[activeSlide].source}
                </p>

                <div className="flex gap-2">

                  {inspirationSlides.map((_, index) => (
                    <div
                      key={index}
                      className={`
                        h-[3px] rounded-full transition-all duration-500
                        ${activeSlide === index
                          ? "w-16 bg-[#B08D6D]"
                          : "w-8 bg-[#D8CEC2]"
                        }
                      `}
                    />
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 bg-[#F5F1EB] text-center">

        <div className="max-w-4xl mx-auto px-6">

          <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-4">
            Begin Your Renovation Journey
          </p>

          <h2 className="text-5xl font-semibold leading-tight mb-8">
            Designed With Precision.
            <span className="block text-[#5E564F]">
              Built For Modern Living.
            </span>
          </h2>

          <p className="text-[#5E564F] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Book a consultation and discover how we can transform your home into a timeless architectural space.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#B08D6D] text-black px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

      {/* ACCREDITATION BANNER */}
      <section className="py-12 bg-[#EFE7DD] border-t border-[#D8CEC2] overflow-hidden">

        <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-[#74695E] mb-8">
          Recognised & Accredited
        </p>

        <div className="relative w-full overflow-hidden accreditation-track-wrapper">

          <div
            className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #EFE7DD, transparent)",
            }}
          />

          <div
            className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #EFE7DD, transparent)",
            }}
          />

          <div className="accreditation-track">

            {[...track, ...track].map((badge, i) => (
              <div
                key={i}
                className="
                  flex-shrink-0
                  flex flex-col items-center justify-center gap-3
                  bg-[#FFFFFF]
                  border border-[#D8CEC2]
                  rounded-2xl
                  px-8 py-6
                  hover:border-[#B08D6D]
                  transition-colors duration-300
                  mx-6
                "
                style={{ minWidth: "160px" }}
              >

                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />

                <p className="text-[11px] text-[#74695E] text-center leading-snug max-w-[130px]">
                  {badge.alt}
                </p>

              </div>
            ))}

          </div>

        </div>

        <style>{`
          @keyframes accreditation-scroll {
            from {
              transform: translate3d(0, 0, 0);
            }

            to {
              transform: translate3d(-50%, 0, 0);
            }
          }

          .accreditation-track {
            display: flex;
            width: max-content;
            animation: accreditation-scroll 30s linear infinite;
            will-change: transform;
          }

          .accreditation-track-wrapper:hover .accreditation-track {
            animation-play-state: paused;
          }
        `}</style>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#F5F1EB] border-t border-[#DDD3C7]">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-4 gap-16">

            <div className="lg:col-span-2 space-y-6">

              <div>

                <h2 className="text-3xl font-semibold tracking-tight text-[#2B2B2B]">
                  RENOV
                </h2>

                <p className="text-[#5E564F] mt-5 leading-relaxed max-w-md">
                  Luxury residential renovations crafted with architectural precision,
                  timeless materials and contemporary Australian design.
                </p>

              </div>

              <div className="flex gap-4 pt-4">

                {['IG', 'FB', 'BE'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-11 h-11 rounded-full border border-[#D8CEC2]
                               flex items-center justify-center
                               hover:border-[#B08D6D]
                               hover:bg-[#EFE7DD]
                               transition-all duration-300"
                  >
                    <span className="text-sm text-[#2B2B2B]">{social}</span>
                  </a>
                ))}

              </div>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-6">
                Navigation
              </p>

              <div className="space-y-4">

                {['Home', 'Our Projects', 'Journal', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-[#D4D4D4] hover:text-[#B08D6D] transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}

              </div>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-6">
                Contact
              </p>

              <div className="space-y-5 text-[#5E564F]">

                <div>
                  <p className="text-[#2B2B2B] mb-1">Email</p>
                  <p>hello@renov.com.au</p>
                </div>

                <div>
                  <p className="text-[#2B2B2B] mb-1">Phone</p>
                  <p>+61 4 1234 5678</p>
                </div>

                <div>
                  <p className="text-[#2B2B2B] mb-1">Location</p>
                  <p>Melbourne, Victoria</p>
                </div>

              </div>

            </div>

          </div>

          <div className="border-t border-[#DDD3C7] mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-[#9A8F84]">
              © 2026 RENOV. All rights reserved.
            </p>

            <p className="text-sm text-[#9A8F84]">
              Crafted with precision & contemporary design.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}
