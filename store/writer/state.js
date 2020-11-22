export const initialState = {
  writers: [],
  currentPage: 1,
};

export default function () {
  return { ...initialState };
}
