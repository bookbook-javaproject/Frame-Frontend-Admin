<template>
  <div>
    <input type="text" placeholder="메세지를 입력해 주세요" />
    <img :src="sendImage" alt="전송이미지" />
  </div>
</template>

<script>
import { sendImage } from '~/assets/images';
export default {
  name: 'ChattingSender',
  data() {
    return {
      sendImage,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
}

input {
  flex: 1;
  height: 3.375rem;
  background-color: #efefef;
  border-radius: 24px;
  border: none;
  outline: none;
  font-family: 'AppleSDGothicNeo';
  font-size: 1.2rem;
  color: #6f6f6f;
  padding: 1rem 2.25rem;
  box-sizing: border-box;
}

img {
  width: 2.25rem;
  height: auto;
  object-fit: contain;
  cursor: pointer;
  margin-left: 2rem;
  margin-right: 1rem;
}
</style>
