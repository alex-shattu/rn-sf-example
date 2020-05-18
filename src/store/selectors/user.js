import { createSelector } from 'reselect';

const data = (store, { id }) => store.user.data[id];

export const userSelector = createSelector(
  data,
  (i = {}) => i,
);
