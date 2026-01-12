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
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Get In Touch</h1>
          <p className="text-gray-600">
            Have a question or ready to start your renovation project? We'd love to hear from
            you. Contact us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                  <Icon className="text-gray-900 mb-4" size={24} />
                  <h3 className="mb-3">{item.title}</h3>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h2 className="mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-700">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              {/* Quick Booking */}
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h2 className="mb-4 text-white">Ready to Get Started?</h2>
                <p className="mb-6 text-gray-300">
                  Skip the waiting and book a free consultation directly with our team.
                </p>
                <Link
                  to="/booking"
                  className="inline-block bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Book Free Consultation
                </Link>
              </div>

              {/* FAQ Section */}
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2">How long does a typical renovation take?</h4>
                    <p className="text-gray-600">
                      Project timelines vary based on scope, but most kitchen and bathroom
                      renovations take 4-8 weeks.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2">Do you offer free quotes?</h4>
                    <p className="text-gray-600">
                      Yes! We provide free, no-obligation consultations and detailed quotes
                      for all projects.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2">Are you licensed and insured?</h4>
                    <p className="text-gray-600">
                      Absolutely. We are fully licensed, bonded, and insured for your peace
                      of mind.
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
