import { Col, Row, Container } from "react-bootstrap";
//@ts-ignore
import Zoom from "react-reveal/Zoom";
//@ts-ignore
import Slide from "react-reveal/Slide";
import { Link } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

function Small() {
  return (
    <div id="contact">
      <Container>
        <Zoom bottom>
          <Row
            style={{
              fontSize: "7.5vh",
              marginTop: "15vh",
              marginLeft: "2.5vw"
            }}
          >
            Lokalizacja
          </Row>
        </Zoom>
        <Zoom right cascade duration={1500}>
          <div style={{ marginLeft: "3vw" }}>
            <Row style={{ fontSize: "3vh", marginTop: "5vh" }}>
              ul. Generała Leopolda Okulickiego 76
            </Row>
            <Row style={{ fontSize: "2.5vh" }}>
              (wewnątrz przychodni Polmedic)
            </Row>
            <Row style={{ fontSize: "2vh" }}>w Radomiu</Row>
          </div>
        </Zoom>
      </Container>
      <Slide bottom>
        <iframe
          allowFullScreen
          frameBorder={0}
          style={{
            border: 0,
            marginTop: "10vh",
            width: "100vw",
            height: "40vh",
            zIndex: 1
          }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9955.185948724045!2d21.127623!3d51.406794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc2a9be22232247d!2sRzeczowy%20Dietetyk!5e0!3m2!1sen!2spl!4v1573308250850!5m2!1sen!2spl"
        ></iframe>
      </Slide>
      <Container>
        <Zoom bottom>
          <Row
            style={{
              fontSize: "4.5vh",
              marginTop: "2.5vh",
              marginLeft: "2.5vw"
            }}
          >
            Godziny Otwarcia:
          </Row>
        </Zoom>
        <Zoom left cascade duration={1500}>
          <div style={{ marginLeft: "3vw" }}>
            <Row style={{ fontSize: "3vh", marginTop: "2.5vh" }}>
              Poniedziałek: godz. 14-20
            </Row>
            <Row style={{ fontSize: "3vh" }}>Czwartek: godz. 14-20</Row>
            <Row style={{ fontSize: "3vh" }}>Piątek: godz. 14-20</Row>
          </div>
        </Zoom>
      </Container>
      <Container>
        <Zoom bottom cascade duration={2000}>
          <div
            style={{
              textAlign: "center",
              fontSize: "7.5vh",
              marginLeft: "2.5vw",
              marginBottom: "2vh",
              marginTop: "5vh"
            }}
          >
            <div>Kontakt</div>
            <EmailIcon style={{ fontSize: "10vh", marginTop: "5vh" }} />
            <Row
              style={{
                fontSize: "2.5vh",
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
                fontSize: "3vh",
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
      </Container>
    </div>
  );
}

export default Small;
