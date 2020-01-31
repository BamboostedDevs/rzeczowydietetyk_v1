import { Col, Row } from "react-bootstrap";
import { Link } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
//@ts-ignore
import Zoom from "react-reveal/Zoom";

function Large() {
  return (
    <div id="contact">
      <Row
        style={{
          maxWidth: "99vw",
          fontFamily: "Rajdhani"
        }}
      >
        <Col
          style={{
            textAlign: "left",
            marginTop: "20vh",
            minWidth: "5vw",
            marginLeft: "2.5vw"
          }}
        >
          <Zoom bottom>Lokalizacja</Zoom>
          <Zoom right cascade duration={1500}>
            <div>
              <Row style={{ fontSize: "2.5vh", marginTop: "5vh" }}>
                ul. Generała Leopolda Okulickiego 76
              </Row>
              <Row style={{ fontSize: "2.25vh" }}>
                (wewnątrz przychodni Polmedic)
              </Row>
              <Row style={{ fontSize: "2vh" }}>w Radomiu</Row>
            </div>
          </Zoom>
          <Zoom bottom>
            <Row style={{ fontSize: "4.25vh", marginTop: "2.5vh" }}>
              Godziny przyjęć:
            </Row>
          </Zoom>
          <Zoom right cascade duration={1500}>
            <div>
              <Row style={{ fontSize: "2.75vh", marginTop: "2.5vh" }}>
                Poniedziałek: godz. 14-20
              </Row>
              <Row style={{ fontSize: "2.75vh" }}>Czwartek: godz. 14-20</Row>
              <Row style={{ fontSize: "2.75vh" }}>Piątek: godz. 14-20</Row>
            </div>
          </Zoom>
        </Col>
        <Col>
          <iframe
            allowFullScreen
            frameBorder={0}
            style={{
              border: 0,
              marginTop: "18.5vh",
              width: "50vw",
              height: "50vh",
              zIndex: 1
            }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9955.185948724045!2d21.127623!3d51.406794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc2a9be22232247d!2sRzeczowy%20Dietetyk!5e0!3m2!1sen!2spl!4v1573308250850!5m2!1sen!2spl"
          ></iframe>
        </Col>
        <Col
          style={{
            marginTop: "20vh",
            minWidth: "5vw",
            marginLeft: "0.5vw",
            textAlign: "center"
          }}
        >
          <Zoom bottom cascade duration={1500}>
            <div>
              <div>Kontakt</div>
              <EmailIcon style={{ fontSize: "10vh", marginTop: "5vh" }} />
              <Row
                style={{
                  fontSize: "2.25vh",
                  minWidth: "5vw",
                  width: "100%"
                }}
              >
                <Link
                  color="textPrimary"
                  href="mailto:krzysztof.skuza@rzeczowydietetyk.com"
                  style={{
                    wordWrap: "break-word",
                    minWidth: "5vw",
                    width: "100%"
                  }}
                >
                  krzysztof.skuza@rzeczowydietetyk.com
                </Link>
              </Row>
              <PhoneIcon style={{ fontSize: "10vh", marginTop: "5vh" }} />
              <Row
                style={{
                  fontSize: "2.75vh",
                  minWidth: "5vw"
                }}
              >
                <Link
                  color="textPrimary"
                  href="tel:+48721550102"
                  style={{
                    wordWrap: "break-word",
                    minWidth: "5vw",
                    width: "100%"
                  }}
                >
                  tel. +48 721 550 102
                </Link>
              </Row>
            </div>
          </Zoom>
        </Col>
      </Row>
      <style jsx>{`
        #contact {
          text-align: center;
          max-width: 100vw;
          font-size: 7.5vh;
          margin-bottom: -6vh;
        }
      `}</style>
    </div>
  );
}

export default Large;
