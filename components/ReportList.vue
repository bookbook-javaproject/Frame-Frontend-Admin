<template>
  <div class="report-list-main">
    <h1>신고 목록</h1>
    <ul>
      <report-item />
      <report-item />
      <report-item />
      <report-item />
      <report-item />
      <report-item />
    </ul>
    <footer>
      <progress-bar />
    </footer>
  </div>
</template>

<script>
import ProgressBar from '~/components/ProgressBar';
import ReportItem from '~/components/ReportItem';

export default {
  name: 'ReportList',
  components: {
    ProgressBar,
    ReportItem,
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
