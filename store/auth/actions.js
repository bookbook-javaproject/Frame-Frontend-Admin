import { deleteAuthorization, requestApi } from '~/utils/api';
import { LOGIN_SUCCESS } from './mutations';

export const LOGIN = 'LOGIN';

export const loginAction = () => `auth/${LOGIN}`;

export default {
  [LOGIN]: function ({ commit }, data) {
    deleteAuthorization.bind(this)();
    requestApi('로그인', () => this.$axios.$post('/admin/auth', data)).then(data => {
      commit(LOGIN_SUCCESS, data);
    });
  },
};
