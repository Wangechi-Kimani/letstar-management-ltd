import React from "react";
import Carousel from "react-grid-carousel";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  titleStyle: {
    fontFamily: "Playfair Display",
    fontWeight: 'bolder',
    fontSize: '19px',
    color: "rgba(7, 53, 66, 0.719)"

  }
})

const GridCarousel = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <hr />
      <Typography color="textSecondary" className={classes.titleStyle}>Our Current Projects</Typography>
      <div className={styles.container}> 
        <Carousel cols={3} rows={1} loop autoplay={4000}>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_4.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_5.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_6.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_7.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_8.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_4.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_5.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_6.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_7.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="/carousel/Asset_8.png" />
          </Carousel.Item>
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default GridCarousel;
