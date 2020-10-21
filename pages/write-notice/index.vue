<template>
  <write-notice />
</template>

<script>
import WriteNotice from '~/components/WriteNotice';

export default {
  name: 'Login',
  layout: 'loggedIn',
  components: {
    WriteNotice,
  },
};
</script>
