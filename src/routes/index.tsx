import React from 'react';
import Home from './Home';
import Schedule from './Schedule';
import Login from './Login';
import {
  BrowserRouter,
  // Redirect,
  Route,
  // RouteProps,
  Switch,
} from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { firebaseApp } from '../App';
// import Bookmarks from './Bookmarks';
import Logout from './Logout';
import Signup from './Signup';
import Event from './Event';
import GuestList from './GuestList';
import Header from '../components/Header';

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
    <main className="p-6 max-w-sm mx-auto">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
        <Route exact path="/special-guests">
          <GuestList />
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
      </Switch>
    </main>
  </BrowserRouter>
);

export default routes;
