import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NimbushubImage from '../../assets/sites/nimbushub.png'
import chatting from '../../assets/ProductDesign/Image3.png'
import vibe from '../../assets/ProductDesign/Image15.png'
import SiteSection from './site';

const ProjectSlider = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Building future-ready digital solutions! We specialize in crafting scalable architectures for web and mobile platforms, ensuring seamless growth and robust performance for your business needs",
      technologies: ["Node.js", "React", "AWS", "MongoDB"]      ,
      image: NimbushubImage,
      link: "#",
      features: [
        "Custom scalable architectures for growth.",
        "High performance and reliability.",
        "Modern frameworks and cloud-ready.",
        "Ongoing support and maintenance."
      ]      
    },
    {
      title: "Social Media Dashboard",
      description: "Discover your unique music journey! Log in with Spotify, Apple Music, or YouTube Music to get a personalized receipt of your listening habits and favorite tracks.",
      technologies: ["React Native", "APIs", "Node.js", "Firebase"]  ,
      image: chatting,
      link: "#",
      features: [
        "Login with Spotify, Apple Music, or YouTube Music.",
        "Personalized music taste receipts.",
        "Top artists, genres, and tracks insights.",
        "Shareable and user-friendly design."
      ]
      
    },
    {
      title: "Task Management App",
      description: "Your music, your way! Explore, stream, and create playlists with an intuitive interface designed for music lovers. A seamless listening experience awaits.",
      technologies: ["React", "Node.js", "GraphQL", "MongoDB"]  ,
      image: vibe,
      link: "#",
      features: [
        "Seamless music streaming.",
        "Custom playlists creation.",
        "AI-powered music discovery.",
        "Cross-device compatibility."
      ]
      
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => 
      (prev + 1) % projects.length
    );
  };

  const prevProject = () => {
    setCurrentProject((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return ( 
    <div>
        <SiteSection></SiteSection>
    <div className="relative w-full h-screen flex items-center overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <div 
          key={currentProject} 
          className="absolute inset-0 flex flex-col md:flex-row"
        >
          {/* Image Section */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-0 md:pl-24"
          >
           <div className=" w-full aspect-video">
              <img 
                src={projects[currentProject].image} 
                alt={projects[currentProject].title}
                className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-zinc-700"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8"
          >
            <div className="max-w-xl text-center md:text-left">
              <motion.h2 
                className="text-2xl md:text-4xl font-bold mb-4 text-zinc-100"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {projects[currentProject].title}
              </motion.h2>

              <motion.p 
                className="text-base md:text-lg text-zinc-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {projects[currentProject].description}
              </motion.p>

              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-zinc-200">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <motion.span 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-zinc-700 text-zinc-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-zinc-200">Key Features</h3>
                <ul className="space-y-2 ">
                  {projects[currentProject].features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-zinc-400  justify-start"
                    >
                      <span className="mr-2 text-emerald-500">●</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.a
                href={projects[currentProject].link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-500 transition-colors"
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.button
        onClick={prevProject}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-zinc-700/30 text-zinc-300 rounded-full p-3 hover:bg-zinc-700/50"
      >
        <ChevronLeft className="w-6 md:w-8 h-6 md:h-8" />
      </motion.button>

      <motion.button
        onClick={nextProject}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-zinc-700/30 text-zinc-300 rounded-full p-3 hover:bg-zinc-700/50"
      >
        <ChevronRight className="w-6 md:w-8 h-6 md:h-8" />
      </motion.button>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.5 }}
            animate={{ 
              opacity: index === currentProject ? 1 : 0.5,
              scale: index === currentProject ? 1.2 : 1 
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentProject ? 'bg-emerald-500' : 'bg-zinc-600'
            }`}
            onClick={() => setCurrentProject(index)}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectSlider;