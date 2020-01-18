import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCalendar,
  faStar,
  faMap,
  faGavel,
  faSearchLocation,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from 'react-router-dom';
import NavigationButton from '../components/NavigationButton';
import { AppContext } from '../App';

library.add(
  faCalendar,
  faStar,
  faMap,
  faGavel,
  faSearchLocation,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faBookmark,
  faDiscord
);

interface NavObj {
  path: string;
  icon: IconProp;
  label: string;
}

const navItems: NavObj[] = [
  { path: '/schedule', icon: 'calendar', label: 'Schedule' },
  { path: '/special-guests', icon: 'star', label: 'Special Guest' },
  { path: '/floor-map', icon: 'map', label: 'Floor Map' },
  { path: '/rules', icon: 'gavel', label: 'Rules' },
  { path: '/discord', icon: ['fab', 'discord'], label: 'Discord' },
  { path: '/local-guide', icon: 'search-location', label: 'Local Guide' },
  { path: '/bookmarks', icon: 'bookmark', label: 'Your Bookmarks' },
  { path: '/login', icon: 'sign-in-alt', label: 'Login' },
  { path: '/logout', icon: 'sign-out-alt', label: 'Logout' },
  { path: '/register', icon: 'user-plus', label: 'Register' },
];

const Home: React.FC = () => {
  const history = useHistory();

  const { user } = React.useContext(AppContext);

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
            ? item.path !== '/login'
            : item.path !== '/logout' && item.label !== '/bookmarks'
        )
        .map((item, index, array) => {
          return (
            <React.Fragment key={item.label}>
              {index === array.length - 2 && (
                <hr className="border-green-800 w-11/12 mx-auto my-6" />
              )}
              <div className={index === 0 ? 'mb-3' : 'my-3'}>
                <NavigationButton onClick={handleClick(item.path)} fullwidth>
                  <div className="w-8 inline-block">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  {` `}
                  {item.label}
                </NavigationButton>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Home;
