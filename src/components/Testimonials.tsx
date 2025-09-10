import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

/**
 * Testimonials Section Component
 * Features:
 * - Automatic rotating carousel
 * - Manual navigation controls
 * - Star ratings and client information
 * - Responsive design for all devices
 */

// Testimonial interface
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  position: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Scuzi.in transformed our online presence! Their team is professional, creative, and delivered results beyond our expectations. Our website traffic increased by 250% within just 3 months.",
      name: "John Smith",
      company: "ABC Corp",
      position: "CEO",
      rating: 5
    },
    {
      id: 2,
      quote: "Working with Scuzi.in was a game-changer for our business. Their digital marketing strategies helped us reach new customers and significantly boost our ROI. Highly recommended!",
      name: "Sarah Johnson",
      company: "TechStart Inc",
      position: "Marketing Director",
      rating: 5
    },
    {
      id: 3,
      quote: "The team at Scuzi.in understands the digital landscape like no other. They developed a stunning website for us and their SEO expertise brought us to the top of Google rankings.",
      name: "Michael Chen",
      company: "GreenLeaf Solutions",
      position: "Founder",
      rating: 5
    },
    {
      id: 4,
      quote: "Exceptional service and outstanding results! Scuzi.in helped us completely revamp our social media strategy and the engagement rates speak for themselves. True professionals!",
      name: "Emily Rodriguez",
      company: "Fashion Forward",
      position: "Brand Manager",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navigate to previous testimonial
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  // Navigate to next testimonial
  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  // Navigate to specific testimonial
  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="card-testimonial relative min-h-[300px] flex items-center">
            <div className="w-full text-center px-6 md:px-12">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />

              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-medium italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Client Info */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary font-medium">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create the next testimonial together. Contact us today to start your digital transformation journey.
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="btn-hero"
          >
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;