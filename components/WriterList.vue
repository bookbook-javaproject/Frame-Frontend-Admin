<template>
  <div class="report-list-main">
    <h1>작가신청 목록</h1>
    <ul>
      <writer-item v-on:openModal="openModal" />
      <writer-item v-on:openModal="openModal" />
      <writer-item v-on:openModal="openModal" />
    </ul>
    <footer>
      <progress-bar />
    </footer>
    <accept-apply-writer-modal v-if="isModalOn" v-on:closeModal="closeModal" />
  </div>
</template>

<script>
import AcceptApplyWriterModal from '~/components/AcceptApplyWriterModal';
import ProgressBar from '~/components/ProgressBar';
import WriterItem from '~/components/WriterItem';

export default {
  name: 'WriterList',
  components: {
    'progress-bar': ProgressBar,
    'writer-item': WriterItem,
    'accept-apply-writer-modal': AcceptApplyWriterModal,
  },
  data() {
    return {
      isModalOn: false,
    };
  },
  methods: {
    openModal() {
      this.$data.isModalOn = true;
    },
    closeModal() {
      this.$data.isModalOn = false;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #0f4c81;
  font-size: 1.5625rem;
  font-family: 'AppleSDGothicNeo';
}

ul {
  margin: 2rem 0 2.8125rem;
  max-height: 58vh;
  overflow-y: scroll;

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

  li + li {
    margin-top: 1rem;
  }
}
</style>
