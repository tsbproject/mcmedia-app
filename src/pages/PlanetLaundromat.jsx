
import { Link } from "react-router-dom";
import styles from "./PlanetLaundromat.module.css";
import { motion } from "framer-motion";
import Cta from "../components/Cta";

const challenges = [
  {
    title: "Understanding the Business & Customer Needs",
    description:
      "Designing a platform that was both informative and transactional while maintaining a seamless user experience.",
    solution:
      "Conducted research on competitors, target audience behavior, and user preferences to develop a customer-centric web strategy.",
  },
  {
    title: "Designing an Engaging Yet Functional Interface",
    description:
      "Avoiding a generic or outdated design while maintaining simplicity and clarity.",
    solution:
      "Implemented a clean, minimalist layout with bold typography, high-quality images, and a fresh color palette.",
  },
  {
    title: "Seamless Online Booking & Payment Integration",
    description:
      "Integrating a secure, user-friendly booking system without causing slowdowns or usability issues.",
    solution:
      "Used a third-party booking API and custom-built forms that allow users to schedule pickups and pay online.",
  },
  {
    title: "Mobile Responsiveness & Performance Optimization",
    description:
      "Ensuring the website loads quickly across different devices while maintaining a smooth user experience.",
    solution:
      "Used progressive image loading, optimized CSS & JavaScript, and a mobile-first design approach.",
  },
  {
    title: "SEO & Local Search Optimization",
    description:
      "Improving search visibility and attracting local customers.",
    solution:
      "Optimized the website with SEO-friendly content, meta tags, structured data, and Google My Business integration.",
  },
  {
    title: "Secure & Scalable Hosting",
    description:
      "Ensuring uptime, speed, and security for long-term reliability.",
    solution:
      "Opted for a cloud-based hosting solution with SSL encryption, daily backups, and CDN support.",
  },
];

const PlanetLaundromat = () => {
  return (
    <section className={styles.container}>
     <div className={styles.projectInfo}>
        <h1>Project Information</h1>
        <div className={styles.projectOwner}>
           <h2>Client</h2>
           <p>Planet Laundromat, United States</p>
        </div>
        <div className={styles.category}>
           <h2>Category</h2>
           <p>Web Development</p>
        </div>
        <div className={styles.projectDate}>
           <h2>Date</h2>
           <p>27/12/2024</p>
        </div>

        <div className={styles.projectLocation}>
           <h2>Location</h2>
           <p>United States</p>
        </div>
     </div>
     <div className={styles.projectImg}>
        <img src="planetlaundromocked.png" alt="Planet Laundro" />
     </div>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Development Challenges & Results
      </motion.h2>

      <div className={styles.challenges}>
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            className={styles.challengeCard}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{challenge.title}</h3>
            <p><strong>Challenge:</strong> {challenge.description}</p>
            <p><strong>Solution:</strong> {challenge.solution}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.result}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <h2>Final Results </h2>
        <ul>
          <li>✅ Modern, Clean Design</li>
          <li>✅ Seamless Online Booking</li>
          <li>✅ Fast and Responsive Performance</li>
          <li>✅ Local SEO Optimization</li>
          <li>✅ Secure & Scalable Infrastructure</li>
        </ul>
      </motion.div>
      <Link to="https://planetlaundromat.com">
      <button className={styles.planetBtn}>Visit Planet Laundromat Website</button>
      </Link>
      <Cta />
    </section>
  );
};

export default PlanetLaundromat;
