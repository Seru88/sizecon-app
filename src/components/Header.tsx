import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full h-13 bg-green-400 shadow flex flex-col justify-center">
      <div>
        <span className="text-white text-5xl font-bold">SIZECON</span>
        {` `}
        <span className="text-xl text-green-800">2020</span>
      </div>
    </header>
  );
};

export default Header;
