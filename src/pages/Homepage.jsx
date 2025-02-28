import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import PortfolioCarousel from "../components/PortfolioCarousel";
import Services from "../components/Services";
import TestimonialCarousel from "../components/TestimonialCarousel";



function Homepage() {
    return (
        <div className="homepage">
           
            <Hero />
            <HomeAbout />
            <Services />
            <PortfolioCarousel />
            <TestimonialCarousel />
 
           
        </div>
    )
}

export default Homepage
