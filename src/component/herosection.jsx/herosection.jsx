import { useState, useEffect } from 'react'
import uiIcon from '../../assets/ui-ux.png'
import webd from '../../assets/webd.png'
import designicon from '../../assets/design.png'
import gameicon from '../../assets/game-console.png'
import product from '../../assets/pen-tablet.png'
import mobileicon from '../../assets/mobile-app.png'
import { easeOut, motion, useInView} from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function HeroSection() {
       const ref = useRef(null)
       const inView = useInView(ref,{once : false})
       const variant = {
              visible : {opacity : 1 , y : 0 , transition : {ease : easeOut , duration : 1 }},
              hidden : {opacity : 0 , y : 100}
       }

       const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

       useEffect(() => {
         const handleResize = () => {
           setIsMobile(window.innerWidth < 768)
         }

         window.addEventListener('resize', handleResize)
         return () => window.removeEventListener('resize', handleResize)
       }, [])

       const [openSections, setOpenSections] = useState({
         webDev: false,
         uiUx: false,
         graphicDesign: false,
         gameDev: false,
         appDev: false,
         packaging: false
       })

       const toggleSection = (section) => {
         setOpenSections(prev => ({
           ...Object.fromEntries(
             Object.keys(prev).map(key => [key, false])
           ),
           [section]: !prev[section]
         }))
       }

       const ServiceCard = ({ icon, title, description, isOpen, onToggle }) => {
         return (
           <div 
             className='bg-black/70 rounded-lg mb-4 overflow-hidden transition-all duration-300 ease-in-out'
             onClick={onToggle}
           >
             <div className='flex items-center justify-between p-4 cursor-pointer'>
               <div className='flex items-center space-x-4'>
                 <img className='h-12 w-12 object-contain' src={icon} alt={title} />
                 <span className='text-xl text-white font-bold'>{title}</span>
               </div>
               {isOpen ? <ChevronUp className='text-white' /> : <ChevronDown className='text-white' />}
             </div>
             
             {isOpen && (
               <motion.div 
                 initial={{ opacity: 0, height: 0 }}
                 animate={{ opacity: 1, height: 'auto' }}
                 transition={{ duration: 0.3 }}
                 className='p-4 pt-0 text-white font-[Abel]'
               >
                 {description}
               </motion.div>
             )}
           </div>
         )
       }

       const DesktopView = () => {
         return (
           <div> 
                    <div className='flex items-center justify-center flex-col bg-black px-4' >
             
             <motion.div 
                 ref={ref} 
                 variants={variant} 
                 initial='hidden' 
                 animate={inView?'':'visible'} 
                 className="text-3xl md:text-6xl lg:text-8xl cinzel-bold-header bg-black text-white text-center"
             > 
                 <span className="text-sky-400" >Designing</span> What You Imagine
             </motion.div>
              <motion.div 
                 ref={ref} 
                 variants={variant} 
                 initial='hidden' 
                 animate={inView?'':'visible'} 
                 className="text-3xl md:text-6xl lg:text-8xl cinzel-bold-header bg-black text-white text-center"
              >
                 Building <span className="text-sky-400" >What</span> You Need
              </motion.div>
             
             </div>
                 
             <div className="text-white bg-black font-[aghartibold] py-12 md:py-24" >
            
            <div className='flex flex-col md:flex-row items-center justify-evenly md:py-10 px-4 lg:px-28' >
                <div 
                    className='flex flex-col md:flex-row items-center justify-center md:gap-5 md:w-1/2 mb-10 md:mb-0 cursor-pointer'
                    onClick={() => toggleSection('webDev')}
                > 
                    <div className='mb-4 md:mb-0 flex items-center justify-center '>
                        <img className='h-16 md:h-24 w-auto' src={webd} />
                        <div className='md:hidden ml-4 flex-grow flex justify-end'>
                            {openSections.webDev ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>
                    <div className='flex gap-2 md:gap-4 flex-col text-center md:text-left w-full'>
                        <div className="text-2xl md:text-5xl" >
                            WEB DEVELOPMENT
                        </div>
                        <motion.div 
                            initial={{ opacity: 0.5, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className={`text-sm md:text-xl font-[Abel] 
                                ${openSections.webDev || 'hidden md:block'}
                            `}
                        >
                            Crafting responsive, high-performance websites tailored to your business needs. We build 
                            with the latest technologies to ensure your online presence is fast, secure, and scalable
                        </motion.div>
                    </div>
                </div>

                <div 
                    className='flex flex-col md:flex-row items-center justify-center md:gap-5 md:w-1/2 cursor-pointer'
                    onClick={() => toggleSection('uiUx')}
                > 
                    <div className='mb-4 md:mb-0 flex items-center justify-center '>
                        <img className='h-16 md:h-24 w-auto' src={uiIcon} />
                        <div className='md:hidden ml-4 flex-grow flex justify-end'>
                            {openSections.uiUx ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>
                    <div className='flex gap-2 md:gap-4 flex-col text-center md:text-left w-full'>
                        <div className="text-2xl md:text-5xl" >
                            UI/UX
                        </div>
                        <motion.div 
                            initial={{ opacity: 0.5, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className={`text-sm md:text-xl font-[Abel] 
                                ${openSections.uiUx || 'hidden md:block'}
                            `}
                        >
                            Designing user-centric interfaces that are not only visually appealing but also intuitive and 
                            seamless. Elevate your user experience with our expert design solutions.
                        </motion.div>
                    </div>
                </div>
            </div>

            <br></br>
            <div className='px-4 md:px-20' >
                <svg width="100%" height="1" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="white" stroke-width="0.5" />
                </svg>
            </div>

            <br></br>

            <div className='flex flex-col md:flex-row items-center justify-evenly md:py-10 px-4 lg:px-28' >
                <div 
                    className='flex flex-col md:flex-row items-center justify-center md:gap-5 md:w-1/2 mb-10 md:mb-0 cursor-pointer'
                    onClick={() => toggleSection('graphicDesign')}
                > 
                    <div className='mb-4 md:mb-0 flex items-center justify-center '>
                        <img className='h-16 md:h-24 w-auto' src={designicon} />
                        <div className='md:hidden ml-4 flex-grow flex justify-end'>
                            {openSections.graphicDesign ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>
                    <div className='flex gap-2 md:gap-4 flex-col text-center md:text-left w-full'>
                        <div className="text-2xl md:text-5xl" >
                            GRAPHIC DESIGN
                        </div>
                        <motion.div
                            initial={{ opacity: 0.5, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className={`text-sm md:text-xl font-[Abel] 
                                ${openSections.graphicDesign || 'hidden md:block'}
                            `}
                        >
                            Creating visually compelling designs that resonate with your brand identity. From logos to 
                            packaging, our designs communicate your message with impact
                        </motion.div>
                    </div>
                </div>

                <div 
                    className='flex flex-col md:flex-row items-center justify-center md:gap-5 md:w-1/2 cursor-pointer'
                    onClick={() => toggleSection('gameDev')}
                > 
                    <div className='mb-4 md:mb-0 flex items-center justify-center '>
                        <img className='h-16 md:h-24 w-auto' src={gameicon} />
                        <div className='md:hidden ml-4 flex-grow flex justify-end'>
                            {openSections.gameDev ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>
                    <div className='flex gap-2 md:gap-4 flex-col text-center md:text-left w-full'>
                        <div className="text-2xl md:text-5xl" >
                            GAME DEVELOPMENT
                        </div>
                        <motion.div 
                            initial={{ opacity: 0.5, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className={`text-sm md:text-xl font-[Abel] 
                                ${openSections.gameDev || 'hidden md:block'}
                            `}
                        >
                            Bringing your game concepts to life with immersive gameplay, stunning graphics, and smooth 
                            performance. We create engaging experiences across various platforms
                        </motion.div>
                    </div>
                </div>
            </div>

            <br></br>
            <div className='px-4 md:px-20' >
                <svg width="100%" height="1" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="white" stroke-width="0.5" />
                </svg>
            </div>

            <br></br>

            <div className='flex flex-col md:flex-row items-center justify-evenly md:py-10 px-4  lg:px-28' >
                <div 
                    className='flex flex-col md:flex-row items-center justify-center md:gap-5 md:w-1/2 mb-10 md:mb-0 cursor-pointer'
                    onClick={() => toggleSection('appDev')}
                > 
                    <div className='mb-4 md:mb-0 flex items-center justify-center '>
                        <img className='h-16 md:h-24 w-auto' src={mobileicon} />
                        <div className='md:hidden ml-4 flex-grow flex justify-end'>
                            {openSections.appDev ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>
                    <div className='flex gap-2 md:gap-4 flex-col text-center md:text-left w-full'>
                        <div className="text-2xl md:text-5xl" >
                            APP DEVELOPMENT
                        </div>
                        <motion.div 
                            initial={{ opacity: 0.5, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className={`text-sm md:text-xl font-[Abel] 
                                ${openSections.appDev || 'hidden md:block'}
                            `}
                        >
                            From concept to launch, we develop apps that are feature-rich, reliable, and optimized for 
                            both Android and iOS. Let's turn your ideas into a fully functional app.
                        </motion.div>
                    </div>
                </div>

                <div 
                    className='flex flex-col md:flex-row items-center justify-center md:gap-5 md:w-1/2 cursor-pointer'
                    onClick={() => toggleSection('packaging')}
                > 
                    <div className='mb-4 md:mb-0 flex items-center justify-center '>
                        <img className='h-16 md:h-24 w-auto' src={product} />
                        <div className='md:hidden ml-4 flex-grow flex justify-end'>
                            {openSections.packaging ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>
                    <div className='flex gap-2 md:gap-4 flex-col text-center md:text-left w-full'>
                        <div className="text-2xl md:text-5xl" >
                            PACKAGING & PRINT DESIGN
                        </div>
                        <motion.div 
                            initial={{ opacity: 0.5, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className={`text-sm md:text-xl font-[Abel] 
                                ${openSections.packaging || 'hidden md:block'}
                            `}
                        >
                            Designing standout packaging and print materials that captivate and communicate your brand's
                            message effectively. From packaging to posters, we create visuals that make an impact.
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
         </div>
         )
       }

       const MobileView = () => {
         return (
           <div className='bg-black text-white'>
             {/* Hero Text */}
             <div className='text-center py-12 px-4'>
               <motion.h1 
                //  ref={ref} 
                //  variants={variant} 
                //  initial='hidden' 
                //  animate={inView?'':'visible'} 
                 className="text-3xl md:text-6xl lg:text-8xl cinzel-bold-header"
               > 
                 <span className="text-sky-400">Designing</span> What You Imagine
               </motion.h1>
               <motion.h1 
                //  ref={ref} 
                //  variants={variant} 
                //  initial='hidden' 
                //  animate={inView?'':'visible'} 
                 className="text-3xl md:text-6xl lg:text-8xl cinzel-bold-header"
               >
                 Building <span className="text-sky-400">What</span> You Need
               </motion.h1>
             </div>

             {/* Services Section */}
             <div className='px-4 md:px-20 space-y-4'>
               <ServiceCard 
                 icon={webd} 
                 title="WEB DEVELOPMENT" 
                 description="Crafting responsive, high-performance websites tailored to your business needs. We build with the latest technologies to ensure your online presence is fast, secure, and scalable"
                 isOpen={openSections.webDev}
                 onToggle={() => toggleSection('webDev')}
               />
               <ServiceCard 
                 icon={uiIcon} 
                 title="UI/UX" 
                 description="Designing user-centric interfaces that are not only visually appealing but also intuitive and seamless. Elevate your user experience with our expert design solutions."
                 isOpen={openSections.uiUx}
                 onToggle={() => toggleSection('uiUx')}
               />
               <ServiceCard 
                 icon={designicon} 
                 title="GRAPHIC DESIGN" 
                 description="Creating visually compelling designs that resonate with your brand identity. From logos to packaging, our designs communicate your message with impact"
                 isOpen={openSections.graphicDesign}
                 onToggle={() => toggleSection('graphicDesign')}
               />
               <ServiceCard 
                 icon={gameicon} 
                 title="GAME DEVELOPMENT" 
                 description="Bringing your game concepts to life with immersive gameplay, stunning graphics, and smooth performance. We create engaging experiences across various platforms"
                 isOpen={openSections.gameDev}
                 onToggle={() => toggleSection('gameDev')}
               />
               <ServiceCard 
                 icon={mobileicon} 
                 title="APP DEVELOPMENT" 
                 description="From concept to launch, we develop apps that are feature-rich, reliable, and optimized for both Android and iOS. Let's turn your ideas into a fully functional app."
                 isOpen={openSections.appDev}
                 onToggle={() => toggleSection('appDev')}
               />
               <ServiceCard 
                 icon={product} 
                 title="PACKAGING & PRINT DESIGN" 
                 description="Designing standout packaging and print materials that captivate and communicate your brand's message effectively. From packaging to posters, we create visuals that make an impact."
                 isOpen={openSections.packaging}
                 onToggle={() => toggleSection('packaging')}
               />
             </div>
           </div>
         )
       }

    return isMobile ? <MobileView /> : <DesktopView />
}