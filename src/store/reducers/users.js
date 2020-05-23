import { handleActions } from 'redux-actions';
import { types } from 'store/actions/users';

const initialState = {
  data: [],
  isFetching: false,
  isRefreshing: false,
  isFetchingMore: false,
  isError: false,
  canFetchMore: true,
};

export default handleActions(
  {
    [types.USERS_FETCH_START]: (state, { payload: { isRefreshing, isFetchingMore } }) => ({
      ...state,
      isFetching: true,
      isError: false,
      canFetchMore: true,
      isRefreshing,
      isFetchingMore,
    }),
    [types.USERS_FETCH_SUCCESS]: (state, { payload: { data, canFetchMore } }) => ({
      ...state,
      isRefreshing: false,
      isFetching: false,
      isError: false,
      isFetchingMore: false,
      data: state.isFetchingMore ? [...state.data, ...data] : data,
      canFetchMore,
    }),
    [types.USERS_FETCH_FAILED]: (state, { payload }) => ({
      ...state,
      isRefreshing: false,
      isFetching: false,
      isError: true,
      isFetchingMore: false,
      canFetchMore: true,
    }),
  },
  initialState,
);
