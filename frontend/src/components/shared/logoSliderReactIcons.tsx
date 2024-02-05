import React, {useMemo} from 'react';
import Slider, { Settings } from 'react-slick';

interface LogoSliderProps {
  icons: React.ReactNode[];
}

const LogoSliderReactIcons: React.FC<LogoSliderProps> = ({ icons }) => {
  const settings: Settings = useMemo(() => ({
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    rtl: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          speed: 500,
        },
      },
    ],
  }), []);

  return (
    <Slider {...settings}>
      {icons.map((icon, idx) => (
        <span key={idx}>
          {icon}
        </span>
      ))}
    </Slider>
  );
};

export default React.memo(LogoSliderReactIcons);
