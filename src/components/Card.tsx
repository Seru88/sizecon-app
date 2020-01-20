import React from 'react';

const Card: React.FC<Omit<
  React.ComponentType<HTMLDivElement>,
  'className'
>> = props => {
  return (
    <div {...props} className="py-2 px-4 block border border-gray-400 rounded shadow"/>
  );
};

export default Card;