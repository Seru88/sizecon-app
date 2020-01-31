import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Event from "./Event";
import FloorMap from "./FloorMap";
import GuestList from "./GuestList";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import ResetPassword from "./ResetPassword";
import Schedule from "./Schedule";
import Signup from "./Signup";

import { Transition, CSSTransition } from "react-transition-group";

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { firebaseApp } from '../App';
// import Bookmarks from './Bookmarks';
// const ProtectedRoute: React.FC<RouteProps> = props => {
//   const { path, exact, component } = props;
//   const [user] = useAuthState(firebaseApp.auth());
//   const Component = component as React.ComponentType<any>;

//   const render = (props: any) => {
//     if (user) {
//       return <Component {...props} />;
//     }
//     return <Redirect to="/login" />;
//   };

//   return <Route path={path} exact={exact} render={render} />;
// };

const paths = [
  { path: "/", component: Home },
  { path: "/schedule", component: Schedule },
  { path: "/guests", component: GuestList },
  { path: "/floor-map", component: FloorMap },
  { path: "/event/:slug", component: Event },
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/signup", component: Signup },
  { path: "/reset-password", component: ResetPassword }
];

const routes = (
  <BrowserRouter basename="/">
    <Header />
    <main className="relative max-w-sm px-3 py-6 mx-auto mt-16">
      {paths.map(({ path, component: Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match !== null}
              timeout={400}
              classNames="route"
              unmountOnExit
            >
              <div className="route">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </main>
  </BrowserRouter>
);

export default routes;
