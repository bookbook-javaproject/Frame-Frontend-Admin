<template>
  <writer-list />
</template>

<script>
import WriterList from '~/components/WriterList';
import { getWritersAction } from '~/store/writer/actions';

export default {
  name: 'WriterList',
  layout: 'loggedIn',
  components: {
    'writer-list': WriterList,
  },
  async asyncData({ store }) {
    await store.dispatch(getWritersAction());
  }
};
</script>
