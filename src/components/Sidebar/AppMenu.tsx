import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import AppMenuItem from "./AppMenuItem";
import DrmRoutes from "../../drm-routes";

const AppMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {
        DrmRoutes.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))
      }
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
      color: '#fff',
      paddingTop: '20px'
    },
  })
);

export default AppMenu;
