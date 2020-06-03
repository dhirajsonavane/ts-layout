import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import IconDashboard from "@material-ui/icons/Dashboard";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";

import AppMenuItem from "./AppMenuItem";

const appMenuItems = [
  {
    name: "Site Data Input",
    Icon: IconDashboard,
    items: [
      {
        name: "Locations",
        link: "/admin/locations",
      },
      {
        name: "Add Locations",
        link: "/admin/locations",
      },
    ],
  },
  {
    name: "Login",
    link: "/auth/login",
    Icon: IconShoppingCart,
  },
  {
    name: "Register",
    link: "/auth/login",
    Icon: IconPeople,
  },
  {
    name: "Reports",
    link: "/reports",
    Icon: IconBarChart,
  },
  {
    name: "Nested Pages",
    Icon: IconLibraryBooks,
    items: [
      {
        name: "Level 2",
        link: "/orders",
      },
      {
        name: "Level 2",
        items: [
          {
            name: "Level 3",
            link: "/reports",
          },
          {
            name: "Level 3",
            link: "/",
          },
        ],
      },
    ],
  },
];

const AppMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: "#97c05c",
    },
  })
);

export default AppMenu;
