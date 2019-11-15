import React, { Component } from "react";
import { Segment } from "..";
import { Container, Row } from "react-bootstrap";
import navbarContainer from "../../../containers/navbar";

type State = {
  open?: boolean;
};

export default class Services extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div
        id="services"
        style={
          navbarContainer.state.size == "small"
            ? { fontSize: "2vh" }
            : { fontSize: "4.5vh" }
        }
      >
        <Segment>
          <Container
            style={{
              backgroundColor: "white",
              textAlign: "left",
              fontFamily: "Lato"
            }}
          >
            <Row>Tu będzie oferta - świadczone usługi (i inne tło)</Row>
            <Row>Zamiast pierwszego obrazka avocado z neta będzie logo </Row>
            <Row>
              W kółku gdzie teraz jest miniaturka tego dziwnego tła (które jest
              tylko poglądowe, bo tutaj będzie w tle taki delikatny wzorek
              właśnie ważywny) będzie zdjęcie Krzysztofa Skuzy
            </Row>
            <Row>
              Zamiast tekstu "Lorem ipsum" będzie krótki, treściwy opis
              Rzeczowego Dietetyka
            </Row>
            <Row>
              Na samym dole na obrazku będzie podpis wykonawców strony i
              określenie licencji (żeby nikt nie mógł sobie kraść żadnych
              elementów tej unikatowej strony)
            </Row>
            <Row>Z blogiem jeszcze zejdzie troche</Row>
          </Container>
        </Segment>
        <Segment></Segment>
        <style jsx>{`
          #services {
            background: url(/vegetables.jpg) rgba(187, 246, 189, 0.5);
            background-size: cover;
            background-blend-mode: darken;
            background-attachment: fixed;
            width: 100%;
            height: 300vh;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
