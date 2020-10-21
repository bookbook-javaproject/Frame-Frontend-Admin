<template>
  <writer-list />
</template>

<script>
import WriterList from '~/components/WriterList';

export default {
  name: 'WriterList',
  layout: 'loggedIn',
  components: {
    'writer-list': WriterList,
  },
};
</script>
