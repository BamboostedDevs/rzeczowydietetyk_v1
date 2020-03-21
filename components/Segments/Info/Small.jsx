import React, { useState } from "react";
import { Distribution } from "grommet";
import Flip from "react-reveal/Flip";
import { Row } from "react-bootstrap";
import Simple from "../../Utils/Carousel";

function Large() {
  const [amplified, amplify] = useState(null);

  return (
    <>
      <img className="fixed-img" alt="office" src="images/office_mobile.jpg" />
      <div style={{ fontFamily: "Rajdhani" }}>
        <div style={{ height: "20vh" }} />
        <div
          id="info"
          style={{
            width: "100%",
            backgroundImage: "url(/images/owocnewarzywa_mobile.svg)",
            backgroundColor: "rgba(220,250,221,1)",
            backgroundBlendMode: "difference",
            fontSize: "10vw",
            paddingTop: "10vh",
            textAlign: "center"
          }}
        >
          <div>Co zabrać na wizytę?</div>
          <Distribution
            style={{
              fontSize: "5vh",
              height: "70vh",
              marginTop: "2vh",
              marginLeft: "1vw",
              marginRight: "1vw"
            }}
            values={[
              { value: 10, element: "checks" },
              { value: 10, element: "diary" },
              { value: 20, element: "info" },
              { value: 10, element: "hospital" },
              { value: 10, element: "child" },
              { value: 20, element: "dress" }
            ]}
          >
            {value => (
              <div
                className={
                  amplified === value.element
                    ? "bringwithufocus"
                    : "bringitwithu"
                }
                onTouchStart={() => amplify(value.element)}
                onTouchEnd={() => amplify(null)}
              >
                {value.element === "checks" ? (
                  <div style={{ verticalAlign: "middle" }}>
                    <div style={{ marginTop: "5vh", fontSize: "3vh" }}>
                      Wyniki badań
                    </div>
                    <div style={{ fontSize: "2vh", marginTop: "2vh" }}>
                      <Flip top cascade>
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
                    <div style={{ marginTop: "5vh", fontSize: "3vh" }}>
                      Dzienniczek żywieniowy
                    </div>
                    <div style={{ fontSize: "2vh", marginTop: "2vh" }}>
                      <Flip top>
                        <a href="/images/dzienniczek.pdf" download>
                          Wydrkuj, wypełnij i przynieś na wiyztę
                        </a>
                      </Flip>
                    </div>
                  </div>
                ) : value.element === "child" ? (
                  <div style={{ verticalAlign: "middle" }}>
                    <div style={{ marginTop: "5vh", fontSize: "3vh" }}>
                      Książeczka zdrowia dziecka
                    </div>
                    <div style={{ fontSize: "2vh", marginTop: "2vh" }}>
                      <Flip top>
                        <div>Dotyczy pacjentów poniżej 18. roku życia</div>
                      </Flip>
                    </div>
                  </div>
                ) : value.element === "hospital" ? (
                  <div style={{ verticalAlign: "middle" }}>
                    <div style={{ marginTop: "5vh", fontSize: "3vh" }}>
                      Wypis ze szpitala
                    </div>
                    <div style={{ fontSize: "2vh", marginTop: "2vh" }}>
                      <Flip top>
                        <div>Opcjonalne</div>
                      </Flip>
                    </div>
                  </div>
                ) : value.element === "dress" ? (
                  <div style={{ verticalAlign: "middle" }}>
                    <div style={{ marginTop: "5vh", fontSize: "3vh" }}>
                      Przygotowanie na badania antropometryczne
                    </div>
                    <div style={{ fontSize: "2vh", marginTop: "2vh" }}>
                      <Flip top>
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
                      <div style={{ marginTop: "5vh", fontSize: "3vh" }}>
                        Informacje o przyjmowanych lekach
                      </div>
                      <div style={{ fontSize: "2vh", marginTop: "2vh" }}>
                        <Flip top>
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
          <div
            style={{
              width: "100%",
              height: "95vh",
              backgroundImage: "url(/images/owocnewarzywa_mobile.svg)",
              backgroundColor: "rgba(220,250,221,1)",
              backgroundBlendMode: "difference",
              fontSize: "10vw",
              textAlign: "center"
            }}
          >
            O mnie
            <div style={{ marginTop: "7.5vh" }}>
              <Simple deviceType="mobile" />
            </div>
          </div>
        </div>
        <div style={{ height: "40vh" }} />
      </div>
      <style jsx>{`
        .fixed-img {
          position: fixed;
          z-index: -10;
          top: 0;
          height: 100%;
        }
        .fixed-img-over {
          position: fixed;
          z-index: -1;
          top: 0;
          height: 100%;
        }
        .bringwithu {
          text-align: center;
          margin: 5px 5px 5px 5px;
          border-radius: 5px;
          background-color: rgba(0, 0, 0, 0);
          width: 100%;
          height: 100%;
          transition: background-color 0.75s, margin 0.75s, border-radius 1.25s;
        }
        .bringwithufocus {
          margin: 0 0 0 0;
          border-radius: 30px;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 176, 255, 0.1);
          transition: background-color 1s, margin 1s, border-radius 1.5s;
        }
        .takelist {
          text-align: center;
          display: inherit;
        }
      `}</style>
    </>
  );
}

export default Large;
