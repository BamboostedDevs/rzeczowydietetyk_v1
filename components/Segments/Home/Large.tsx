import { Col, Row, Container } from "react-bootstrap";
import BgAnimation from "../../Utils/BgAnimation";
import { Welcome } from "..";

function Large() {
  return (
    <div
      style={{ display: "flex", width: "100%", fontFamily: "Anaheim" }}
      id="home"
    >
      <div style={{ flex: "70%", fontSize: "10vh" }}>
        <BgAnimation />
        <Container style={{ marginTop: "20vh", marginLeft: "5vw" }}>
          <Row>
            <Col style={{ flexGrow: "unset", marginRight: "1vw" }}>
              <Row />
              <Row>
                <img
                  alt="logo"
                  className="d-inline-block align-center"
                  style={{
                    height: "17rem",
                    width: "auto"
                  }}
                  src="/images/avocadoT.svg"
                />
              </Row>
              <Row />
            </Col>
            <Col className="no-select">
              <Row>Rzeczowy </Row>
              <Row>Dietetyk</Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ flex: "30%" }}>
        <Welcome />
      </div>
    </div>
  );
}

export default Large;
