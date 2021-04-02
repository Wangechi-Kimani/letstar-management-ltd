import { Container } from "@material-ui/core";
import React from "react";
import Mission from "../src/components/Mission/Mission";
import Footer from "../src/components/Footer/Footer";
import Navigation from "../src/components/Navigation/Navigation";
import WhoIsLetStar from "../src/components/WhoIsLetstar/WhoIsLetstar";
import Team from "../src/components/Team/Team";
import ScrollToTop from "../src/components/ScrollToTop/ScrollToTop";

const About = () => {
  return (
    <React.Fragment>
      <Navigation />
      <ScrollToTop showBelow={250}/>
      <Container>
        <WhoIsLetStar />
        <Mission />
        <Team />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default About;
