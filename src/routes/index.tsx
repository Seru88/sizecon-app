import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

import Header from '../components/Header';
import Event from './Event';
import FloorMap from './FloorMap';
import GuestList from './GuestList';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import ResetPassword from './ResetPassword';
import Rules from './Rules';
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

const defaultStyle: React.CSSProperties = {
  position: 'inherit',
};

const transitionStyles: Partial<Record<
  TransitionStatus,
  React.CSSProperties
>> = {
  entering: { opacity: 0, transform: 'scale(1.1)' },
  entered: {
    opacity: 1,
    transform: 'scale(1)',
    transition: 'opacity 200ms, transform 200ms',
  },
  exiting: { opacity: 1, transform: 'scale(1)' },
  exited: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: 'opacity 200ms, transform 200ms',
  },
};

const paths = [
  { path: '/', component: Home },
  { path: '/schedule', component: Schedule },
  { path: '/guests', component: GuestList },
  { path: '/floor-map', component: FloorMap },
  { path: '/rules', component: Rules },
  { path: '/event/:slug', component: Event },
  { path: '/login', component: Login },
  { path: '/logout', component: Logout },
  { path: '/signup', component: Signup },
  { path: '/reset-password', component: ResetPassword },
];

const routes = (
  <BrowserRouter basename="/">
    <Header />
    <main className="relative max-w-sm py-6 mx-auto mt-16">
      {paths.map(({ path, component: Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <Transition
              in={match !== null}
              timeout={200}
              mountOnEnter
              unmountOnExit
            >
              {state => (
                <div
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                >
                  <Component />
                </div>
              )}
            </Transition>
          )}
        </Route>
      ))}
    </main>
  </BrowserRouter>
);

export default routes;
