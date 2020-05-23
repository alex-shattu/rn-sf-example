import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { StatusBar, Platform } from 'react-native';
import * as Typography from 'react-native-typography';
import { MIN_SCALED_FONT_SIZE, MAX_SCALED_FONT_SIZE } from 'constants/sizes';
import getScaledFontSize from 'services/getScaledFontSize';

const getTheme = ({ darkTheme, scaleFonts = true }, fontAddSize) => {
  const initialTheme = darkTheme ? DarkTheme : DefaultTheme;

  const theme = {
    ...initialTheme,
    colors: {
      ...initialTheme.colors,
      primary: '#00a1e0',
      // for material design
      // light: '#62d2ff',
      // dark: '#0073ae',
      // for ios only
      ...Platform.select({
        ios: {
          background: darkTheme ? Typography.iOSColors.black : Typography.iOSColors.customGray,
          card: darkTheme ? '#1C1C1D' : Typography.iOSColors.white,
          text: darkTheme ? Typography.iOSColors.white : Typography.iOSColors.black,
          separator: darkTheme ? '#323233' : '#BCBBC1',
        },
        android: {
          light: '#62d2ff',
          dark: '#0073ae',
        },
      }),
    },
    fonts: {},
    human: {},
    material: {},
    fontAddSize,
  };

  // Just scaled fontSizes with lineHeights
  for (let fontSize = MIN_SCALED_FONT_SIZE; fontSize < MAX_SCALED_FONT_SIZE + 1; fontSize++) {
    const scaled = getScaledFontSize(
      { fontSize, lineHeight: Math.ceil(fontSize * 1.2), scaleFonts },
      fontAddSize,
    );

    theme.fonts[fontSize] = {
      fontSize: scaled.fontSize,
      lineHeight: scaled.lineHeight,
    };
  }

  // Scale human design fonts for iOS
  Object.keys(Typography.human).map(type => {
    const scaled = getScaledFontSize(
      {
        fontSize: Typography.human[type].fontSize,
        lineHeight: Typography.human[type].lineHeight,
        scaleFonts,
      },
      fontAddSize,
    );

    theme.human[type] = {
      ...Typography.human[type],
      fontSize: scaled.fontSize,
      lineHeight: scaled.lineHeight,
    };
  });

  // Scale Material Design fonts for Android
  Object.keys(Typography.material).map(type => {
    const scaled = getScaledFontSize(
      {
        fontSize: Typography.material[type].fontSize,
        lineHeight: Typography.material[type].lineHeight,
        scaleFonts,
      },
      fontAddSize,
    );

    theme.material[type] = {
      ...Typography.material[type],
      fontSize: scaled.fontSize,
      lineHeight: scaled.lineHeight,
    };
  });

  StatusBar.setBarStyle(darkTheme ? 'light-content' : 'dark-content');
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(theme.colors.background, true);
  }
  return theme;
};

export default getTheme;

/**
 * dark (boolean):       Whether this is a dark theme or a light theme
 * colors (object):      Various colors used by react navigation components:
 *    primary (string):     The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
 *    light (string)        The additional colors for material design
 *    dark (string)         The additional colors for material design
 *    background (string):  The color of various backgrounds, such as background color for the screens.
 *    card (string):        The background color of card-like elements, such as headers, tab bars etc.
 *    text (string):        The text color of various elements.
 *    border (string):      The color of borders, e.g. header border, tab bar border etc.
 */
