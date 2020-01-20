import { library as iconLibray } from '@fortawesome/fontawesome-svg-core';
import {
  faDiscord,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
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

import routes from './routes';
import firebaseApp from './util/firebaseApp';
import AlertProvider from './containers/AlertProvider';

iconLibray.add(
  faCalendar,
  faStar,
  faMap,
  faGavel,
  faSearchLocation,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faBookmark,
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
  const [user, initialising] = useAuthState(firebaseApp.auth());
  return (
    <AppContext.Provider value={{ user: user }}>
      <div className="m-auto antialiased font-main text-center">
        {initialising ? (
          <div>Loading...</div>
        ) : (
          <AlertProvider>
            {/* <Header /> */}
            <main className="p-6 max-w-sm mx-auto">{routes}</main>
          </AlertProvider>
        )}
      </div>
    </AppContext.Provider>
  );
};

export default App;
