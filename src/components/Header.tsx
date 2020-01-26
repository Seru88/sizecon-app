import React from 'react';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <header className="w-full h-13 bg-green-400 shadow flex flex-col justify-center">
      <div className="cursor-pointer" onClick={handleClick}>
        <span className="text-white text-5xl font-bold">SIZECON</span>
        {` `}
        <span className="text-xl text-green-800">2020</span>
      </div>
    </header>
  );
};

export default Header;
