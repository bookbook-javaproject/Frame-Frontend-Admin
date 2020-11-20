<template>
  <welcome />
</template>

<script>
import Welcome from '~/components/Welcome';

export default {
  layout: 'loggedIn',
  components: {
    welcome: Welcome,
  },
};
</script>
