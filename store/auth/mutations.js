export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export default {
  [LOGIN_SUCCESS]: function (state, payload) {
    const { accessToken, refreshToken } = payload;
    state.accessToken = accessToken;
    state.refreshToken = refreshToken;
    state.isLoggedIn = true;
  },
};
