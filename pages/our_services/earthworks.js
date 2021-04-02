import { Container } from "@material-ui/core";
import React from "react";
import Navigation from "../../src/components/Navigation/Navigation";
import Footer from "../../src/components/Footer/Footer";
import ScrollToTop from "../../src/components/ScrollToTop/ScrollToTop";
import EarthworkServices from "../../src/components/OurServices/Earthworks";
import Clients from "../../src/components/Clients/Clients";

const EarthWorks = () => {
  return (
    <React.Fragment>
      <Navigation />
      <ScrollToTop showBelow={250} />
      <Container>
        <EarthworkServices />
        <Clients />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default EarthWorks;
