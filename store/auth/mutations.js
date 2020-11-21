import { LOGIN_SUCCESS } from './actions';

export default {
  [LOGIN_SUCCESS]: function(state, payload) {
    const { accessToken, refreshToken } = payload;
    state.accessToken = accessToken;
    state.refreshToken = refreshToken;
    state.isLoggedIn = true;
  },
}
