import styles from "./MarvelMartsChallenges.module.css";
import { motion } from "framer-motion";
import Cta from "../components/Cta";
import { Link } from "react-router-dom";

const challenges = [
  {
    title: "Building a Robust E-Commerce Platform",
    description:
      "MarvelMarts required a flexible and scalable architecture to handle multiple product categories, transactions, and user accounts.",
    solution:
      "Developed the platform using React with state management for efficient data handling, and Firebase for authentication and real-time database management.",
  },
  {
    title: "Seamless Shopping & Checkout Experience",
    description:
      "The checkout process needed to be intuitive, secure, and fast to reduce cart abandonment.",
    solution:
      "Integrated Stripe for secure payments and optimized the checkout flow to minimize steps while ensuring user confidence in security.",
  },
  {
    title: "Mobile-Responsive & High-Performance UI",
    description:
      "A large percentage of customers shop on mobile devices, requiring a fully responsive design.",
    solution:
      "Used CSS modules for mobile-first design and optimized image loading with lazy loading to ensure fast performance.",
  },
  {
    title: "Product Search, Filtering, and Sorting",
    description:
      "Users needed an efficient way to find products through categories, search, and filters.",
    solution:
      "Implemented a search bar with debounce, category-based filtering, and sorting options for price, rating, and popularity.",
  },
  {
    title: "SEO Optimization for Increased Visibility",
    description:
      "The website needed to rank high in search results to attract more organic traffic.",
    solution:
      "Used React Helmet for dynamic metadata, optimized product descriptions, and integrated structured data for better search engine indexing.",
  },
  {
    title: "Scalable & Secure Hosting",
    description:
      "The website required fast global access with security against threats.",
    solution:
      "Deployed on Vercel with SSL encryption, automatic scaling, and CDN for optimal speed.",
  },
];

const MarvelMartsChallenges = () => {
  return (
    <section className={styles.container}>
        <div className={styles.projectInfo}>
                <h1>Project Information</h1>
                <div className={styles.projectOwner}>
                   <h2>Client</h2>
                   <p>MarvelMarts Enterprises</p>
                </div>
                <div className={styles.category}>
                   <h2>Category</h2>
                   <p> E-Commerce</p>
                </div>
                <div className={styles.projectDate}>
                   <h2>Date</h2>
                   <p>06/06/2021</p>
                </div>
        
                <div className={styles.projectLocation}>
                   <h2>Location</h2>
                   <p>Lagos, Nigeria</p>
                </div>
             </div>
             <div className={styles.projectImg}>
                <img src="marvelmartsmocked.png" alt="Marvelmarts" />
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
          <li>✅ Smooth & Secure Shopping Experience</li>
          <li>✅ Optimized Checkout Flow</li>
          <li>✅ Fast & Mobile-Friendly Performance</li>
          <li>✅ Enhanced Product Search & Filtering</li>
          <li>✅ SEO-Optimized for Higher Search Rankings</li>
        </ul>
      </motion.div>
      <Link to="https://marvelmarts.com">
      <button className={styles.planetBtn}>Visit MarvelMarts Website</button>
      </Link>
      <Cta />
    </section>
  );
};

export default MarvelMartsChallenges;
