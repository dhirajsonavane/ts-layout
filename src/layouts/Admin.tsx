import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import DrmRoutes from "../drm-routes";
import AppMenu from "../components/Sidebar/AppMenu";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ReorderIcon from '@material-ui/icons/ReorderRounded';
import Drawer from "@material-ui/core/Drawer";
import logo from '../assets/img/logo.png';
import logo_small from '../assets/img/logo_small.png';
import AdminNavbarContent from "../components/AdminNavbarContent/AdminNavbarContent";

function getRoutes(_routes: any) {
  return _routes.map(
    (
      prop: {
        collapse: any;
        views: any;
        layout: string;
        path: any;
        component: any;
      },
      key: any
    ) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    }
  );
}

const Admin: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [username, setUserName] = React.useState('Simon Washington');

  const handleDrawerClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <a>
              <img className={clsx(classes.logo, {[classes.hide]: !open})}
                src={logo}
                alt="logo"
              />
            </a>
          </div>

          <AppMenu />
        </Drawer>

        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>

            <div>
              <a>
                <img className={clsx(classes.logo_small, {[classes.hide]: open})}
                  src={logo_small}
                  alt="logo"
                />
              </a>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerClick}
                edge="start"
                className={clsx(classes.menuButton)}
              >
                <ReorderIcon />
              </IconButton>
            </div>

            <AdminNavbarContent userName={username}/>
          </Toolbar>
        </AppBar>

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          {
            <Switch>
              {getRoutes(DrmRoutes)}
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
          }
        </main>
      </div>
    </div>
  );
};

const drawerWidth = 240;
const sideBarBackgroundColor = "#060431";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: sideBarBackgroundColor,
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(1),
      paddingLeft: 'unset'
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: sideBarBackgroundColor,
      position: 'fixed'
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
      borderBottom: "1px solid #404046",
      height: 65,
      position: 'absolute',
      top: 0
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      marginTop: 64,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    logo: {
      width: '100%',
    },
    logo_small: {
      width: '50px',
      float: 'left',
      marginRight: 10
    }
  })
);

export default Admin;
