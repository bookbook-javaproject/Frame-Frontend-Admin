export const initialState = {
  reports: [],
  currentPage: 1,
};

export default function () {
  return { ...initialState };
}
