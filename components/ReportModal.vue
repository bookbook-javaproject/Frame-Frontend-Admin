<template>
  <modal v-on:closeModal="closeModal">
    <main>
      <div class="logo-wrapper">
        <img :src="frameLogo" alt="프레임로고" />
      </div>
      <header>
        <h1>신고 내용</h1>
        <h2>해당 글 누적 신고 : {{ report.reportCount }}개</h2>
      </header>
      <p v-text="report.content" />
      <footer>
        <button class="refuse" @click="onClickApprove">삭제</button>
      </footer>
    </main>
  </modal>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import { approveReportAction, getReportsAction } from '~/store/report/actions';
import { resetStateMutation } from '~/store/report/mutations';

import { frameLogo } from '~/assets/images';
import Modal from '~/components/Modal';

export default {
  name: 'ReportModal',
  props: ['report'],
  components: {
    modal: Modal,
  },
  data() {
    return {
      frameLogo,
    };
  },
  computed: mapState({
    isSuccessApproveReport: state => state.report.isSuccessApproveReport,
  }),
  watch: {
    async isSuccessApproveReport(value) {
      if (value) {
        alert('신고 승인 요청에 성공하였습니다.');
        this.resetState();
        await this.getReports();
        this.closeModal();
      }
    }
  },
  methods: {
    ...mapActions({
      approveReport: approveReportAction(),
      getReports: getReportsAction(),
    }),
    ...mapMutations({
      resetState: resetStateMutation(),
    }),
    closeModal() {
      this.$emit('closeModal');
    },
    onClickApprove() {
      if (confirm('신고된 게시글을 정말 삭제하시겠습니까?')) {
        this.approveReport(this.report.reportId);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-wrapper {
  display: flex;
  justify-content: flex-start;
  width: 100%;

  > img {
    width: 3.25rem;
    height: auto;
    object-fit: contain;
  }
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

header {
  display: flex;
  justify-content: space-between;
  width: 100%;

  > h1 {
    color: #0f4c81;
    font-family: 'AppleSDGothicNeo';
    font-size: 1.5rem;
  }

  > h2 {
    color: #0f4c81;
    font-family: 'AppleSDGothicNeo';
    font-size: 1.125rem;
  }
}

p {
  font-family: 'AppleSDGothicNeo';
  font-size: 1.25rem;
  color: #4d4d4d;
  width: 100%;
  overflow-y: scroll;
  margin: 2.1875rem 0;
  word-break: break-all;

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

footer {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > button {
    width: 5rem;
    height: 2.5rem;
    cursor: pointer;
    border-radius: 4px;
    font-family: 'AppleSDGothicNeo';
    font-size: 1rem;
    color: #ffffff;
    background-color: #86a5c0;
    outline: none;
    border: none;
    line-height: 2.7rem;
    transition: 0.3s;

    &:hover {
      background-color: #0f4c81;
    }
  }
}
</style>
