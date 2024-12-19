import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

function Aboutus() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      delay: 0.2
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      delay: 0.4
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 to-primary-cyan/20 animate-gradient-x" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Code className="w-16 h-16 text-primary-cyan mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-purple to-primary-cyan bg-clip-text text-transparent">
              About Our Agency
            </h1>
            <p className="text-xl text-gray-300">
              We're a passionate team of developers, designers, and innovators dedicated to crafting exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-black/50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We strive to transform innovative ideas into powerful digital solutions that drive business growth and create meaningful user experiences. Our commitment to excellence and cutting-edge technology ensures we deliver results that exceed expectations.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-cyan mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: member.delay }}
              className="text-center"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-2 border-primary-purple"
              />
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-primary-cyan">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutus;