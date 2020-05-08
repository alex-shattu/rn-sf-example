import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';

const Preloader = ({ isFetching }) => {
  const theme = useTheme();
  return isFetching ? (
    <ActivityIndicator
      color={theme.colors.primary}
      animating
      size="large"
      style={styles.activityIndicator}
    />
  ) : null;
};

export default Preloader;