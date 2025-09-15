import React, { useState } from 'react';
import { ExternalLink, Github, X, ArrowLeft, ArrowRight } from 'lucide-react';

// Import portfolio images
import techCorpImage from '../assets/portfolio-techcorp-ecommerce.jpg';
import healthPlusImage from '../assets/portfolio-healthplus-marketing.jpg';
import eduLearnImage from '../assets/portfolio-edulearn-lms.jpg';
import restaurantHubImage from '../assets/portfolio-restauranthub-brand.jpg';
import financeFlowImage from '../assets/portfolio-financeflow-app.jpg';
import travelEasyImage from '../assets/portfolio-traveleasy-booking.jpg';

/**
 * Portfolio Section Component
 * Features:
 * - Filterable project gallery
 * - Modal view for project details
 * - Professional project showcases
 * - Responsive grid layout
 */
//color chnage 117
// Portfolio project interface
interface Project {
  id: number;
  title: string;
  description: string;
  services: string[];
  category: string;
  image: string;
  detailDescription: string;
  technologies: string[];
  results: string[];
}
const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample portfolio projects
  const projects: Project[] = [{
    id: 1,
    title: "TechCorp E-commerce Platform",
    description: "Complete e-commerce solution with integrated payment gateway and inventory management.",
    services: ["Web Development", "SEO", "PPC"],
    category: "E-commerce",
    image: techCorpImage,
    detailDescription: "A comprehensive e-commerce platform built from the ground up for TechCorp, featuring modern design, seamless user experience, and robust backend functionality.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    results: ["300% increase in online sales", "50% reduction in cart abandonment", "95% customer satisfaction"]
  }, {
    id: 2,
    title: "HealthPlus Digital Marketing Campaign",
    description: "Multi-channel digital marketing strategy that increased patient acquisition by 200%.",
    services: ["SEO", "Content Marketing", "Social Media"],
    category: "Healthcare",
    image: healthPlusImage,
    detailDescription: "Comprehensive digital marketing strategy for HealthPlus clinic, focusing on patient education and local SEO optimization.",
    technologies: ["Google Ads", "Facebook Ads", "Content CMS", "Analytics"],
    results: ["200% increase in patient acquisition", "150% boost in organic traffic", "400% growth in social engagement"]
  }, {
    id: 3,
    title: "EduLearn Learning Management System",
    description: "Custom LMS platform with interactive features and progress tracking.",
    services: ["Web Development", "UX Design"],
    category: "Education",
    image: eduLearnImage,
    detailDescription: "Modern learning management system with interactive coursework, video streaming, and comprehensive progress tracking for educational institutions.",
    technologies: ["React", "Python Django", "PostgreSQL", "AWS"],
    results: ["500+ active users", "40% improvement in course completion", "99.9% uptime achieved"]
  }, {
    id: 4,
    title: "RestaurantHub Brand Identity",
    description: "Complete brand overhaul including website redesign and social media strategy.",
    services: ["Branding", "Web Design", "Social Media"],
    category: "Restaurant",
    image: restaurantHubImage,
    detailDescription: "Complete brand transformation for RestaurantHub, including logo design, website development, and integrated social media marketing strategy.",
    technologies: ["WordPress", "Adobe Creative Suite", "Social Media APIs"],
    results: ["75% increase in reservations", "300% growth in social followers", "50% boost in brand recognition"]
  }, {
    id: 5,
    title: "FinanceFlow Mobile App",
    description: "Personal finance management app with budgeting and investment tracking.",
    services: ["Mobile Development", "UX Design"],
    category: "Finance",
    image: financeFlowImage,
    detailDescription: "Intuitive personal finance mobile application featuring expense tracking, budget management, and investment portfolio monitoring.",
    technologies: ["React Native", "Firebase", "Chart.js", "Plaid API"],
    results: ["10,000+ downloads", "4.8 App Store rating", "60% user retention rate"]
  }, {
    id: 6,
    title: "TravelEasy Booking Platform",
    description: "Travel booking platform with real-time availability and payment processing.",
    services: ["Web Development", "Payment Integration"],
    category: "Travel",
    image: travelEasyImage,
    detailDescription: "Comprehensive travel booking platform connecting travelers with accommodations, featuring real-time availability and secure payment processing.",
    technologies: ["Vue.js", "Express.js", "MySQL", "Payment Gateway APIs"],
    results: ["1000+ bookings monthly", "25% conversion rate improvement", "98% payment success rate"]
  }];

  // Filter categories
  const categories = ['All', 'E-commerce', 'Healthcare', 'Education', 'Restaurant', 'Finance', 'Travel'];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.category === activeFilter);

  // Open project modal
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  // Close project modal
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };
  return <section id="portfolio" className="section-padding bg-gray-50 py-[30px]" style={{ backgroundColor: "#dad7cd" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => <button key={category} onClick={() => setActiveFilter(category)} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category ? 'bg-primary text-primary-foreground shadow-primary' : 'bg-background text-gray-700 hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-md'}`}>
              {category}
            </button>)}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="card-portfolio group cursor-pointer" onClick={() => openProjectModal(project)}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium">View Project</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {service}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>

        {/* Project Modal */}
        {selectedProject && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
            <div className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button onClick={closeProjectModal} className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-300">
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Image */}
                <div className="h-64 bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Description */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">About This Project</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.detailDescription}</p>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => <span key={index} className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">
                        {tech}
                      </span>)}
                  </div>
                </div>

                {/* Results Achieved */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Results Achieved</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.results.map((result, index) => <div key={index} className="bg-primary/5 p-4 rounded-lg text-center">
                        <p className="text-primary font-semibold">{result}</p>
                      </div>)}
                  </div>
                </div>

                {/* Services Provided */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Services Provided</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, index) => <span key={index} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium">
                        {service}
                      </span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </section>;
    
};
export default Portfolio;