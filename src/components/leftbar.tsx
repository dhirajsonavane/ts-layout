import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import DrmRoutes from "../drm-routes";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PerfectScrollbar from "perfect-scrollbar";
import Icon from "@material-ui/core/Icon";
import Collapse from "@material-ui/core/Collapse";

const Leftbar: React.FC = ({ ...props }) => {
  
  function createLinks(_routes: any) {
    return _routes.map((prop: { redirect: any; collapse: any; icon: {} | null | undefined; rtlMini: {} | null | undefined; mini: {} | null | undefined; rtlName: {} | null | undefined; name: {} | null | undefined; views: any; layout: any; path: any; }, key: string | number | undefined) => {
      if (prop.redirect) {
        return null;
      }
      
      if (prop.collapse) {
        return (
          <ListItem key={key} >
            <NavLink to={"#"} onClick={e => {e.preventDefault();}}>
              <ListItemText primary={prop.name}/>
            </NavLink>
            <List >
                {
                  createLinks(prop.views)
                }
              </List>
          </ListItem>
        );
      }
      
      return (
        <ListItem key={key}>
          <NavLink to={prop.layout + prop.path} >
            {prop.icon !== undefined ? (
              typeof prop.icon === "string" ? (
                <Icon>{prop.icon}</Icon>
              ) : (
                null
              )
            ) : (
              <span>
                {prop.name}
              </span>
            )}
            <ListItemText primary={prop.name} disableTypography={true}
            />
          </NavLink>
        </ListItem>
      );
    });
  }

  var links = (
    <List>{createLinks(DrmRoutes)}</List>
  );

  return (
    <div>
      {links}
    </div>
  );
};

export default Leftbar;
