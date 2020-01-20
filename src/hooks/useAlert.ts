import React from 'react';
import { AlertContext } from '../containers/AlertProvider';

export default function useAlert() {
  return React.useContext(AlertContext);
}