import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Kitchen', 'Bathroom', 'Living Room', 'Exterior'];

  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Renovation',
      category: 'Kitchen',
      image:
        'https://images.unsplash.com/photo-1749704647447-ab63fc360769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Contemporary Bathroom',
      category: 'Bathroom',
      image:
        'https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Living Room Redesign',
      category: 'Living Room',
      image:
        'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Home Extension Project',
      category: 'Exterior',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Luxury Kitchen Remodel',
      category: 'Kitchen',
      image:
        'https://images.unsplash.com/photo-1749704647447-ab63fc360769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Complete Home Renovation',
      category: 'Living Room',
      image:
        'https://images.unsplash.com/photo-1765277789186-04b71a9afd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-neutral-950 text-white">

      {/* Header */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="mb-6 text-5xl md:text-6xl font-semibold tracking-tight">
            Our Work
          </h1>

          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Explore our portfolio of completed renovation projects.
            Each project showcases our commitment to quality and attention to detail.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl border transition-all ${
                  selectedCategory === category
                    ? 'bg-white text-black border-white'
                    : 'border-neutral-700 text-neutral-300 hover:border-white hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-2xl bg-neutral-900 shadow-xl aspect-[4/3]"
              >
                <div className="relative h-full">

                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">

                    <div className="p-6">
                      <h3 className="mb-1 text-white text-lg font-medium">
                        {project.title}
                      </h3>

                      <p className="text-neutral-300">
                        {project.category}
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="mb-6 text-4xl font-semibold">
            Start Your Renovation Journey
          </h2>

          <p className="mb-10 text-neutral-400">
            Ready to transform your space? Book a free consultation with our team today.
          </p>

          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl hover:scale-[1.02] transition"
          >
            Book Free Consultation
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>

    </div>
  );
}