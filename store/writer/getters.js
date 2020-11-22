const PAGE_UNIT = 3;

export const TOTAL_PAGE = 'TOTAL_PAGE';
export const REANGED_WRITERS = 'REANGED_WRITERS';

export const totalPageGetter = () => `writer/${TOTAL_PAGE}`
export const rangedWritersGetter = () => `writer/${REANGED_WRITERS}`

export default {
  [TOTAL_PAGE](state) {
    return Math.ceil(state.writers.length / PAGE_UNIT);
  },
  [REANGED_WRITERS] (state) {
    const startIndex = (state.currentPage - 1) * PAGE_UNIT;
    return state.writers.slice(startIndex, startIndex + PAGE_UNIT);
  }
};
