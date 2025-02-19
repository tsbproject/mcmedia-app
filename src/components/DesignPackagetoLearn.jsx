import styles from "./DesignPackagetoLearn.module.css";

function TectoLearn() {
  

  return (
    <div className={styles.designPackages}>
      
   {/* HTML5 */}
    <div className={styles.designPackage}>
      
      <div className={styles.dpIcon}>

           <svg>
             <use href="sprite.svg#icon-adobephotoshop"></use>
          </svg>
      </div>
      <span>Adobe Photoshop</span>
    </div>

    {/* CSS3 */}
    <div className={styles.designPackage}>
      <div className={styles.dpIcon}>
            <svg>
             <use href="sprite.svg#icon-adobeillustrator"></use>
          </svg>
      
      </div>
      <span>Adobe Illustrator</span>
    </div>

    {/* Bootstrap */}
    <div className={styles.designPackage}>
      <div className={styles.dpIcon}>
           <svg>
             <use href="sprite.svg#icon-adobeindesign"></use>
          </svg>
      
      </div>
      <span>Adobe Indesign</span>
    </div>

    {/* WordPress */}
    <div className={styles.designPackage}>
      <div className={styles.dpIcon}>
          <svg>
             <use href="sprite.svg#icon-codewars"></use>
          </svg>
      </div>
      <span>CoreDraw</span>
    </div>

    
  </div>
  );
}

export default TectoLearn;
