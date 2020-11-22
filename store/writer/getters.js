import { getTotalPage, getRangedArray } from '~/utils/pagination';

const PAGE_UNIT = 3;

export const TOTAL_PAGE = 'TOTAL_PAGE';
export const RANGED_WRITERS = 'RANGED_WRITERS';

export const totalPageGetter = () => `writer/${TOTAL_PAGE}`;
export const rangedWritersGetter = () => `writer/${RANGED_WRITERS}`;

export default {
  [TOTAL_PAGE](state) {
    return getTotalPage(state.writers.length, PAGE_UNIT);
  },
  [RANGED_WRITERS](state) {
    return getRangedArray(state.writers, state.currentPage, PAGE_UNIT);
  },
};
