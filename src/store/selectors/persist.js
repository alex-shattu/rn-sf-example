import { createSelector } from 'reselect';

const isPersisted = store => store._persist.rehydrated;

export const isPersistedSelector = createSelector(
  isPersisted,
  i => i,
);
