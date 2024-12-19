import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import crm from '../../assets/ongoing/freelancecrm.png'
import chatbot from '../../assets/ongoing/geminichat.png'
import checob from '../../assets/ongoing/checob.png'

const OverlappingProjectCards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Checob Clothing Brand',
      description: 'Building a cutting-edge eCommerce platform for Checob, showcasing an exclusive clothing line with seamless shopping experiences.',
      image: checob,
      tags: ['eCommerce', 'Fashion'],
      color: 'from-blue-900 to-blue-700'
    },
    {
      id: 2,
      title: 'Gemini AI Chatbot',
      description: 'Developing an AI-powered chatbot for smoother client onboarding, personalized interactions, and enhancing user support experiences.',
      image: chatbot,
      tags: ['AI', 'Chatbot'],
      color: 'from-purple-900 to-purple-700'
    },
    {
      id: 3,
      title: 'Freelancer CRM Tool',
      description: 'Creating a robust CRM platform tailored for freelancers to manage clients, projects, and finances efficiently.',
      image: crm,
      tags: ['CRM', 'Productivity'],
     color: 'from-indigo-900 to-indigo-700'
    }
  ];
  

  // Automatic card shuffling
  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setActiveCard(prevActive => {
        // If no card is active or last card is active, activate first card
        if (prevActive === null || prevActive === projects[projects.length - 1].id) {
          return projects[0].id;
        }
        
        // Find and activate the next card
        const currentIndex = projects.findIndex(p => p.id === prevActive);
        return projects[currentIndex + 1].id;
      });
    }, 3000); // Shuffle every 3 seconds

    return () => clearInterval(shuffleInterval);
  }, []);

  const cardVariants = {
    initial: (index) => ({
      scale: 1 - index * 0.05,
      y: index * 20,
      zIndex: projects.length - index,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }),
    active: (index) => ({
      scale: 1.05,
      y: -50 - index * 20,
      zIndex: projects.length + 1,
      rotate: index % 2 === 0 ? -2 : 2,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    })
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl"></div>
      
      <div className="relative  flex lg:flex-row flex-col justify-center w-full max-w-4xl mx-auto">
        
        <h2 className=" text-4xl lg:text-8xl font-bold font-cinzel mb-40 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center z-10 relative">
          Our Ongoing Projects 
        </h2>
        
        <div className="relative  h-[500px] w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate={activeCard === project.id ? "active" : "initial"}
              className={`absolute w-full max-w-md mx-auto lg:left-1/2 -translate-x-1/2 
                bg-gradient-to-br ${project.color} 
                rounded-2xl shadow-2xl cursor-pointer 
                transform transition-all duration-300 origin-bottom`}
              style={{ top: `${index * 20}px` }}
              onClick={() => setActiveCard(activeCard === project.id ? null : project.id)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover rounded-t-2xl opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-t-2xl"></div>
              </div>
              
              <div className="p-6 pt-4 relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                
                <p className="text-white/80 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex justify-center space-x-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/10 text-xs text-white/80 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverlappingProjectCards;