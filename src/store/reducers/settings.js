import { handleActions } from 'redux-actions';
import { types } from 'store/actions/settings';
import { DEFAULT_ADDITIONAL_FONT_SIZE } from 'constants/sizes';

const initialState = {
  fontAddSize: DEFAULT_ADDITIONAL_FONT_SIZE, // 0 - 4
  darkTheme: false,
};

export default handleActions(
  {
    [types.SETTINGS_SET]: (
      state,
      { payload: { fontAddSize = DEFAULT_ADDITIONAL_FONT_SIZE, darkTheme = false } },
    ) => ({
      ...state,
      fontAddSize,
      darkTheme,
    }),
  },
  initialState,
);
