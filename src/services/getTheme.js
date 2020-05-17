import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const getTheme = (dark = false) => {
  const initialTheme = dark ? DarkTheme : DefaultTheme;
  return {
    ...initialTheme,
    colors: {
      ...initialTheme.colors,
      primary: '#00a1e0',
    },
  };
};

export default getTheme;

/**
 * dark (boolean):       Whether this is a dark theme or a light theme
 * colors (object):      Various colors used by react navigation components:
 *    primary (string):     The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
 *    background (string):  The color of various backgrounds, such as background color for the screens.
 *    card (string):        The background color of card-like elements, such as headers, tab bars etc.
 *    text (string):        The text color of various elements.
 *    border (string):      The color of borders, e.g. header border, tab bar border etc.
 */
