<template>
  <div class="report-list-main">
    <h1>신고 목록</h1>
    <ul>
      <report-item v-on:openModal="openModal" />
      <report-item v-on:openModal="openModal" />
      <report-item v-on:openModal="openModal" />
      <report-item v-on:openModal="openModal" />
      <report-item v-on:openModal="openModal" />
      <report-item v-on:openModal="openModal" />
    </ul>
    <footer>
      <pagination-bar />
    </footer>
    <report-modal v-if="isModalOn" v-on:closeModal="closeModal" />
  </div>
</template>

<script>
import ReportModal from '~/components/ReportModal';
import PaginationBar from '~/components/PaginationBar';
import ReportItem from '~/components/ReportItem';

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
    };
  },
  methods: {
    openModal() {
      this.$data.isModalOn = true;
    },
    closeModal() {
      this.$data.isModalOn = false;
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
