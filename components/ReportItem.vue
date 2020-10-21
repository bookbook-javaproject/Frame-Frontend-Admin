<template>
  <li @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <img :src="warningImage" alt="경고이미지" />
    <p class="post-id">1</p>
    <p class="post-writer">글쓴 유저</p>
    <p class="reporter">신고자명</p>
    <p class="report-count">4개</p>
  </li>
</template>

<script>
import { warningImage, warningImpactImage } from '~/assets/images';

export default {
  name: 'ReportItem',
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
  text-align: left;
}

.reporter {
  flex: 3;
}

.report-count {
  flex: 1;
}
</style>
