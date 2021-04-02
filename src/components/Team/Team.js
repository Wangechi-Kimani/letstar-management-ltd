import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import styles from "./styles.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  nameofTeamMember: {
    color: "rgb(7, 53, 66)",
    fontFamily: "Playfair Display",
    fontWeight: "bolder",
    padding: "20px 0 20px 0",
  },

  contentOfTeamMember: {
    fontSize: "13px",
    color: "rgb(7, 53, 66)",
    paddingBottom: "20px",
  },

  memberTitle: {
    textAlign: "center",
    fontSize: "15px",
    color: "rgb(7, 53, 66)",
    fontFamily: "Playfair Display",
    fontWeight: "bolder",
  },

  icon: {
    color: "rgb(7, 53, 66)",
    textAlign: "center",
    cursor: "pointer",
    marginTop:'10px'
  },

  teamTitle: {
    marginTop: "50px",
    fontSize: "22px",
    fontFamily: "Playfair Display",
    color: "rgba(7, 53, 66, 0.719)",
    fontWeight: "bold",
    textAlign: "center",
  },

  hr: {
    backgroundColor: "rgba(7, 53, 66, 0.719)",
  },
}));

export default function Team() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography color="textSecondary" className={classes.teamTitle}>
        The Team
      </Typography>
      <hr className={classes.hr} />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} elevation={0} square>
              <div className={styles.content}>
                <img src="/team/avatar.jpg" />
                <Typography className={classes.nameofTeamMember}>
                  Samuel Gachau Chege
                </Typography>
                <Typography
                  color="textSecondary"
                  align="justify"
                  className={classes.contentOfTeamMember}
                >
                  Gachau Chege is an engineer for 30years. He founded the
                  company in 2010. Gachau Chege is an engineer for 30years. He
                  founded the company in 2010. Gachau Chege is an engineer for
                  30years. He founded the company in 2010.
                </Typography>
                <Typography className={classes.memberTitle}>
                  CEO & Managing Director/Engineer
                </Typography>
                <div className={classes.icon}>
                  <Link href="http://instagram.com">
                    <InstagramIcon fontSize="small" />
                  </Link>
                  <Link href="http://twitter.com">
                    <TwitterIcon fontSize="small" />
                  </Link>
                  <Link href="https://facebook.com">
                    <FacebookIcon />
                  </Link>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} elevation={0} square>
              <div className={styles.content}>
                <img src="/team/avatar.jpg" />
                <Typography className={classes.nameofTeamMember}>
                  Stephen Wahome Mugo
                </Typography>
                <Typography
                  color="textSecondary"
                  align="justify"
                  className={classes.contentOfTeamMember}
                >
                  Stephen Wahome Mugo is an engineer for 30years. He founded the
                  company in 2010. He is an engineer for 30years. He founded the
                  company in 2010. Stephen Wahome Mugo is an engineer for
                  30years. He founded the company in 2010.
                </Typography>
                <Typography className={classes.memberTitle}>
                  Planning Manager
                </Typography>
                <div className={classes.icon}>
                  <Link href="http://instagram.com">
                    <InstagramIcon fontSize="small" />
                  </Link>
                  <Link href="http://twitter.com">
                    <TwitterIcon fontSize="small" />
                  </Link>
                  <Link href="https://facebook.com">
                    <FacebookIcon />
                  </Link>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} elevation={0} square>
              <div className={styles.content}>
                <img src="/team/avatar.jpg" />
                <Typography className={classes.nameofTeamMember}>
                  Joseph Waithaka Njoroge
                </Typography>
                <Typography
                  color="textSecondary"
                  align="justify"
                  className={classes.contentOfTeamMember}
                >
                  Dennis Miringu Kibui is an engineer for 30years. He founded
                  the company in 2010. He is an engineer for 30years. He founded
                  the company in 2010. Dennis Miringu Kibui is an engineer for
                  30years. He founded the company in 2010.
                </Typography>
                <Typography className={classes.memberTitle}>
                  Operations Manager
                </Typography>
                <div className={classes.icon}>
                  <Link href="http://instagram.com">
                    <InstagramIcon fontSize="small" />
                  </Link>
                  <Link href="http://twitter.com">
                    <TwitterIcon fontSize="small" />
                  </Link>
                  <Link href="https://facebook.com">
                    <FacebookIcon />
                  </Link>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={0} square>
              <div className={styles.content}>
                <img src="/team/avatar.jpg" />
                <Typography className={classes.nameofTeamMember}>
                  Dennis Miringu Kibui
                </Typography>
                <Typography
                  color="textSecondary"
                  align="justify"
                  className={classes.contentOfTeamMember}
                >
                  Joseph Waithaka Njoroge is an engineer for 30years. He founded
                  the company in 2010. He is an engineer for 30years. He founded
                  the company in 2010. Waithaka is an engineer for 30years. He
                  founded the company in 2010.
                </Typography>
                <Typography className={classes.memberTitle}>
                  Engineer
                </Typography>
                <div className={classes.icon}>
                  <Link href="http://instagram.com">
                    <InstagramIcon fontSize="small" />
                  </Link>
                  <Link href="http://twitter.com">
                    <TwitterIcon fontSize="small" />
                  </Link>
                  <Link href="https://facebook.com">
                    <FacebookIcon />
                  </Link>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={0} square>
              <div className={styles.content}>
                <img src="/team/avatar.jpg" />
                <Typography className={classes.nameofTeamMember}>
                  Josphat Njagi
                </Typography>
                <Typography
                  color="textSecondary"
                  align="justify"
                  className={classes.contentOfTeamMember}
                >
                  Josphat Njagi is an engineer for 30years. He founded the
                  company in 2010. He is an engineer for 30years. He founded the
                  company in 2010. Josphat Njagi is an engineer for 30years. He
                  founded the company in 2010.
                </Typography>
                <Typography className={classes.memberTitle}>
                  Architect
                </Typography>
                <div className={classes.icon}>
                  <Link href="http://instagram.com">
                    <InstagramIcon fontSize="small" />
                  </Link>
                  <Link href="http://twitter.com">
                    <TwitterIcon fontSize="small" />
                  </Link>
                  <Link href="https://facebook.com">
                    <FacebookIcon />
                  </Link>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
