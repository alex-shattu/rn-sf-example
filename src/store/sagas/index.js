import { all, call } from 'redux-saga/effects';

import { getMyProfileSaga, updateMyProfileSaga, updateAvatarMyProfileSaga } from './myProfile';

export default function* rootSaga() {
  yield all([call(getMyProfileSaga), call(updateMyProfileSaga), call(updateAvatarMyProfileSaga)]);
}
