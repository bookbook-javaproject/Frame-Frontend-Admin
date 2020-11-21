export const requestApi = async (title, callbackFn) => {
  try {
    return await callbackFn();
  } catch (e) {
    if (isNetworkError(e)) {
      alert('인터넷 연결 상태를 확인해 주세요.');
    }
    if (getErrorStatus(e) === 500) {
      alert('서버에서 에러가 발생했습니다.');
    } else {
      alert(`${title} 요청에 실패했습니다.`)
    }
  }
}

export const isNetworkError = (e) => e.message === 'Network Error';

export const getErrorStatus = (e) => e.response.data.status;