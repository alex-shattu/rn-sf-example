import { StyleSheet, Platform } from 'react-native';

const styles = theme =>
  StyleSheet.create({
    icon: {
      flex: 1,
      paddingRight: 10,
      justifyContent: 'center',
    },
    titleWrapper: {
      height: Platform.select({ ios: 40, android: 56 }),
      // borderBottomWidth: 1,
      paddingHorizontal: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      ...theme.fonts[18],
    },
    label: {
      ...theme.fonts[16],
    },
  });

export default styles;
