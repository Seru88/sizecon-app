import React from 'react';

interface NavigationButtonProps extends Omit<React.ComponentProps<'button'>, 'className'> {
  fullwidth?: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = props => {
  const { fullwidth, ...rest } = props;
  const w = fullwidth ? 'w-full' : 'w-auto';
  return (
    <button
      {...rest}
      className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 ${w} block border border-gray-400 rounded shadow text-2xl text-left`}
    />
  );
};

export default NavigationButton;
