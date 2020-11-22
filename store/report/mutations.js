import { initialState } from './state';

export const GET_REPORTS_SUCCESS = 'GET_REPORTS_SUCCESS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const APPROVE_REPORT_SUCCESS = 'APPROVE_REPORT_SUCCESS';
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
  [APPROVE_REPORT_SUCCESS]: function (state) {
    state.isSuccessApproveReport = true;
  },
  [RESET_STATE]: function (state) {
    console.log(state);
    Object.assign(state, { ...initialState });
    console.log(state);
  },
};
