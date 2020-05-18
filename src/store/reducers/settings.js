import { handleActions } from 'redux-actions';
import { types } from 'store/actions/settings';
import defaultSettings from 'constants/settings';

const initialState = {
  ...defaultSettings,
};

export default handleActions(
  {
    [types.SETTINGS_APPLY]: (
      state,
      {
        payload: {
          fontAddSize = defaultSettings.fontAddSize,
          darkTheme = defaultSettings.darkTheme,
        },
      },
    ) => ({
      ...state,
      fontAddSize,
      darkTheme,
    }),
  },
  initialState,
);
