
import { Link } from "react-router-dom";
import styles from "./FollyslobyngChallenges.module.css";
import { motion } from "framer-motion";
import Cta from "../components/Cta";

const challenges = [
    {
      title: "Diverse Service Portfolio Representation",
      description:
        "Showcasing a wide range of specialized services in a cohesive manner.",
      solution:
        "Designed dedicated sections for each service category with detailed descriptions and visuals, ensuring a clear and organized presentation.",
    },
    {
      title: "User-Friendly Navigation",
      description:
        "Facilitating easy access to information across various services.",
      solution:
        "Implemented a responsive navigation bar with clear labels and dropdown menus, allowing users to effortlessly explore different sections.",
    },
    {
      title: "Mobile Responsiveness and Cross-Browser Compatibility",
      description:
        "Ensuring the website performs well on all devices and browsers.",
      solution:
        "Employed responsive design techniques and conducted extensive testing to guarantee compatibility across multiple platforms.",
    },
    {
      title: "Secure and Efficient Contact Mechanisms",
      description:
        "Providing reliable methods for potential clients to reach out.",
      solution:
        "Integrated secure contact forms with validation and provided clear contact information, ensuring ease of communication.",
    },
    {
      title: "Optimized Performance",
      description:
        "Maintaining fast load times and smooth navigation.",
      solution:
        "Utilized Vite's optimized build process, implemented code splitting, and optimized media assets to enhance website performance.",
    },
  ];

const ElfrenChallenges = () => {
  return (
    <section className={styles.container}>
     <div className={styles.projectInfo}>
        <h1>Project Information</h1>
        <div className={styles.projectOwner}>
           <h2>Client</h2>
           <p>Elfren LLC </p>
        </div>
        <div className={styles.category}>
           <h2>Category</h2>
           <p>Web Development</p>
        </div>
        <div className={styles.projectDate}>
           <h2>Date</h2>
           <p>02/04/2021</p>
        </div>

        <div className={styles.projectLocation}>
           <h2>Location</h2>
           <p>United States</p>
        </div>
     </div>
     <div className={styles.projectImg}>
        <img src="elfrenmocked.png" alt="Elfren llc" />
     </div>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Development Challenges & Results of Elfren LLC
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
          <li>✅ Comprehensive and Accessible Service Information</li>
          <li>✅ Intuitive and User-Friendly Navigation</li>
          <li>✅ Responsive Design with Cross-Browser Compatibility</li>
          <li>✅ Secure and Efficient Communication Channels</li>
          <li>✅ Optimized Performance with Fast Load Times</li>
        </ul>
      </motion.div>
      <Link to="https://elfrenllc.com">
      <button className={styles.planetBtn}>Visit Elfren LLC Website</button>
      </Link>
      <Cta />
    </section>
  );
};

export default ElfrenChallenges;
