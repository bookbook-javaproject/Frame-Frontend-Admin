<template>
  <report-list />
</template>

<script>
import ReportList from '~/components/ReportList';
import { getReportsAction } from '~/store/report/actions';

export default {
  name: 'ReportList',
  layout: 'loggedIn',
  components: {
    'report-list': ReportList,
  },
  async asyncData({ store }) {
    await store.dispatch(getReportsAction());
  },
};
</script>
