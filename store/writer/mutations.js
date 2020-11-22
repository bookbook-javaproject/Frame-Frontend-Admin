import { initialState } from './state';

export const GET_WRITERS_SUCCESS = 'GET_WRITERS_SUCCESS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const RESET_STATE = 'RESET_STATE';

export const setCurrentPageMutation = () => `writer/${SET_CURRENT_PAGE}`;
export const resetStateMutation = () => `writer/${RESET_STATE}`;

export default {
  [GET_WRITERS_SUCCESS]: function (state, payload) {
    state.writers = payload;
  },
  [SET_CURRENT_PAGE]: function (state, payload) {
    state.currentPage = payload;
  },
  [RESET_STATE]: function (state) {
    state = initialState;
  },
};
