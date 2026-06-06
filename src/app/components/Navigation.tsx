import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navigation() {

  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const links = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Blog", path: "/journal" },
    { name: "Contact Us", path: "/contact" },
  ];

  const projectLinks = [
    {
      name: "Kitchen Renovations",
      path: "/gallery?category=kitchen",
    },
    {
      name: "Bathroom Renovations",
      path: "/gallery?category=bathroom",
    },
    {
      name: "Living Spaces",
      path: "/gallery?category=living",
    },
    {
      name: "Full Renovations",
      path: "/gallery?category=full-renovation",
    },
  ];

  return (
    <nav
      className="
        sticky top-0 z-50
        backdrop-blur-xl
        bg-white/95
        border-b border-[#E5E7EB]
      "
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-28">

          {/* LOGO */}
          <Link
            to="/"
            className="text-[#2B2B2B]"
          >
            <div>

              <h1 className="text-xl font-semibold tracking-wide">
                RENOvation
              </h1>


            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
          {links.slice(0, 3).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                text-[15px]
                transition-all duration-300
                hover:text-[#213A5C]
                ${
                  location.pathname === link.path
                    ? "text-[#213A5C]"
                    : "text-[#5E564F]"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

            {/* PROJECTS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >

              <button
                className="
                  flex items-center gap-2
                  text-[15px]
                  text-[#5E564F]
                  hover:text-[#213A5C]
                  transition-all duration-300
                "
              >
                Projects

                <ChevronDown
                  size={16}
                  className={`
                    transition-transform duration-300
                    ${projectsOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* DROPDOWN */}
              <div
                className={`
                  absolute top-full left-0 mt-5 w-[360px]
                  rounded-[20px]
                  border border-[#DDD3C7]
                  bg-white
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  p-6
                  transition-all duration-300
                  ${
                    projectsOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }
                `}
              >

                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    text-[#74695E]
                    mb-5
                  "
                >
                  Project Categories
                </p>

                <div className="space-y-2">

                  {projectLinks.map((project) => (
                    <Link
                      key={project.name}
                      to={project.path}
                      className="
                        flex items-center justify-between
                        px-4 py-4
                        rounded-2xl
                        text-[#5E564F]
                        hover:bg-[#F5F1EB]
                        hover:text-[#213A5C]
                        transition-all duration-300
                        group
                      "
                    >

                      <span className="font-medium">
                        {project.name}
                      </span>

                      <span
                        className="
                          opacity-0
                          translate-x-2
                          group-hover:opacity-100
                          group-hover:translate-x-0
                          transition-all duration-300
                        "
                      >
                        →
                      </span>

                    </Link>
                  ))}

                </div>

              </div>

            </div>
            {links.slice(3).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                text-[15px]
                transition-all duration-300
                hover:text-[#213A5C]
                ${
                  location.pathname === link.path
                    ? "text-[#213A5C]"
                    : "text-[#5E564F]"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

            {/* CONTACT BUTTON */}
            <Link
              to="/contact"
              className="
                bg-[#213A5C]
                text-white
                px-6 py-3
                rounded-xl
                hover:opacity-90
                transition-all duration-300
              "
            >
              Get A Cost Estimate
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              md:hidden
              text-[#2B2B2B]
            "
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all duration-500
            ${
              mobileMenuOpen
                ? "max-h-[700px] pb-8"
                : "max-h-0"
            }
          `}
        >

          <div className="space-y-6 pt-6 border-t border-[#DDD3C7]">

            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="
                block text-lg
                text-[#5E564F]
                hover:text-[#213A5C]
                transition
              "
            >
              Home
            </Link>

            {/* MOBILE DROPDOWN */}
            <div>

              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className="
                  flex items-center justify-between
                  w-full text-lg
                  text-[#5E564F]
                "
              >

                <span>Projects</span>

                <ChevronDown
                  size={18}
                  className={`
                    transition-transform duration-300
                    ${projectsOpen ? "rotate-180" : ""}
                  `}
                />

              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all duration-300
                  ${
                    projectsOpen
                      ? "max-h-[400px] mt-5"
                      : "max-h-0"
                  }
                `}
              >

                <div className="
                  pl-5 mt-2
                  border-l border-[#DDD3C7]
                  space-y-4
                ">

                  {projectLinks.map((project) => (
                    <Link
                      key={project.name}
                      to={project.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="
                        block
                        text-[#74695E]
                        hover:text-[#213A5C]
                        transition
                      "
                    >
                      {project.name}
                    </Link>
                  ))}

                </div>

              </div>

            </div>

            <Link
              to="/journal"
              onClick={() => setMobileMenuOpen(false)}
              className="
                block text-lg
                text-[#5E564F]
                hover:text-[#213A5C]
                transition
              "
            >
              Journal
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="
                block text-lg
                text-[#5E564F]
                hover:text-[#213A5C]
                transition
              "
            >
              Contact
            </Link>

            {/* MOBILE CTA */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="
                inline-flex items-center justify-center
                w-full
                bg-[#213A5C]
                text-white
                px-6 py-4
                rounded-xl
                hover:opacity-90
                transition
              "
            >
              Get A Cost Estimate
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}