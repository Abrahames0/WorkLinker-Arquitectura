import { Col, Row } from "react-bootstrap";
import WelcomeComponent from "../components/inicio/WelcomeComponent";
import NavScrollExample from "../components/inicio/navegacion";

function Inicio() {
  return (
    <div>
        <NavScrollExample/>
        <Row className="aligh-items-center" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Col xs={12} md={7} xl={7}>
            <WelcomeComponent />
          </Col>
        </Row>
    </div>
  );
}

export default Inicio;
