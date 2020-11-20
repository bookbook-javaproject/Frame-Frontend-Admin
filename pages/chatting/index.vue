<template>
  <chatting />
</template>

<script>
import Chatting from '~/components/Chatting';

export default {
  name: 'Chatting',
  layout: 'chattingWrapper',
  components: {
    chatting: Chatting,
  },
};
</script>
