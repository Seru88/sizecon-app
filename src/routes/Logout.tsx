import React from 'react';
import { firebaseApp } from '../App';
import { useHistory } from 'react-router-dom';

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
