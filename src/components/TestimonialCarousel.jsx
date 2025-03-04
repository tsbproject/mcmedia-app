import Slider from "react-slick";
import styles from "./TestimonialCarousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopInSection from "./PopInSection";

const testimonials = [
  {
    name: "Chinedu Okafor",
    role: "CEO, MoveItNow Logistics",
    feedback: "Marvel Creative Media transformed our website with their top-notch Web Development services. Highly recommended!",
    category: "Web Development",
  },
  {
    name: "Aisha Bello",
    role: "Founder, Aisha's Kitchen",
    feedback: "Their Digital Marketing team helped us reach a wider audience and grow our business significantly!",
    category: "Creative Design",
  },
  {
    name: "Tunde Adewale",
    role: "Marketing Lead, AfroBiz",
    feedback: "With their Digital Marketing strategies, our engagement and sales skyrocketed. Best decision ever!",
    category: "Digital Marketing",
  },
  {
    name: " Pastor Folasde ",
    role: "CEO, MyDuDuKe Christian Dating",
    feedback: "Marvel Creative Media developed a seamless Web App for us. The user experience is flawless!",
    category: "Web App Development",
  },
  {
    name: "Issa Aloba",
    role: "CTO, Ace Lubricant",
    feedback: "Their Web Development team built a fast and responsive site that boosted our business visibility.",
    category: "Web Development",
  },
  {
    name: "Olamide Adeyemi",
    role: "Brand Strategist, Beauty Randy",
    feedback: "Their Digital Marketing expertise helped us grow rapidly across social media platforms!",
    category: "Digital Marketing",
  }
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <PopInSection>
    <div className={styles.testimonialContainer}>
      <h2>What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`${styles.testimonialCard} ${styles[testimonial.category.replace(/\s+/g, '')]}`}>
            <p className={styles.feedback}>&quot;{testimonial.feedback}&quot;</p>
            <h3 className={styles.name}>{testimonial.name}</h3>
            <p className={styles.role}>{testimonial.role}</p>
            <span className={styles.category}>{testimonial.category}</span>
          </div>
        ))}
      </Slider>
    </div>
    </PopInSection>
  );
};

export default TestimonialCarousel;
