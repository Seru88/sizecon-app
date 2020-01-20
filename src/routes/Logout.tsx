import React from 'react';
import { useHistory } from 'react-router-dom';
import firebaseApp from '../util/firebaseApp';

const Logout: React.FC = () => {
  const history = useHistory();

  React.useEffect(() => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => history.push('/'));
  }, [history]);

  return <div>Logging you out...</div>;
};

export default Logout;
