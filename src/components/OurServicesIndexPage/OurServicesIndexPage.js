import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2),
    color: "rgba(2, 35, 45, 0.877)",
  },

  titleStyle: {
    fontFamily: "Playfair Display",
    fontWeight: 'bolder',
    fontSize: '20px',
    fontFamily: 'Playfair Display',
    color: "rgba(7, 53, 66, 0.719)"
    
  },

  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.1),
      //  width: theme.spacing(24),
      height: theme.spacing(40),
    },
    justifyContent: "space-evenly",
  },
  card: {
    maxWidth: "270px",
    display: "hidden",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.title}>
        <hr />
        <Typography color="textSecondary" className={classes.titleStyle}>Our Services</Typography>
      </div>
      <div className={classes.root}>
        <div className={classes.card}>
          <Card raised>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/our_services/Asset_1.png"
                title="Quarry Mining Services"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2" component="h2">
                  Quarry Mining Services
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Letstar is equipped with hydraulic excavators, dumpers, wheel
                  loaders and trucks to aid in mining...
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="/our_services/quarry-and-mining">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className={classes.card}>
          <Card raised>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/our_services/Asset_2.png"
                title="Civil Engineering Structures"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2" component="h2">
                  Civil Engineering Structures
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Letstar offers a wide range of civil and structural
                  engineering construction...
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="/our_services/civil-engineering">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className={classes.card}>
          <Card raised>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/our_services/Asset_3.png"
                title="Quarry Mining Services"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2" component="h2">
                  Roads Construction
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Letstar offers a wide range of road constructions and other
                  efficient road services...
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="/our_services/road-construction">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className={classes.card}>
          <Card raised>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/our_services/Asset_4.png"
                title="Quarry Mining Services"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2" component="h2">
                  Earthworks
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Letstar provides earthworks, excavations, compacting and
                  services...
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="/our_services/earthworks">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

      </div>
    </React.Fragment>
  );
}



// "& > *": {
//   margin: theme.spacing(1),
//   //   width: theme.spacing(24),
//   //   height: theme.spacing(24),
// },
