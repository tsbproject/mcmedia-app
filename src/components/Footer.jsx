import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
    
        
        {/* Grid 1 - Logo & About */}
        <div className={styles.footerGrid}>
          <img src="/marvelcmedia-logo.png" alt="Company Logo" className={styles.logo} />
          <p>We provide top-quality services to help businesses grow.</p>
        </div>

        {/* Grid 2 - Services */}
        <div className={styles.footerGrid}>
          <h3>Services</h3>

        

          <ul>
          <li><Link to="/services/web-development">Website Development</Link></li>
          <li><Link to="/services/mobileapps">App Development</Link></li>
          <li><Link to="/services/creative-design">Creative Design</Link></li>
          <li><Link to="/services/ecommerce">Creative Design</Link></li>
          <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
         </ul>
           
           
        </div>

        {/* Grid 3 - Quick Links */}
        <div className={styles.footerGrid}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Grid 4 - Contact Details */}
        <div className={styles.footerGrid}>
          <h3>Contact</h3>
          <p><FaPhoneAlt className={styles.icon} /> +234 704 824-5026</p>
          <p><FaEnvelope className={styles.icon} /> info@marvelcmedia.com</p>
          <p><FaMapMarkerAlt className={styles.icon} /> D110, Ogba Central Mall, Ogba, Lagos</p>

        
         
        </div>
       
       
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Marvel Creative Media. All Rights Reserved.

     
      </div>
    
    </footer>
  );
};

export default Footer;
