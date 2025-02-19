import styles from "./MobileAppDevelopment.module.css";
import PopInSection from "../components/PopInSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactUsButton from "../components/ContactUsButton";


function MobileAppDevelopment() {
    return (
        <div className={styles.mobileApp}>
<div>
    <PopInSection>
        <div className={styles.maHeader}>
            <h1> Explore Our <br /> <span> Mobile <br /> App Development Services</span></h1>

            <svg 
                width="100" 
                height="100" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round">
            
                
                <rect x="5" y="2" width="14" height="20" rx="3"></rect>


                <circle cx="12" cy="18" r="1"></circle>
                <path d="M9 6h6"></path>
                <path d="M9 10h6"></path>
            </svg>
        </div>
    </PopInSection>
    <PopInSection>
        <div className={styles.maMain}>
            <img src="/web-dev4.jpg" alt="Web development" />
        </div>
    </PopInSection>
    <PopInSection>
    <div className={styles.maServices}>
    
      <div className={styles.maService}>
        <div className={styles.maServiceicon}>
         
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2a4 4 0 0 1 0 8"></path>
            <rect x="8" y="8" width="8" height="12" rx="4"></rect>
            <path d="M8 16h8"></path>
          </svg>
        </div>
        <h2>iOS Mobile App Development</h2>
        <p>
          Craft high-performance and user-friendly iOS apps for
          iPhone and iPad. Our development team specializes in Swift
           and Objective-C to deliver cutting-edge applications tailored 
           for Apple’s ecosystem.
           <ContactUsButton />
        </p>
      </div>

      
      <div className={styles.maService}>
        <div className={styles.maServiceicon}>
      
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="8"></circle>
            <path d="M9 16h6"></path>
            <path d="M8 8l8 8"></path>
            <path d="M16 8l-8 8"></path>
          </svg>
        </div>
        <h2>Android Mobile App Development</h2>
        <p>
          Build feature-rich Android applications that run seamlessly across multiple devices. We use Kotlin and Java to create scalable, secure, and high-performance apps optimized for the Google Play Store.
        </p>
        <ContactUsButton />
      </div>
      
    </div>
    </PopInSection>
    <WhyChooseUs />
</div>
            
        
        </div>
    )
}

export default MobileAppDevelopment
