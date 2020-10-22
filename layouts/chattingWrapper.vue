<template>
  <div class="background">
    <admin-header class="container" />
    <Nuxt />
  </div>
</template>

<script>
import AdminHeader from '~/components/AdminHeader.vue';

export default {
  components: {
    'admin-header': AdminHeader,
  },
};
</script>

<style lang="scss" scoped>
.background {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 1340px) {
    padding: 0 30px;
  }
}
</style>
