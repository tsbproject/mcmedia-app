import styles from "./MyDuDuKeChallenges.module.css";
import { motion } from "framer-motion";
import Cta from "../components/Cta";
import { Link } from "react-router-dom";


const challenges = [
  {
    title: "Faith-Centered Matchmaking System",
    description:
      "Developing an algorithm that matches users based on shared Christian beliefs and values.",
    solution:
      "Implemented a custom matching algorithm that considers users' denominations, favorite Bible verses, and spiritual goals.",
  },
  {
    title: "Secure and Private User Experience",
    description:
      "Ensuring user data is protected, and interactions remain confidential.",
    solution:
      "Integrated end-to-end encryption for messages and employed robust authentication protocols.",
  },
  {
    title: "Mobile-Responsive and User-Friendly Design",
    description:
      "Creating a seamless experience across various devices and screen sizes.",
    solution:
      "Utilized CSS Modules to craft a responsive design, ensuring compatibility with desktops, tablets, and smartphones.",
  },
  {
    title: "Community Features Integration",
    description:
      "Incorporating functionalities like group Bible studies and prayer requests.",
    solution:
      "Developed interactive community modules allowing users to create and join groups, share prayer requests, and participate in virtual Bible studies.",
  },
  {
    title: "High Performance and Fast Load Times",
    description:
      "Ensuring the platform loads quickly, even with rich media content.",
    solution:
      "Leveraged Vite's optimized build process and implemented lazy loading for images and components.",
  },
];



const MydudukeChallenges = () => {
    return (
      <section className={styles.container}>
          <div className={styles.projectInfo}>
                  <h1>Project Information</h1>
                  <div className={styles.projectOwner}>
                     <h2>Client</h2>
                     <p>Foxygen Inc.</p>
                  </div>
                  <div className={styles.category}>
                     <h2>Category</h2>
                     <p> Dating Website Development</p>
                  </div>
                  <div className={styles.projectDate}>
                     <h2>Date</h2>
                     <p>25/04/2022</p>
                  </div>
          
                  <div className={styles.projectLocation}>
                     <h2>Location</h2>
                     <p>United Kingdom</p>
                  </div>
               </div>
               <div className={styles.projectImg}>
                  <img src="mydudukemocked.png" alt="Marvelmarts" />
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
        <Link to="https://myduduke.com">
        <button className={styles.planetBtn}>Visit MyDuDuKe Website</button>
        </Link>
        <Cta />
      </section>
    );
  };
  
  export default MydudukeChallenges;
  