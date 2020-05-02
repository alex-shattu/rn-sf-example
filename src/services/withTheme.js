import React from 'react';
import { useTheme } from '@react-navigation/native';

export default WrappedComponent => {
  const hocComponent = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    return <WrappedComponent {...props} theme={theme} />;
  };

  return hocComponent;
};
