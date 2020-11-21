<template>
  <main>
    <input v-model="title" placeholder="제목" type="text" />
    <textarea
      v-model="content"
      placeholder="공지사항, 업데이트 내역 또는 대회 소개 글 작성"
    ></textarea>
    <button @click="onSubmit">등록</button>
  </main>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { createNoticeAction } from '~/store/notice/actions';
import { resetStateMutation } from '~/store/notice/mutations';

export default {
  name: 'WriteNotice',
  data() {
    return {
      title: '',
      content: '',
    };
  },
  computed: mapState({
    isSuccessCreateNotice: state => state.notice.isSuccessCreateNotice,
  }),
  watch: {
    isSuccessCreateNotice(value) {
      if (value) {
        alert('공지 작성이 완료되었습니다.');
        this.resetState();
        this.title = '';
        this.content = '';
      }
    }
  },
  methods: {
    ...mapActions({
      createNotice: createNoticeAction(),
    }),
    ...mapMutations({
      resetState: resetStateMutation(),
    }),
    onSubmit() {
      const title = this.title.trim();
      const content = this.content.trim();
      if (!title || !content) {
        return alert('제목과 내용은 빈칸 일 수 없습니다.')
      }
      if (title && content) {
        this.createNotice({ title, content });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$gray-color: #9b9b9b;
$black-color: #717171;

main {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 1280px;
  width: 100%;
  height: 28.75rem;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border: 1.875rem solid #ecf0f4;
  padding: 1.75rem 2.3125rem 1rem;

  @media screen and (max-width: 1340px) {
    width: calc(100% - 60px);
  }
}

input {
  width: 100%;
  height: 3.75rem;
  outline: none;
  border: none;
  border-radius: 0;
  border: 1px solid $gray-color;
  padding: 0 1rem;
  box-sizing: border-box;
  font-family: 'Nanum Gothic';
  font-size: 1.5rem;
  color: $black-color;

  &::placeholder {
    color: $gray-color;
  }
}

textarea {
  width: 100%;
  flex: 1;
  outline: none;
  border: none;
  margin: 21px 0 17px;
  border-radius: 0;
  padding: 1rem;
  border: 1px solid $gray-color;
  box-sizing: border-box;
  font-family: 'Nanum Gothic';
  font-size: 1.5rem;
  color: $black-color;
  resize: none;

  &::placeholder {
    color: $gray-color;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0f4c81;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
}

button {
  max-width: 100%;
  width: 6.4375rem;
  height: 3rem;
  border: none;
  border-radius: 1.5rem;
  background-color: #b5c8d8;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.5rem;
  font-family: 'AppleSDGothicNeo';

  &:hover {
    background-color: #0f4c81;
    transition: 0.3s;
  }
}
</style>
