import RegistrationForm from '../components/RegistrationForm';
import TechtoLearn from "../components/TechtoLearn";
import styles from './WebDevelopmentTraining.module.css';


function WebDevelopmentTraining() {
    return (
        <div className={styles.webdevelopmentTraining}>
           <div className={styles.wdtHeader}>
            <h1>Web Design &  Development Training </h1>
            </div>
            
            
            <div className={styles.wdtForm}>
                <RegistrationForm />

                <div className={styles.wdtBackground}>
                    <h2> About the training</h2>
                    <p>With a team of highly skilled and experienced professionals,
                         Marvel Creative Media offers comprehensive training in website design. 
                         Our courses are designed to provide students with the skills and knowledge 
                         they need to succeed in the fast-paced and ever-changing world of digital media.
                    </p>

                    <p>The major focus of our training programs is emphasis on practical learning.
                         Our courses are designed to be hands-on, giving students the opportunity
                          to apply what they have learned in real-world scenarios. This approach has
                           proven to be highly effective, with many of our students going on to
                            establish successful careers in the tech and creative media industry.
                    </p>
                    
                    
                    <div className={styles.wdttechHeading}>
                    <h3>Technology that would be taught</h3>
                    </div>

                    <TechtoLearn />

                    
                 
                 </div>

                



            </div>
            
        </div>
    )
}

export default WebDevelopmentTraining
