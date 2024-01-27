import React from 'react';
import Slider, { Settings } from 'react-slick';

interface LogoSliderProps {
  icons: React.ReactNode[];
}

const LogoSliderReactIcons: React.FC<LogoSliderProps> = ({ icons }) => {
  const settings: Settings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    rtl: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, // md-Breakpoint
        settings: {
          slidesToShow: 4, // Anzahl der Slides auf kleineren Bildschirmen
          speed: 5000,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {icons.map((icon, idx) => (
          <span key={idx}>
            {icon}
          </span>
        ))}
      </Slider>
    </div>
  );
};

export default React.memo(LogoSliderReactIcons);
