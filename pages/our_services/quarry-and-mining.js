import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../../src/components/Footer/Footer";
import Navigation from "../../src/components/Navigation/Navigation";
import ScrollToTop from "../../src/components/ScrollToTop/ScrollToTop";
import QuarryAndMiningServices from "../../src/components/OurServices/QuarryAndMining";
import Clients from "../../src/components/Clients/Clients";

const Quarry = () => {
  return (
    <React.Fragment>
      <Navigation />
      <ScrollToTop showBelow={250} />
      <Container>
        <QuarryAndMiningServices />
        <Clients />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Quarry;
