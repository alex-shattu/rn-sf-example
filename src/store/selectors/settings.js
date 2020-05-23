import { createSelector } from 'reselect';

const settings = store => store.settings;
const fontAddSize = store => store.settings.fontAddSize;
const darkTheme = store => store.settings.darkTheme;
const scaleFonts = store => store.settings.scaleFonts;
const theme = store => store.settings.theme;

export const getSettings = createSelector(
  settings,
  i => i,
);

export const getFontAddSize = createSelector(
  fontAddSize,
  i => i,
);

export const getDarkTheme = createSelector(
  darkTheme,
  i => i,
);

export const getScaleFonts = createSelector(
  scaleFonts,
  i => i,
);

export const getTheme = createSelector(
  theme,
  i => i,
);

export default {
  getSettings,
  getFontAddSize,
  getDarkTheme,
  getScaleFonts,
  getTheme,
};
