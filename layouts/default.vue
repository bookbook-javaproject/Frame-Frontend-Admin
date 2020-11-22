<template>
  <div :style="backgroundStyle" class="background">
    <Nuxt />
  </div>
</template>

<script>
import { backgroundImage } from '~/assets/images';

export default {
  name: 'Default',
  data() {
    return {
      backgroundStyle: {
        backgroundImage: `url(${backgroundImage})`,
      },
    };
  },
};
</script>

<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: bottom;
}
</style>
