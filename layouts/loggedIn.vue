<template>
  <div :style="backgroundStyle" class="background">
    <div class="container">
      <admin-header />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AdminHeader from '~/components/AdminHeader.vue';
import { backgroundImage } from '~/assets/images';

export default {
  components: {
    AdminHeader,
  },
  data() {
    return {
      backgroundStyle: {
        backgroundImage: `url(${backgroundImage})`,
      },
    };
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
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 1340px) {
    padding: 0 30px;
  }
}
</style>
