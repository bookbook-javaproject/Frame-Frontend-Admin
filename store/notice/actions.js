import { requestApi, setToken } from '~/utils/api';
import { CREATE_NOTICE_SUCCESS } from './mutations';

export const CREATE_NOTICE = 'CREATE_NOTICE';

export const createNoticeAction = () => `notice/${CREATE_NOTICE}`;

export default {
  [CREATE_NOTICE]: function ({ commit, rootState }, data) {
    setToken.bind(this)(rootState.auth.accessToken);
    requestApi('공지 쓰기', () => this.$axios.$post('/notice', data)).then(_ => {
      commit(CREATE_NOTICE_SUCCESS);
    });
  },
};
