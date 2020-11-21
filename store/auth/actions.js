import { requestApi } from '~/utils/api';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginAction = () => `auth/${LOGIN}`;

export default {
  [LOGIN]: function ({ commit }, data) {
    requestApi('로그인', () => this.$axios.$post('/admin/auth', data)).then(data => {
      commit(LOGIN_SUCCESS, data);
    });
  },
};
