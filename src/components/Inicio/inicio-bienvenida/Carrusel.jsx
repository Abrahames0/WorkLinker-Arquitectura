import Carousel from 'react-bootstrap/Carousel';
import banner from "../../../landing/assets/svg/banner6.4a0e1685aa33e845cb03.webp";
import bannerimg from "../../../landing/assets/svg/banner6.webp";
import bannerimg6 from "../../../landing/assets/svg/banner4.jpg";

const roundedCornerStyle = {
  borderRadius: '20px',
};

function CarouselInicio() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded" 
          src={bannerimg}
          alt="Vista panorámica de la ciudad con iluminación nocturna"
          style={roundedCornerStyle} 
        />
        <Carousel.Caption>
          <h3>Explora la Ciudad</h3>
          <p>Descubre los secretos de la ciudad bajo las estrellas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded" 
          src={banner}
          alt="Paisaje montañoso con lago al atardecer"
          style={roundedCornerStyle} 
        />
        <Carousel.Caption>
          <h3>Escapada Natural</h3>
          <p>Encuentra la paz en los paisajes más impresionantes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded" 
          src={bannerimg6}
          alt="Bosque neblinoso al amanecer"
          style={roundedCornerStyle} 
        />
        <Carousel.Caption>
          <h3>Misterios del Bosque</h3>
          <p>Explora la belleza oculta de los bosques antiguos.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInicio;
