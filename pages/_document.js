import Document, { Html, Head, Main, NextScript } from "next/document";
import { Grommet } from "grommet";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta
            charSet="UTF-8"
            name="viewport"
            content="width=device-width, initial-scale=1 user-scalable=no"
          />
          <meta
            name="description"
            content="Oficjalna strona internetowa RzeczowyDietetyk.com - kontakt, blog, profesjonalne rady, informacje, umawianie wizyt. (Poradnia Dietetyczna, Radom)"
          />
          <meta
            name="keywords"
            content="diety, diets, dietetyk, radom, polska, rzeczowy, dietetyk, rzeczowy dietetyk, Rzeczowy Dietetyk, RzeczowyDietetyk, rzeczowydietetyk.com, RzeczowyDietetyk.com, porady, dietetyczne, poradnia, pomoc, choroby, w, chorobach, nadciśnienie, zaburzenia profilu lipidowego, miażdżyca, alergie, alergia, allergy, pokarmowe, dna, moczanowa, gigrena, insulinoodporność, hipoglikemia, cukrzyca, choroby, autoimmunologiczne, hashimoto, łuszczyca, reumatoidalne, zapalenie, stawów, choroba, gravesa, basedowa, toczeń, rumieniowaty, układowy, nadczynność, niedoczynność, tarczycy, tarczyca, zaburzenia, funkjonowanie, funkcjonowania, układ, pokarmowy, refluks, żołądkowo, przełykowy, żołądek, dwunastniczy, jelia, jelito, drażliwe, drażliwego, zespół, ibs, niealkoholowe, alkohol, stłuszczenie, wątroba, wątroby, niedożywienie, anoreksja, nowotwory, osteoporoza, otyłość, chudnięcie, jak, schudnąć, żywienie, zdrowe, dojelitowe, pozajelitowe, jelitowe, fit"
          />
          <meta
            property="og:title"
            content="Rzeczowy Dietetyk - Dietetyk, Radom"
          />
          <meta
            property="og:description"
            content="Dietetyk kliniczny - Kontakt, blog, informacje i umawianie wizyt"
          ></meta>
          <meta
            property="og:url"
            content="https://rzeczowydietetyk.beeinger.now.sh/"
          />
          <meta property="og:image" content="/icons/owocnewarzywa.svg"></meta>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />
          <meta property="og:locale" content="pl_PL" />
          <meta name="language" content="PL" />
          <meta name="author" content="bamboosted team" />
          <meta name="theme-color" content="#70b6f1" />
          <meta name="msapplication-TileColor" content="#70b6f1" />
          <meta name="msapplication-TileImage" content="/favicon-144.png" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto|Lato|Poppins:700|Anaheim|Abel&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Grommet plain>
            <Main />
            <NextScript />
          </Grommet>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
