import { handleActions } from 'redux-actions';
import { types } from 'store/actions/user';

const initialState = {
  data: {}, // by id
  isFetching: false,
  isRefreshing: false,
  isError: false,
};

export default handleActions(
  {
    [types.USER_FETCH_START]: (state, { payload: { isRefreshing } }) => ({
      ...state,
      isRefreshing,
      isFetching: true,
      isError: false,
    }),
    [types.USER_FETCH_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      isFetching: false,
      isError: false,
      isRefreshing: false,
      data: {
        ...state.data,
        [data.Id]: data,
      },
    }),
    [types.USER_FETCH_FAILED]: (state, { payload }) => ({
      ...state,
      isRefreshing: false,
      isFetching: false,
      isError: true,
    }),
  },
  initialState,
);
