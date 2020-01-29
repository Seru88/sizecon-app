import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Event from './Event';
import FloorMap from './FloorMap';
import GuestList from './GuestList';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import ResetPassword from './ResetPassword';
import Schedule from './Schedule';
import Signup from './Signup';

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

const routes = (
  <BrowserRouter basename="/">
    <Header />
    <main className="py-6 px-3 mt-16 max-w-sm mx-auto">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
        <Route exact path="/guests">
          <GuestList />
        </Route>
        <Route exact path="/floor-map">
          <FloorMap />
        </Route>
        <Route exact path="/event/:slug">
          <Event />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/reset-password">
          <ResetPassword />
        </Route>
      </Switch>
    </main>
  </BrowserRouter>
);

export default routes;
