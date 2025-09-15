import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Heart, Car, GraduationCap, ShoppingBag, Plane, Building } from 'lucide-react';

/**
 * Contact Section Component
 * Features:
 * - Industries we cater section with icons
 * - Contact information display
 * - Functional contact form with validation
 * - Success/error message handling
 * - Responsive two-column layout
 */
//color change 161
// Form data interface
interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Industries we cater to
  const industries = [{
    name: 'Healthcare',
    icon: <Heart className="w-8 h-8 text-primary" />,
    description: 'Medical practices, hospitals, and healthcare providers'
  }, {
    name: 'Finance',
    icon: <Building className="w-8 h-8 text-primary" />,
    description: 'Banks, investment firms, and financial services'
  }, {
    name: 'Education',
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    description: 'Schools, universities, and educational platforms'
  }, {
    name: 'Retail',
    icon: <ShoppingBag className="w-8 h-8 text-primary" />,
    description: 'E-commerce stores and retail businesses'
  }, {
    name: 'Travel',
    icon: <Plane className="w-8 h-8 text-primary" />,
    description: 'Tourism, hotels, and travel agencies'
  }, {
    name: 'Automotive',
    icon: <Car className="w-8 h-8 text-primary" />,
    description: 'Car dealerships and automotive services'
  }];

  // Service options for dropdown
  const serviceOptions = ['SEO (Search Engine Optimization)', 'PPC (Pay-Per-Click Advertising)', 'Social Media Marketing', 'Content Marketing', 'Web Development', 'Analytics & Reporting', 'Complete Digital Marketing Package'];

  // Contact information
  const contactInfo = [{
    icon: <Mail className="w-6 h-6 text-primary" />,
    label: 'Email',
    value: 'info.scuzi@gmail.com',
    href: 'mailto:info.scuzi@gmail.com'
  }, {
    icon: <Phone className="w-6 h-6 text-primary" />,
    label: 'Phone',
    value: '+91-9876543210',
    href: 'tel:+919876543210'
  }, {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    label: 'Location',
    value: 'Noida, Uttar Pradesh, India',
    href: 'https://maps.google.com/?q=Noida,Uttar+Pradesh,India'
  }, {
    icon: <Clock className="w-6 h-6 text-primary" />,
    label: 'Business Hours',
    value: 'Mon-Fri: 9AM-6PM IST',
    href: null
  }];

  // Validate form field
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'service':
        return !value ? 'Please select a service' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field if it exists
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate entire form
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="section-padding bg-gray-50" style={{ backgroundColor: "#dad7cd" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's discuss your project and create something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column - Industries & Contact Info */}
          <div className="space-y-12">
            
            {/* Industries We Cater Section */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Industries We Cater
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our solutions meet the needs of various industries. With advanced techniques, 
                our digital marketing agency helps enhance customer engagement across diverse sectors.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {industries.map((industry, index) => <div key={index} className="bg-background p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-center mb-3">
                      <div className="mr-4 transform group-hover:scale-110 transition-transform duration-300">
                        {industry.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {industry.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      {industry.description}
                    </p>
                  </div>)}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => <div key={index} className="flex items-center group">
                    <div className="mr-4 transform group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{info.label}</p>
                      {info.href ? <a href={info.href} className="text-gray-900 hover:text-primary transition-colors duration-300" target={info.href.startsWith('http') ? '_blank' : undefined} rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                          {info.value}
                        </a> : <p className="text-gray-900">{info.value}</p>}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-background p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h3>

            {/* Success Message */}
            {submitStatus === 'success' && <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <p className="text-green-700">Thank you! We'll be in touch soon.</p>
              </div>}

            {/* Error Message */}
            {submitStatus === 'error' && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">Something went wrong. Please try again.</p>
              </div>}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className={`form-input ${errors.name ? 'border-red-500' : ''}`} placeholder="Your full name" />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={`form-input ${errors.email ? 'border-red-500' : ''}`} placeholder="your.email@example.com" />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="form-label">
                  Service of Interest *
                </label>
                <select id="service" name="service" value={formData.service} onChange={handleInputChange} className={`form-input ${errors.service ? 'border-red-500' : ''}`}>
                  <option value="">Select a service</option>
                  {serviceOptions.map((option, index) => <option key={index} value={option}>
                      {option}
                    </option>)}
                </select>
                {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange} className={`form-input resize-none ${errors.message ? 'border-red-500' : ''}`} placeholder="Tell us about your project requirements..." />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={isSubmitting} className="btn-hero w-full group disabled:opacity-50 disabled:cursor-not-allowed font-bold text-slate-100 text-base bg-[#2348e4]/0">
                {isSubmitting ? <>
                    <div className="loading-dots">
                      <span style={{
                    '--delay': '0s'
                  } as React.CSSProperties}></span>
                      <span style={{
                    '--delay': '0.2s'
                  } as React.CSSProperties}></span>
                      <span style={{
                    '--delay': '0.4s'
                  } as React.CSSProperties}></span>
                    </div>
                    Sending...
                  </> : <>
                    Send Message
                    
                  </>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;