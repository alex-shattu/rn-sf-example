import { createSelector } from 'reselect';

const data = state => state.users.data;
const isFetching = state => state.users.isFetching;
const isRefreshing = state => state.users.isRefreshing;
const isFetchingMore = state => state.users.isFetchingMore;
const isError = state => state.users.isError;
const canFetchMore = state => state.users.canFetchMore;

const getData = createSelector(
  data,
  (i = []) => i,
);

const getIsFetching = createSelector(
  isFetching,
  i => i,
);

const getIsRefreshing = createSelector(
  isRefreshing,
  i => i,
);

const getIsFetchingMore = createSelector(
  isFetchingMore,
  i => i,
);

const getIsError = createSelector(
  isError,
  i => i,
);

const getCanFetchMore = createSelector(
  canFetchMore,
  i => i,
);

export default {
  getData,
  getIsFetching,
  getIsRefreshing,
  getIsFetchingMore,
  getIsError,
  getCanFetchMore,
};
