import { createAction } from 'redux-actions';

const prefix = 'settings';

export const types = {
  SETTINGS_SET: `${prefix}/set`,
};

export default {
  setSettings: createAction(types.SETTINGS_SET),
};
