import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Home() {
  const services = [
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Home Extensions',
    'Interior Design',
    'Flooring & Tiling',
    'Painting & Decoration',
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-100">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765277789186-04b71a9afd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NjY5MzI2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern home renovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="mb-6">Transform Your Space</h1>
              <p className="mb-8 text-lg">
                Professional renovation services that bring your vision to life.
                Quality craftsmanship, transparent pricing, and exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  Get Free Quote
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/gallery"
                  className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors text-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-gray-900">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we handle every aspect of your renovation project
              with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:border-gray-900 transition-colors"
              >
                <CheckCircle className="text-gray-900 mb-4" size={24} />
                <h3 className="mb-2">{service}</h3>
                <p className="text-gray-600">
                  Expert renovation services tailored to your needs and budget.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="mb-8 text-gray-300">
            Get a free consultation and quote today. Our team is ready to help you transform
            your space.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Schedule Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
