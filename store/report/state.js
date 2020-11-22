export const initialState = {
  reports: [],
  currentPage: 1,
  isSuccessApproveReport: false,
};

export default function () {
  return { ...initialState };
}
