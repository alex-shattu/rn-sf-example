import { createAction } from 'redux-actions';

export const CLEAR_STORE = 'CLEAR_STORE';

export default {
  clearStore: createAction(CLEAR_STORE),
};
