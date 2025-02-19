import styles from "./DigitalMarketing.module.css";
import ContactUsButton from "../components/ContactUsButton";
import WhyChooseUs from "../components/WhyChooseUs";
import PopInSection from "../components/PopInSection";



function DigitalMarketing() {
    return (
        <div className={styles.digitalMarketing}>
          <PopInSection>
        <div className={styles.dmHeader}>
            <h1> Explore Our<br></br> <span> Digital <br></br>Marketing Services</span></h1>
                       
  <svg 
    width="100" 
    height="100" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round">
  
   

    <rect x="3" y="3" width="6" height="6"></rect>
    <rect x="3" y="15" width="6" height="6"></rect>
    <rect x="15" y="3" width="6" height="6"></rect>
    <path d="M9 6h6m-3 3v6"></path>
</svg>

          
         
           
        </div>
        </PopInSection>
        <PopInSection>

          <div className={styles.dmMain}>
          <img src="/DIITAL-marketing.jpg" alt="Web development" />
          </div>
          </PopInSection>

          <div className={styles.dmServices}>
          <PopInSection>
          <div className={styles.dmService}>
      {/* SEO Optimization */}
      <div className={styles.serviceGrid}>
        <div className={styles.serviceIcon}>
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
            <path d="M3 12h18M3 5h18M3 19h18"></path>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        </div>
        <h2>SEO Optimization</h2>
        <p>
          Boost your website’s ranking on search engines with expert SEO
           strategies, keyword optimization, and technical enhancements.
           <ContactUsButton />
        </p>
      </div>

      {/* Social Media Marketing */}
      <div className={styles.serviceGrid}>
        <div className={styles.serviceIcon}>
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
            <path d="M16 8a6 6 0 0 1-12 0C4 4.69 7.69 4 12 4s8 0.69 8 4z"></path>
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 15v3M9 21h6"></path>
          </svg>
        </div>
        <h2>Social Media Marketing</h2>
        <p>
          Engage your audience with targeted social media campaigns
           on platforms like Facebook, Instagram, Twitter, and LinkedIn.
           <ContactUsButton />
        </p>

      </div>

      {/* Content Marketing */}
      <div className={styles.serviceGrid}>
        <div className={styles.serviceIcon}>
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
            <path d="M4 19V4a2 2 0 0 1 2-2h8l6 6v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path>
            <path d="M14 3v5h5"></path>
          </svg>
        </div>
        <h2>Content Marketing</h2>
        <p>
          Create high-quality, engaging content that attracts,
           informs, and converts your audience across different platforms.
           <ContactUsButton />
        </p>
      </div>

      {/* Pay-Per-Click (PPC) Advertising */}
      <div className={styles.serviceGrid}>
        <div className={styles.serviceIcon}>
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
            <path d="M4 4h16v16H4z"></path>
            <path d="M12 8v8m-4-4h8"></path>
          </svg>
        </div>
        <h2>Pay-Per-Click (PPC) </h2>
        <p>
          Maximize your ROI with well-optimized Google Ads and
           social media PPC campaigns tailored to your business goals.
           <ContactUsButton />
        </p>
      </div>
    </div>
    </PopInSection>
     
      
    </div>
    

    <WhyChooseUs />


    </div>
    )
}

export default DigitalMarketing
