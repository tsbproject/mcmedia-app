
import WhyChooseUs from "../components/WhyChooseUs";
import styles from "./WebDevelopment.module.css";
import ContactUsButton from "../components/ContactUsButton";
import PopInSection from "../components/PopInSection";


function WebDevelopment() {
    return (
    <div className={styles.webDevelopment}>
      <PopInSection>
        <div className={styles.wbHeader}>
            <h1> Explore Our<br></br> <span> Web & Application  <br></br>Development Services</span></h1>
           
  <svg 
    width="100" 
    height="100" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round">

    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
    <path d="M2 8h20"></path>

  
    <path d="M10 12l-2 2 2 2"></path>
    <path d="M14 12l2 2-2 2"></path>
</svg>

         
      </div>
      </PopInSection>
      <PopInSection>
          <div className={styles.wbMain}>
          <img src="/web-dev-lady.jpg" alt="Web development" />
          </div>
       </PopInSection>   
    <PopInSection>
    <div className={styles.wbServices}>
       <div className={styles.wbService}>
        <div className={styles.wbServiceicon}>
        
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="14" rx="2" ry="2"></rect>
            <path d="M8 21h8M12 17v4M10 9l-2 2 2 2M14 13l2-2-2-2"></path>
          </svg>
        </div>
        <h2>Custom Web Development</h2>
        <p>
          Elevate your online presence with a bespoke website tailored to your brand’s needs.  
          Our expert developers craft user-friendly, SEO-optimized, and scalable solutions,  
          ensuring high performance and seamless user experience.
          <ContactUsButton />
        </p>
      </div>

      {/* App Development */}
      <div className={styles.wbService}>
        <div className={styles.wbServiceicon}>
          {/* App Development SVG */}
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12" y2="18"></line>
          </svg>
        </div>
        <h2>App Development</h2>
        <p>
          Build robust and high-performing mobile applications that drive engagement.  
          We create feature-rich, cross-platform, and native apps that deliver  
          exceptional user experiences with seamless functionality.
        </p>
        <ContactUsButton />
      </div>

      
    </div>
    </PopInSection>

    <WhyChooseUs />


    </div>
    )
}

export default WebDevelopment


