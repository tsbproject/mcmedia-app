import { useState } from "react";
import styles from "./Contact.module.css"

 function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Message Sent:", formData);
    };

    return (
        <div className={styles.contact}>
            <div className={styles.contactHeader}>
                <h1>Contact us</h1>
            </div>

             {/* Contact Info Grid */}
      <div className={styles.contactGrid}>
        {/* Phone Numbers */}
        <div className={styles.contactItem}>
          <svg> 
            <use href="/sprite.svg#icon-phone"></use>
          </svg>
         
          <h3>Phone Numbers</h3>
          <p>+234 704 824 5026</p>
          <p>+234 818 601 9049 (WhatsApp)</p>
        </div>

        {/* Email Addresses */}
        <div className={styles.contactItem}>

          <svg> 
            <use href="/sprite.svg#icon-email"></use>
          </svg>
          
          <h3>Email Addresses</h3>
          <p>info@marvelcmedia.com</p>
          <p>marvelcreativemedia@gmail.com</p>
        </div>

        {/* Contact Address */}
        <div className={styles.contactItem}>
        <svg> 
            <use href="/sprite.svg#icon-location"></use>
          </svg>
          <h3>Contact Address</h3>
          <p> Suit D110, Ogba Central Mall, Abiodun Jagun Street, Ogba Lagos, Nigeria</p>
        </div>
      </div>

      {/* Image and Contact Form Grid */}
      <div className={styles.formGrid}>
        {/* Image Section */}
        <div className={styles.imageSection}>
          <img src="office-sec.jpg" alt="Contact Us" />
        </div>

        {/* Contact Form Section */}
        <div className={styles.formSection}>
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
            <input type="phone" name="phone" placeholder="Your Phone" required onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" rows="5" required onChange={handleChange}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
       </div>
         {/* Google Map Section */}
      <div className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.13497712378!2d3.3406363743170546!3d6.630152693364188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93001933be5d%3A0x115622162d8e4258!2sOgba%20Central%20Mall!5e0!3m2!1sen!2sng!4v1739056233179!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
            
    </div>
    )
}

export default Contact
