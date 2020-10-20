export interface RootState {
  isLogin: boolean;
}

export const state = (): RootState => {
  if (process.browser) {
    // localStorage.setItem('accessToken', 'asd.asd.asd');
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      return { isLogin: true };
    } else {
      return {
        isLogin: false,
      };
    }
  } else {
    return {
      isLogin: false,
    };
  }
};
