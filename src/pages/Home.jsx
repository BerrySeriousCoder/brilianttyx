
import Hero from '../component/Hero';
import Services from '../component/Services';
import HeroSection from '../component/herosection.jsx/herosection';
import Navbar from '../component/navbar/navbar';
import GraphicPannel from '../component/graphicpannnel/graphicpannel';
import image from '../assets/graphic-designs/book.png'
import { FooterMain } from '../component/footer/footerMain';
import ProjectSlider from '../component/sitessection/sitemain';
import OverlappingProjectCards from '../component/ongoingupdate/status';

const dummyContent = [
  {
    title: "Discover Innovation",
    description: "Explore the latest advancements in technology that are shaping the future. From AI to blockchain, the possibilities are endless.",
    content: <div className="p-4 text-white">Content about innovation</div>,
  },
  {
    title: "Empowering Creativity",
    description: "Learn how creativity is being transformed in the digital age. Design, art, and expression are reaching new heights.",
    content: <div className="p-4 text-white">Content about creativity</div>,
  },
  {
    title: "Future of Work",
    description: "The way we work is changing. Remote work, automation, and digital tools are creating new opportunities and challenges.",
    content: <div className="p-4 text-white">Content about future of work</div>,
  },
  {
    title: "Health Revolution",
    description: "Discover the innovations in healthcare, from telemedicine to personalized treatments, that are transforming patient care.",
    content: <div className="p-4 text-white">Content about health</div>,
  },
  {
    title: "Sustainability & Environment",
    description: "Explore the technologies and practices that are driving sustainability efforts and protecting the environment.",
    content: <div className="p-4 text-white">Content about sustainability</div>,
  },
  {
    title: "Space Exploration",
    description: "The final frontier is closer than ever. Discover the new missions, technology, and goals of space exploration.",
    content: <div className="p-4 text-white">Content about space exploration</div>,
  }
];


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={image}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

function Home() {

 
  return (
    <><div>
      <Navbar></Navbar>
      <Hero></Hero>
      <HeroSection></HeroSection>
      <GraphicPannel></GraphicPannel>
      <Services/> 
       <ProjectSlider></ProjectSlider>
      <OverlappingProjectCards></OverlappingProjectCards>
      <FooterMain></FooterMain>
    </div>
    </>
  );
}

export default Home;
