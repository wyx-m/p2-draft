import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item style={{height: 600}}>
        <img
          className="d-block w-100"
          src="https://kpop2u-unnie.com/cdn/shop/products/FswZFrAaYAENdFj.jpg?v=1680680943"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Trending</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: 600}} >
        <img
          className="d-block w-100"
          src="https://kpop2u-unnie.com/cdn/shop/products/FswZFrAaYAENdFj.jpg?v=1680680943"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: 600}}>
        <img
          className="d-block w-100"
          src="https://kpop2u-unnie.com/cdn/shop/products/FswZFrAaYAENdFj.jpg?v=1680680943"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-center'>Third slide label</h3>
          <p >
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;