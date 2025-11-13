import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/**
 * Main Index Page Component
 * 
 * This is the complete Scuzi.in digital marketing agency website featuring:
 * - Professional sticky navigation with smooth scrolling
 * - Engaging hero section with animated background
 * - Comprehensive services showcase
 * - About section highlighting company values
 * - Portfolio gallery with modal functionality
 * - Client testimonials carousel
 * - Contact form and industries served
 * - Professional footer with social links
 * 
 * The page is fully responsive and optimized for all devices.
 * All animations and interactions are built with performance in mind.
 */
const Index: React.FC = () => {
  // Add scroll-based animations when elements come into view
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in animations
    const elementsToAnimate = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elementsToAnimate.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  // Update page title and meta description for SEO
  useEffect(() => {
    document.title = 'Scuzi.in - Digital Marketing & Web Development Agency | SEO, PPC, Web Design Services';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Scuzi.in is a leading digital marketing and web development agency in Noida. We offer SEO, PPC, social media marketing, web design, and analytics services to elevate your brand and drive business growth.'
      );
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Scuzi.in - Digital Marketing & Web Development Agency');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        'Elevate your brand with cutting-edge digital marketing and web solutions. We craft data-driven strategies that convert visitors into loyal customers.'
      );
    }

    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Scuzi.in",
      "description": "Digital Marketing and Web Development Agency",
      "url": "https://scuzi.in",
      "logo": "https://scuzi.in/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210",
        "contactType": "customer service",
        "email": "info.scuzi@gmail.com",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://linkedin.com/company/scuzi",
        "https://twitter.com/scuzi_in",
        "https://instagram.com/scuzi.in"
      ],
      "service": [
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Web Development",
        "Analytics & Reporting"
      ]
    };

    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup structured data on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative">
      {/* Main Website Content */}
      <main className="overflow-x-hidden">
        
        {/* Header - Sticky Navigation */}
        <Header />
        
        {/* Hero Section - Home */}
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* About Us Section */}
        <About />
        
        {/* Portfolio Section */}
        <Portfolio />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Contact Section */}
        <Contact />
        
      </main>

      {/* Footer */}
      <Footer />

      {/* Accessibility: Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default Index;