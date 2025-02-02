import Cta from "../components/Cta";
import styles from "./CreativeDesign.module.css";


function CreativeDesign() {
  return (
    <div className={styles.creativedesign}>
       
      <div className={styles.cd}>
        <div className={styles.cdbanner}>
          <h1>Creative Design and Branding</h1>
          <p>Providing creative graphic and digital design services to businesses and organizations.</p>
          <p>We specialize in creative branding, marketing, and digital design solutions.</p>
        </div>

        <div className={styles.cddetails}>
         <div className={styles.cddetail}>
          
           
            <p>
            At Marvel Creative Media, one of our special services is
             providing creative graphic and digital design services to 
             businesses and organizations. These services include graphic 
             design, web design, branding and identity design, social 
             media graphics, and digital marketing.
            </p>

            <p>
            We offered a cut-edged graphic design services which include 
            designing logos, brochures, business cards, posters, flyers,
             and other marketing materials. Our branding and identity
              design services help businesses establish a unique brand 
              identity that resonates with their specific audience.
            </p>

            <p>In addition, Marvel Creative Media also provides social media 
              graphics to help businesses create engaging social media posts
               and ads.
            </p>

            
          </div>
          <img className={styles.cddetailimg} src="/CREATIVE-IMAGEX.jpg" alt="Creative Design" />
        </div>
         
         <Cta />
           
          <div className={styles.cdgrids}>
            <div className={styles.cdgrid1}>
              <h2>Graphic Design</h2> <hr></hr>
              <p>Creative graphic and digital design services for businesses</p>
            </div>

            <div className={styles.cdgrid2}>
              <h2>Branding</h2> <hr></hr>
              <p>Top Notch corporate identity branding at it for new and old businesses</p>
            </div>

            <div className={styles.cdgrid3}>
              <h2>Web Design</h2> <hr></hr>
              <p>Our strength is lies in our expertise in user experience (UX) design.</p>
            </div>


            <div className={styles.cdgrid4}>
              <h2>Digital Marketing</h2> <hr></hr>
              <p>We work with clients to create engaging content for social media platforms.</p>
            </div>


          </div>
      </div>
    </div>
  );
}

export default CreativeDesign;
