import ContactUsButton from "../components/ContactUsButton";
import PopInSection from "../components/PopInSection";
import WhyChooseUs from "../components/WhyChooseUs";
import styles from "./ECommerce.module.css";


function ECommerce() {
    return (
        <div className={styles.eCommerce}>
        <div>
            <PopInSection >
                <div className={styles.ecHeader}>
                    <h1> Explore Our <br /> <span> E-commerce <br /> Website Services</span></h1>
        
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
              <path d="M3 9h18"></path>
              <path d="M3 9l2 10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l2-10"></path>
              <circle cx="9" cy="22" r="1"></circle>
              <circle cx="15" cy="22" r="1"></circle>
              <path d="M5 9l1-5h12l1 5"></path>
            </svg>
                </div>
            </PopInSection>
            <PopInSection>
                <div className={styles.ecMain}>
                    <img src="/web-dev2.jpg" alt="E-commerce" />
                </div>
            </PopInSection>
            <PopInSection>
            <div className={styles.ecServices}>
            
              <div className={styles.ecService}>
                <div className={styles.ecServiceicon}>
                 
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
              <path d="M3 9h18"></path>
              <path d="M3 9l2 10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l2-10"></path>
              <circle cx="9" cy="22" r="1"></circle>
              <circle cx="15" cy="22" r="1"></circle>
              <path d="M5 9l1-5h12l1 5"></path>
            </svg>
          </div>
          <h2>Marketplace E-Commerce</h2>
          <p>
            A platform where multiple sellers list their products. T
            he marketplace handles transactions, payments, and sometimes logistics.
          </p>
          <ContactUsButton />
        </div>

        {/* Single-Seller E-Commerce */}
        <div className={styles.ecService}>
          <div className={styles.ecServiceicon}>
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
              <path d="M3 6l9-4 9 4v12l-9 4-9-4V6z"></path>
              <path d="M3 6l9 6 9-6"></path>
              <path d="M9 21v-9"></path>
              <path d="M15 21v-9"></path>
            </svg>
          </div>
          <h2>Single-Seller E-Commerce</h2>
          <p>
            A standalone online store where a business sells its own products or
             services directly to customers, offering full control over branding.
             <ContactUsButton />
          </p>
        </div>
              
            </div>
            </PopInSection>
            <WhyChooseUs />
        </div>
                    
                
                </div>
    )
}

export default ECommerce
