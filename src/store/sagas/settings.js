import { put, takeEvery } from 'redux-saga/effects';
import settingActions, { types } from 'store/actions/settings';

export function* setSettingsSaga() {
  yield takeEvery(types.SETTINGS_SET, makeSetSettings);
}

function* makeSetSettings({ payload: settings }) {
  try {
    // yield asyncStorage.setItem('settings', settings);
    yield put(settingActions.setSettings(settings));
  } catch (error) {
    console.log(error);
  }
}
