
import styles from './Services.module.css';
import WebDevBtn from './WebDevBtn';
import CreativeDesignBtn from './CreativeDesignBtn';
import DigitalMarketBtn from './DigitalMarketBtn';
import TrainingBtn from './TrainingBtn';
import PopInSection from './PopInSection';


function Services() {
    return (
        
        <div className={styles.services}> 
           <PopInSection>
            <div className={styles.servicesheading}>
                <h3 className={styles.servicestitle}>Our Services</h3>
                <p className={styles.servicestext}>We offer a wide range of services to help you achieve your goals.</p>
            </div>
            </PopInSection>
            
           <PopInSection>
            <div className={styles.servicesgrid}>
                <div className={styles.servicecard}>
                    <svg className={styles.serviceicon}>
                        <use href="sprite.svg#icon-file-code-o"></use>
                     </svg>   
                    
                    <h3 className={styles.servicetitle}>Web Design & Development</h3>
                    <p className={styles.servicetext}>One of the key aspects of Marvel Creative Media&apos;s 
                        system is our focus on collaboration. We  understands that effective 
                        communication

                        <WebDevBtn />
                    </p>

                  

                   
                </div>
                
                <div className={styles.servicecard}>
                <svg className={styles.serviceicon}>
                        <use href="sprite.svg#icon-light-bulb"></use>
                     </svg> 
                    <h3 className={styles.servicetitle}>Creative Design</h3>
                    <p className={styles.servicetext}>At Marvel Creative Media, one of our special services 
                        is providing creative graphic and digital design services to businesses and organizations. 
                        <CreativeDesignBtn />
                    </p>
                   
                </div>
               
               
                <div className={styles.servicecard}>
                <svg className={styles.serviceicon}>
                        <use href="sprite.svg#icon-megaphone"></use>
                     </svg> 
                    <h3 className={styles.servicetitle}>Digital Marketing</h3>
                    <p className={styles.servicetext}>Social Media Marketing is of of thr key service we offer
                        at Marvel Creative Media. We collaborate with our clients to create
                        engaging content for social media
                        <DigitalMarketBtn />
                    </p>

                   
                </div>


                <div className={styles.servicecard}>
                <svg className={styles.serviceicon}>
                        <use href="sprite.svg#icon-edit"></use>
                     </svg> 
                    <h3 className={styles.servicetitle}>Trainning</h3>
                    <p className={styles.servicetext}>One of the key features of Marvel Creative Media&apos;s 
                        training programs is our emphasis on practical learning. Our courses
                         are designed to be a hands-on.
                         <TrainingBtn />
                   </p>

                  
                </div>
            </div>
            </PopInSection>
        
        
        </div>
            
        
    )
}

export default Services
