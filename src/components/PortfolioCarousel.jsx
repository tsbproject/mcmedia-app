import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./PortfolioCarousel.module.css"; // CSS Modules
import { Link } from "react-router-dom";

const portfolioItems = [
  { id: 1, title: "Planet Laundromat", img: "planetlaundromocked.png", url: "planetlaundromat" },
  { id: 2, title: "Ace Lubricants", img: "ace-lubricantmocked.png",  url: "acelubricant" },
  { id: 3, title: "HopeRise Charity", img: "hoperisemocked.png" , url: "hoperisecharity"},
  { id: 4, title: "MarvelMarts online Shopping", img: "marvelmartsmocked.png" , url: "marvelmarts" },
  { id: 5, title: "MyDuDuKe Dating", img: "mydudukemocked.png" , url: "myduduke" },
  { id: 5, title: "Folysloby Ng Ltd.", img: "follyslobymocked.png" , url: "follyslobyng" },
  { id: 5, title: "Mop Limo Services", img: "moplimomocked.png" , url: "moplimoservices" },
  { id: 5, title: "Elfren LLC", img: "elfrenmocked.png" , url: "elfrenllc" },
  { id: 5, title: "St. Paul with St.Stephen UK", img: "stpaulmocked.png" , url: "stpaulwithststephen" },
];

const PortfolioCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.portfolioHeading}>
        <h2>Portfolio</h2>
        <p>Check out some of our recent projects</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
       spaceBetween={20}
        slidesPerView={1} // Default for small screens
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true, el: ".swiper-pagnition" }}
        autoplay={{ delay: 3000 }}
        loop={true}
        // className={styles.swiper}
      >
        {portfolioItems.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <div className={styles.card}>
              <img src={item.img} alt={item.title} className={styles.image} />
              <h3 className={styles.title}>{item.title}</h3>
              <Link to={item.url} target="_blank" rel="noreferrer" className={styles.link}>
              <button className={styles.button}> View Project </button>
              </Link>
             
          
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioCarousel;
