import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

/**
 * Hero Section Component
 * Features:
 * - Animated gradient background
 * - Compelling headline and subheadline
 * - Primary and secondary CTA buttons
 * - Responsive design with professional typography
 */
const Hero: React.FC = () => {
  // Smooth scroll function for CTA buttons
  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg"></div>
      {/*Backgroung image*/}
      <div className="absolute inset-0 bg-cover bg-center filter blur-lg"
      style={{ backgroundImage: "url('/bk.jpg')" }}></div>

      
      {/* Background Overlay */}
      <div className="absolute inset-0  from-black/40 to-transparent bg-[#344e41]"></div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold leading-tight mb-6 md:mb-8 animate-fade-in-up">
            Elevate Your Brand with{' '}<br></br>
            <span className="block lg:inline">
              Cutting-Edge Digital Marketing
            </span>
            <span className="block text-white-300">
              & Web Solutions
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-100 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up px-2" style={{
          animationDelay: '0.2s'
        }}>
            We craft data-driven strategies and stunning websites that convert visitors into loyal customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            {/* Primary CTA */}
            <button onClick={() => handleSmoothScroll('#services')} className="btn-hero group flex items-center gap-3" >
              Explore Our Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300"  />
            </button>

            {/* Secondary CTA */}
            <button onClick={() => handleSmoothScroll('#portfolio')} className="btn-outline-hero group flex items-center gap-3 font-bold text-slate-200" >
              <PlayCircle size={20} />
              View Our Work
            </button>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#d9ed92] mb-2">500+</div>
              <div className="text-gray-200 text-sm md:text-base">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#d9ed92] mb-2">98%</div>
              <div className="text-gray-200 text-sm md:text-base">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#d9ed92] mb-2">5+</div>
              <div className="text-gray-200 text-sm md:text-base">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#d9ed92] mb-2" >24/7</div>
              <div className="text-gray-200 text-sm md:text-base">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
    <hr></hr>
};
export default Hero;