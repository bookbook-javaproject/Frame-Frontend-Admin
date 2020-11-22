import { requestApi, setToken } from '~/utils/api';
import { CONFIRM_SUCCESS, GET_WRITERS_SUCCESS } from './mutations';

export const GET_WRITERS = 'GET_WRITERS';
export const CONFIRM = 'CONFIRM';

export const getWritersAction = () => `writer/${GET_WRITERS}`;
export const confirmAction = () => `writer/${CONFIRM}`;

export default {
  [GET_WRITERS]: async function ({ commit, rootState }) {
    setToken.bind(this)(rootState.auth.accessToken);
    await requestApi('작가 신청 리스트 불러오기', () => this.$axios.$get('/submission'))
      .then(({ authorSubmissionPreviews }) => {
        commit(GET_WRITERS_SUCCESS, authorSubmissionPreviews);
      })
      .catch(_ => {});
  },
  [CONFIRM]: function ({ commit, rootState }, data) {
    setToken.bind(this)(rootState.auth.accessToken);
    requestApi('작가 컴펌', () => this.$axios.$patch('/submission', data)).then(_ => {
      commit(CONFIRM_SUCCESS);
    });
  },
};
