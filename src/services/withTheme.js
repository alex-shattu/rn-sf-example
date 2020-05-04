import React from 'react';
import { useTheme } from '@react-navigation/native';

export default WrappedComponent => props => {
  const theme = useTheme();
  return <WrappedComponent theme={theme} {...props} />;
};
