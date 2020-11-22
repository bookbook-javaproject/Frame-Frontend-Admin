<template>
  <li @click="onClick">
    <aside>
      <img :src="pencilImage" alt="연필이미지" />
      <p v-text="writer.email" />
    </aside>
    <span v-text="writer.goal" />
    <a target="_blank" v-bind:href="writer.link" v-text="writer.link" @click="onClickLink" />
  </li>
</template>

<script>
import { pencilImage } from '~/assets/images';

export default {
  name: 'WriterItem',
  props: ['writer'],
  data() {
    return {
      pencilImage,
    };
  },
  methods: {
    onClick() {
      this.$emit('openModal');
    },
    onClickLink(e) {
      e.stopPropagation();
    }
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
  flex: 1;
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
  word-break: break-word;
}

span {
  flex: 4;
  word-break: break-word;
  font-family: 'AppleSDGothicNeo';
  color: #707070;
  font-size: 1.125rem;
  margin: 4px 12px 0;
}

a {
  flex: 1;
  font-family: 'AppleSDGothicNeo';
  /* color: #717171; */
  text-decoration: none;
  font-size: 1.1875rem;
  margin-top: 4px;
  word-break: break-word;
  text-decoration: underline;
}
</style>
