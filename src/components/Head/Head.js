import Head from "next/head";

const HeadComponent = () => {
  return (
    <Head>
      <title>Letstar Management Limited</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
        rel="stylesheet"
      ></link>

      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </Head>
  );
};

export default HeadComponent;
