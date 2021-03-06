export const requestApi = async (title, callbackFn) => {
  try {
    return await callbackFn();
  } catch (e) {
    if (process.server) {
      throw e;
    }
    if (isNetworkError(e)) {
      alert('인터넷 연결 상태를 확인해 주세요.');
    }
    if (getErrorStatus(e) === 500) {
      alert('서버에서 에러가 발생하였습니다.');
    } else {
      alert(`${title}에 실패하였습니다.`);
    }
    throw e;
  }
};

export const isNetworkError = e => e.message === 'Network Error';

export const getErrorStatus = e => e.response.data.status;

export function setHeader(key, value) {
  this.$axios.setHeader(key, value);
}

export function setToken(accessToken) {
  this.$axios.setToken(accessToken, 'Bearer');
}

export function deleteAuthorization() {
  delete this.$axios.defaults.headers.common['Authorization'];
}
