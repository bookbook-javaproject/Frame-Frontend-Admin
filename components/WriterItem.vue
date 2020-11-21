<template>
  <li @click="onClick">
    <aside>
      <img :src="pencilImage" alt="연필이미지" />
      <p>어떤 유저</p>
    </aside>
    <span
      >저의 다짐 및 목표는 이러합니다. 저의 다짐 및 목표는 이러합니다. 저의 다짐 및 목표는
      이러합니다. 저의 다짐 및 목표는 이러합니다. 저의 다짐 및 목표는 이러합니다. 저의 다짐 및
      목표는 이러합니다.저의 다짐 및 목표는 이러합니다. 저의 다짐 및 목표는 이러합니다. 저의 다짐 및
      목표는 이러합니다. 저의 다짐 및 목표는 이러합니다. 저의 다짐 및 목 표는
    </span>
    <a target="_blank" href="https://www.google.com/">https://www.google.com/</a>
  </li>
</template>

<script>
import { pencilImage } from '~/assets/images';

export default {
  name: 'WriterItem',
  data() {
    return {
      pencilImage,
    };
  },
  methods: {
    onClick() {
      this.$emit('openModal');
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border: 16px solid #f2f6f9;
  border-radius: 8px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.5rem;
  cursor: pointer;

  &:hover {
    border: 16px solid #0f4c81;
  }
}

aside {
  display: flex;
  align-items: center;
}

img {
  margin-right: 0.8rem;
}

p {
  font-family: 'AppleSDGothicNeo';
  color: #707070;
  font-size: 1.375rem;
  margin-top: 4px;
}

span {
  width: 37.5rem;
  font-family: 'AppleSDGothicNeo';
  color: #707070;
  font-size: 1.125rem;
}

a {
  font-family: 'AppleSDGothicNeo';
  color: #717171;
  text-decoration: none;
  font-size: 1.1875rem;

  &:hover {
    text-decoration: underline;
  }
}
</style>
