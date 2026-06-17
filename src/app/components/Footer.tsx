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
    <footer className="bg-[#213A5C] text-white border-t border-[#DDD3C7] overflow-hidden">

{/* ACCREDITATION BANNER */}
<section className="
  py-12
  bg-[#213A5C]
  border-t border-white/10
  overflow-hidden
">

  <style>{`
    @keyframes scroll-track {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .accreditation-track {
      display: flex;
      width: max-content;
      animation: scroll-track 30s linear infinite;
    }
    .accreditation-track:hover {
      animation-play-state: paused;
    }
  `}</style>

  <p className="
    text-center
    text-xs font-semibold
    tracking-[0.25em]
    uppercase
    text-white/60
    mb-8
  ">
    Trusted Industry Partners
  </p>

  <div className="
    relative w-full overflow-hidden
    accreditation-track-wrapper
  ">

    {/* LEFT FADE */}
    <div
      className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
      style={{ background: "linear-gradient(to right, #213A5C, transparent)" }}
    />

    {/* RIGHT FADE */}
    <div
      className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
      style={{ background: "linear-gradient(to left, #213A5C, transparent)" }}
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
            bg-white/5
            border border-white/10
            backdrop-blur-sm
            rounded-2xl
            px-8 py-6
            hover:border-[#213A5C]
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
            text-white/60
          ">
            Industry Certified
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

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/60
              mb-6
            "
          >
            COMPANY NAME
          </p>

          <h3
            className="
              text-4xl
              md:text-5xl
              font-semibold
              leading-tight
              mb-6
              max-w-xl
            "
          >
            Designing Kitchens
            Around The
            Way You Live
          </h3>

          <p
            className="
              text-white/70
              text-lg
              leading-relaxed
              max-w-lg
            "
          >
            Thoughtfully designed kitchen renovations
            combining functionality, craftsmanship,
            premium materials and timeless design.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-white/60
              mb-6
            "
          >
            Navigation
          </p>

          <div className="space-y-4">

            <Link
              to="/"
              className="block hover:text-white/70 transition"
            >
              Home
            </Link>

            <Link
              to="/gallery"
              className="block hover:text-white/70 transition"
            >
              Projects
            </Link>

            <Link
              to="/blog"
              className="block hover:text-white/70 transition"
            >
              Inspiration
            </Link>

            <Link
              to="/contact"
              className="block hover:text-white/70 transition"
            >
              Contact
            </Link>

          </div>

        </div>

        {/* CONTACT */}
        <div>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-white/60
              mb-6
            "
          >
            Contact
          </p>

          <div className="space-y-4 text-white/80">

            <p>hello@company.com.au</p>

            <p>+61 4 1234 5678</p>

            <p>Melbourne, Victoria</p>

            <p>Mon – Fri | 8am – 5pm</p>

          </div>

        </div>

      </div>

      {/* DIVIDER */}
      <div
        className="
          border-white/10
          mt-20
          pt-8
        "
      >

        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          <p className="text-sm text-white/50">
            © 2026 COMPANY NAME. All rights reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-6
              text-sm
              text-white/50
            "
          >

            <Link
              to="/privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </div>

    </footer>
  );
}