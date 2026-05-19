import { useState } from "react";
import { ArrowRight, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import { Footer } from "../Footer";

export function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("Consultation request submitted!");
  };

  return (
    <div className="bg-[#F8F5F0] text-[#2B2B2B] overflow-hidden">

      {/* HERO */}
      <section className="pt-32 pb-24 border-b border-[#DDD3C7]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-5">
              Contact
            </p>

            <h1 className="text-6xl md:text-7xl font-semibold leading-tight tracking-tight mb-8">
              Begin Your
              <span className="block text-[#5E564F]">
                Renovation Journey
              </span>
            </h1>

            <p className="text-[#5E564F] text-lg leading-relaxed max-w-2xl">
              We collaborate with homeowners across Melbourne to create
              timeless contemporary renovations inspired by architecture,
              craftsmanship and modern Australian living.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* LEFT SIDE */}
            <div className="space-y-12">

              {/* INTRO */}
              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-4">
                  Melbourne-Based Renovation Studio
                </p>

                <h2 className="text-5xl font-semibold leading-tight mb-6">
                  Thoughtfully Designed
                  <span className="block text-[#5E564F]">
                    Spaces For Modern Living
                  </span>
                </h2>

                <p className="text-[#5E564F] text-lg leading-relaxed">
                  From full-home renovations to refined kitchen and bathroom
                  transformations, we deliver premium residential spaces
                  tailored to contemporary lifestyles.
                </p>

              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-8">

                {/* EMAIL */}
                <div className="flex items-start gap-5">

                  <div className="
                    w-14 h-14 rounded-2xl
                    bg-white border border-[#DDD3C7]
                    flex items-center justify-center
                    shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  ">
                    <Mail size={22} className="text-[#B08D6D]" />
                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-[#74695E] mb-2">
                      Email
                    </p>

                    <p className="text-xl font-medium">
                      hello@renov.com.au
                    </p>

                  </div>

                </div>

                {/* PHONE */}
                <div className="flex items-start gap-5">

                  <div className="
                    w-14 h-14 rounded-2xl
                    bg-white border border-[#DDD3C7]
                    flex items-center justify-center
                    shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  ">
                    <Phone size={22} className="text-[#B08D6D]" />
                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-[#74695E] mb-2">
                      Phone
                    </p>

                    <p className="text-xl font-medium">
                      +61 4 1234 5678
                    </p>

                  </div>

                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-5">

                  <div className="
                    w-14 h-14 rounded-2xl
                    bg-white border border-[#DDD3C7]
                    flex items-center justify-center
                    shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  ">
                    <MapPin size={22} className="text-[#B08D6D]" />
                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-[#74695E] mb-2">
                      Service Areas
                    </p>

                    <p className="text-xl font-medium">
                      Melbourne, Victoria
                    </p>

                  </div>

                </div>

                {/* INSTAGRAM */}
                <div className="flex items-start gap-5">

                  <div className="
                    w-14 h-14 rounded-2xl
                    bg-white border border-[#DDD3C7]
                    flex items-center justify-center
                    shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  ">
                    <Instagram size={22} className="text-[#B08D6D]" />
                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-[#74695E] mb-2">
                      Instagram
                    </p>

                    <p className="text-xl font-medium">
                      @renovstudio
                    </p>

                  </div>

                </div>

              </div>

              {/* RESPONSE TIME */}
              <div className="
                bg-[#EFE7DD]
                border border-[#DDD3C7]
                rounded-[28px]
                p-8
              ">

                <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-4">
                  Consultation Response Time
                </p>

                <h3 className="text-3xl font-semibold mb-4">
                  Typically Within 24 Hours
                </h3>

                <p className="text-[#5E564F] leading-relaxed">
                  We review every enquiry carefully to understand your
                  renovation goals and project vision.
                </p>

              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <div
              className="
                bg-white
                border border-[#DDD3C7]
                rounded-[32px]
                p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              "
            >

              <div className="mb-10">

                <p className="text-xs uppercase tracking-[0.25em] text-[#74695E] mb-4">
                  Consultation Form
                </p>

                <h2 className="text-4xl font-semibold leading-tight mb-4">
                  Tell Us About
                  <span className="block text-[#5E564F]">
                    Your Project
                  </span>
                </h2>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* NAME */}
                <div>

                  <label className="block text-sm mb-3 text-[#5E564F]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      rounded-2xl
                      border border-[#DDD3C7]
                      bg-[#F8F5F0]
                      px-5 py-4
                      outline-none
                      focus:border-[#B08D6D]
                      transition
                    "
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="block text-sm mb-3 text-[#5E564F]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      rounded-2xl
                      border border-[#DDD3C7]
                      bg-[#F8F5F0]
                      px-5 py-4
                      outline-none
                      focus:border-[#B08D6D]
                      transition
                    "
                  />

                </div>

                {/* PHONE */}
                <div>

                  <label className="block text-sm mb-3 text-[#5E564F]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border border-[#DDD3C7]
                      bg-[#F8F5F0]
                      px-5 py-4
                      outline-none
                      focus:border-[#B08D6D]
                      transition
                    "
                  />

                </div>

                {/* PROJECT TYPE */}
                <div>

                  <label className="block text-sm mb-3 text-[#5E564F]">
                    Project Type
                  </label>

                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border border-[#DDD3C7]
                      bg-[#F8F5F0]
                      px-5 py-4
                      outline-none
                      focus:border-[#B08D6D]
                      transition
                    "
                  >

                    <option value="">Select Project Type</option>
                    <option value="Kitchen">Kitchen Renovation</option>
                    <option value="Bathroom">Bathroom Renovation</option>
                    <option value="Living">Living Space</option>
                    <option value="Full">Full Renovation</option>

                  </select>

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="block text-sm mb-3 text-[#5E564F]">
                    Project Details
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="
                      w-full
                      rounded-2xl
                      border border-[#DDD3C7]
                      bg-[#F8F5F0]
                      px-5 py-4
                      outline-none
                      focus:border-[#B08D6D]
                      transition
                      resize-none
                    "
                  />

                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
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
                  Submit Enquiry
                  <ArrowRight size={18} />
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ SECTION */}
      <motion.section
        variants={fadeUp as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-32 border-t border-[#DDD3C7] bg-[#EFE7DD]"
      >

  <div className="max-w-5xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-20">

      <p className="text-xs uppercase tracking-[0.3em] text-[#74695E] mb-5">
        Frequently Asked Questions
      </p>

      <h2 className="text-5xl font-semibold leading-tight mb-6">
        Everything You
        <span className="block text-[#5E564F]">
          Need To Know
        </span>
      </h2>

      <p className="text-[#5E564F] text-lg leading-relaxed max-w-2xl mx-auto">
        Answers to common questions about our renovation process,
        timelines and consultation experience.
      </p>

    </div>

    {/* FAQ ITEMS */}
    <div className="space-y-6">

      {[
        {
          question: "How long does a renovation typically take?",
          answer:
            "Project timelines vary depending on scope and complexity. Most kitchen and bathroom renovations are completed within 6–10 weeks, while full-home renovations may take several months.",
        },

        {
          question: "Do you provide design consultation services?",
          answer:
            "Yes. We work closely with homeowners throughout the design and planning phase to ensure every space reflects both functionality and contemporary architectural style.",
        },

        {
          question: "Can you help with material selections?",
          answer:
            "Absolutely. We guide clients through curated selections including natural stone, timber finishes, fixtures, lighting and premium interior materials.",
        },

        {
          question: "Do you manage the entire renovation process?",
          answer:
            "Yes. From concept development and planning through to construction and finishing details, our team manages the full renovation journey.",
        },

        {
          question: "Which areas do you service?",
          answer:
            "We primarily service Melbourne and surrounding suburbs across Victoria, focusing on premium residential renovations and architectural transformations.",
        },

      ].map((faq, index) => (
        <details
          key={index}
          className="
            group
            bg-white
            border border-[#DDD3C7]
            rounded-[28px]
            overflow-hidden
            shadow-[0_10px_30px_rgba(0,0,0,0.04)]
          "
        >

          <summary
            className="
              list-none
              cursor-pointer
              px-8 py-7
              flex items-center justify-between
            "
          >

            <h3 className="text-xl font-medium pr-6">
              {faq.question}
            </h3>

            <div
              className="
                w-10 h-10 rounded-full
                border border-[#DDD3C7]
                flex items-center justify-center
                text-[#B08D6D]
                transition-transform duration-300
                group-open:rotate-45
              "
            >
              +
            </div>

          </summary>

          <div className="px-8 pb-8">

            <div className="h-px bg-[#E5DBCF] mb-6" />

            <p className="text-[#5E564F] leading-relaxed text-lg">
              {faq.answer}
            </p>

          </div>

        </details>
      ))}

    </div>

  </div>

</motion.section>

    </div>
  );
}