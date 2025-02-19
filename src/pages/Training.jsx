import SiteButton from "../components/SiteButton";
import Cta from "../components/Cta";
import PopInSection from "../components/PopInSection";
import WhyChooseUs from "../components/WhyChooseUs";
import styles from "./Training.module.css";
import CreativeTrainingLinkBtn from "../components/CreativeTrainingLinkBtn";
import WebTrainingLinkBtn from "../components/WebTrainingLinkBtn";







function Training() {
    return (
        <div className={styles.training}>
        <div>
            <PopInSection >
                <div className={styles.trainingHeader}>
                    <h1> Explore Our <br /> <span> Training <br /> Academial Services</span></h1>
        
    <svg 
    width="80" 
    height="80" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round">
    
   
    <rect x="3" y="3" width="18" height="12" rx="2" ry="2"></rect>
    

    
    <line x1="12" y1="15" x2="12" y2="21"></line>
    <line x1="9" y1="21" x2="15" y2="21"></line>

</svg>
                </div>
            </PopInSection>
            <PopInSection>
                <div className={styles.trainingMain}>
                    <img src="/web-training3.jpg" alt="Training" />
                </div>
            </PopInSection>
            <PopInSection>
            <div className={styles.trainingServices}>
            
              <div className={styles.trainingService}>
                <div className={styles.trainingServiceicon}>
                 
                <svg 
              width="80" 
              height="80" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="12" rx="2" ry="2"></rect>
              <line x1="3" y1="15" x2="21" y2="15"></line>
              <line x1="6" y1="18" x2="18" y2="18"></line>
              <line x1="9" y1="21" x2="15" y2="21"></line>
            </svg>
          </div>
          <h2>Web Design & Development Training</h2>
          <p>
            Learn to create stunning and responsive websites using HTML, CSS, JavaScript, and modern frameworks. 
            Our expert-led training equips you with real-world skills to design and develop professional websites.
          </p>
          <WebTrainingLinkBtn />
        </div>

      
        <div className={styles.trainingService}>
          <div className={styles.trainingServiceicon}>
          <svg 
              width="80" 
              height="80" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="12" rx="2" ry="2"></rect>
              <circle cx="12" cy="12" r="3"></circle>
              <line x1="12" y1="15" x2="12" y2="21"></line>
              <line x1="6" y1="21" x2="18" y2="21"></line>
            </svg>
          </div>
          <h2>Creative Graphic Design Training</h2>
          <p>
            Master the art of design with Adobe Photoshop, Illustrator, InDesign and CoreDraw. 
            Learn branding, typography, and visual communication to create compelling
             graphics for digital and print media.
              <CreativeTrainingLinkBtn />
          </p>
          
        </div>
              
            </div>
            </PopInSection>
            <WhyChooseUs />
            <Cta />
        </div>
                    
                
                </div>
    )
}

export default Training
