import { library as iconLibray } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faBookmark,
  faCalendar,
  faEnvelope,
  faGavel,
  faMap,
  faPlus,
  faSearchLocation,
  faSignInAlt,
  faSignOutAlt,
  faStar,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import AlertProvider from './containers/AlertProvider';
import routes from './routes';
import firebaseApp from './util/firebaseApp';

iconLibray.add(
  faCalendar,
  faStar,
  faMap,
  faGavel,
  faSearchLocation,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faArrowLeft,
  faBookmark,
  farBookmark,
  faEnvelope,
  faPlus,
  faDiscord,
  faGoogle,
  faTwitter
);

export const AppContext = React.createContext<{
  user: firebase.User | undefined;
}>({
  user: undefined,
});

const App: React.FC = () => {
  const [, initialising] = useAuthState(firebaseApp.auth());
  return (
    <div className="m-auto antialiased font-main text-center">
      {initialising ? (
        <div>Loading...</div>
      ) : (
        <AlertProvider>
          {/* <Header /> */}
          {/* <main className="p-6 max-w-sm mx-auto">{routes}</main> */}
          {routes}
        </AlertProvider>
      )}
    </div>
  );
};

export default App;
