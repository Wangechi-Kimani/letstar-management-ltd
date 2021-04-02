import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    margin: "20px 10px 20px 10px",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.secondary,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  ourServicesTitle: {
    marginTop: '50px'
  },
}));

const OurServices = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <p style={{color: 'red'}}>Hello</p>
      </div>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={4.5}>
          <GridListTile>
            <img src="/our_services/Asset_1.png" alt="Quarry Mining Services" />
            <GridListTileBar
              title="Quarry Mining Services"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label="Quarry Mining Services">
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>

          <GridListTile>
            <img src="/our_services/Asset_2.png" alt="Quarry Mining Services" />
            <GridListTileBar
              title="Quarry Mining Services"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label="Quarry Mining Services">
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>

          <GridListTile>
            <img src="/our_services/Asset_3.png" alt="Quarry Mining Services" />
            <GridListTileBar
              title="Quarry Mining Services"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label="Quarry Mining Services">
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>

          <GridListTile>
            <img src="/our_services/Asset_4.png" alt="Quarry Mining Services" />
            <GridListTileBar
              title="Quarry Mining Services"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label="Quarry Mining Services">
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>

          <GridListTile>
            <img src="/our_services/Asset_5.png" alt="Quarry Mining Services" />
            <GridListTileBar
              title="Quarry Mining Services"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label="Quarry Mining Services">
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
      </div>
    </div>
  );
};

export default OurServices;
