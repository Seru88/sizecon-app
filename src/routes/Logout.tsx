import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect } from 'react-router-dom';

import useAlert from '../hooks/useAlert';
import firebaseApp from '../util/firebaseApp';

const Logout: React.FC = () => {
  const [user] = useAuthState(firebaseApp.auth());
  const { enqueueAlert } = useAlert();

  React.useEffect(() => {
    firebaseApp
      .auth()
      .signOut()
      .then(() =>
        enqueueAlert('You have been logged out!', { variant: 'success' })
      );
  }, []);

  if (user === null) return <Redirect to="/" push />;

  return <div>Logging you out...</div>;
};

export default Logout;
