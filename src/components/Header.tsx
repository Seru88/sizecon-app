import React from 'react';
import { useHistory } from 'react-router-dom';

let prevScrollPos = window.pageYOffset;

const Header: React.FC = () => {
  const [top, setTop] = React.useState('0');
  const history = useHistory();

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

  React.useEffect(() => {
    window.onscroll = handleHideOnScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <header
      className="w-full h-13 bg-green-400 shadow flex flex-col shadow-lg justify-center fixed transition-top z-50"
      style={{ top: top }}
    >
      <div className="cursor-pointer" onClick={handleClick}>
        <span className="text-white text-6xl font-bold">SIZECON</span>
        {` `}
        <span className="text-2xl text-green-800">2020</span>
      </div>
    </header>
  );
};

export default Header;
