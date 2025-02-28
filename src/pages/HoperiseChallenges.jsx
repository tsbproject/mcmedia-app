
import { Link } from "react-router-dom";
import styles from "./HoperiseChallenges.module.css";
import { motion } from "framer-motion";
import Cta from "../components/Cta";

const challenges = [
    {
      title: "Communicating Diverse Initiatives",
      description:
        "Effectively presenting multiple focus areas to inform and engage visitors.",
      solution:
        "Designed distinct sections for each initiative with concise descriptions and visuals, ensuring clarity and impact.",
    },
    {
      title: "Encouraging Donations and Support",
      description:
        "Motivating visitors to contribute financially or volunteer their time.",
      solution:
        "Integrated prominent 'Donate Now' buttons and clear calls-to-action throughout the site, simplifying the support process.",
    },
    {
      title: "Ensuring Accessibility and Inclusivity",
      description:
        "Making the website accessible to a diverse audience, including those with disabilities.",
      solution:
        "Implemented accessibility best practices, such as alt text for images, keyboard navigability, and readable font sizes.",
    },
    {
      title: "Responsive Design Across Devices",
      description:
        "Providing an optimal viewing experience on various devices and screen sizes.",
      solution:
        "Employed responsive design techniques to ensure the site adapts seamlessly to desktops, tablets, and smartphones.",
    },
    {
      title: "Building Trust and Credibility",
      description:
        "Establishing legitimacy and encouraging trust among potential donors and partners.",
      solution:
        "Included detailed information about the organization's mission, policies, and contact details, along with testimonials and success stories.",
    },
  ];

const HoperiseChallenges = () => {
  return (
    <section className={styles.container}>
     <div className={styles.projectInfo}>
        <h1>Project Information</h1>
        <div className={styles.projectOwner}>
           <h2>Client</h2>
           <p>Hoperise Charity </p>
        </div>
        <div className={styles.category}>
           <h2>Category</h2>
           <p>Web Development</p>
        </div>
        <div className={styles.projectDate}>
           <h2>Date</h2>
           <p>11/10/2024</p>
        </div>

        <div className={styles.projectLocation}>
           <h2>Location</h2>
           <p>Ogun State, Nigeria</p>
        </div>
     </div>
     <div className={styles.projectImg}>
        <img src="hoperisemocked.png" alt="Hoperise charity" />
     </div>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Development Challenges & Results of Hoperise Charity
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
          <li>✅ Clear Presentation of Initiatives</li>
          <li>✅ Enhanced Donor and Volunteer Engagement</li>
          <li>✅ Inclusive and Accessible User Experience</li>
          <li>✅ Seamless Performance Across Devices</li>
          <li>✅ Strengthened Organizational Credibility</li>
        </ul>
      </motion.div>
      <Link to="https://hoperisecharity.org/">
      <button className={styles.planetBtn}>Visit Hoperise Charity Website</button>
      </Link>
      <Cta />
    </section>
  );
};

export default HoperiseChallenges;
