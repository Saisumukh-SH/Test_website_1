import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-neutral-950/90 backdrop-blur border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-white text-lg font-semibold tracking-tight"
          >
            RenovatePro
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/booking"
              className="bg-white text-black px-6 py-2 rounded-xl hover:scale-[1.03] transition"
            >
              Book Now
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-neutral-800">

            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-lg ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-neutral-400'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-white text-black px-6 py-3 rounded-xl text-center hover:scale-[1.02] transition"
            >
              Book Now
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
}