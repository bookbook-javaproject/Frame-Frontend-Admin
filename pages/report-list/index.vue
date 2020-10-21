<template>
  <report-list />
</template>

<script>
import ReportList from '~/components/ReportList';

export default {
  name: 'ReportList',
  layout: 'loggedIn',
  components: {
    'report-list': ReportList,
  },
};
</script>
