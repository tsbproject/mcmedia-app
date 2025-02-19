import CreativeDesignRegForm from '../components/CreativeDesignRegForm';
import DesignPackagetoLearn from "../components/DesignPackagetoLearn";
import styles from './CreativeDesignTraining.module.css';

function CreativeDesignTraining() {
    return (
        <div className={styles.creativedesignTraining}>
           <div className={styles.cdHeader}>
            <h1>Creative Graphic Design Training </h1>
            </div>
            
            
            <div className={styles.cdForm}>
                <CreativeDesignRegForm />

                <div className={styles.cdBackground}>
                    <h2> About the training</h2>
                    <p>Marvel Creative Media’s Creative Graphic Design Training 
                        is your gateway to mastering the art of visual storytelling.
                         Whether you&apos;re a beginner or looking to refine your design 
                         skills, our hands-on training provides everything you need to
                          create stunning graphics for digital and print media. Learn
                           essential tools like Adobe Photoshop, Illustrator, and
                            InDesign while exploring color theory, typography,
                             branding, and modern design trends. Our expert instructors
                              ensure you gain real-world experience, helping you turn 
                              ideas into visually compelling masterpieces.
                    </p>

                    <p>At Marvel Creative Media, we don’t just teach design—we 
                        ignite creativity. Our curriculum is designed for practical,
                         industry-ready learning, allowing you to build a professional 
                         portfolio that stands out. From logo design and social
                          media graphics to business branding and marketing materials, 
                          we equip you with the skills to succeed in today’s 
                          competitive creative industry. Whether you dream of 
                          working with top brands or starting your own design
                           business, this training will empower you to bring your
                            artistic vision to life!
                    </p>
                    
                    
                    <div className={styles.cdtechHeading}>
                    <h3>Technology that would be taught</h3>
                    </div>

                    <DesignPackagetoLearn />

                    
                 
                 </div>

                



            </div>
            
        </div>
    )
}

export default CreativeDesignTraining
