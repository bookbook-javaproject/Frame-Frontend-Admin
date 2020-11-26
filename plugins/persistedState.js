import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
import cookie from 'cookie';

export default ({ store, req, isDev }) => {
  createPersistedState({
    key: 'authentication',
    paths: ['auth.accessToken', 'auth.refreshToken', 'auth.isLoggedIn'],
    storage: {
      getItem: key =>
        process.client ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie || '')[key],
      setItem: (key, value) => Cookies.set(key, value, { expires: 14 }),
      removeItem: key => Cookies.remove(key),
    },
  })(store);
};
