export const initialState = {
  writers: [],
  currentPage: 1,
  isSuccessConfirm: false,
};

export default function () {
  return { ...initialState };
}
