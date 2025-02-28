import styles from "./AceLubricantChallenges.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Cta from "../components/Cta";

const challenges = [
  {
    title: "Comprehensive Product Catalog",
    description:
      "Ace Lubricant offers a wide variety of products, making it essential to display them in an organized and searchable format.",
    solution:
      "Developed a dynamic product catalog with filtering and search functionality using React state management and API calls.",
  },
  {
    title: "Seamless Inquiry & Contact System",
    description:
      "Customers needed an easy way to request quotes and contact sales representatives.",
    solution:
      "Built an intuitive inquiry form with validation and API integration to send messages directly to the company’s CRM system.",
  },
  {
    title: "Optimized Performance & Loading Speed",
    description:
      "Large product images and specifications could slow down the website, especially for mobile users.",
    solution:
      "Implemented lazy loading, image compression (WebP format), and Vite’s optimized build system for fast page loads.",
  },
  {
    title: "Mobile-Friendly & Responsive UI",
    description:
      "The website had to work seamlessly across all devices, including desktops, tablets, and smartphones.",
    solution:
      "Used CSS modules for a mobile-first design, ensuring smooth usability across all screen sizes.",
  },
  {
    title: "SEO & Google Ranking Optimization",
    description:
      "The website needed high visibility in search engine results to attract more buyers.",
    solution:
      "Integrated React Helmet for metadata, optimized images, and structured content for better SEO performance.",
  },
  {
    title: "Secure & Scalable Hosting",
    description:
      "The website required reliable uptime and protection against cyber threats.",
    solution:
      "Deployed on Vercel with SSL encryption, auto-scaling, and CDN support for global accessibility.",
  },
];

const AceLubricantChallenges = () => {
  return (
    <section className={styles.container}>
       <div className={styles.projectInfo}>
              <h1>Project Information</h1>
              <div className={styles.projectOwner}>
                 <h2>Client</h2>
                 <p> Crescent Integrated and General Merchandise Limited</p>
              </div>
              <div className={styles.category}>
                 <h2>Category</h2>
                 <p>Web Development</p>
              </div>
              <div className={styles.projectDate}>
                 <h2>Date</h2>
                 <p>03/06/2024</p>
              </div>
      
              <div className={styles.projectLocation}>
                 <h2>Location</h2>
                 <p>Ogun State, Nigeria</p>
              </div>
           </div>
           <div className={styles.projectImg}>
              <img src="ace-lubricantmocked.png" alt="Ace lubricant" />
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
        <h2>Final Results 🚀</h2>
        <ul>
          <li>✅ Clean & Organized Product Catalog</li>
          <li>✅ Fast Inquiry System for Customer Requests</li>
          <li>✅ Optimized Performance with Vite</li>
          <li>✅ Mobile-Friendly & SEO-Optimized</li>
          <li>✅ Secure & Scalable Hosting Infrastructure</li>
        </ul>
      </motion.div>
      <Link to="https://acelubricant.com">
      <button className={styles.planetBtn}>Visit Ace Lubricant Website</button>
      </Link>
      <Cta />
    </section>
  );
};

export default AceLubricantChallenges;
