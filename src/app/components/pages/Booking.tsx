import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Home } from 'lucide-react';

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectType: '',
    date: '',
    time: '',
    address: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const encodedData = new URLSearchParams({
      'form-name': 'booking',
      ...formData,
    }).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodedData,
    })
      .then(() => {
  window.location.href = "/thank-you";
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          projectType: '',
          date: '',
          time: '',
          address: '',
          message: '',
        });
      })
      .catch(() => {
        alert('❌ Something went wrong. Please try again.');
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const serviceTypes = [
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Home Extensions',
    'Interior Design',
    'Flooring & Tiling',
    'Painting & Decoration',
    'Other',
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Book a Consultation</h1>
          <p className="text-gray-600">
            Schedule a free consultation with our team. We'll discuss your project and provide a
            detailed quote.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            name="booking"
            method="POST"
            data-netlify="true"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="booking" />
            <input type="hidden" name="bot-field" />

            {/* Netlify required hidden input */}
            <input type="hidden" name="form-name" value="booking" />

            {/* Personal Information */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="mb-6">Personal Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input icon={User} label="Full Name *" name="name" value={formData.name} onChange={handleChange} />
                <Input icon={Mail} label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} />
                <Input icon={Phone} label="Phone *" name="phone" value={formData.phone} onChange={handleChange} />
                <Input icon={Home} label="Property Address *" name="address" value={formData.address} onChange={handleChange} />
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="mb-6">Project Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                  label="Service Type *"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  options={serviceTypes}
                />

                <SelectField
                  label="Project Type *"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  options={['Residential', 'Commercial']}
                />

                <DateInput
                  icon={Calendar}
                  label="Preferred Date *"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />

                <SelectField
                  icon={Clock}
                  label="Preferred Time *"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  options={[
                    '9:00 AM',
                    '10:00 AM',
                    '11:00 AM',
                    '1:00 PM',
                    '2:00 PM',
                    '3:00 PM',
                    '4:00 PM',
                  ]}
                />
              </div>

              <div className="mt-6">
                <label className="block mb-2 text-gray-700">
                  Project Description (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Submit Booking Request
            </button>

            <p className="text-sm text-gray-600 text-center">
              By submitting this form, you agree to be contacted regarding your renovation project.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

/* ---------- Small Reusable Inputs (cleaner code) ---------- */

function Input({ icon: Icon, label, name, value, onChange, type = 'text' }: any) {
  return (
    <div>
      <label className="block mb-2 text-gray-700">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type={type}
          name={name}
          required
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900"
        />
      </div>
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, icon: Icon }: any) {
  return (
    <div>
      <label className="block mb-2 text-gray-700">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />}
        <select
          name={name}
          required
          value={value}
          onChange={onChange}
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900`}
        >
          <option value="">Select</option>
          {options.map((o: string) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function DateInput({ icon: Icon, label, name, value, onChange }: any) {
  return (
    <div>
      <label className="block mb-2 text-gray-700">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="date"
          name={name}
          required
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900"
        />
      </div>
    </div>
  );
}
