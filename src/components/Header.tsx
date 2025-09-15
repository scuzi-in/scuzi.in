import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component with Sticky Navigation
 * Features:
 * - Responsive navigation with mobile hamburger menu
 * - Smooth scrolling to sections
 * - Glass morphism effect on scroll
 * - Professional branding for Scuzi.in
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with their corresponding section IDs
  const navItems = [{
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

  // Smooth scroll function for navigation links
  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'navbar-glass shadow-md' : 'navbar-glass shadow-md'}`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-12 py-0 px-0 mx-0 my-[10px] rounded-none bg-[#977dff]/0">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleSmoothScroll('#home')}>
            <h1 className="text-2xl text-gradient font-bold text-slate-50 lg:text-4xl">
              Scuzi.in
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => <button key={item.name} onClick={() => handleSmoothScroll(item.href)} className="btn-ghost transition-colors duration-300 text-base bg-[26658c] font-medium bg-[#977dff]/0 text-violet-900">
                {item.name}
              </button>)}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button onClick={() => handleSmoothScroll('#contact')} className="btn-secondary">
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-700 hover:text-primary transition-colors duration-300" aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 navbar-glass border-t border-gray-200 shadow-lg">
            <div className="py-4 space-y-2">
              {navItems.map(item => <button key={item.name} onClick={() => handleSmoothScroll(item.href)} className="block w-full text-left px-6 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-300">
                  {item.name}
                </button>)}
              <div className="px-6 py-3">
                <button onClick={() => handleSmoothScroll('#contact')} className="btn-secondary w-full">
                  Get a Free Quote
                </button>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;