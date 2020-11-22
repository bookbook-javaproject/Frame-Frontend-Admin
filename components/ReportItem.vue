<template>
  <li @mouseover="onMouseOver" @mouseleave="onMouseLeave" @click="onClick">
    <img :src="warningImage" alt="경고이미지" />
    <p class="post-id" v-text="report.reportId" />
    <p class="post-writer" v-text="report.writer" />
    <p class="reporter" v-text="report.reporter" />
    <p class="report-count" v-text="report.reportCount" />
  </li>
</template>

<script>
import { warningImage, warningImpactImage } from '~/assets/images';

export default {
  name: 'ReportItem',
  props: ['report'],
  data() {
    return {
      warningImage,
    };
  },
  methods: {
    onMouseOver() {
      this.$data.warningImage = warningImpactImage;
    },
    onMouseLeave() {
      this.$data.warningImage = warningImage;
    },
    onClick() {
      this.$emit('openModal', this.report);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  display: flex;
  width: 100%;
  height: 4.125rem;
  background-color: #f2f6f9;
  border-radius: 8px;
  padding-left: 1.625rem;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #0f4c81;

    > p {
      color: #ffffff;
    }
  }
}

p {
  font-family: 'AppleSDGothicNeo';
  text-align: center;
  font-size: 1.375rem;
  color: #707070;
}

.post-id {
  flex: 1;
}

.post-writer {
  flex: 3;
  text-align: center;
}

.reporter {
  flex: 3;
}

.report-count {
  flex: 1;
}
</style>
