import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Eye, MapPin } from "lucide-react";

//     Types                                                                     
interface FaqItem {
  q: string;
  a: string;
}

const timeline = [
  {
    year: "2021",
    title: "Company Founded",
    text: "Started with a vision to provide transparent renovations across Melbourne."
  },
  {
    year: "2022",
    title: "First Major Projects",
    text: "Completed our first kitchen and bathroom renovations."
  },
  {
    year: "2024",
    title: "Expanded Services",
    text: "Added whole-home renovation services."
  },
  {
    year: "2026",
    title: "Growing Across Melbourne",
    text: "Serving homeowners throughout greater Melbourne."
  }
];

const values = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Every renovation we undertake in Melbourne is backed by full licensing and insurance, so you're protected from the first day of work to the very last.",
  },
  {
    icon: Users,
    title: "Direct Access to the Team",
    description:
      "As a newer, growing company you deal directly with the people completing your renovation — not layers of account managers or project coordinators.",
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    description:
      "You'll know what a project costs and how long it will take before any work begins. No hidden costs, no buried fine print — ever.",
  },
  {
    icon: MapPin,
    title: "Local Melbourne Knowledge",
    description:
      "We understand Melbourne's building requirements, council considerations, and the character of its homes — from heritage terraces to outer-suburb builds.",
  },
];

const services = [
  {
    number: "01",
    title: "Kitchen Renovations",
    description:
      "We manage layout planning, custom cabinetry, benchtops, splashbacks, and plumbing coordination — delivering kitchens that hold up to daily life as well as they photograph.",
    image: "/images/kitchen2.webp",
    link: "/gallery?category=kitchen",
  },
  {
    number: "02",
    title: "Bathroom Renovations",
    description:
      "Bathrooms demand precision. Waterproofing, tiling, plumbing, and ventilation all have to be done right the first time. We handle the full scope, from demolition through to fixtures and fittings.",
    image: "/images/bathroom-reno.webp",
    link: "/gallery?category=bathroom",
  },
  {
    number: "03",
    title: "Extensions & Additions",
    description:
      "For projects that go beyond a single room, we coordinate full home renovations across Melbourne — managing structural work, flooring, and finishes as one connected project.",
    image: "/images/whole-home-reno.webp",
    link: "/gallery?category=extensions",
  },
    {
    number: "04",
    title: "Whole-Home Renovations",
    description:
      "For projects that go beyond a single room, we coordinate full home renovations across Melbourne — managing structural work, flooring, and finishes as one connected project.",
    image: "/images/whole-home-reno.webp",
    link: "/gallery?category=whole-home",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We visit your Melbourne property, discuss your goals, and assess the full scope of work — at no cost and with no obligation.",
    image: "/images/01 discover.webp",
  },
  {
    number: "02",
    title: "Design & Quote",
    description:
      "You receive a clear plan and an itemised quote before committing to anything. Every line explained, no surprises.",
    image: "/images/02 explore.webp",
  },
  {
    number: "03",
    title: "Scheduled Renovation",
    description:
      "Work begins on an agreed timeline, with regular updates at every stage so you're never left wondering.",
    image: "/images/03 curate.webp",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "We review the finished space together to make sure every detail meets your expectations before handover.",
    image: "/images/04 design.webp",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Are you licensed and insured for renovations in Melbourne?",
    a: "Yes. We are fully licensed and insured to carry out kitchen, bathroom, and home renovation work throughout Melbourne and surrounding suburbs.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes, we provide a free initial consultation and itemised quote for all renovation projects, whether it's a single bathroom or a full home renovation.",
  },
  {
    q: "How long does a typical kitchen or bathroom renovation take?",
    a: "Timelines vary by project scope, but we provide a clear schedule upfront during your consultation so you know exactly what to expect before work begins.",
  },
  {
    q: "What suburbs in Melbourne do you service?",
    a: "We service homeowners across greater Melbourne including Richmond, Brunswick, St Kilda, Glen Waverley, Fitzroy, South Yarra, Hawthorn, Northcote, and surrounding suburbs.",
  },
];

//     Sub-components                                                            

/** Animated counter that counts up when in view */
function AnimatedStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const target = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !target) return;

    let start = 0;

    const duration = 2200;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [visible, target]);

  const suffix = value.replace(/[0-9]/g, "");

  return (
    <div
      ref={ref}
      className="text-center transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(20px)",
      }}
    >
      <p className="text-[#D7B78C] text-6xl font-light mb-3">
        {count}
        {suffix}
      </p>

      <p className="text-white/80">
        {label}
      </p>
    </div>
  );
}
/** Scroll-reveal wrapper */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/** Accordion FAQ item */
function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#DDD3C7]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 text-left group"
      >
        <span className="text-[#2B2B2B] font-medium text-lg group-hover:text-[#B08D6D] transition-colors duration-300">
          {item.q}
        </span>
        <span
          className="ml-6 flex-shrink-0 w-8 h-8 flex items-center justify-center border border-[#DDD3C7] rounded-full text-[#B08D6D] transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "200px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <p className="text-[#5E564F] leading-relaxed pb-6">{item.a}</p>
      </div>
    </div>
  );
}

//     Page                                                                      
export function About() {
  const [activeService, setActiveService] = useState(0);
  const [activeYear, setActiveYear] = useState(0);

  return (
    <div className="bg-[#F8F5F0] text-[#2B2B2B] overflow-hidden">
{/* Hero and intro section */}
<section className="relative bg-[#F5F0EB] pt-32 pb-24 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Eyebrow */}

    <div className="text-center mb-8">

      <p className="text-xs uppercase tracking-[0.35em] text-[#213A5C] font-medium">
        About Us
      </p>

    </div>

    {/* Heading */}

    <div className="max-w-5xl mx-auto text-center mb-16">

      <h1 className="editorial-heading text-5xl md:text-7xl leading-[1.05] text-[#1A2B3C]">

        Built on Trust.
        <br />

        Focused on You.
        <br />

        <span
          style={{
            WebkitTextStroke: "1.5px #523724",
            WebkitTextFillColor: "transparent",
            display: "block",
          }}
        >
          Renovating Melbourne Homes.
        </span>

      </h1>

      <div className="w-20 h-px bg-[#C4A882] mx-auto my-10" />

      <p className="max-w-3xl mx-auto text-[#5E564F] text-xl leading-relaxed">
        We're a Melbourne-based renovation team passionate about
        transforming houses into homes through craftsmanship,
        transparency and exceptional attention to detail.
      </p>

    </div>

    {/* Image */}

    <div className="relative mb-20">

      <img
        src="/images/main6.webp"
        alt="Luxury renovation project"
        className="
          w-full
          h-[650px]
          object-cover
          rounded-2xl
        "
      />

    </div>
  </div>
</section>

<section className="bg-[#213A5C] text-white">
  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-3">

      <div className="py-12 border-r border-white/15">
        <AnimatedStat
          value="10+"
          label="Years Experience"
        />
      </div>

      <div className="py-12 border-r border-white/15">
        <AnimatedStat
          value="250+"
          label="Projects Completed"
        />
      </div>

      <div className="py-12">
        <AnimatedStat
          value="5★"
          label="Client Rating"
        />
      </div>

    </div>

  </div>
</section>

      {/*  MISSION                                                          */}
      <section className="py-28 border-b border-[#D8CEC2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-4">
                Our Mission
              </p>
              <h2 className="editorial-heading text-4xl md:text-5xl leading-tight mb-8">
                High-Quality Renovation,
                <span className="block text-[#5E564F]">Without the Guesswork.</span>
              </h2>
              <p className="text-[#5E564F] leading-relaxed mb-6">
                We're a newer name in Melbourne's renovation industry, and we treat
                that as motivation rather than a limitation. Without years of routine
                to coast on, we rely on something more reliable: close attention to
                detail, transparent communication, and a refusal to cut corners on any
                job — large or small.
              </p>
              <p className="text-[#5E564F] leading-relaxed mb-10">
                Our mission is to make high-quality renovation accessible to homeowners
                across Melbourne — without the inflated pricing, vague timelines, or
                poor communication that too often define home renovation projects.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[#B08D6D] font-medium hover:gap-4 transition-all duration-300"
              >
                Start your renovation <ArrowRight size={16} />
              </Link>
            </Reveal>

            {/* Image */}
            <Reveal delay={150}>
              <div className="image-hover rounded-[24px] overflow-hidden border border-[#D8CEC2]">
                <img
                  src="/images/inspirations/whywearedifferent3.webp"
                  alt="Licensed renovation team on site in Melbourne"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

        {/*    OUR JOURNEY                                               */}
        <section className="py-28 bg-white border-b border-[#D8CEC2]">
        <div className="max-w-7xl mx-auto px-6">

            <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-4">
                Our Story
            </p>

            <h2 className="editorial-heading text-4xl md:text-5xl leading-tight mb-16">
                Building Trust,
                <span className="block text-[#5E564F]">
                One Project At A Time.
                </span>
            </h2>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-16">

            <div className="space-y-4">
                {timeline.map((item, index) => (
                <button
                    key={item.year}
                    onClick={() => setActiveYear(index)}
                    className={`w-full text-left p-6 border transition-all duration-300
                    ${
                        activeYear === index
                        ? "bg-[#213A5C] text-white border-[#213A5C]"
                        : "bg-white border-[#DDD3C7]"
                    }`}
                >
                    <p className="text-sm mb-2">{item.year}</p>

                    <h3 className="text-xl font-semibold">
                    {item.title}
                    </h3>
                </button>
                ))}
            </div>

            <div className="bg-[#F5F1EB] p-10 border border-[#DDD3C7]">
                <div className="text-6xl font-bold text-[#B08D6D] mb-6">
                {timeline[activeYear].year}
                </div>

                <h3 className="text-3xl mb-4">
                {timeline[activeYear].title}
                </h3>

                <p className="text-[#5E564F] leading-relaxed">
                {timeline[activeYear].text}
                </p>
            </div>

            </div>

        </div>
        </section>

      {/*    INTERACTIVE SERVICES                                             */}
      <section className="py-28 bg-[#F5F1EB] border-b border-[#D8CEC2]">
        <div className="max-w-7xl mx-auto px-6">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-4">What We Do</p>
            <h2 className="editorial-heading text-4xl md:text-5xl leading-tight mb-16">
              Four Core Areas.
              <span className="block text-[#5E564F]">One Coordinated Team.</span>
            </h2>
          </Reveal>

          {/* Tab selector + panel */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: tab list */}
            <div className="flex flex-col gap-2">
              {services.map((s, i) => (
                <button
                  key={s.number}
                  onClick={() => setActiveService(i)}
                  className={`
                    flex items-start gap-6 p-8 text-left border transition-all duration-400
                    ${activeService === i
                      ? "bg-white border-[#B08D6D] shadow-premium"
                      : "bg-transparent border-[#DDD3C7] hover:border-[#B08D6D] hover:bg-white/60"}
                  `}
                  style={{ borderRadius: "16px" }}
                >
                  <span
                    className={`text-3xl font-bold leading-none transition-colors duration-300 ${
                      activeService === i ? "text-[#B08D6D]" : "text-[#DDD3C7]"
                    }`}
                  >
                    {s.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#2B2B2B]">{s.title}</h3>
                    <p
                      className="text-[#5E564F] leading-relaxed"
                      style={{
                        maxHeight: activeService === i ? "120px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.4s ease",
                      }}
                    >
                      {s.description}
                    </p>
                    {activeService === i && (
                      <Link
                        to={s.link}
                        className="inline-flex items-center gap-2 text-[#B08D6D] text-sm font-medium mt-4 hover:gap-4 transition-all duration-300"
                      >
                        Learn more <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Right: image panel */}
            <div className="sticky top-24">
              <div className="image-hover rounded-[24px] overflow-hidden border border-[#D8CEC2] aspect-[4/5]">
                <img
                  key={activeService}
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{ animation: "fadeIn 0.5s ease" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*    VALUES / WHY CHOOSE US                                            */}
      <section className="py-24 border-b border-[#D8CEC2] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-4">Why Choose Us</p>
              <h2 className="editorial-heading text-4xl md:text-5xl leading-tight">
                What Sets Us Apart
                <span className="block text-[#5E564F]">From the Rest</span>
              </h2>
            </Reveal>
            <Link
              to="/contact"
              className="inline-flex items-center bg-[#213A5C] text-white px-8 py-4 rounded-xl hover:opacity-90 transition"
            >
              Get A Cost Estimate
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div
                    className="bg-[#E9EEF2] p-8 min-h-[320px] border border-[#D8CEC2] group hover:bg-white hover:border-[#B08D6D] transition-all duration-400 flex flex-col gap-5"
                    style={{ borderRadius: "0px" }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-[#DDD3C7] rounded-full bg-white group-hover:bg-[#B08D6D] group-hover:border-[#B08D6D] transition-all duration-400">
                      <Icon size={16} className="text-[#B08D6D] group-hover:text-white transition-colors duration-400" />
                    </div>
                    <h3 className="text-xl font-semibold">{v.title}</h3>
                    <p className="text-[#5E564F] leading-relaxed">{v.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/*    OUR PROCESS                                                      */}
      <section className="py-28 bg-[#F5F1EB] border-y border-[#D8CEC2]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mb-20">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-4">Our Process</p>
              <h2 className="editorial-heading text-4xl md:text-5xl leading-tight mb-6">
                How Every Renovation
                <span className="block text-[#5E564F]">Unfolds.</span>
              </h2>
              <p className="text-[#5E564F] text-lg leading-relaxed max-w-3xl">
                A clear process is the foundation of a great renovation. Here's exactly
                what working with us looks like, from first contact to final walkthrough.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <div className="bg-white border border-[#D8CEC2] overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 relative overflow-hidden">
                    <div className="absolute -top-2 right-4 text-[90px] font-bold text-[#213A5C]/25 leading-none pointer-events-none select-none">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 relative z-10">{step.title}</h3>
                    <p className="text-[#5E564F] leading-relaxed relative z-10">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/*    FAQ                                                              */}
      <section className="py-28 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-4">FAQ</p>
              <h2 className="editorial-heading text-4xl md:text-5xl leading-tight mb-6">
                Common Questions,
                <span className="block text-[#5E564F]">Straight Answers.</span>
              </h2>
              <p className="text-[#5E564F] leading-relaxed mb-8">
                Can't find what you're looking for? Reach out directly — we're always happy to talk through your project.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#213A5C] text-white px-8 py-4 rounded-xl hover:opacity-90 transition"
              >
                Ask Us Anything
              </Link>
            </Reveal>

            <Reveal delay={100}>
              <div>
                {faqs.map((f) => (
                  <FaqRow key={f.q} item={f} />
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/*    FINAL CTA                                                        */}
      <section className="py-32 bg-[#213A5C] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-5">Ready To Begin?</p>

          <h2 className="editorial-heading text-5xl md:text-6xl leading-tight mb-8">
            Your Home Should Be
            <span className="block">As Unique As The</span>
            <span className="block">People Who Live In It.</span>
          </h2>

          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you're planning a complete kitchen renovation, a bathroom transformation,
            or a full-home project — we're here to guide you through every step.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-[#213A5C] px-10 py-5 rounded-xl font-medium hover:scale-105 transition-all duration-300"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-5 rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
            >
              View Our Projects
            </Link>
          </div>

        </div>
      </section>

      {/* Fade-in keyframe for service image swap */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

    </div>
  );
}