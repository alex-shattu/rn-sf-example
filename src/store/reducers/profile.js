import { handleActions } from 'redux-actions';
import { types } from 'store/actions/profile';
import { CLEAR_STORE } from 'store/actions/store';

const initialState = {
  data: {
    accessToken: null,
    clientId: null,
    communityId: null,
    communityUrl: null,
    instanceUrl: null,
    loginUrl: null,
    orgId: null,
    refreshToken: null,
    userAgent: null,
    userId: null,
  },
  isFetching: false,
  isRefreshing: false,
  isError: false,
};

export default handleActions(
  {
    [types.PROFILE_FETCH_START]: (state, { payload }) => ({
      ...state,
      isFetching: true,
      isError: false,
    }),
    [types.PROFILE_FETCH_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      isFetching: false,
      isError: false,
      data,
    }),
    [types.PROFILE_FETCH_FAILED]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      isError: true,
    }),
    [CLEAR_STORE]: () => initialState,
  },
  initialState,
);
