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
          <h1>Creative Design and Branding</h1>

          <div className={styles.cddetail}>
            <p>
              At Marvel Creative Media, we provide top-notch graphic and digital design services including
              branding, web design, and social media graphics.
            </p>

            <p>
              We offer cutting-edge graphic design services such as logos, brochures, business cards, posters,
              and flyers to enhance brand identity.
            </p>

            <p>We also provide engaging social media graphics for businesses to boost online presence.</p>

            <img className={styles.cddetailimg} src="/CREATIVE-IMAGEX.jpg" alt="Creative Design" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeDesign;
