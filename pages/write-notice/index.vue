<template>
  <write-notice />
</template>

<script>
import WriteNotice from '~/components/WriteNotice';

export default {
  name: 'WriteNotice',
  layout: 'loggedIn',
  components: {
    WriteNotice,
  },
};
</script>
