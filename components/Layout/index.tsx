import React, { PureComponent } from "react";
import Head from "next/head";
import { Provider, Subscribe } from "unstated";
import "bootstrap-css-only/css/bootstrap.min.css";
import navbarContainer from "../../containers/navbar";

export default class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Allerta Stencil"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Abel&display=swap"
            rel="stylesheet"
          ></link>
          <meta
            name="description"
            content="Rzeczowy Dietetyk - Blog, profesjonalne rady, informacje, umawianie wizyt. (Generała Leopolda Okulickiego, Radom, Polska)"
          />
          <meta
            name="keywords"
            content="diety, diets, dietetyk, radom, polska, rzeczowy, dietetyk, rzeczowy dietetyk, Rzeczowy Dietetyk, RzeczowyDietetyk, rzeczowydietetyk.com, RzeczowyDietetyk.com, porady, dietetyczne, poradnia, pomoc, choroby, w, chorobach, nadciśnienie, zaburzenia profilu lipidowego, miażdżyca, alergie, alergia, allergy, pokarmowe, dna, moczanowa, gigrena, insulinoodporność, hipoglikemia, cukrzyca, choroby, autoimmunologiczne, hashimoto, łuszczyca, reumatoidalne, zapalenie, stawów, choroba, gravesa, basedowa, toczeń, rumieniowaty, układowy, nadczynność, niedoczynność, tarczycy, tarczyca, zaburzenia, funkjonowanie, funkcjonowania, układ, pokarmowy, refluks, żołądkowo, przełykowy, żołądek, dwunastniczy, jelia, jelito, drażliwe, drażliwego, zespół, ibs, niealkoholowe, alkohol, stłuszczenie, wątroba, wątroby, niedożywienie, anoreksja, nowotwory, osteoporoza, otyłość, chudnięcie, jak, schudnąć, żywienie, zdrowe, dojelitowe, pozajelitowe, jelitowe, fit"
          />
          <meta name="language" content="PL" />
          <meta name="author" content="Maciej Sułecki" />
          <title>Rzeczowy Dietetyk</title>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#3d5194" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-78FPGP5HGS"
          ></script>
          <script>
            {() => {
              //@ts-ignore
              window.dataLayer = window.dataLayer || [];
              //@ts-ignore
              function gtag() {
                //@ts-ignore
                dataLayer.push(arguments);
              }
              //@ts-ignore
              gtag("js", new Date());
              //@ts-ignore
              gtag("config", "G-78FPGP5HGS");
            }}
          </script>
        </Head>
        <Provider>
          <Subscribe to={[navbarContainer]}>{container => children}</Subscribe>
          <script src="/scripts/three.r92.min.js" />
          <script src="/scripts/vanta.birds.min.js" />
        </Provider>
        <style jsx global>{`
          body {
            background-color: rgba(187, 246, 189, 0.5);
            font-family: Abel;
          }
          img {
            pointer-events: none;
            cursor: default;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .no-select {
            pointer-events: none;
            cursor: default;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        `}</style>
      </div>
    );
  }
}
