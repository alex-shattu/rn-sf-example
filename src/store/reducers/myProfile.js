import { handleActions } from 'redux-actions';
import { types } from '../actions/myProfile';

const initialState = {
  data: {},
  isFetching: false,
  isRefreshing: false,
  isError: false,
};

export default handleActions(
  {
    [types.MY_PROFILE_FETCH_START]: (state, { payload }) => ({
      ...state,
      isFetching: true,
      isError: false,
    }),
    [types.MY_PROFILE_FETCH_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      isFetching: false,
      isError: false,
      data,
    }),
    [types.MY_PROFILE_FETCH_FAILED]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      isError: true,
    }),
  },
  initialState,
);
