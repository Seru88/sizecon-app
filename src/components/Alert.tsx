import classed from 'classed-components';
import React from 'react';

export type AlertVariant = 'success' | 'error' | 'warning' | 'default';

export interface AlertProps {
  variant?: AlertVariant;
  duration?: number;
  children?: React.ReactNode;
}

const AlertContainer = classed.div<Pick<AlertProps, 'variant'>>`
  ${({ variant }) => variant === 'success' && 'bg-green-100'}
  ${({ variant }) => variant === 'error' && 'bg-red-100'}
  ${({ variant }) => variant === 'warning' && 'bg-yellow-100'}
  ${({ variant }) => variant === 'default' && 'bg-gray-800'}
  border
  ${({ variant }) => variant === 'success' && 'border-green-400'}
  ${({ variant }) => variant === 'error' && 'border-red-400'}
  ${({ variant }) => variant === 'warning' && 'border-yellow-400'}
  ${({ variant }) => variant === 'default' && 'border-gray-500'}
  ${({ variant }) => variant === 'success' && 'text-green-700'}
  ${({ variant }) => variant === 'error' && 'text-red-700'}
  ${({ variant }) => variant === 'warning' && 'text-yellow-700'}
  ${({ variant }) => variant === 'default' && 'text-white'}
  px-4
  py-3
  rounded
  fixed
  bottom-0
  w-full
`;

const Alert: React.FC<AlertProps> = props => {
  const { variant, children } = props;
  return <AlertContainer variant={variant}>{children}</AlertContainer>;
};

export default Alert;
