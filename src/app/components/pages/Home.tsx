import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import { ProjectBoard } from "./ProjectBoard";
import { fadeUp, staggerContainer } from "../lib/motion";

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
    <div className="bg-[#F8F5F0] text-[#2B2B2B] overflow-hidden">

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="pt-32 pb-28"
      >

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >

            <motion.p
              variants={fadeUp}
              className="eyebrow mb-6"
            >
              Luxury Residential Renovations
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="
                editorial-heading
                text-6xl md:text-8xl
                leading-[0.95]
                mb-8
              "
            >
              Crafted Spaces
              <span className="block text-[#5E564F]">
                Inspired By Contemporary Design
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="
                body-muted
                text-lg md:text-xl
                max-w-3xl mx-auto
                mb-12
              "
            >
              We design and build high-end residential renovations
              blending architectural precision, timeless materials
              and modern Australian living.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex justify-center gap-5 flex-wrap"
            >

              <Link
                to="/contact"
                className="btn-primary"
              >
                Start Your Project
              </Link>

              <Link
                to="/gallery"
                className="btn-secondary"
              >
                View Our Projects
              </Link>

            </motion.div>

          </motion.div>

        </div>

      </motion.section>

      {/* STATS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          section-padding
          border-y border-[#DDD3C7]
          bg-[#EFE7DD]
        "
      >

        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >

            {stats.map((stat, index) => (
              <motion.div
                variants={fadeUp}
                key={index}
                className="
                  card-soft
                  p-12 text-center
                "
              >

                <div className="text-5xl font-semibold mb-3">
                  {stat.value}
                </div>

                <p className="body-muted uppercase tracking-wide text-sm">
                  {stat.label}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </motion.section>

      {/* PROJECT BOARD */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          section-padding
          border-b border-[#DDD3C7]
        "
      >

        <ProjectBoard />

      </motion.section>

      {/* SERVICES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-20">

            <p className="eyebrow mb-4">
              Services
            </p>

            <h2 className="
              editorial-heading
              text-5xl leading-tight mb-6
            ">
              Tailored Renovation
              <span className="block text-[#5E564F]">
                Solutions
              </span>
            </h2>

            <p className="body-muted text-lg">
              From concept development to final construction,
              our team delivers refined renovations designed
              around contemporary Australian lifestyles.
            </p>

          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {services.map((service, index) => (
              <motion.div
                variants={fadeUp}
                key={index}
                className="card-primary p-10"
              >

                <CheckCircle
                  className="text-[#B08D6D] mb-6"
                  size={26}
                />

                <h3 className="text-2xl font-medium mb-4">
                  {service}
                </h3>

                <p className="body-muted">
                  Premium craftsmanship and carefully curated
                  material selections tailored to your home.
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </motion.section>

      {/* DESIGN INSPIRATION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          section-padding
          bg-[#F5F1EB]
          border-y border-[#DDD3C7]
        "
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-24">

            <p className="eyebrow mb-4">
              Inspired By Australian Design
            </p>

            <h2 className="
              editorial-heading
              text-5xl leading-tight mb-6
            ">
              Renovations Influenced By
              <span className="block text-[#5E564F]">
                Contemporary Interiors
              </span>
            </h2>

            <p className="body-muted text-lg">
              Inspired by leading Australian architecture and
              interior publications including est living and
              The Local Project.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              className="
                relative h-[720px]
                overflow-hidden
                rounded-[32px]
                border border-[#DDD3C7]
                bg-white
                shadow-premium
              "
            >

              {inspirationSlides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.projectImage}
                  alt={slide.title}
                  className={`
                    absolute inset-0
                    w-full h-full object-cover
                    transition-all duration-[1800ms] ease-out
                    ${
                      activeSlide === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-[1.05]"
                    }
                  `}
                />
              ))}

              <div className="
                absolute inset-0
                bg-gradient-to-t
                from-[#2B2B2B]/80
                via-[#2B2B2B]/20
                to-transparent
              " />

              <div className="absolute bottom-0 left-0 p-10 max-w-xl z-10">

                <div className="
                  text-8xl font-semibold
                  text-[#F5F1EB]/40 mb-6
                ">
                  0{activeSlide + 1}
                </div>

                <p className="
                  text-xs uppercase
                  tracking-[0.25em]
                  text-[#F5F1EB]
                  mb-4
                ">
                  Featured Renovation
                </p>

                <h3 className="
                  text-4xl font-semibold
                  text-white mb-5
                ">
                  {inspirationSlides[activeSlide].title}
                </h3>

                <p className="
                  text-[#F5F1EB]
                  leading-relaxed mb-6
                ">
                  {inspirationSlides[activeSlide].description}
                </p>

                <div className="flex flex-wrap gap-3">

                  {inspirationSlides[activeSlide].tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        text-xs uppercase tracking-wide
                        border border-white/20
                        bg-white/10
                        backdrop-blur-sm
                        px-4 py-2 rounded-full
                        text-[#F5F1EB]
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={fadeUp}
              className="space-y-8"
            >

              <div>

                <p className="eyebrow mb-4">
                  Design Reference
                </p>

                <h3 className="
                  editorial-heading
                  text-4xl mb-5
                ">
                  Editorial Australian Inspiration
                </h3>

                <p className="body-muted text-lg">
                  A curated collection of contemporary interiors
                  inspired by luxury Australian architecture.
                </p>

              </div>

              <div className="
                relative h-[380px]
                overflow-hidden
                rounded-[32px]
                border border-[#DDD3C7]
                bg-white
                shadow-soft
              ">

                {inspirationSlides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.inspirationImage}
                    alt={slide.title}
                    className={`
                      absolute inset-0
                      w-full h-full object-cover
                      transition-all duration-[1800ms] ease-out
                      ${
                        activeSlide === index
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-[1.03]"
                      }
                    `}
                  />
                ))}

              </div>

              <div className="card-soft p-8">

                <p className="eyebrow mb-3">
                  Inspiration Source
                </p>

                <p className="
                  text-2xl
                  leading-relaxed mb-8
                ">
                  {inspirationSlides[activeSlide].source}
                </p>

                <div className="flex gap-2">

                  {inspirationSlides.map((_, index) => (
                    <div
                      key={index}
                      className={`
                        h-[3px] rounded-full transition-all duration-500
                        ${
                          activeSlide === index
                            ? "w-16 bg-[#B08D6D]"
                            : "w-8 bg-[#D8CEC2]"
                        }
                      `}
                    />
                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding text-center"
      >

        <div className="max-w-4xl mx-auto px-6">

          <p className="eyebrow mb-4">
            Begin Your Renovation Journey
          </p>

          <h2 className="
            editorial-heading
            text-5xl leading-tight mb-8
          ">
            Designed With Precision.
            <span className="block text-[#5E564F]">
              Built For Modern Living.
            </span>
          </h2>

          <p className="
            body-muted text-lg
            max-w-2xl mx-auto mb-10
          ">
            Book a consultation and discover how we can
            transform your home into a timeless
            architectural space.
          </p>

          <Link
            to="/contact"
            className="btn-primary"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

        </div>

      </motion.section>

    </div>
  );
}