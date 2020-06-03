import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import AmagRoutes from '../amag-routes';

const getRoutes = (_route: any)=> {
    return _route.map((prop: { collapse: any; views: any; layout: string; path: any; component: any; }, key: any) => {
        if (prop.collapse) {
            return getRoutes(prop.views);
          }
          if (prop.layout === "/auth") {
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
    })
}

const Auth: React.FC = () => {
   return (
       <div>
           <Link to="/auth/login">Login</Link>
           <Link to="/auth/register">Register</Link>
           {
               <div>
                  <Switch>
                      {getRoutes(AmagRoutes)}
                      <Redirect from="/auth" to="/auth/login" />
                  </Switch>
             </div>
           }
       </div>
   ) 
}

export default Auth;