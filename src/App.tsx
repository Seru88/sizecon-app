import 'firebase/auth';

import * as firebase from 'firebase/app';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import Header from './components/Header';
import routes from './routes';

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAGNIex01Bc1hnKuXTMWPQ7zD-s5q8CDM0',
  authDomain: 'sizecon-app.firebaseapp.com',
  databaseURL: 'https://sizecon-app.firebaseio.com',
  projectId: 'sizecon-app',
  storageBucket: 'sizecon-app.appspot.com',
  messagingSenderId: '131991271247',
  appId: '1:131991271247:web:59f712a00312132743f73a',
});

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
          <>
            <Header />
            <main className="p-8">{routes}</main>
          </>
        )}
      </div>
    </AppContext.Provider>
  );
};

export default App;
