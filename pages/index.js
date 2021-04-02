import React from 'react';
import { Container } from "@material-ui/core";

import Navigation from '../src/components/Navigation/Navigation';
import Carousel from "../src/components/Carousel/Carousel";
import OurServices from "../src/components/OurServicesIndexPage/OurServicesIndexPage";
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop';
import CurrentProjects from '../src/components/CurrentProjects/CurrentProjects';
import Testimonials from "../src/components/Testimonials/Testimonials";
import Clients from "../src/components/Clients/Clients";
import Footer from "../src/components/Footer/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Navigation />
      <Carousel />
      <OurServices />
      <ScrollToTop showBelow={250}/>
      <Container>
        <CurrentProjects />
        <Testimonials />
        <Clients />
      </Container>
      <Footer />
    </React.Fragment>
  )
}
