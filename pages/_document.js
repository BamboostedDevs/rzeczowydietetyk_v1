import Document, { Html, Head, Main, NextScript } from "next/document";
import { Grommet } from "grommet";

class _Document extends Document {
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
            content="Oficjalna strona internetowa Rzeczowego Dietetyka - kontakt, blog, profesjonalne rady, informacje, umawianie wizyt. (Rzeczowydietetyk - Poradnia Dietetyczna, Polmedic, Radom)"
          />
          <meta
            name="keywords"
            content="diety, diets, dietetyk, radom, polska, rzeczowy, dietetyk, rzeczowy dietetyk, Rzeczowy Dietetyk, RzeczowyDietetyk, rzeczowydietetyk.com, RzeczowyDietetyk.com, porady, dietetyczne, poradnia, pomoc, choroby, w, chorobach, nadciśnienie, zaburzenia profilu lipidowego, miażdżyca, alergie, alergia, allergy, pokarmowe, dna, moczanowa, gigrena, insulinoodporność, hipoglikemia, cukrzyca, choroby, autoimmunologiczne, hashimoto, łuszczyca, reumatoidalne, zapalenie, stawów, choroba, gravesa, basedowa, toczeń, rumieniowaty, układowy, nadczynność, niedoczynność, tarczycy, tarczyca, zaburzenia, funkjonowanie, funkcjonowania, układ, pokarmowy, refluks, żołądkowo, przełykowy, żołądek, dwunastniczy, jelia, jelito, drażliwe, drażliwego, zespół, ibs, niealkoholowe, alkohol, stłuszczenie, wątroba, wątroby, niedożywienie, anoreksja, nowotwory, osteoporoza, otyłość, chudnięcie, jak, schudnąć, żywienie, zdrowe, dojelitowe, pozajelitowe, jelitowe, fit"
          />
          <meta property="og:image" content="/images/graphic.jpg" />
          <meta property="og:url" content="https://rzeczowydietetyk.com/" />
          <meta
            property="og:image:secure_url"
            content="https://rzeczowydietetyk.com/images/graphic.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta
            property="og:title"
            content="Rzeczowy Dietetyk - Dietetyk, Radom"
          />
          <meta
            property="og:description"
            content="Dietetyk kliniczny - Kontakt, blog, informacje i umawianie wizyt"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#70b6f1" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#70b6f1" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />
          <meta property="og:locale" content="pl_PL" />
          <meta name="language" content="PL" />
          <meta name="author" content="bamboosted team" />
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

export default _Document;
