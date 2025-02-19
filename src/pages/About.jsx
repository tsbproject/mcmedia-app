import styles from "./About.module.css";
import HeaderButton from "../components/HeaderButton";
import { Link } from "react-router-dom";
import Cta from "../components/Cta";
import WhyChooseUs from "../components/WhyChooseUs";
import PopInSection from "../components/PopInSection";


function About() {
    return (
        <div className={styles.about}>
             
                 
                  <PopInSection>
                    <div className={styles.aboutdetails}>
                  
                       <div className={styles.aboutdetailstext}>
                         <h1>Passionate about creating digital solutions that help businesses</h1>
                         <p>Welcome to Marvel Creative Media, your trusted partner 
                            for Website and Mobile App development. We are a team of 
                            experienced professionals who are passionate about creating 
                            digital solutions that help businesses and individuals
                             achieve their goals.
                         </p>

                         <p>At Marvel Creative Media, we understand that every project is unique, 
                            and we take the time to listen to our clients&apos; needs and objectives.
                             Whether you need a simple website, a complex mobile app, 
                             or a customized digital solution, we can help you bring your vision to life.
                         </p>

                         <p>We have team of designers, developers, and project managers work closely with you
                             to ensure that your project is delivered on time, within budget, and to your
                              complete satisfaction. We use the latest technologies and best practices to 
                              create solutions that are scalable, secure, and user-friendly.
                         </p>

                         <p>We are dedicated to providing cut-edged and distinct customer service and support
                             throughout the development process and after. We are always available to respond 
                             to your enquries, attend to your concerns, and offers guidance and advice to help 
                             you achieve your digital goals.
                         </p>

                            <HeaderButton />
                       </div>
                     
                      

                       <img src="/designer-small.jpg" alt="About us"></img>
                     
                    </div>
                    </PopInSection>

                  <Cta />
<PopInSection>
  <section className={styles.aboutcard}>
      {/* Mission */}
      <div className={styles.card}>
        <div className={styles.icon}>
          {/* SVG Icon for Mission */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L15 8l6 .9-4.5 4.4 1 6L12 17l-5.5 2.8 1-6L3 8.9l6-.9L12 2z" />
          </svg>
        </div>
        <h3>Our Mission</h3>
        <p>
        our mission is to provide innovative and cost-effective digital
         solutions that help our clients achieve their business goals.
          We go extra length to deliver business focused quality websites,
           mobile applications, and digital designs that are not only 
           visually appealing but also user-friendly and secure.
        </p>
      </div>

      {/* Vision */}
      <div className={styles.card}>
        <div className={styles.icon}>
          {/* SVG Icon for Vision */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2C6.5 2 2 12 2 12s4.5 10 10 10 10-10 10-10S17.5 2 12 2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <h3>Our Vision</h3>
        <p>
        We are focus into a future where businesses and individuals easily
         have an access to high-quality digital solutions that help them
          achieve their goals. We believe utilizing the latest technologies
           couple best practices, we can create digital solutions that are
            not only visually appealing but also user-friendly, secure, 
            and scalable.
        </p>
      </div>

      {/* Core Values */}
      <div className={styles.card}>
        <div className={styles.icon}>
          {/* SVG Icon for Core Values */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8l-4 4-4-4" />
          </svg>
        </div>
        <h3>Our Core Values</h3>
        <p>
        At Marvel Creative Media, we blend innovation, 
        user-centric design, and cutting-edge technology 
        to craft high-quality web, app, and creative
         solutions that inspire, engage, and drive impact.
        </p>
      </div>
    </section>
    </PopInSection>

    
  

    <WhyChooseUs />

    <Cta />
    
    
 </div>
       
    )
}

export default About
