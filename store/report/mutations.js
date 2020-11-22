import { initialState } from './state';

export const GET_REPORTS_SUCCESS = 'GET_REPORTS_SUCCESS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const RESET_STATE = 'RESET_STATE';

export const setCurrentPageMutation = () => `report/${SET_CURRENT_PAGE}`;
export const resetStateMutation = () => `report/${RESET_STATE}`;

export default {
  [GET_REPORTS_SUCCESS]: function (state, payload) {
    state.reports = payload;
  },
  [SET_CURRENT_PAGE]: function (state, payload) {
    state.currentPage = payload;
  },
  [RESET_STATE]: function (state) {
    Object.assign(state, { ...initialState });
  },
};
