import React from 'react';

import Alert from '../components/Alert';
import { AlertProps, AlertVariant } from '../components/Alert';

interface AlertContextProps {
  enqueueAlert: (
    message: React.ReactNode,
    options?: Omit<AlertProps, 'children'>
  ) => void;
}

export const AlertContext = React.createContext<AlertContextProps>(
  {} as AlertContextProps
);

interface AlertProviderProps extends Omit<AlertProps, 'variant' | 'position'> {}

const AlertProvider: React.FC<AlertProviderProps> = props => {
  const { duration: defaultDuration, children } = props;

  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = React.useState<React.ReactNode>(null);
  const [duration, setDuration] = React.useState(defaultDuration ?? 3000);
  const [variant, setVariant] = React.useState<AlertVariant>('default')

  const enqueueAlert = (
    message: React.ReactNode,
    options?: Omit<AlertProps, 'children'>
  ) => {
    setVisible(true);
    setMessage(message);
    if (options?.duration) setDuration(options.duration);
    if (options?.variant) setVariant(options.variant);
  };

  React.useEffect(() => {
    let timeoutHandle: NodeJS.Timeout | undefined = undefined;
    if (visible) {
      timeoutHandle = setTimeout(() => {
        setVisible(false);
      }, duration);
    }
    return () => {
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }
    };
  }, [visible, setVisible]);

  return (
    <AlertContext.Provider value={{ enqueueAlert: enqueueAlert }}>
      {children}
      {visible && <Alert variant={variant}>{message}</Alert>}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
