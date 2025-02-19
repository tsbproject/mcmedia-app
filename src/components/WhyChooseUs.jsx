import PopInSection from './PopInSection';
import styles from './WhyChooseUs.module.css';


function WhyChooseUs() {
    return (
      <PopInSection>
        <div className={styles.aboutwhychooseus}>
                <img src="/DIGITAL.jpg" alt="Why Choose us" /> 
            
            <div className={styles.whychooseus}>
              <h2 className={styles.title}>Why Choose Marvel Creative Media?</h2>
              
              <div className={styles.grid}>
                {/* Experience & Expertise */}
                <div className={styles.item}>
                  <svg className={styles.whychooseusicon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <h3>Experience & Expertise</h3>
                  <p>Years of industry experience with a skilled team delivering top-notch solutions.</p>
                </div>
        
                {/* Innovative & Creative Solutions */}
                <div className={styles.item}>
                  <svg className={styles.whychooseusicon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
                  </svg>
                  <h3>Innovative & Creative</h3>
                  <p>We push the boundaries of design and technology to craft stunning experiences.</p>
                </div>
        
                {/* Client-Centric Approach */}
                <div className={styles.item}>
                  <svg className={styles.whychooseusicon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"></path>
                    <path d="M15.5 9.5l-4 4-2-2"></path>
                  </svg>
                  <h3>Client-Centric Approach</h3>
                  <p>We prioritize client needs, ensuring personalized and effective solutions.</p>
                </div>
        
                {/* Timely Delivery */}
                <div className={styles.item}>
                  <svg className={styles.whychooseusicon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 6v6l4 2"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <h3>Timely Delivery</h3>
                  <p>We meet deadlines while maintaining quality and creativity.</p>
                </div>
        
                {/* Affordable Pricing */}
                <div className={styles.item}>
                  <svg className={styles.whychooseusicon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1v22"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 1 1 0 7H6"></path>
                  </svg>
                  <h3>Affordable Pricing</h3>
                  <p>Premium services at competitive prices, maximizing your budget.</p>
                </div>
        
                {/* 24/7 Support */}
                <div className={styles.item}>
                  <svg className={styles.whychooseusicon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8v4l2 2"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <h3>24/7 Support</h3>
                  <p>We offer round-the-clock support to keep your business running smoothly.</p>
                </div>
              </div>
            </div>
        
            </div>
            </PopInSection>
        
    )
}

export default WhyChooseUs
