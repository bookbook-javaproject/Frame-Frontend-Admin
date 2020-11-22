import { getTotalPage, getRangedArray } from '~/utils/pagination';

const PAGE_UNIT = 5;

export const TOTAL_PAGE = 'TOTAL_PAGE';
export const RANGED_REPORTS = 'RANGED_REPORTS';

export const totalPageGetter = () => `report/${TOTAL_PAGE}`;
export const rangedReportsGetter = () => `report/${RANGED_REPORTS}`;

export default {
  [TOTAL_PAGE](state) {
    return getTotalPage(state.reports.length, PAGE_UNIT);
  },
  [RANGED_REPORTS](state) {
    return getRangedArray(state.reports, state.currentPage, PAGE_UNIT);
  },
};
