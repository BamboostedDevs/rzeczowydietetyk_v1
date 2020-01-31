import { Col, Row, Container } from "react-bootstrap";
import BgAnimation from "../../Utils/BgAnimation";

function Small() {
  return (
    <div
      style={{
        maxHeight: "100vh",
        width: "100vw",
        backgroundColor: "rgb(112,182,241)"
      }}
      id="home"
    >
      <BgAnimation />
      <Container
        style={{
          marginTop: "10vh",
          marginLeft: "7.5vw",
          position: "absolute",
          fontSize: "10vw",
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
                  height: "8rem",
                  width: "auto",
                  marginRight: "3vw"
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
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default Small;
