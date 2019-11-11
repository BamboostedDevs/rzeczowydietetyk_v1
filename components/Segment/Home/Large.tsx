import { Col, Row, Container } from "react-bootstrap";
import BgAnimation from "../../Utils/BgAnimation";
import { Info } from "../";

function Large() {
  return (
    <div className="row" id="home">
      <div className="left header">
        <BgAnimation />
        <Container style={{ marginTop: "20vh", marginLeft: "5vw" }}>
          <Row>
            <Col style={{ flexGrow: "unset", marginRight: "1vw" }}>
              <Row />
              <Row>
                <img
                  alt="logo"
                  src="https://images.vexels.com/media/users/3/143057/isolated/preview/b96fb3ff9a11216da3f124e69f9e377e-avocado-color-flat-icon-by-vexels.png"
                  className="d-inline-block align-center"
                  style={{
                    height: "17rem",
                    width: "auto"
                  }}
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
      <div className="right">
        <Info />
      </div>
      <style jsx>{`
        .row {
          display: flex;
          width: 100%;
        }

        .left {
          flex: 70%;
        }

        .header {
          font-size: 10vh;
        }

        .right {
          flex: 30%;
        }
      `}</style>
    </div>
  );
}

export default Large;
