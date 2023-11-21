import React from 'react';
import './clientesstyles.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagem from '../images/logoinfodesign.svg'

const ImageCarousel = () => {
  const images = [
    imagem,
    'imagem.jpg',
    'imagem',
    'imagem',
    'imagem'
  ];

  const settings = {
    dots: true,
    infinite: true,
    vertical: false,
    verticalSwiping: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Tempo de exibição de cada imagem em milissegundos
  };

  return (
     <div>
      <div className='page-carrossel'>
        <h1>QUEM CONFIA E ACREDITA NA <span>INFODESIGN</span></h1>
      </div>
      <Slider {...settings} className='routation'>
        {images.map((image, index) => (
          <div key={index}>
            <img src={`${process.env.PUBLIC_URL}/${image}`} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </Slider>
 </div>
  )
      }

export default ImageCarousel;
