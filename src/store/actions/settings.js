import { createAction } from 'redux-actions';

export const types = {
  SETTINGS_SET: 'settings/set',
  // SETTINGS_APPLY: 'settings/apply',
  // SETTINGS_RESTORE: 'settings/restore',
};

export default {
  setSettings: createAction(types.SETTINGS_SET),
  // applySettings: createAction(types.SETTINGS_APPLY),
  // restoreSettings: createAction(types.SETTINGS_RESTORE),
};
