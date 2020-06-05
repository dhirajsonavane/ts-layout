import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";

const hist = createBrowserHistory();

const theme = createMuiTheme({
  typography: {
    fontFamily: "Titillium Web, sans-serif",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
