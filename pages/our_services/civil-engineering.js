import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../../src/components/Footer/Footer";
import Navigation from "../../src/components/Navigation/Navigation";
import ScrollToTop from "../../src/components/ScrollToTop/ScrollToTop";
import CivilEngineeringServices from "../../src/components/OurServices/CivilEngineering";
import Clients from '../../src/components/Clients/Clients';


const CivilEngineering = () => {
  return (
    <React.Fragment>
      <Navigation />
      <ScrollToTop showBelow={250} />
      <Container>
        <CivilEngineeringServices />
        <Clients />
      </Container>
      <Footer />
      
    </React.Fragment>
  );
};

export default CivilEngineering;
