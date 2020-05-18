import { all, call } from 'redux-saga/effects';

import { getProfileSaga, updateProfileSaga, updateAvatarProfileSaga } from './profile';
import { restoreSettingsSaga, setSettingsSaga } from './settings';
import { getUsersSaga } from './users';
import { getUserSaga } from './user';

export default function* rootSaga() {
  yield all([
    call(getProfileSaga),
    call(updateProfileSaga),
    call(updateAvatarProfileSaga),
    call(restoreSettingsSaga),
    call(setSettingsSaga),
    call(getUsersSaga),
    call(getUserSaga),
  ]);
}
