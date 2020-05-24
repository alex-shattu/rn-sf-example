import { StyleSheet, Platform } from 'react-native';
// import getScaledFontSize from 'services/getScaledFontSize';

const themedStyles = (theme, insets) =>
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
      backgroundColor: theme.colors.text,
    },
    toastText: {
      marginHorizontal: 20,
      color: theme.colors.background,
      ...theme.fonts[16],
    },
    ...Platform.select({
      ios: StyleSheet.create({
        divider: {
          marginLeft: 20,
          backgroundColor: theme.colors.separator,
        },
        itemContainer: {
          minHeight: 44,
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
          backgroundColor: theme.colors.card,
        },
        itemText: {
          ...theme.human.body,
          flex: 1,
          color: theme.colors.text,
        },
        contentContainer: {
          paddingTop: 28,
          paddingBottom: insets.bottom,
        },
        listHeaderComponent: {
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.separator,
        },
        listFooterComponent: {
          borderTopWidth: 1,
          borderTopColor: theme.colors.separator,
          justifyContent: 'center',
        },
        bottomActivity: {
          padding: 30,
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
          ...theme.material.body1,
          color: theme.colors.text,
        },
        contentContainer: {
          paddingTop: 28,
          paddingBottom: insets.bottom,
        },
        listHeaderComponent: {
          // borderBottomWidth: 1,
          // borderBottomColor: theme.colors.separator,
        },
        bottomActivity: {
          // borderWidth: 1,
          padding: 30,
        },
        listFooterComponent: {
          // borderTopWidth: 1,
          // borderTopColor: theme.colors.separator,
          // height: 80,
          justifyContent: 'center',
        },
      }),
    }),
  });

export default themedStyles;
