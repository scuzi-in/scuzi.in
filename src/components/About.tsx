import React from 'react';
import { Lightbulb, Eye, Trophy, Users, Award, Clock } from 'lucide-react';

/**
 * About Us Section Component
 * Features:
 * - Two-column layout with team image and company info
 * - Mission, vision, and values with icons
 * - Professional statistics and achievements
 * - Responsive design for all devices
 */
const About: React.FC = () => {
  // Company values with icons and descriptions
  const values = [{
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Innovation",
    description: "We stay ahead of digital trends and continuously innovate our strategies to deliver cutting-edge solutions."
  }, {
    icon: <Eye className="w-8 h-8 text-primary" />,
    title: "Transparency",
    description: "Clear communication and honest reporting are at the core of our client relationships."
  }, {
    icon: <Trophy className="w-8 h-8 text-primary" />,
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering measurable results that drive your business forward."
  }];

  // Company achievements and statistics
  const achievements = [{
    icon: <Users className="w-6 h-6 text-primary" />,
    number: "200+",
    label: "Happy Clients"
  }, {
    icon: <Award className="w-6 h-6 text-primary" />,
    number: "50+",
    label: "Awards Won"
  }, {
    icon: <Clock className="w-6 h-6 text-primary" />,
    number: "5+",
    label: "Years Experience"
  }];
  return <section id="about" className="section-padding bg-background px-0 py-[3px] " style={{ backgroundColor: "#dad7cd" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">Scuzi.in</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the team and vision behind Scuzi.in's digital marketing excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Team Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center p-8">
                  <Users className="w-24 h-24 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Expert Team</h3>
                  <p className="text-gray-600">Passionate marketers, designers, and developers working together</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong className="text-gray-800">Scuzi.in</strong> is a team of passionate marketers, designers, and developers 
                dedicated to helping businesses succeed in the digital world. We believe in building partnerships, not just projects.
              </p>
              
              <p>
                Our mission is to deliver measurable results and exceptional service that drives real business growth. 
                We combine creativity with data-driven strategies to create digital experiences that convert.
              </p>
              
              <p>
                Founded with the vision to democratize digital marketing excellence, we've helped hundreds of businesses 
                transform their online presence and achieve remarkable growth.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {achievements.map((achievement, index) => <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>)}
          </div>
        </div>

        {/* Call to Action */}
        
      </div>
    </section>;
};
export default About;