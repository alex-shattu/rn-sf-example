import { createSelector } from 'reselect';

const settings = store => store.settings;
const fontAddSize = store => store.settings.fontAddSize;

export const settingsSelector = createSelector(
  settings,
  i => i,
);

export const fontAddSizeSelector = createSelector(
  fontAddSize,
  i => i,
);
