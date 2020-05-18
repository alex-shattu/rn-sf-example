import { put, takeEvery } from 'redux-saga/effects';
import usersActions, { types } from 'store/actions/users';
import { net, forceUtil } from 'react-native-force';

export function* getUsersSaga() {
  yield takeEvery(types.USERS_GET, makeGetUsers);
}

function* makeGetUsers({ payload }) {
  try {
    yield put(usersActions.fetchUsersStart());
    const { records: data } = yield forceUtil.promiser(net.query)(
      'SELECT Id, Name, Email FROM user WHERE isActive = true LIMIT 20',
    );
    yield put(usersActions.fetchUsersSuccess({ data }));
  } catch (error) {
    console.log(error);
    yield put(usersActions.fetchUsersFailed());
  }
}
