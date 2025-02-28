import styles from "./ChurchChallenges.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Cta from "../components/Cta";

const challenges = [
    {
      title: "Communicating a Welcoming Atmosphere",
      description:
        "Creating an online presence that reflects the church's inclusive and friendly environment.",
      solution:
        "Designed a homepage with warm visuals and welcoming messages, including greetings from the church leadership.",
    },
    {
      title: "Providing Comprehensive Information",
      description:
        "Ensuring visitors can easily find details about services, events, and community programs.",
      solution:
        "Developed clear navigation menus and dedicated pages for services, events, and community initiatives, regularly updated with current information.",
    },
    {
      title: "Encouraging Community Engagement",
      description:
        "Motivating visitors to participate in church groups and volunteer opportunities.",
      solution:
        "Included sections highlighting various groups and volunteer roles, with easy-to-find information on how to get involved.",
    },
    {
      title: "Ensuring Accessibility and Responsiveness",
      description:
        "Making sure the website is accessible to all users and functions well on various devices.",
      solution:
        "Implemented responsive design principles and ensured compatibility with assistive technologies, following best practices for accessibility.",
    },
    {
      title: "Maintaining a Dynamic and Current Website",
      description:
        "Keeping the website content fresh and relevant to reflect ongoing activities.",
      solution:
        "Integrated a user-friendly content management system, allowing church staff to easily update content and post news or events.",
    },
  ];

const ChurchChallenges = () => {
  return (
    <section className={styles.container}>
       <div className={styles.projectInfo}>
              <h1>Project Information</h1>
              <div className={styles.projectOwner}>
                 <h2>Client</h2>
                 <p> St Paul with St Stephen Church</p>
              </div>
              <div className={styles.category}>
                 <h2>Category</h2>
                 <p>Web Development</p>
              </div>
              <div className={styles.projectDate}>
                 <h2>Date</h2>
                 <p>25/03/2021</p>
              </div>
      
              <div className={styles.projectLocation}>
                 <h2>Location</h2>
                 <p>United Kingdom</p>
              </div>
           </div>
           <div className={styles.projectImg}>
              <img src="stpaulmocked.png" alt="St. Paul church" />
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
          <li>✅ Warm and Inviting Online Presence</li>
          <li>✅ Clear and Accessible Information Architecture</li>
          <li>✅ Active Promotion of Community Engagement</li>
          <li>✅ Fully Responsive and Accessible Design</li>
          <li>✅ Easy-to-Update Content Management System</li>
        </ul>
      </motion.div>
      <Link to="https://ststephenswithstpauls.org.uk/">
      <button className={styles.planetBtn}>Visit Church Website</button>
      </Link>
      <Cta />
    </section>
  );
};

export default ChurchChallenges;
