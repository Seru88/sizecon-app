import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

let prevScrollPos = window.pageYOffset;

function getPageLabel(location: string) {
  if (location.includes('event')) return 'Event';
  return location
    .split('-')
    .map((word, index, array) => {
      const isLast = index === array.length - 1 && array.length > 1;
      let fmtWord =
        word.charAt(isLast ? 0 : 1).toUpperCase() + word.slice(isLast ? 1 : 2);
      if (index !== array.length - 1) fmtWord += ' ';
      return fmtWord;
    })
    .flat();
}

const Header: React.FC = () => {
  const [top, setTop] = React.useState('0');
  const history = useHistory();
  const rootMatch = useRouteMatch('/');
  const eventMatch = useRouteMatch('/event/:slug');
  const passResetMatch = useRouteMatch('/reset-password');
  const location = useLocation();

  const handleClick = () => {
    history.push('/');
  };

  const handleHideOnScroll = () => {
    let currScrollPos = window.pageYOffset;
    if (prevScrollPos > currScrollPos) {
      setTop('0');
    } else {
      setTop('-100px');
    }
    prevScrollPos = currScrollPos;
  };

  const handleGoBack = () => {
    if (eventMatch?.isExact) {
      history.push('/schedule', location.state);
    } else if (passResetMatch?.isExact) {
      history.push('/login');
    } else {
      history.push('/');
    }
  };

  React.useEffect(() => {
    window.onscroll = handleHideOnScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);

  if (rootMatch?.isExact) {
    return (
      <header
        className="fixed z-50 flex flex-col justify-center w-full text-center bg-green-400 shadow shadow-lg h-13 transition-top"
        style={{ top: top }}
      >
        <div className="cursor-pointer" onClick={handleClick}>
          <span className="text-5xl font-bold text-white">SIZECON</span>
          {` `}
          <span className="text-2xl text-green-800">2020</span>
        </div>
      </header>
    );
  }

  return (
    <header
      className="fixed z-50 w-full text-center bg-green-400 shadow shadow-lg h-13 transition-top"
      style={{ top: top }}
    >
      <div className="relative w-full">
        <button
          className="absolute inset-y-0 left-0 mx-4 text-4xl text-white focus:outline-none"
          onClick={handleGoBack}
        >
          <FontAwesomeIcon icon="arrow-left" />
        </button>
        <div className="mx-auto text-5xl font-bold text-white">
          {getPageLabel(location.pathname)}
        </div>
      </div>
    </header>
  );
};

export default Header;
