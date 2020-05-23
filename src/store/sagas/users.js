import { put, takeEvery } from 'redux-saga/effects';
import usersActions, { types } from 'store/actions/users';
import { net, forceUtil } from 'react-native-force';

export function* fetchUsersSaga() {
  yield takeEvery(types.USERS_FETCH, makeFetchUsers);
}

function* makeFetchUsers({ payload: { isRefreshing = false, offset = 0 } }) {
  try {
    yield put(usersActions.fetchUsersStart({ isRefreshing, isFetchingMore: offset > 0 }));

    const { records: data } = yield forceUtil.promiser(net.query)(
      `SELECT Id, Name, Email FROM user WHERE isActive = true ORDER BY Name ASC LIMIT 30 OFFSET ${offset}`,
    );

    yield put(usersActions.fetchUsersSuccess({ data, canFetchMore: data.length > 0 }));
  } catch (error) {
    console.log(error);
    yield put(usersActions.fetchUsersFailed());
  }
}
