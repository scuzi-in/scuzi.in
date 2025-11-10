import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Heart,
  Car,
  GraduationCap,
  ShoppingBag,
  Plane,
  Building
} from 'lucide-react';

/**
 * Contact Section Component
 * ✅ Integrated with MongoDB Atlas via Vercel API Route
 */

// ✅ Interface for form data
interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  // ✅ Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    service: '',
    message: ''
  });

  // ✅ UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // ✅ Validation for each field
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        const phoneRegex = /^[0-9\s-]{10,15}$/;
        return !phoneRegex.test(value) ? 'Please enter a valid 10-digit phone number' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  // ✅ Update field values on change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // ✅ Check all fields before submit
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormData] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * ✅ UPDATED: Handle form submission
   * 1. Validate input
   * 2. Send data to Vercel API route (/api/contact)
   * 3. Save it in MongoDB Atlas
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // ✅ Send form data to backend API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      });

      const data = await response.json();

      if (data.success) {
        // ✅ Reset the form on success
        setFormData({
          name: '',
          email: '',
          countryCode: '+91',
          phone: '',
          service: '',
          message: ''
        });
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 pt-0 pb-1 bg-gray-50" style={{ backgroundColor: '#dad7cd' }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* LEFT SIDE */}
          {/* (unchanged code below) */}
          <div className="space-y-12">
            {/* ...your industries + contact info blocks remain the same... */}
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col justify-between" style={{ height: '780px' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>

            {/* ✅ Success message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <p className="text-green-700">Thank you! We'll be in touch soon.</p>
              </div>
            )}

            {/* ❌ Error message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">Something went wrong. Please try again.</p>
              </div>
            )}

            {/* ✅ Contact form */}
            <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col justify-between">
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className={`w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500' : 'focus:ring-blue-500'
                  }`}
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className={`w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500' : 'focus:ring-blue-500'
                  }`}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1 font-medium">Phone *</label>
                <PhoneInput
                  country={'in'}
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  inputStyle={{
                    width: '100%',
                    height: '44px',
                    borderRadius: '8px',
                    borderColor: errors.phone ? 'red' : '#d1d5db',
                  }}
                  buttonStyle={{
                    borderRadius: '8px 0 0 8px',
                    borderColor: errors.phone ? 'red' : '#d1d5db',
                  }}
                />
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Service */}
              <div>
                <label className="block mb-1 font-medium">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  {[
                    'SEO (Search Engine Optimization)',
                    'PPC (Pay-Per-Click Advertising)',
                    'Social Media Marketing',
                    'Content Marketing',
                    'Web Development',
                    'Analytics & Reporting',
                    'Complete Digital Marketing Package'
                  ].map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 font-medium">Message *</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements..."
                  className={`w-full border rounded-lg px-3 py-2 outline-none resize-none focus:ring-2 ${
                    errors.message ? 'border-red-500' : 'focus:ring-blue-500'
                  }`}
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <div style={{ height: '50px' }}></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
