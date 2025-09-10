import React from 'react';
import { 
  Search, 
  MousePointer, 
  Users, 
  PenTool, 
  Code, 
  BarChart3,
  Target
} from 'lucide-react';

/**
 * Services Section Component
 * Features:
 * - Grid layout of service cards
 * - Icons and detailed descriptions for each service
 * - Hover animations and professional styling
 * - Comprehensive digital marketing and web development services
 */
const Services: React.FC = () => {
  // Service data with icons, titles, descriptions, and feature points
  const services = [
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Search Engine Optimization (SEO)",
      description: "Boost your visibility on Google and attract organic traffic with our proven SEO strategies.",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Technical SEO",
        "Link Building"
      ]
    },
    {
      icon: <MousePointer className="w-12 h-12 text-primary" />,
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive targeted leads and maximize ROI with expertly managed PPC campaigns on Google Ads and social media.",
      features: [
        "Google Ads",
        "Facebook Ads",
        "Campaign Optimization",
        "A/B Testing"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Social Media Marketing",
      description: "Build a strong brand community and engage your audience across all major social platforms.",
      features: [
        "Content Strategy",
        "Community Management",
        "Influencer Marketing",
        "Social Analytics"
      ]
    },
    {
      icon: <PenTool className="w-12 h-12 text-primary" />,
      title: "Content Marketing",
      description: "Tell your brand's story with high-quality content that educates, entertains, and converts.",
      features: [
        "Content Strategy",
        "Blog Writing",
        "Video Content",
        "Email Marketing"
      ]
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Website Design & Development",
      description: "From sleek landing pages to complex e-commerce platforms, we build websites that are both beautiful and functional.",
      features: [
        "Custom Design",
        "E-commerce",
        "Mobile Optimization",
        "Performance Optimization"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Analytics & Reporting",
      description: "Make informed decisions with comprehensive analytics and transparent reporting on your campaign performance.",
      features: [
        "Google Analytics",
        "Custom Dashboards",
        "Conversion Tracking",
        "ROI Reporting"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital marketing and web development solutions 
            to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-service group"
            >
              {/* Service Icon */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Ready to take your business to the next level?
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="btn-hero group"
          >
            Get Started Today
            <Target className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;