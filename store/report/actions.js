import { requestApi, setToken } from '~/utils/api';
import { APPROVE_REPORT_SUCCESS, GET_REPORTS_SUCCESS } from './mutations';
import axios from 'axios';

export const GET_REPORTS = 'GET_REPORTS';
export const APPROVE_REPORT = 'APPROVE_REPORT';

export const getReportsAction = () => `report/${GET_REPORTS}`;
export const approveReportAction = () => `report/${APPROVE_REPORT}`;

export default {
  [GET_REPORTS]: async function ({ commit, rootState }) {
    setToken.bind(this)(rootState.auth.accessToken);
    await requestApi('신고리스트 불러오기', () => this.$axios.$get('/report'))
      .then(data => {
        commit(GET_REPORTS_SUCCESS, data);
      })
      .catch(_ => {});
  },
  [APPROVE_REPORT]: function ({ commit, rootState }, reportId) {
    requestApi('신고 승인하기', () =>
      axios.delete('http://54.180.201.188:5002/report', {
        headers: {
          Authorization: `Bearer ${rootState.auth.accessToken}`,
        },
        data: { reportId },
      }),
    ).then(_ => {
      commit(APPROVE_REPORT_SUCCESS);
    });
  },
};
