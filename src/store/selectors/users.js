import { createSelector } from 'reselect';

const data = store => store.users.data;

export const usersSelector = createSelector(
  data,
  (i = []) => i,
);
