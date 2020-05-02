import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const Preloader = ({ isFetching }) => {
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

const styles = StyleSheet.create({
  activityIndicator: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
});
