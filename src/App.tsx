import { library as iconLibray } from '@fortawesome/fontawesome-svg-core';
import {
  faDiscord,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
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
  faHeart,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import AlertProvider from './containers/AlertProvider';
import routes from './routes';
import firebaseApp from './util/firebaseApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

iconLibray.add(
  faCalendar,
  faStar,
  faMap,
  faGavel,
  faSearchLocation,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faHeart,
  faCircleNotch,
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
    <div className="m-auto antialiased font-main">
      {initialising ? (
        <div className="flex items-center justify-center w-screen h-screen text-6xl text-green-500">
          <FontAwesomeIcon icon="circle-notch" spin />
        </div>
      ) : (
        <AlertProvider>{routes}</AlertProvider>
      )}
    </div>
  );
};

export default App;
