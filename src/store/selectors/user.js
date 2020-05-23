import { createSelector } from 'reselect';

const data = (state, { id }) => state.user.data[id];
const isFetching = state => state.users.isFetching;
const isRefreshing = state => state.users.isRefreshing;
const isError = state => state.users.isError;

export const getData = createSelector(
  data,
  (i = {}) => i,
);

const getIsFetching = createSelector(
  isFetching,
  i => i,
);

const getIsRefreshing = createSelector(
  isRefreshing,
  i => i,
);

const getIsError = createSelector(
  isError,
  i => i,
);

export default {
  getData,
  getIsFetching,
  getIsRefreshing,
  getIsError,
};
