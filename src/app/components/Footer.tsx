import { Link } from "react-router-dom";

export function Footer() {

  const track = [
  {
    src: "/accreditations/badge1.png",
    alt: "Accreditation 1",
  },

  {
    src: "/accreditations/badge2.png",
    alt: "Accreditation 2",
  },

  {
    src: "/accreditations/badge3.png",
    alt: "Accreditation 3",
  },

  {
    src: "/accreditations/badge4.png",
    alt: "Accreditation 4",
  },
];

  return (
    <footer className="bg-[#EFE7DD] border-t border-[#DDD3C7] overflow-hidden">

        {/* ACCREDITATION BANNER */}
<section className="
  py-12
  bg-[#EFE7DD]
  border-t border-[#D8CEC2]
  overflow-hidden
">

  <p className="
    text-center
    text-xs font-semibold
    tracking-[0.25em]
    uppercase
    text-[#74695E]
    mb-8
  ">
    Recognised & Accredited
  </p>

  <div className="
    relative w-full overflow-hidden
    accreditation-track-wrapper
  ">

    {/* LEFT FADE */}
    <div
      className="
        absolute inset-y-0 left-0
        w-24 z-10 pointer-events-none
      "
      style={{
        background:
          "linear-gradient(to right, #EFE7DD, transparent)",
      }}
    />

    {/* RIGHT FADE */}
    <div
      className="
        absolute inset-y-0 right-0
        w-24 z-10 pointer-events-none
      "
      style={{
        background:
          "linear-gradient(to left, #EFE7DD, transparent)",
      }}
    />

    {/* TRACK */}
    <div className="accreditation-track">

      {[...track, ...track].map((badge, i) => (
        <div
          key={i}
          className="
            flex-shrink-0
            flex flex-col items-center justify-center
            gap-3
            bg-[#FFFFFF]
            border border-[#D8CEC2]
            rounded-2xl
            px-8 py-6
            hover:border-[#B08D6D]
            transition-colors duration-300
            mx-6
            shadow-[0_10px_30px_rgba(0,0,0,0.04)]
          "
        >

          <img
            src={badge.src}
            alt={badge.alt}
            className="
              h-14 w-auto
              object-contain
              opacity-80
              hover:opacity-100
              transition duration-300
            "
          />

          <p className="
            text-xs uppercase
            tracking-[0.2em]
            text-[#74695E]
          ">
            Accredited
          </p>

        </div>
      ))}

    </div>

  </div>

</section>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-4 gap-16">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <p className="eyebrow mb-6">
              RENOV
            </p>

            <h3 className="
              editorial-heading
              text-4xl leading-tight mb-6
              max-w-xl
            ">
              Contemporary Renovations
              Designed For Modern
              Australian Living
            </h3>

            <p className="
              body-muted
              text-lg
              max-w-lg
            ">
              We create thoughtfully designed residential
              renovations inspired by architecture,
              timeless materials and elevated living.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>

            <p className="eyebrow mb-6">
              Navigation
            </p>

            <div className="space-y-4">

              <Link
                to="/"
                className="block btn-ghost"
              >
                Home
              </Link>

              <Link
                to="/gallery"
                className="block btn-ghost"
              >
                Our Projects
              </Link>

              <Link
                to="/journal"
                className="block btn-ghost"
              >
                Journal
              </Link>

              <Link
                to="/contact"
                className="block btn-ghost"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <p className="eyebrow mb-6">
              Contact
            </p>

            <div className="space-y-4 body-muted">

              <p>
                hello@renov.com.au
              </p>

              <p>
                +61 4 1234 5678
              </p>

              <p>
                Melbourne, Victoria
              </p>

              <p>
                @renovstudio
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="
          mt-20 pt-8
          border-t border-[#DDD3C7]
          flex flex-col md:flex-row
          justify-between items-center
          gap-4
        ">

          <p className="text-sm text-[#74695E]">
            © 2026 RENOV. All rights reserved.
          </p>

          <p className="text-sm text-[#74695E]">
            Designed with a contemporary architectural approach.
          </p>

        </div>

      </div>

    </footer>
  );
}