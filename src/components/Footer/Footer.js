import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Link from "next/link";
import styles from "./styles.module.css";
import CopyrightIcon from "@material-ui/icons/Copyright";


const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "rgb(7, 53, 66)",
  },
  footerContent: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(24),
    },
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(2),
        width: theme.spacing(32),
      },
    },
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(2),
        width: theme.spacing(40),
      },
    },
    justifyContent: "space-around",
    fontSize: "12px",
  },

  title: {
    paddingBottom: "20px",
    textDecoration: "underline",
    fontSize: "9px",
  },
  icons: {
    display: "inline-flex",
    "& > *": {
      padding: theme.spacing(1),
    },
  },

  quickLinks: {
    padding: "1px",
  },

  getInTouch: {
    display: "inline-flex",
    padding: "6px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const date = new Date();
  const year = date.getFullYear();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.footerContent}>
          <div>
            <div className={classes.title}>
              <Typography variant="subtitle2">Follow Us</Typography>
            </div>
            <div>
              <Typography component="p" style={{ fontSize: "12px" }}>
                Follow us on our social media plaftforms for additional
                information and or current engagemens with the community
              </Typography>
            </div>
            <Typography className={classes.icons}>
              <a href="https://facebook.com" style={{ color: "inherit" }}>
                <FacebookIcon fontSize="large" />
              </a>
              <a href="https://twitter.com" style={{ color: "inherit" }}>
                <TwitterIcon fontSize="large" />
              </a>
              <a href="https://instagram.com" style={{ color: "inherit" }}>
                <InstagramIcon fontSize="large" />
              </a>
            </Typography>
          </div>

          <div className={classes.quickLinks}>
            <div className={classes.title}>
              <Typography variant="subtitle2">Quick Links</Typography>
            </div>
            <div className={styles.links}>
              <p>
                <Link href="/home">
                  <a>Home</a>
                </Link>
              </p>
              <p>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </p>
              <p>
                <Link href="/our_services/quarry-and-mining">
                  <a className={classes.links}>Quarry and Mining Services</a>
                </Link>
              </p>
              <p>
                <Link href="/our_services/civil-engineering">
                  <a className={classes.links}>Civil Engineering Services</a>
                </Link>
              </p>
              <p>
                <Link href="/our_services/road-construction">
                  <a className={classes.links}>Road Construction</a>
                </Link>
              </p>
              <p>
                <Link href="/our_services/earthworks">
                  <a className={classes.links}>Earthworks</a>
                </Link>
              </p>
              <p>
                <Link href="/our_services/building-construction">
                  <a className={classes.links}>Building Construction</a>
                </Link>
              </p>
             
            </div>
          </div>

          <div>
            <div className={classes.title}>
              <Typography variant="subtitle2">Get In Touch</Typography>
            </div>
            <div className={classes.getInTouch}>
              <LocationOnIcon />
              <Typography component="p" style={{ fontSize: "12px" }}>
                Jeda Plaza, Lumumba Drive, Roysambu, Nairobi
              </Typography>
            </div>
            <div className={classes.getInTouch}>
              <PostAddIcon />
              <Typography component="p" style={{ fontSize: "12px" }}>
                P. O. Box 249 -01000,Thika
              </Typography>
            </div>
            <div className={classes.getInTouch}>
              <PhoneAndroidIcon />
              <Typography component="p" style={{ fontSize: "12px" }}>
                +254-720-970-747
              </Typography>
            </div>
            <div className={classes.getInTouch}>
              <AlternateEmailIcon />
              <Typography component="p" style={{ fontSize: "12px" }}>
                Letstar.management.ltd@gmail.com,
                info@letstarmanagementltd.co.ke
              </Typography>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              textAlign: "center",
              fontSize: "11px",
              padding: "10px 0 20px 0",
            }}
          >
            Copyright <CopyrightIcon fontSize="small" /> {year} Letstar
            Mangement Ltd. | Powered by Moni Inc.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
