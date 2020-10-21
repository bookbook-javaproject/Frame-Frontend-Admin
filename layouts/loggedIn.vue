<template>
  <div :style="backgroundStyle" class="background">
    <div class="container">
      <admin-header />
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import AdminHeader from '~/components/AdminHeader.vue';
import { backgroundImage } from '~/assets/images';

export default {
  data() {
    return {
      backgroundStyle: {
        backgroundImage: `url(${backgroundImage})`,
      },
    };
  },
  components: {
    AdminHeader,
  },
};
</script>

<style lang="scss" scoped>
.background {
  width: 100vw;
  height: 100vh;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: bottom;
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
