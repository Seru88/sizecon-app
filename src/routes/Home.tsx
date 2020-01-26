import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import firebaseApp from '../util/firebaseApp';

interface NavObj {
  path: string;
  icon: IconProp;
  label: string;
}

const navItems: NavObj[] = [
  { path: '/schedule', icon: 'calendar', label: 'Event Schedule' },
  { path: '/special-guests', icon: 'star', label: 'Special Guest' },
  { path: '/floor-map', icon: 'map', label: 'Floor Map' },
  { path: '/rules', icon: 'gavel', label: 'Rules' },
  { path: '/discord', icon: ['fab', 'discord'], label: 'Discord' },
  { path: '/local-guide', icon: 'search-location', label: 'Local Guide' },
  // { path: '/bookmarks', icon: 'bookmark', label: 'Your Bookmarks' },
  { path: '/login', icon: 'sign-in-alt', label: 'Log in' },
  { path: '/logout', icon: 'sign-out-alt', label: 'Log out' },
  { path: '/signup', icon: 'user-plus', label: 'Sign up' },
];

const Home: React.FC = () => {
  const history = useHistory();

  const [user] = useAuthState(firebaseApp.auth());

  const handleClick = (path: string) => () => {
    if (path === '/discord') {
      window.open('https://discord.gg/PZAGAQp');
    } else {
      history.push(path);
    }
  };

  return (
    <div>
      {navItems
        .filter(item =>
          user
            ? item.path !== '/login' && item.path !== '/signup'
            : item.path !== '/logout' && item.path !== '/bookmarks'
        )
        .map((item, index, array) => {
          const offset = user ? 1 : 2;
          return (
            <React.Fragment key={item.label}>
              {index === array.length - offset && (
                <hr className="border-green-800 w-11/12 mx-auto my-6" />
              )}
              <div className={index === 0 ? 'mb-3' : 'my-3'}>
                <Button onClick={handleClick(item.path)} fullwidth>
                  <div className="w-8 inline-block">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  {` `}
                  {item.label}
                </Button>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Home;
