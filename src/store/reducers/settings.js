import { handleActions } from 'redux-actions';
import { types } from 'store/actions/settings';
import { DEFAULT_ADDITIONAL_FONT_SIZE } from 'constants/sizes';
import getTheme from 'services/getTheme';

const initialState = {
  fontAddSize: DEFAULT_ADDITIONAL_FONT_SIZE,
  darkTheme: false,
  scaleFonts: true,
  theme: getTheme(false),
};

export default handleActions(
  {
    [types.SETTINGS_SET]: (
      state,
      {
        payload: {
          fontAddSize = DEFAULT_ADDITIONAL_FONT_SIZE,
          darkTheme = false,
          scaleFonts = true,
          // theme = getTheme(defaultSettings.darkTheme),
        },
      },
    ) => ({
      ...state,
      fontAddSize,
      darkTheme,
      scaleFonts,
      theme: getTheme({ darkTheme, scaleFonts }, fontAddSize),
    }),
  },
  initialState,
);
