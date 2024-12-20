
import Hero from '../component/Hero';
import Services from '../component/Services';
import HeroSection from '../component/herosection.jsx/herosection';
import GraphicPannel from '../component/graphicpannnel/graphicpannel';
import ProjectSlider from '../component/sitessection/sitemain';
import OverlappingProjectCards from '../component/ongoingupdate/status';



function Home() {

 
  return (
    <><div>
     
      <Hero></Hero>
      <HeroSection></HeroSection>
      <GraphicPannel></GraphicPannel>
      <Services/> 
       <ProjectSlider></ProjectSlider>
      <OverlappingProjectCards></OverlappingProjectCards>
     
    </div>
    </>
  );
}

export default Home;
