import { StyleSheet, Platform } from 'react-native';
import { iOSColors, human, robotoWeights } from 'react-native-typography';

const themedStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    toast: {
      marginHorizontal: 20,
    },
    ...Platform.select({
      ios: StyleSheet.create({
        sliderThumbStyle: {
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          width: 28,
          height: 28,
          borderRadius: 14,
        },
        sliderStyle: {
          flex: 1,
          marginHorizontal: 10,
        },
        sliderTextLeft: {
          color: theme.colors.text,
          fontSize: 16,
        },
        sliderTextRight: {
          color: theme.colors.text,
          fontSize: 24,
        },
        sliderTrackStyle: {
          height: 2,
        },
        sliderLabelWrapper: {
          flexDirection: 'row',
          height: 44,
          alignItems: 'center',
        },
        sliderLabel: {
          ...theme.human.body,
          color: theme.colors.text,
        },
        sliderContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 5,
        },
        group: {
          // borderBottomColor:
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          backgroundColor: theme.colors.card,
          borderBottomColor: theme.colors.separator,
          borderTopColor: theme.colors.separator,
        },
        cell: {
          paddingHorizontal: 16,
          backgroundColor: 'transparent',
          // minHeight: 44,
        },
        switchLabel: {
          ...theme.human.body,
          color: theme.colors.text,
          flex: 1,
        },
        row: {
          flexDirection: 'row',
          alignItems: 'center',
          minHeight: 44,
        },
        column: {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
        groupTitle: {
          ...theme.human.title1,
          fontSize: theme.fonts[12].fontSize,
          paddingHorizontal: 16,
          textTransform: 'uppercase',
          color: iOSColors.gray,
        },
        divider: {
          marginLeft: 20,
          backgroundColor: theme.colors.separator,
        },
      }),
      android: StyleSheet.create({
        groupTitle: {
          ...theme.material.body1,
          paddingHorizontal: 16,
          color: iOSColors.gray,
          lineHeight: 48,
        },
        switchLabel: {
          ...theme.material.body2,
          color: theme.colors.text,
          flex: 1,
        },
        cell: {
          paddingHorizontal: 16,
          backgroundColor: 'transparent',
        },
        row: {
          flexDirection: 'row',
          alignItems: 'center',
          minHeight: 48,
        },
        sliderTextLeft: {
          color: theme.colors.text,
          fontSize: 16,
        },
        sliderTextRight: {
          color: theme.colors.text,
          fontSize: 24,
        },
        column: {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
        sliderStyle: {
          flex: 1,
          marginHorizontal: 10,
        },
        sliderLabelWrapper: {
          flexDirection: 'row',
          height: 44,
          alignItems: 'center',
        },
        sliderLabel: {
          ...theme.material.body2,
          color: theme.colors.text,
        },
        sliderContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 5,
        },
        trackStyle: {
          height: 2,
        },
      }),
    }),
  });

export default themedStyles;
