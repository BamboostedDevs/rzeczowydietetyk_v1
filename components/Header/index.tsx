import { FunctionComponent } from "react";
import { Navbar, Col, Row } from "react-bootstrap";
import { Sticky } from "react-sticky";
import { navbarContainer } from "../../containers/navbar";

const Header: FunctionComponent = () => (
  <Sticky>
    {({ style }) => (
      <div style={style}>
        {!navbarContainer.state.visible && (
          <Navbar bg="light" variant="light" fixed="top" className="bg">
            <Navbar.Brand
              href="#home"
              style={{
                fontSize: "2.5vh",
                padding: "0.5vw 1vw",
                wordWrap: "break-word",
                textAlign: "center"
              }}
            >
              <Row>
                <Col>
                  <Row />
                  <Row>
                    <img
                      alt=""
                      src="https://images.vexels.com/media/users/3/143057/isolated/preview/b96fb3ff9a11216da3f124e69f9e377e-avocado-color-flat-icon-by-vexels.png"
                      className="d-inline-block align-center"
                      style={{
                        height: "5rem",
                        width: "auto"
                      }}
                    />
                  </Row>
                  <Row />
                </Col>
                <Col />
                <Col>
                  <div
                    style={{
                      position: "relative",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                  >
                    <Row>RZECZOWY</Row>
                    <Row>DIETETYK</Row>
                  </div>
                </Col>
              </Row>
            </Navbar.Brand>
            <style jsx global>{`
              .bg {
                background-color: rgba(255, 250, 240, 0.75) !important;
                font-family: "Abel";
              }
            `}</style>
          </Navbar>
        )}
      </div>
    )}
  </Sticky>
);

export default Header;
