import styles from "./TechtoLearn.module.css";

function TectoLearn() {
  

  return (
    <div className={styles.wdtTechs}>
      
   {/* HTML5 */}
    <div className={styles.wdtTech}>
      
      <div className={styles.wdtIcon}>

           <svg>
             <use href="sprite.svg#icon-html5"></use>
          </svg>
      </div>
      <span>HTML5</span>
    </div>

    {/* CSS3 */}
    <div className={styles.wdtTech}>
      <div className={styles.wdtIcon}>
            <svg>
             <use href="sprite.svg#icon-css3"></use>
          </svg>
      
      </div>
      <span>CSS3</span>
    </div>

    {/* Bootstrap */}
    <div className={styles.wdtTech}>
      <div className={styles.wdtIcon}>
           <svg>
             <use href="sprite.svg#icon-bootstrap1"></use>
          </svg>
      
      </div>
      <span>Bootstrap</span>
    </div>

    {/* WordPress */}
    <div className={styles.wdtTech}>
      <div className={styles.wdtIcon}>
          <svg>
             <use href="sprite.svg#icon-wordpress1"></use>
          </svg>
      </div>
      <span>WordPress</span>
    </div>

    {/* JavaScript */}
    <div className={styles.wdtTech}>
      <div className={styles.wdtIcon}>
           <svg>
             <use href="sprite.svg#icon-javascript1"></use>
          </svg>
      </div>
      <span>JavaScript</span>
    </div>

    {/* React */}
    <div className={styles.wdtTech}>
      <div className={styles.wdtIcon}>
           <svg>
             <use href="sprite.svg#icon-react1"></use>
          </svg>
      </div>
      <span>React</span>
    </div>

    {/* php */}
    <div className={styles.wdtTech}>
      <div className={styles.wdtIcon}>
           <svg>
             <use href="sprite.svg#icon-php1"></use>
          </svg>
      </div>
      <span>php</span>
    </div>

    {/* MySQL */}
    <div className={styles.wdtTech}>
      <div className={styles.wdtIcon}>
           <svg>
             <use href="sprite.svg#icon-mysql"></use>
          </svg>
      </div>
      <span>Mysql</span>
    </div>

    {/* GIT */}
    <div className={styles.wdtTech}>
      <div className={styles.wdtIcon}>
           <svg>
             <use href="sprite.svg#icon-git1"></use>
          </svg>
      </div>
      <span>git</span>
    </div>
  </div>
  );
}

export default TectoLearn;
