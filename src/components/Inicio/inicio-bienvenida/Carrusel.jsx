import Carousel from 'react-bootstrap/Carousel';
import banner from "../../../landing/assets/svg/banner6.4a0e1685aa33e845cb03.webp";
import bannerimg from "../../../landing/assets/svg/banner6.webp";
import bannerimg6 from "../../../landing/assets/svg/banner4.jpg";

function CarouselInicio() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerimg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerimg6}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInicio;
