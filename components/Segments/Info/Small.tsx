import React, { useState } from "react";
import { Distribution } from "grommet";
//@ts-ignore
import Flip from "react-reveal/Flip";
import { Row } from "react-bootstrap";
//@ts-ignore
import IsVisible from "react-is-visible";
import Simple from "../../Utils/Carousel";

function Large() {
  const [amplified, amplify] = useState();
  const [isInvisible, markInvisible] = useState(false);

  return (
    <>
      {isInvisible ? (
        <img
          className="fixed-img"
          alt="tanita"
          src={require("../../../public/images/tanita_mobile.jpg")}
        />
      ) : (
        <img
          className="fixed-img"
          alt="office"
          src={require("../../../public/images/office_mobile.jpg")}
        />
      )}
      <div>
        <div style={{ height: "20vh" }} />
        <div
          id="info"
          style={{
            width: "100%",
            backgroundImage: require("../../../public/images/owocnewarzywa.svg"),
            backgroundColor: "rgba(220,250,221,1)",
            backgroundBlendMode: "difference",
            fontSize: "10vw",
            paddingTop: "10vh",
            textAlign: "center"
          }}
        >
          <div>Co zabrać na wizytę?</div>
          <IsVisible>
            {(IsVisible: boolean) => {
              IsVisible === true && markInvisible(false);
              return <div />;
            }}
          </IsVisible>
          <Distribution
            style={{
              fontSize: "5vh",
              height: "85vh",
              marginTop: "2vh",
              marginLeft: "1vw",
              marginRight: "1vw"
            }}
            values={[
              { value: 27 },
              { value: 26 },
              { value: 25 },
              { value: 24 }
            ]}
          >
            {value => (
              <div
                className={
                  amplified == value.value ? "bringwithufocus" : "bringitwithu"
                }
                onTouchStart={() => amplify(value.value)}
                onTouchEnd={() => amplify(null)}
              >
                {value.value === 27 ? (
                  <div style={{ verticalAlign: "middle" }}>
                    <div style={{ marginTop: "5vh" }}>Wyniki badań</div>
                    <div style={{ fontSize: "3vh", marginTop: "2vh" }}>
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
                        </div>
                      </Flip>
                    </div>
                  </div>
                ) : value.value === 26 ? (
                  <div style={{ verticalAlign: "middle", fontSize: "4vh" }}>
                    <div style={{ marginTop: "5vh" }}>
                      Dzienniczek żywieniowy
                    </div>
                    <div style={{ fontSize: "3vh", marginTop: "2vh" }}>
                      <Flip top>
                        <a href="/images/dzienniczek.pdf" download>
                          Wydrkuj i przynieś na wiyztę
                        </a>
                      </Flip>
                    </div>
                  </div>
                ) : value.value === 25 ? (
                  <div style={{ verticalAlign: "middle" }}>
                    <div
                      style={{
                        marginTop: "5vh",
                        fontSize: "4vh"
                      }}
                    >
                      Książeczka zdrowia dziecka
                    </div>
                    <div style={{ fontSize: "3vh", marginTop: "2vh" }}>
                      <Flip top>
                        <div>Dotyczy pacjentów poniżej 18. roku życia</div>
                      </Flip>
                    </div>
                  </div>
                ) : (
                  <div style={{ verticalAlign: "middle" }}>
                    <div style={{ marginTop: "5vh", fontSize: "4vh" }}>
                      Wypis ze szpitala
                    </div>
                    <div style={{ fontSize: "3vh", marginTop: "2vh" }}>
                      <Flip top>
                        <div>Opcjonalne</div>
                      </Flip>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Distribution>
          <div
            style={{
              width: "100%",
              height: "95vh",
              backgroundImage: require("../../../public/images/owocnewarzywa.svg"),
              backgroundColor: "rgba(220,250,221,1)",
              backgroundBlendMode: "difference",
              fontSize: "10vw",
              textAlign: "center"
            }}
          >
            O mnie
            <IsVisible>
              {(IsVisible: boolean) => {
                IsVisible === true && markInvisible(IsVisible);
                return <div />;
              }}
            </IsVisible>
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
      `}</style>
    </>
  );
}

export default Large;
