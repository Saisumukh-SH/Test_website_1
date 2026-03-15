import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['123 Renovation Street', 'Suite 100', 'New York, NY 10001'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@renovatepro.com', 'support@renovatepro.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  return (
    <div className="bg-neutral-950 text-white">

      {/* Header */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="mb-6 text-5xl md:text-6xl font-semibold tracking-tight">
            Get In Touch
          </h1>

          <p className="text-neutral-400 text-lg">
            Have a question or ready to start your renovation project?
            Contact us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800"
                >
                  <Icon className="text-white mb-4" size={26} />

                  <h3 className="mb-4 text-lg font-medium">
                    {item.title}
                  </h3>

                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-neutral-400">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <div className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800">

              <h2 className="mb-8 text-3xl font-semibold">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block mb-2 text-neutral-400">
                    Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-xl focus:outline-none focus:border-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-neutral-400">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-xl focus:outline-none focus:border-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-neutral-400">
                    Subject *
                  </label>

                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-xl focus:outline-none focus:border-white"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-neutral-400">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-xl focus:outline-none focus:border-white"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 rounded-xl hover:scale-[1.02] transition inline-flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

              </form>

            </div>

            {/* CTA Section */}
            <div className="space-y-8">

              {/* Quick Booking */}
              <div className="bg-neutral-900 border border-neutral-800 text-white p-10 rounded-2xl">

                <h2 className="mb-4 text-3xl font-semibold">
                  Ready to Get Started?
                </h2>

                <p className="mb-8 text-neutral-400">
                  Skip the waiting and book a free consultation
                  directly with our team.
                </p>

                <Link
                  to="/booking"
                  className="inline-block bg-white text-black px-8 py-4 rounded-xl hover:scale-[1.02] transition"
                >
                  Book Free Consultation
                </Link>

              </div>

              {/* FAQ Section */}
              <div className="bg-neutral-900 border border-neutral-800 p-10 rounded-2xl">

                <h3 className="mb-6 text-xl font-semibold">
                  Frequently Asked Questions
                </h3>

                <div className="space-y-6">

                  <div>
                    <h4 className="mb-2 font-medium">
                      How long does a renovation take?
                    </h4>

                    <p className="text-neutral-400">
                      Most kitchen and bathroom renovations
                      take between 4–8 weeks depending on scope.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-medium">
                      Do you offer free quotes?
                    </h4>

                    <p className="text-neutral-400">
                      Yes. We provide free consultations
                      and detailed quotes for all projects.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-medium">
                      Are you licensed and insured?
                    </h4>

                    <p className="text-neutral-400">
                      Absolutely. Our company is fully licensed,
                      bonded, and insured.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}