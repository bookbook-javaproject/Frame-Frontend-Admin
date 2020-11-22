<template>
  <div class="report-list-main">
    <h1>신고 목록</h1>
    <ul v-if="reports.length">
      <report-item v-bind:report="tableHeader" />
      <report-item
        v-for="report of rangedReports"
        v-bind:key="report.reportId"
        v-bind:report="report"
        v-on:openModal="openModal"
      />
    </ul>
    <h1 v-else>불러올 리스트가 없습니다.</h1>
    <footer v-if="reports.length">
      <pagination-bar
        v-bind:currentPage="currentPage"
        v-bind:totalPage="totalPage"
        v-on:setPage="onChangePage"
      />
    </footer>
    <report-modal v-if="isModalOn" v-on:closeModal="closeModal" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

import ReportModal from '~/components/ReportModal';
import PaginationBar from '~/components/PaginationBar';
import ReportItem from '~/components/ReportItem';
import { totalPageGetter, rangedReportsGetter } from '~/store/report/getters';
import { setCurrentPageMutation } from '~/store/report/mutations';

export default {
  name: 'ReportList',
  components: {
    'pagination-bar': PaginationBar,
    'report-item': ReportItem,
    'report-modal': ReportModal,
  },
  data() {
    return {
      isModalOn: false,
      tableHeader: {
        reportId: '신고 번호',
        writer: '글쓴이',
        reporter: '신고자',
        reportCount: '신고 합계',
      },
    };
  },
  computed: {
    ...mapState({
      reports: state => state.report.reports,
      currentPage: state => state.report.currentPage,
    }),
    ...mapGetters({
      totalPage: totalPageGetter(),
      rangedReports: rangedReportsGetter(),
    }),
  },
  methods: {
    ...mapMutations({
      setPage: setCurrentPageMutation(),
    }),
    openModal() {
      this.$data.isModalOn = true;
    },
    closeModal() {
      this.$data.isModalOn = false;
    },
    onChangePage(page) {
      this.setPage(page);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #0f4c81;
  font-size: 1.5625rem;
  font-family: 'AppleSDGothicNeo';
}

ul {
  margin: 2rem 0 2.8125rem;

  li + li {
    margin-top: 1.5rem;
  }
}
</style>
