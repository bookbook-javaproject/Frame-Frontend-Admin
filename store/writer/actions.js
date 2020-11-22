import { requestApi, setToken } from '~/utils/api';
import { GET_WRITERS_SUCCESS } from './mutations';

export const GET_WRITERS = 'GET_WRITERS';

export const getWritersAction = () => `writer/${GET_WRITERS}`;

export default {
  [GET_WRITERS]: async function ({ commit, rootState }) {
    setToken.bind(this)(rootState.auth.accessToken);
    await requestApi('작가 신청 리스트 불러오기', () => this.$axios.$get('/submission')).then(
      ({ authorSubmissionPreviews }) => {
        commit(GET_WRITERS_SUCCESS, authorSubmissionPreviews);
      },
    );
  },
};
