import Carousel from 'react-bootstrap/Carousel';
import bannerimg from "../../../landing/assets/svg/banner4.jpg";
import bannerimg6 from "../../../landing/assets/svg/banner6.4a0e1685aa33e845cb03.webp";
import Bannerimg7 from '../../../landing/assets/svg/D_NQ_834053-MLA74483399757_022024-OO.webp'

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
        {/* <Carousel.Caption>
          <h3>Explora la Ciudad</h3>
          <p>Descubre los secretos de la ciudad bajo las estrellas.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded" 
          src={bannerimg6}
          alt="Paisaje montañoso con lago al atardecer"
          style={roundedCornerStyle} 
        />
        {/* <Carousel.Caption>
          <h3>Escapada Natural</h3>
          <p>Encuentra la paz en los paisajes más impresionantes.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded" 
          src={Bannerimg7}
          alt="Bosque neblinoso al amanecer"
          style={roundedCornerStyle} 
        />
        {/* <Carousel.Caption>
          <h3>Misterios del Bosque</h3>
          <p>Explora la belleza oculta de los bosques antiguos.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInicio;
