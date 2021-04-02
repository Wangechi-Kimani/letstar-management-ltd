import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "./styles.module.css";

const useStyles = makeStyles((theme) => ({
  title: {
      marginTop: '100px',
      marginBottom: '20px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '20px',
      fontFamily: 'Playfair Display',
      color: "rgb(7, 53, 66)"
  },
  paperRoot: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  content: {
    paddingTop: "30px",
  },
}));

export default function WhoIsLetStar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography color="textSecondary" className={classes.title}>About Letstar Mgt. Ltd.</Typography>
      <div className={classes.paperRoot}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={0}>
              <div className={classes.content}>
                <Typography
                  component="p"
                  variant="body2"
                  color="textSecondary"
                  align="justify"
                >
                  Letstar is a Kenyan Incorporated company and locally owned. Our
                  main activities are; manufacturers and suppliers of stone cut
                  machines and related aggregates, civil engineering
                  contractors, road construction contractors, civil excavation
                  works and excavation works, We are fully equipped with all the
                  necessary infrastructure for quarry mining and our stone
                  cutting machines have a capacity of 10,000 stones in a day per
                  machine. Our area of expertiseincludes but not limited to building
                  technology, civil and structuralengineering.
                </Typography>
                <br /> <br/ >
                <Typography
                  component="p"
                  variant="body2"
                  color="textSecondary"
                  align="justify"
                >
                  We pride ourselves in playing a very vital role in the
                  construction industry over the past 10 years and this has
                  earned a distinct place in terms of quality and timely
                  service.
                </Typography>
                <br /> <br />
                <Typography
                  component="p"
                  variant="body2"
                  color="textSecondary"
                  align="justify"
                >
                  We work closely with our clients to accurately interpret their
                  dreams/visions in drawings and bring them to the desired
                  reality through construction solutions to meet their needs. In
                  addition, we, we liaise with other firms under sub contractual
                  terms, especially in provision and distributing of electricity
                  supply services.
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={0}>
              <video width="500" height="400" controls className={styles.video}>
                <source
                  src="/about/Letstar_Who_We_Are_Video.compressed.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
