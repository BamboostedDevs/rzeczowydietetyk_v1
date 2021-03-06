import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Distribution } from "grommet";
import Flip from "react-reveal/Flip";
import Simple from "../../Utils/Carousel";

function Large() {
  const [reveal, revealNow] = useState([0]);
  return (
    <>
      <div className="officeWeb">
        <div style={{ height: "50vh" }} />
        <div
          id="info"
          style={{
            width: "100%",
            height: "120vh",
            backgroundImage: "url(/images/owocnewarzywa.svg)",
            backgroundColor: "rgba(220,250,221,1)",
            backgroundBlendMode: "difference",
            fontSize: "10vh",
            paddingTop: "10vh"
          }}
        >
          Co zabrać ze sobą na wizytę?
          <Distribution
            style={{
              fontSize: "5vh",
              height: "75vh",
              marginTop: "2vh",
              marginLeft: "1vw",
              marginRight: "1vw"
            }}
            values={[
              { value: 10, element: "checks" },
              { value: 10, element: "diary" },
              { value: 10, element: "info" },
              { value: 10, element: "hospital" },
              { value: 10, element: "child" },
              { value: 10, element: "dress" }
            ]}
          >
            {value => (
              <div
                className="bringwithu"
                onMouseEnter={() => {
                  if (!reveal.includes(value.element)) {
                    var list = reveal.slice(0);
                    list.push(value.element);
                    revealNow(list);
                  }
                }}
              >
                {value.element === "checks" ? (
                  <div style={{ verticalAlign: "middle" }}>
                    <div style={{ marginTop: "5vh" }}>Wyniki badań</div>
                    <div style={{ fontSize: "3vh", marginTop: "2vh" }}>
                      <Flip top cascade when={reveal.includes(value.element)}>
                        <div>
                          <Row
                            style={{ textAlign: "center", display: "inherit" }}
                          >
                            Morfologia
                          </Row>
                          <Row
                            style={{ textAlign: "center", display: "inherit" }}
                          >
                            Lipidogram
                          </Row>
                          <Row
                            style={{ textAlign: "center", display: "inherit" }}
                          >
                            Próby wątrobowe
                          </Row>
                          <Row
                            style={{ textAlign: "center", display: "inherit" }}
                          >
                            Glukoza
                          </Row>
                          <Row
                            style={{ textAlign: "center", display: "inherit" }}
                          >
                            TSH
                          </Row>
                        </div>
                      </Flip>
                    </div>
                  </div>
                ) : value.element === "diary" ? (
                  <div style={{ verticalAlign: "middle" }}>
                    <div style={{ marginTop: "5vh" }}>
                      Dzienniczek żywieniowy
                    </div>
                    <div style={{ fontSize: "3vh", marginTop: "2vh" }}>
                      <Flip top when={reveal.includes(value.element)}>
                        <a href="/images/dzienniczek.pdf" download>
                          Wydrkuj, wypełnij i przynieś na wiyztę
                        </a>
                      </Flip>
                    </div>
                  </div>
                ) : value.element === "child" ? (
                  <div style={{ verticalAlign: "middle" }}>
                    <div style={{ marginTop: "5vh" }}>
                      Książeczka zdrowia dziecka
                    </div>
                    <div style={{ fontSize: "3vh", marginTop: "2vh" }}>
                      <Flip top when={reveal.includes(value.element)}>
                        <div>Dotyczy pacjentów poniżej 18. roku życia</div>
                      </Flip>
                    </div>
                  </div>
                ) : value.element === "hospital" ? (
                  <div style={{ verticalAlign: "middle" }}>
                    <div style={{ marginTop: "5vh" }}>Wypis ze szpitala</div>
                    <div style={{ fontSize: "3vh", marginTop: "2vh" }}>
                      <Flip top when={reveal.includes(value.element)}>
                        <div>Opcjonalne</div>
                      </Flip>
                    </div>
                  </div>
                ) : value.element === "dress" ? (
                  <div style={{ verticalAlign: "middle" }}>
                    <div style={{ marginTop: "5vh" }}>
                      Przygotowanie na badania antropometryczne
                    </div>
                    <div style={{ fontSize: "3vh", marginTop: "2vh" }}>
                      <Flip top when={reveal.includes(value.element)}>
                        <div>
                          (analiza impedancji bioelektrycznej) wykonywane
                          podczas wizyty, wymagają one swobodnego odkrycia dłoni
                          i stóp.{" "}
                        </div>
                      </Flip>
                    </div>
                  </div>
                ) : (
                  value.element === "info" && (
                    <div style={{ verticalAlign: "middle" }}>
                      <div style={{ marginTop: "5vh" }}>
                        Informacje o przyjmowanych lekach
                      </div>
                      <div style={{ fontSize: "3vh", marginTop: "2vh" }}>
                        <Flip top when={reveal.includes(value.element)}>
                          <div>
                            Dotyczy pacjentów przyjmujących leki regularnie
                          </div>
                        </Flip>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </Distribution>
        </div>
      </div>
      <div className="machineWeb">
        <div style={{ height: "50vh" }} />
        <div
          style={{
            width: "100%",
            height: "120vh",
            backgroundImage: "url(/images/owocnewarzywa.svg)",
            backgroundColor: "rgba(220,250,221,1)",
            backgroundBlendMode: "difference",
            fontSize: "10vh",
            paddingTop: "7.5vh"
          }}
        >
          O mnie
          <div style={{ marginTop: "10vh" }}>
            <Simple deviceType="desktop" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .react-multiple-carousel__arrow {
            z-index: 900;
          }
          .bringwithu {
            margin: 5px 5px 5px 5px;
            border-radius: 5px;
            background-color: rgba(0, 0, 0, 0);
            width: 100%;
            height: 100%;
            transition: background-color 0.75s, margin 0.75s,
              border-radius 1.25s;
          }
          .bringwithu:hover {
            margin: 0 0 0 0;
            border-radius: 30px;
            background-color: rgba(0, 176, 255, 0.1);
            transition: background-color 1s, margin 1s, border-radius 1.5s;
          }
          .bringwithufocus {
            margin: 0 0 0 0;
            border-radius: 30px;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 176, 255, 0.1);
            transition: background-color 1s, margin 1s, border-radius 1.5s;
          }
          .officeWeb {
            background: url(/images/office_web.jpg);
            background-size: cover;
            background-attachment: fixed;
            width: 100%;
            text-align: center;
            font-family: Rajdhani;
          }
          .machineWeb {
            background: url(/images/tanita_web.jpg);
            background-size: cover;
            background-attachment: fixed;
            width: 100%;
            text-align: center;
            font-family: Rajdhani;
          }
        `}
      </style>
    </>
  );
}

export default Large;
