import { StyleSheet, Platform } from 'react-native';
// import getScaledFontSize from 'services/getScaledFontSize';

const themedStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    flatList: {
      flex: 1,
    },
    titleStyle: {
      // padding: 10,
      fontSize: 16,
      // height: 44,
    },
    toast: {
      marginHorizontal: 20,
      color: theme.colors.background,
      ...theme.fonts[16],
    },
    listFooterComponent: {
      padding: 20,
    },
    ...Platform.select({
      ios: StyleSheet.create({
        divider: {
          marginLeft: 20,
          backgroundColor: theme.colors.separator,
        },
        itemContainer: {
          minHeight: 44,
          justifyContent: 'center',
          paddingHorizontal: 16,
          backgroundColor: theme.colors.card,
        },
        itemText: {
          ...theme.human.body,
          color: theme.colors.text,
        },
        contentContainer: {
          marginTop: 28,
        },
        listHeaderComponent: {
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.separator,
        },
        listFooterComponent: {
          borderTopWidth: 1,
          borderTopColor: theme.colors.separator,
          // paddingTop: 10,
        },
        bottomActivity: {
          // padding: 20,
          height: 60,
          justifyContent: 'center',
        },
      }),
      android: StyleSheet.create({
        itemContainer: {
          minHeight: 48,
          justifyContent: 'center',
          paddingHorizontal: 16,
          borderBottomColor: theme.colors.separator,
          backgroundColor: theme.colors.card,
        },
        itemText: {
          ...theme.material.body,
          color: theme.colors.text,
        },
        contentContainer: {
          marginTop: 28,
        },
        listHeaderComponent: {
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.separator,
        },
        listFooterComponent: {
          borderTopWidth: 1,
          borderTopColor: theme.colors.separator,
          // paddingTop: 10,
        },
      }),
    }),
  });

export default themedStyles;
