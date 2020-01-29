import React from 'react';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const location = useLocation();

  console.log(location);
  console.log(rootMatch);

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
      history.push('/schedule');
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
        className="w-full h-13 bg-green-400 shadow flex flex-col shadow-lg justify-center fixed transition-top z-50"
        style={{ top: top }}
      >
        <div className="cursor-pointer" onClick={handleClick}>
          <span className="text-white text-5xl font-bold">SIZECON</span>
          {` `}
          <span className="text-2xl text-green-800">2020</span>
        </div>
      </header>
    );
  }

  return (
    <header
      className="w-full h-13 bg-green-400 shadow shadow-lg fixed transition-top z-50"
      style={{ top: top }}
    >
      <div className="w-full relative">
        <button
          className="mx-4 text-white text-4xl absolute left-0 inset-y-0 focus:outline-none"
          onClick={handleGoBack}
        >
          <FontAwesomeIcon icon="arrow-left" />
        </button>
        <div className="text-white text-5xl font-bold mx-auto">
          {getPageLabel(location.pathname)}
        </div>
      </div>
    </header>
  );
};

export default Header;
