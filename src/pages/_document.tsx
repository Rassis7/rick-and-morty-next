import NextDocument, {
    Html, Head, Main, NextScript,
  } from 'next/document';
  import { ServerStyleSheet } from 'styled-components';
  
  export default class Document extends NextDocument {
    static getInitialProps({ renderPage }) {
      const sheet = new ServerStyleSheet();
  
      const page = renderPage((App) => (props) =>
        sheet.collectStyles(<App {...props} />),
      );
  
      const styleTags = sheet.getStyleElement();
  
      return { ...page, styleTags };
    }

    render() {
      return (
        <Html>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }