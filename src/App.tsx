import { library as iconLibray } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faBookmark,
  faCalendar,
  faCircleNotch,
  faEnvelope,
  faGavel,
  faHeart,
  faMap,
  faMinus,
  faPlus,
  faSearchLocation,
  faSignInAlt,
  faSignOutAlt,
  faStar,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  faHeart,
  faCircleNotch,
  faArrowLeft,
  faBookmark,
  farBookmark,
  faEnvelope,
  faPlus,
  faMinus,
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
        <div className="flex flex-col items-center justify-center w-screen h-screen text-6xl text-green-500">
          <span className="text-5xl font-bold">SIZECON</span>
          {` `}
          <span className="text-2xl text-green-800">2020</span>
          <FontAwesomeIcon className="p-2" icon="circle-notch" spin />
        </div>
      ) : (
        <AlertProvider>{routes}</AlertProvider>
      )}
    </div>
  );
};

export default App;
