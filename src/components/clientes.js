import React from 'react';
import './clientesstyles.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Alumasa from '../images/clienteAlumasa.svg';
import tapete from '../images/cliente-Tapete São Carlos.svg'
import Sarah from '../images/cliente-Sarah móveis.svg'
import Alumbra from '../images/cliente-Alumbra store.svg'
import Geris from '../images/cliente-Geris.svg'
import Luckspuma from '../images/cliente-Luckspuma.svg'
import Ozini from '../images/cliente-Ozini.svg'
import Permatti from '../images/cliente-Permatti.svg'
import Madetec from '../images/cliente-madetec.svg'


const ImageCarousel = () => {
  const images = [Alumasa, tapete,Sarah,Alumbra,Geris,Luckspuma,Ozini,Permatti,Madetec];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };


  return (
    <div className='clientes-container' >
      <h4>QUEM CONFIA E ACREDITA NA <span>INFODESIGN</span></h4>
      <div className='clientes'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image}
              alt={`Imagem ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}

export default ImageCarousel;
