import { put, takeEvery } from 'redux-saga/effects';
import settingActions, { types } from 'store/actions/settings';
import asyncStorage from 'services/asyncStorage';
import defaultSettings from 'constants/settings';

export function* restoreSettingsSaga() {
  yield takeEvery(types.SETTINGS_RESTORE, makeRestoreSettings);
}

export function* setSettingsSaga() {
  yield takeEvery(types.SETTINGS_SET, makeSetSettings);
}

function* makeRestoreSettings() {
  try {
    const settings = yield asyncStorage.getItem('settings', defaultSettings);
    yield put(settingActions.applySettings(settings));
  } catch (error) {
    console.log(error);
  }
}

function* makeSetSettings({ payload: settings }) {
  try {
    yield asyncStorage.setItem('settings', settings);
    yield put(settingActions.applySettings(settings));
  } catch (error) {
    console.log(error);
  }
}
