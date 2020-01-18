import React from 'react';
import Home from './Home';
import Schedule from './Schedule';
import SpecialGuests from './SpecialGuests';
import Login from './Login';
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseApp } from '../App';
import Bookmarks from './Bookmarks';
import Logout from './Logout';

const ProtectedRoute: React.FC<RouteProps> = props => {
  const { path, exact, component } = props;
  const [user, initialising, error] = useAuthState(firebaseApp.auth());
  const Component = component as React.ComponentType<any>;
  if (initialising) {
    return <div>Loading...</div>;
  }

  const render = (props: any) => {
    if (user) {
      return <Component {...props} />;
    }
    return <Redirect to="/login" />;
  };

  return <Route path={path} exact={exact} render={render} />;
};

const routes = (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/schedule" component={Schedule} />
      <Route exact path="/special-guests" component={SpecialGuests} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <ProtectedRoute exact path="/bookmarks" component={Bookmarks} />
    </Switch>
  </BrowserRouter>
);

export default routes;
