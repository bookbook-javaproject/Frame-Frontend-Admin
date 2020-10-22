<template>
  <div class="background">
    <div :style="backgroundStyle" class="modal-wrapper">
      <img :src="closeImage" alt="닫기이미지" @click="onClickCloseModal" />
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { backgroundImage, closeImage } from '~/assets/images';

export default {
  data() {
    return {
      backgroundStyle: {
        backgroundImage: `url(${backgroundImage})`,
      },
      closeImage,
    };
  },
  methods: {
    onClickCloseModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
}

.modal-wrapper {
  width: 60vw;
  height: 70vh;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: bottom;

  > img {
    width: 1.5rem;
    height: auto;
    object-fit: contain;
    float: right;
    margin: 1rem 1rem 0 0;
    cursor: pointer;
  }
}
</style>
