import { requestApi, setToken } from '~/utils/api';
import { GET_REPORTS_SUCCESS } from './mutations';

export const GET_REPORTS = 'GET_REPORTS';

export const getReportsAction = () => `report/${GET_REPORTS}`;

export default {
  [GET_REPORTS]: async function ({ commit, rootState }) {
    setToken.bind(this)(rootState.auth.accessToken);
    await requestApi('신고리스트 불러오기', () => this.$axios.$get('/report')).then(data => {
      commit(GET_REPORTS_SUCCESS, data);
    }).catch(_ => {});
  },
};
