import styles from "./MoplimoChallenges.module.css";
import { motion } from "framer-motion";
import Cta from "../components/Cta";
import { Link } from "react-router-dom";


const challenges = [
    {
      title: "Showcasing a Luxurious Fleet",
      description:
        "Presenting high-quality images and details of various luxury vehicles to attract potential clients.",
      solution:
        "Developed a dynamic gallery with high-resolution images and detailed descriptions, utilizing lazy loading to optimize performance.",
    },
    {
      title: "Comprehensive Service Information",
      description:
        "Providing clear and concise information about the range of services offered.",
      solution:
        "Created dedicated sections for each service with engaging content and visuals, ensuring easy navigation and readability.",
    },
    {
      title: "User-Friendly Booking System",
      description:
        "Implementing an intuitive booking interface for clients to request quotes and make reservations.",
      solution:
        "Integrated a streamlined booking form with validation and real-time availability checks, enhancing user experience.",
    },
    {
      title: "Mobile-Responsive and Visually Appealing Design",
      description:
        "Ensuring the website is accessible and aesthetically pleasing across all devices.",
      solution:
        "Employed responsive design principles with CSS Modules, ensuring consistent visuals and functionality on desktops, tablets, and smartphones.",
    },
    {
      title: "Fast Load Times and Seamless Navigation",
      description:
        "Optimizing the website for quick loading and easy user navigation.",
      solution:
        "Utilized Vite's optimized build process, implemented code splitting, and minimized asset sizes to enhance performance.",
    },
  ];



const MoplimoChallenges = () => {
    return (
      <section className={styles.container}>
          <div className={styles.projectInfo}>
                  <h1>Project Information</h1>
                  <div className={styles.projectOwner}>
                     <h2>Client</h2>
                     <p>Mop Limo Services</p>
                  </div>
                  <div className={styles.category}>
                     <h2>Category</h2>
                     <p>Web Development</p>
                  </div>
                  <div className={styles.projectDate}>
                     <h2>Date</h2>
                     <p>25/02/2024</p>
                  </div>
          
                  <div className={styles.projectLocation}>
                     <h2>Location</h2>
                     <p>Chicago, United States</p>
                  </div>
               </div>
               <div className={styles.projectImg}>
                  <img src="moplimomocked.png" alt="Marvelmarts" />
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
          <li>✅ Engaging and Informative Vehicle Showcase</li>
          <li>✅ Clear and Accessible Service Information</li>
          <li>✅ Streamlined and Efficient Booking Process</li>
          <li>✅ Responsive Design with Visual Appeal</li>
          <li>✅ Optimized Performance with Fast Load Times</li>
          </ul>
        </motion.div>
        <Link to="https://moplomoservices.com">
        <button className={styles.planetBtn}>Visit Mop Limo Website</button>
        </Link>
        <Cta />
      </section>
    );
  };
  
  export default MoplimoChallenges;
  