import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowUp, Heart } from 'lucide-react';

/**
 * Footer Component
 * Features:
 * - Three-column layout with company info, quick links, and contact details
 * - Social media links
 * - Scroll to top functionality
 * - Professional branding and copyright information
 * - Responsive design for all devices
 */
const Footer: React.FC = () => {
  // Navigation links for quick access
  const quickLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'About Us',
    href: '#about'
  }, {
    name: 'Portfolio',
    href: '#portfolio'
  }, {
    name: 'Testimonials',
    href: '#testimonials'
  }, {
    name: 'Contact',
    href: '#contact'
  }];

  // Social media links
  const socialLinks = [{
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/scuzi',
    icon: <Linkedin className="w-5 h-5" />
  }, {
    name: 'Twitter',
    href: 'https://twitter.com/scuzi_in',
    icon: <Twitter className="w-5 h-5" />
  }, {
    name: 'Instagram',
    href: 'https://instagram.com/scuzi.in',
    icon: <Instagram className="w-5 h-5" />
  }];

  // Contact information for footer
  const footerContact = [{
    icon: <Mail className="w-4 h-4" />,
    text: 'info.scuzi@gmail.com',
    href: 'mailto:info.scuzi@gmail.com'
  }, {
    icon: <Phone className="w-4 h-4" />,
    text: '+91-9876543210',
    href: 'tel:+919876543210'
  }, {
    icon: <MapPin className="w-4 h-4" />,
    text: 'Noida, Uttar Pradesh, India',
    href: 'https://maps.google.com/?q=Noida,Uttar+Pradesh,India'
  }];

  // Smooth scroll to section
  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Column 1: Company Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Scuzi.in
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Elevating brands with cutting-edge digital marketing and web solutions. 
                We craft data-driven strategies that convert visitors into loyal customers.
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary transition-all duration-300 transform hover:scale-110" aria-label={`Follow us on ${social.name}`}>
                    {social.icon}
                  </a>)}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <button onClick={() => handleSmoothScroll(link.href)} className="text-gray-300 hover:text-white hover:text-primary transition-colors duration-300 text-left">
                    {link.name}
                  </button>
                </li>)}
            </ul>

            {/* Additional Services */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3 text-gray-200">Our Services</h5>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Search Engine Optimization</li>
                <li>Pay-Per-Click Advertising</li>
                <li>Social Media Marketing</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              {footerContact.map((contact, index) => <div key={index} className="flex items-start group">
                  <div className="mr-3 mt-1 text-primary">
                    {contact.icon}
                  </div>
                  <div>
                    {contact.href ? <a href={contact.href} className="text-gray-300 hover:text-white transition-colors duration-300" target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {contact.text}
                      </a> : <span className="text-gray-300">{contact.text}</span>}
                  </div>
                </div>)}
            </div>

            {/* Business Hours */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3 text-gray-200">Business Hours</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="mt-2 text-xs text-gray-500">All times in IST (Indian Standard Time)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6 mx-0">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm text-left">
                © 2024 Scuzi.in. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with <Heart className="w-3 h-3 inline text-red-500 mx-1" /> for digital excellence
              </p>
            </div>

            {/* Scroll to Top Button */}
            <button onClick={scrollToTop} className="mt-4 md:mt-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 transform hover:scale-110 group" aria-label="Scroll to top">
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;