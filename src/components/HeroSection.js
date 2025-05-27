import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaPlaneDeparture } from 'react-icons/fa';
import '../styles/HeroSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image3 from '../assets/Lebanon-1_0.jpg';
import image5 from '../assets/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand 1.png';
import image6 from '../assets/1154538599.jpg';

function HeroSection() {
  const navigate = useNavigate();

  const slides = [
    { id: 2, image: image5, text: 'Camping in Ehden Forest' },
    { id: 1, image: image3, text: 'Discover PariBeach Day in Batroun' },
    { id: 3, image: image6, text: 'Beach Day in Batroun' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div className="hero">
      <Slider {...settings} className="hero-slider">
        {slides.map((slide) => (
          <div key={slide.id} className="hero-slide">
            <img src={slide.image} alt={slide.text} className="hero-image" />
            <div className="hero-overlay">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {slide.text}
              </motion.h1>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                Start your next adventure with us
              </motion.p>
              <motion.button
                className="hero-btn"
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate('/exploretrips')} // ✅ add click action
              >
                <FaPlaneDeparture /> Explore Trips
              </motion.button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSection;