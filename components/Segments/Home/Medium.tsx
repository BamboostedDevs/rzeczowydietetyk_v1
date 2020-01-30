import { Col, Row, Container } from "react-bootstrap";
import BgAnimation from "../../Utils/BgAnimation";

function Medium() {
  return (
    <div style={{ maxHeight: "100vh", width: "100vw" }} id="home">
      <BgAnimation />
      <Container
        style={{
          marginTop: "10vh",
          marginLeft: "7.5vw",
          position: "absolute",
          fontSize: "8vw",
          minWidth: "0vh",
          maxWidth: "80vw"
        }}
      >
        <Row>
          <Col style={{ marginRight: "1vw" }}>
            <Row />
            <Row>
              <img
                alt="logo"
                className="d-inline-block align-center"
                style={{
                  height: "11.5rem",
                  width: "auto"
                }}
                src={require("../../../public/images/avocadoT.svg")}
              />
            </Row>
            <Row />
          </Col>
          <Col className="no-select">
            <Row>Rzeczowy </Row>
            <Row>Dietetyk</Row>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default Medium;
