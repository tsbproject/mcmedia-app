import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import Services from "../components/Services";
import TestimonialCarousel from "../components/TestimonialCarousel";



function Homepage() {
    return (
        <div className="homepage">
           
            <Hero />
            <HomeAbout />
            <Services />
            <TestimonialCarousel />
 
           
        </div>
    )
}

export default Homepage
