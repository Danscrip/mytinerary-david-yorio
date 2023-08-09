import React, { useState } from 'react';
import './carrousel.css';

const Carrousel = () => {
  
  const images = [
    'https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_640.jpg',
    'https://cdn.pixabay.com/photo/2017/12/16/16/37/great-wall-of-china-3022907_640.jpg',
    'https://cdn.pixabay.com/photo/2014/10/30/00/15/buenos-aires-508790_640.jpg',
    'https://cdn.pixabay.com/photo/2017/08/26/08/50/london-2682501_640.jpg',
    'https://cdn.pixabay.com/photo/2018/12/13/14/24/moscow-3872942_640.jpg',
    'https://cdn.pixabay.com/photo/2013/07/04/22/42/puerto-rico-143340_640.jpg',
    'https://cdn.pixabay.com/photo/2022/09/04/21/07/acapulco-7432803_640.jpg',
    'https://cdn.pixabay.com/photo/2013/06/14/22/12/juan-griego-139401_640.jpg',
    'https://cdn.pixabay.com/photo/2018/10/14/12/16/lago-federa-3746335_640.jpg',
    'https://cdn.pixabay.com/photo/2017/08/10/19/17/dominican-republic-2626680_640.jpg',
    'https://cdn.pixabay.com/photo/2013/12/02/15/49/havana-222462_640.jpg',
    'https://cdn.pixabay.com/photo/2015/08/24/21/25/finland-905712_640.jpg',


/*
francia
china
argentina
inglaterra
rusia
puerto rico
mexico
venezuela
italia
republica dominicana
cuba
finlandia

*/






    // ... Otras rutas de imágenes ...
  ];


  const [currentSlide, setCurrentSlide] = useState(0);

  const slideGroups = [];
  for (let i = 0; i < images.length; i += 4) {
    slideGroups.push(images.slice(i, i + 4));
  }

  const handleSlideChange = (index) => {
    if (index < 0) {
      setCurrentSlide(slideGroups.length - 1);
    } else if (index >= slideGroups.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="text-center">Popular Mytineraries</h2>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-inner">
          {slideGroups.map((group, index) => (
            <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
              <div className="d-flex justify-content-between">
                {group.map((image, i) => (
                  <img key={i} src={image} className="d-block mx-1 carousel-image" alt={`Slide ${index}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={() => handleSlideChange(currentSlide - 1)}
        >
          {/* ...botón previo... */}
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() => handleSlideChange(currentSlide + 1)}
        >
          {/* ...botón siguiente... */}
        </button>
        <ol className="carousel-indicators">
          {slideGroups.map((_, index) => (
            <li
              key={index}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => handleSlideChange(index)}
            ></li>
          ))}
        </ol>
      </div>
    </div>
  );
};




export default Carrousel