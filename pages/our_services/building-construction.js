import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../../src/components/Footer/Footer";
import Navigation from "../../src/components/Navigation/Navigation";
import ScrollToTop from "../../src/components/ScrollToTop/ScrollToTop";
import BuildingConstructionServices from "../../src/components/OurServices/BuildingConstruction";
import Clients from "../../src/components/Clients/Clients";

const BuildingConstruction = () => {
  return (
    <React.Fragment>
      <Navigation />
      <ScrollToTop showBelow={250} />
      <Container>
        <BuildingConstructionServices />
        <Clients />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default BuildingConstruction;
