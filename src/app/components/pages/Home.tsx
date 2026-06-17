import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "../lib/motion";

export function Home() {

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
      inspirationImage: "/inspirations/whywearedifferent1.webp",
      title: "Toorak Residence",
      source: "Inspired by est living & The Local Project",
      description:
        "Warm minimalist interiors combining travertine stone, oak timber and ambient architectural lighting.",
      tags: ["Travertine", "Warm Oak", "Soft Minimalism"],
    },

    {
      projectImage: "/projects/project2.jpg",
      inspirationImage: "/inspirations/whywearedifferent2.webp",
      title: "Brighton Coastal Home",
      source: "Inspired by Australian coastal contemporary interiors",
      description:
        "A calm open-plan renovation focused on natural textures, soft daylight and seamless indoor-outdoor living.",
      tags: ["Limestone", "Natural Light", "Coastal Luxury"],
    },

    {
      projectImage: "/projects/project3.jpg",
      inspirationImage: "/inspirations/whywearedifferent3.webp",
      title: "Modern Hawthorn Living",
      source: "Inspired by modern Melbourne architectural homes",
      description:
        "A contemporary renovation blending minimalist detailing with warm layered materials and refined spatial flow.",
      tags: ["Minimalism", "Architectural", "Contemporary"],
    },
  ];

  const journeySteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We get to know you, your lifestyle, your space, and what matters most.",
    image: "/images/01 discover.webp",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "We assess your existing space and identify opportunities to improve functionality.",
    image: "/images/02 explore.webp",
  },
  {
    number: "03",
    title: "Curate",
    description:
      "Through moodboards, material palettes, and design inspiration we develop a clear direction.",
    image: "/images/03 curate.webp",
  },
  {
    number: "04",
    title: "Design",
    description:
      "We create bespoke layouts and space planning solutions tailored to your home.",
    image: "/images/04 design.webp",
  },
  {
    number: "05",
    title: "Visualise",
    description:
      "Experience your future kitchen through realistic 3D renders before construction.",
    image: "/images/05 visualise.webp",
  },
  {
    number: "06",
    title: "Plan",
    description:
      "Detailed drawings, specifications, costing, and project planning are prepared.",
    image: "/images/06 plan.webp",
  },
  {
    number: "07",
    title: "Create",
    description:
      "Our team coordinates trades, manages construction, and oversees quality.",
    image: "/images/07 create.webp",
  },
  {
    number: "08",
    title: "Enjoy",
    description:
      "The final reveal. Your new kitchen becomes the heart of your home.",
    image: "/images/08 enjoy.webp",
  },
];

  const whyChooseUs = [
  {
    title: "Designed Around You",
    description:
      "Every kitchen begins with thoughtful planning and spatial design. We create layouts that maximise functionality, improve flow, and reflect the way you live."
  },
  {
    title: "A Seamless Renovation Experience",
    description:
      "From the first consultation to final handover, we manage every stage of your renovation with clear communication and complete peace of mind."
  },
  {
    title: "Materials That Tell Your Story",
    description:
      "We carefully select materials, finishes, stone, lighting, and joinery that complement your home's character and lifestyle."
  },
  {
    title: "See It Before We Build It",
    description:
      "Visualise your new kitchen before construction begins through realistic 3D renders and detailed design presentations."
  }
];

const companyDifference = [
  {
    title: "Thoughtfully Designed",
    description:
      "Every kitchen is tailored to your lifestyle, combining intelligent space planning, timeless aesthetics, and practical functionality."
  },
  {
    title: "Efficient & Stress-Free",
    description:
      "Our streamlined process and trusted network of trades ensure minimal disruption to your home and daily routine."
  },
  {
    title: "Seamlessly Managed",
    description:
      "From concept design and material selections to construction and final handover, we manage every detail."
  },
  {
    title: "Built To Endure",
    description:
      "We partner with skilled craftsmen and premium suppliers to deliver kitchens designed to stand the test of time."
  }
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
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">

      {/* IMAGE — 3/4 width, right side */}
      <div className="absolute inset-y-0 right-0 w-3/4">
        <img
          src="/images/main1.webp"
          alt="Kitchen Renovation"
          className="w-full h-full object-cover"
        />
        {/* fade on left edge so text blends in */}
        <div
          className="absolute inset-y-0 left-0 w-64"
          style={{
            background: "linear-gradient(to left, transparent, #F5F0EB)",
          }}
        />
      </div>

        {/* CONTENT — right side, overlaps image */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full flex justify-start">

          <div className="w-full max-w-lg">

            {/* EYEBROW */}
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-[#213A5C]" />
              <p className="text-xs uppercase tracking-[0.35em] text-[#213A5C] font-medium">
                Kitchen Renovation Specialists
              </p>
            </div>

            {/* HEADING */}
            <h1 className="editorial-heading text-5xl md:text-6xl leading-[1.05] text-[#1A2B3C] mb-6">
              Designing Kitchens
              <br />
              Around The
              <br />
              <span
                style={{
                  WebkitTextStroke: "1.5px #523724",
                  WebkitTextFillColor: "transparent",
                  display: "block",
                }}
              >
                Way You Live
              </span>
            </h1>

            {/* DIVIDER */}
            <div className="w-16 h-px bg-[#C4A882] mb-6" />

            {/* BODY */}
            <p className="text-[#5E564F] text-lg leading-relaxed mb-10">
              We believe every great home begins with a great kitchen.
              That's why we combine innovative design, quality materials,
              and construction expertise to create spaces that bring
              families together and make everyday living better.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center
                  bg-[#213A5C] text-white font-semibold
                  px-8 py-4 rounded-xl
                  hover:opacity-90 transition
                "
              >
                Get A Cost Estimate
              </Link>

              <Link
                to="/gallery"
                className="
                  inline-flex items-center justify-center
                  border border-[#213A5C] text-[#213A5C]
                  px-8 py-4 rounded-xl
                  hover:bg-[#213A5C] hover:text-white transition
                "
              >
                View Projects
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section
        className="
          py-24
          border-t border-[#D8CEC2]
          border-b border-[#D8CEC2]
          bg-[#F8F5F0]
        "
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

            <div>

              <p
                className="
                  text-xs uppercase
                  tracking-[0.3em]
                  text-[#74695E]
                  mb-4
                "
              >
                Why Choose Us?
              </p>

              <h2
                className="
                  editorial-heading
                  text-4xl md:text-5xl
                  leading-tight
                "
              >
                The Space That Brings
                <span className="block text-[#5E564F]">
                  Everyone Together
                </span>
              </h2>

            </div>

            <Link
              to="/contact"
              className="
                inline-flex items-center
                bg-[#213A5C]
                text-white
                px-8 py-4
                rounded-xl
                hover:opacity-90
                transition
              "
            >
              Make an Appointment
            </Link>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {whyChooseUs.map((item) => (

              <div
                key={item.title}
                className="
                  bg-[#E9EEF2]
                  p-8
                  min-h-[320px]
                  border border-[#D8CEC2]
                "
              >

                <h3
                  className="
                    text-xl
                    font-semibold
                    mb-5
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-[#5E564F]
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* THE JOURNEY HOME */}
      <section
        className="
          py-28
          bg-[#F5F1EB]
          border-y border-[#D8CEC2]
        "
      >

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}

          <div className="max-w-4xl mb-20">

            <p
              className="
                text-xs uppercase
                tracking-[0.3em]
                text-[#74695E]
                mb-4
              "
            >
              The Journey Home
            </p>

            <h2
              className="
                editorial-heading
                text-4xl
                md:text-5xl
                leading-tight
                mb-6
              "
            >
              From Vision To
              <span className="block text-[#5E564F]">
                Reality
              </span>
            </h2>

            <p
              className="
                text-[#5E564F]
                text-lg
                leading-relaxed
                max-w-3xl
              "
            >
              A great kitchen is more than a place to cook.
              It is where life happens. Our process ensures
              every detail is thoughtfully planned and executed.
            </p>

          </div>


      {/* PROCESS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {journeySteps.map((step) => (
          <div
            key={step.number}
            className="
              bg-white
              border border-[#D8CEC2]
              overflow-hidden
              group
            "
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
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

            {/* Content */}
            <div className="p-8 relative overflow-hidden">

              {/* Watermark Number */}
              <div
                className="
                  absolute
                  -top-2
                  right-4
                  text-[90px]
                  font-bold
                  text-[#213A5C]/25
                  leading-none
                  pointer-events-none
                  select-none
                "
              >
                {step.number}
              </div>

              <h3
                className="
                  text-2xl
                  font-semibold
                  mb-4
                  relative
                  z-10
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  text-[#5E564F]
                  leading-relaxed
                  relative
                  z-10
                "
              >
                {step.description}
              </p>

            </div>


          </div>
        ))}
      </div>

        </div>

      </section>

      {/* COMPANY DIFFERENCE */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-16">

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-[#74695E]
                  mb-4
                "
              >
                Why We're Different
              </p>

              <h2
                className="
                  editorial-heading
                  text-4xl
                  md:text-5xl
                  leading-tight
                "
              >
                The Company Name
                <span className="block text-[#5E564F]">
                  Difference
                </span>
              </h2>

            </div>

            <Link
              to="/contact"
              className="
                inline-flex items-center
                bg-[#213A5C]
                text-white
                px-8 py-4
                rounded-xl
                hover:opacity-90
                transition
              "
            >
              Get A Cost Estimate
            </Link>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {companyDifference.map((item, index) => (

              <div
                key={item.title}
                className="
                  border border-[#D8CEC2]
                  bg-white
                  overflow-hidden
                "
              >

                {/* IMAGE */}

                <img
                  src={
                    index === 0
                      ? "/images/inspirations/whywearedifferent1.webp"
                      : index === 1
                      ? "/images/inspirations/whywearedifferent2.webp"
                      : index === 2
                      ? "/images/inspirations/whywearedifferent3.webp"
                      : "/images/inspirations/whywearedifferent4.webp"
                  }
                  alt={item.title}
                  className="
                    w-full
                    h-[260px]
                    object-cover
                  "
                />

                {/* CONTENT */}

                <div className="p-8">

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      mb-4
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[#5E564F]
                      leading-relaxed
                    "
                  >
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ABOUT COMPANY */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* CONTENT */}

            <div>

              <p
                className="
                  text-xs uppercase
                  tracking-[0.3em]
                  text-[#74695E]
                  mb-4
                "
              >
                About Us
              </p>

              <h2
                className="
                  editorial-heading
                  text-4xl md:text-5xl
                  leading-tight
                  mb-8
                "
              >
                Thoughtful Design.
                <span className="block text-[#5E564F]">
                  Exceptional Craftsmanship.
                </span>
              </h2>

              <p className="text-[#5E564F] leading-relaxed mb-6">
                At Company Name, we combine architectural
                expertise, thoughtful design, and meticulous
                project management to create kitchens that are
                as functional as they are beautiful.
              </p>

              <p className="text-[#5E564F] leading-relaxed mb-6">
                From curated material selections and detailed
                design development to construction and final
                handover, every stage is carefully managed by
                our experienced team.
              </p>

              <p className="text-[#5E564F] leading-relaxed">
                Working alongside trusted suppliers and skilled
                craftsmen, we deliver kitchens tailored to your
                lifestyle, budget, and vision.
              </p>

            </div>

            {/* IMAGE */}

            <div>

              <img
                src="/images/inspirations/whywearedifferent3.webp"
                alt="About Company"
                className="
                  w-full
                  h-[700px]
                  object-cover
                  rounded-[24px]
                  border border-[#D8CEC2]
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section
        className="
          py-28
          bg-[#F5F1EB]
          border-y border-[#D8CEC2]
        "
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p
              className="
                text-xs uppercase
                tracking-[0.3em]
                text-[#74695E]
                mb-4
              "
            >
              Testimonials
            </p>

            <h2
              className="
                editorial-heading
                text-4xl md:text-5xl
              "
            >
              Stories From The
              <span className="block text-[#5E564F]">
                Heart Of The Home
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="
                  bg-white
                  border border-[#D8CEC2]
                  p-8
                "
              >

                <div className="text-[#B08D6D] mb-4">
                  ★★★★★
                </div>

                <p
                  className="
                    text-[#5E564F]
                    leading-relaxed
                    mb-6
                  "
                >
                  The entire renovation process was seamless.
                  The attention to detail and craftsmanship
                  exceeded our expectations.
                </p>

                <h4 className="font-semibold">
                  Melbourne Client
                </h4>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p
              className="
                text-xs uppercase
                tracking-[0.3em]
                text-[#74695E]
                mb-4
              "
            >
              Featured Projects
            </p>

            <h2
              className="
                editorial-heading
                text-4xl md:text-5xl
              "
            >
              Latest Kitchen
              <span className="block text-[#5E564F]">
                Projects
              </span>
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h3
                className="
                  text-3xl
                  font-semibold
                  mb-6
                "
              >
                Kitchen Renovation
              </h3>

              <p className="mb-4">
                <strong>Location:</strong> Melbourne
              </p>

              <p className="mb-4">
                <strong>Duration:</strong> 8 Weeks
              </p>

              <p className="text-[#5E564F] leading-relaxed">
                Complete kitchen transformation featuring
                premium joinery, stone surfaces, integrated
                appliances and contemporary finishes.
              </p>

            </div>

            <img
              src="/images/kitchen2.webp"
              alt="Project"
              className="
                w-full
                h-[600px]
                object-cover
                rounded-[24px]
              "
            />

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
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
            Whether you're planning a complete kitchen renovation
            or simply exploring ideas, we're here to guide you
            through every step of the journey.
          </p>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              bg-white
              text-[#213A5C]
              px-10
              py-5
              rounded-xl
              font-medium
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Get A Cost Estimate
          </Link>

        </div>

      </section>

    </div>
  );
}