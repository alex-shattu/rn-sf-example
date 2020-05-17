import { StyleSheet } from 'react-native';
import getScaledFontSize from 'services/getScaledFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'space-between',
  },
  flatList: {
    flex: 1,
  },
  titleStyle: {
    // padding: 10,
    fontSize: getScaledFontSize(16),
    // height: 44,
  },
  toast: {
    marginHorizontal: 20,
  },
});

export default styles;
