
import { Link } from "react-router-dom";
import styles from "./FollyslobyngChallenges.module.css";
import { motion } from "framer-motion";
import Cta from "../components/Cta";

const challenges = [
    {
      title: "Comprehensive Service Presentation",
      description:
        "Effectively showcasing a wide array of logistics and freight services to inform potential clients.",
      solution:
        "Developed dedicated sections for each service with detailed descriptions and visuals, utilizing a clean and organized layout to enhance readability.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Creating an intuitive navigation system for users to easily find information.",
      solution:
        "Implemented a responsive navigation bar with clear labels and dropdown menus, ensuring users can effortlessly access all sections of the website.",
    },
    {
      title: "Mobile Responsiveness and Cross-Browser Compatibility",
      description:
        "Ensuring the website functions seamlessly across various devices and browsers.",
      solution:
        "Employed responsive design techniques and conducted extensive testing across multiple devices and browsers to guarantee compatibility.",
    },
    {
      title: "Secure Contact and Appointment Scheduling",
      description:
        "Providing a reliable system for clients to reach out or schedule appointments.",
      solution:
        "Integrated secure contact forms with validation and implemented an appointment scheduling feature, ensuring data privacy and ease of use.",
    },
    {
      title: "Fast Load Times and Seamless Navigation",
      description:
        "Optimizing the website for quick loading and smooth user experience.",
      solution:
        "Leveraged Vite's optimized build process, implemented code splitting, and optimized images to enhance performance.",
    },
  ];

const FollyslobyngChallenges = () => {
  return (
    <section className={styles.container}>
     <div className={styles.projectInfo}>
        <h1>Project Information</h1>
        <div className={styles.projectOwner}>
           <h2>Client</h2>
           <p>Follysloby Nigeria Ltd</p>
        </div>
        <div className={styles.category}>
           <h2>Category</h2>
           <p>Web Development</p>
        </div>
        <div className={styles.projectDate}>
           <h2>Date</h2>
           <p>02/12/2018</p>
        </div>

        <div className={styles.projectLocation}>
           <h2>Location</h2>
           <p>Lagos, Nigeria</p>
        </div>
     </div>
     <div className={styles.projectImg}>
        <img src="/follyslobymocked.png" alt="Planet Laundro" />
     </div>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Development Challenges & Results of Follysloby Website
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
          <li>✅ Detailed and Accessible Service Information</li>
          <li>✅ Intuitive and User-Friendly Navigation</li>
          <li>✅ Responsive Design with Cross-Browser Compatibility</li>
          <li>✅ Secure and Efficient Contact Mechanisms</li>
          <li>✅ Optimized Performance with Fast Load Times</li>
        </ul>
      </motion.div>
      <Link to="https://follyslobyng.com">
      <button className={styles.planetBtn}>Visit Follyslobyng Website</button>
      </Link>
      <Cta />
    </section>
  );
};

export default FollyslobyngChallenges;
