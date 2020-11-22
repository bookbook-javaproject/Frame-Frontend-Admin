import { initialState } from './state';

export const CREATE_NOTICE_SUCCESS = 'CREATE_NOTICE_SUCCESS';
export const RESET_STATE = 'RESET_STATE';

export const resetStateMutation = () => `notice/${RESET_STATE}`;

export default {
  [CREATE_NOTICE_SUCCESS]: function (state) {
    state.isSuccessCreateNotice = true;
  },
  [RESET_STATE]: function (state) {
    Object.assign(state, { ...initialState });
  },
};
