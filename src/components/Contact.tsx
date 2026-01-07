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
  Building,
} from 'lucide-react';

/* ✅ WEB3FORMS ACCESS KEY */
const WEB3FORMS_ACCESS_KEY = '5adbc4be-5805-48b1-ba56-b5c1a41d163a';

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const industries = [
    { name: 'Healthcare', icon: <Heart className="w-8 h-8 text-primary" />, description: 'Medical practices, hospitals, and healthcare providers' },
    { name: 'Finance', icon: <Building className="w-8 h-8 text-primary" />, description: 'Banks, investment firms, and financial services' },
    { name: 'Education', icon: <GraduationCap className="w-8 h-8 text-primary" />, description: 'Schools, universities, and educational platforms' },
    { name: 'Retail', icon: <ShoppingBag className="w-8 h-8 text-primary" />, description: 'E-commerce stores and retail businesses' },
    { name: 'Travel', icon: <Plane className="w-8 h-8 text-primary" />, description: 'Tourism, hotels, and travel agencies' },
    { name: 'Automotive', icon: <Car className="w-8 h-8 text-primary" />, description: 'Car dealerships and automotive services' },
  ];

  const serviceOptions = [
    'SEO (Search Engine Optimization)',
    'PPC (Pay-Per-Click Advertising)',
    'Social Media Marketing',
    'Content Marketing',
    'Web Development',
    'Analytics & Reporting',
    'Complete Digital Marketing Package',
  ];

  const contactInfo = [
    { icon: <Mail className="w-6 h-6 text-primary" />, label: 'Email', value: 'info.scuzi@gmail.com', href: 'mailto:info.scuzi@gmail.com' },
    { icon: <Phone className="w-6 h-6 text-primary" />, label: 'Phone', value: '+91-6202620905', href: 'tel:+916202620905' },
    { icon: <MapPin className="w-6 h-6 text-primary" />, label: 'Location', value: 'Noida, Uttar Pradesh, India', href: 'https://maps.google.com/?q=Noida,Uttar+Pradesh,India' },
    { icon: <Clock className="w-6 h-6 text-primary" />, label: 'Business Hours', value: 'Mon-Fri: 9AM-6PM IST', href: null },
  ];

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? 'Please enter a valid email address'
          : '';
      case 'phone':
        return value.replace(/\D/g, '').length < 10
          ? 'Please enter a valid phone number'
          : '';
      case 'message':
        return value.trim().length < 10
          ? 'Message must be at least 10 characters'
          : '';
      default:
        return '';
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key as keyof FormData] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const payload = new FormData();
      payload.append('access_key', WEB3FORMS_ACCESS_KEY);
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('service', formData.service);
      payload.append('message', formData.message);
      payload.append('subject', 'New Contact Form Submission');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });

      const result = await response.json();

      if (result.success) {
        setFormData({
          name: '',
          email: '',
          countryCode: '+91',
          phone: '',
          service: '',
          message: '',
        });
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Web3Forms Error:', error);
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
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Industries We Cater</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-background p-6 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-3">
                      <div className="mr-4">{industry.icon}</div>
                      <h4 className="font-semibold text-gray-900">{industry.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-4">{info.icon}</div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-gray-900">{info.value}</a>
                      ) : (
                        <p className="text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-between" style={{ height: '780px' }} > 
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <p className="text-green-700">Thank you! We'll be in touch soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">Something went wrong. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-between">
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
                  {serviceOptions.map((option, index) => (
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
