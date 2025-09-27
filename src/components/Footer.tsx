import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUp, Heart,MessageCircle } from 'lucide-react';

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
    name: 'Whatsapp',
    href: 'https://wa.me/916202620905',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M12.04 2C6.5 2 2 6.27 2 11.7c0 2.04.64 3.94 1.75 5.5L2 22l5-1.6c1.5.82 3.25 1.3 5.04 1.3 5.55 0 10.04-4.27 10.04-9.7S17.6 2 12.04 2zm0 17.5c-1.52 0-3-.43-4.25-1.25l-.3-.2-3 .95.96-2.86-.2-.3c-.96-1.33-1.48-2.88-1.48-4.44 0-4.06 3.43-7.36 7.7-7.36s7.7 3.3 7.7 7.36-3.43 7.36-7.7 7.36zm4.16-5.47c-.23-.12-1.37-.67-1.58-.74-.21-.08-.36-.12-.52.12-.16.23-.6.73-.73.88-.13.15-.27.17-.5.06-.23-.12-.97-.35-1.85-1.12-.68-.61-1.14-1.36-1.27-1.59-.13-.23-.01-.35.1-.47.1-.1.23-.27.35-.4.12-.13.16-.23.23-.38.07-.15.04-.29-.02-.41-.06-.12-.52-1.25-.71-1.72-.19-.46-.38-.4-.52-.4-.13 0-.29-.02-.44-.02s-.41.06-.62.29c-.21.23-.81.79-.81 1.93s.83 2.23.95 2.38c.12.15 1.64 2.53 3.96 3.54.55.24.98.38 1.31.49.55.18 1.05.15 1.45.09.44-.07 1.37-.56 1.57-1.1.19-.54.19-1 .14-1.1-.06-.1-.21-.16-.44-.28z"/>
      </svg>
    ),
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
    text: '+91-6202620905',
    href: 'tel:+916202620905'
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
              {/* <h3 className="text-3xl font-bold text-gradient mb-4">
                Scuzi.in
              </h3> */}<img src="src/assets/logo2.png" alt="Scuzi.in Logo" className="h-8 w-auto lg:h-14" />

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
            {/* <div className="mt-8">
              <h5 className="font-semibold mb-3 text-gray-200">Our Services</h5>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Search Engine Optimization</li>
                <li>Pay-Per-Click Advertising</li>
                <li>Social Media Marketing</li>
                <li>Web Development</li>
              </ul>
            </div> */}
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