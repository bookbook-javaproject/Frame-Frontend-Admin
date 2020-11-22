<template>
  <modal v-on:closeModal="closeModal">
    <main>
      <img :src="frameLogo" alt="프레임로고" />
      <h1>작가 신청 허용</h1>
      <h1 v-if="isSuccessConfirm">isSuccessConfirmisSuccessConfirm</h1>
      <div>
        <button class="accept" @click="onConfirm">허용</button>
        <button class="refuse" @click="onCancel">거부</button>
      </div>
    </main>
  </modal>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { frameLogo } from '~/assets/images';
import Modal from '~/components/Modal';
import { confirmAction, getWritersAction } from '~/store/writer/actions';
import { resetStateMutation } from '~/store/writer/mutations';

export default {
  name: 'AcceptApplyWriterModal',
  props: ['email'],
  components: {
    modal: Modal,
  },
  data() {
    return {
      frameLogo,
    };
  },
  computed: mapState({
    isSuccessConfirm: state => state.writer.isSuccessConfirm,
  }),
  watch: {
    async isSuccessConfirm(value) {
      if (value) {
        alert('작가 컨펌 요청에 성공하였습니다.')
        this.resetState();
        await this.getWriters();
        this.closeModal();
      }
    },
  },
  methods: {
    ...mapActions({
      getWriters: getWritersAction(),
      confirm: confirmAction(),
    }),
    ...mapMutations({
      resetState: resetStateMutation(),
    }),
    closeModal() {
      this.$emit('closeModal');
    },
    onConfirm() {
      this.dispatchConfirm(this.email, true)
    },
    onCancel() {
      this.dispatchConfirm(this.email, false)
    },
    dispatchConfirm(email, confirm) {
      this.confirm({ email, confirm });
    }
  },
};
</script>

<style lang="scss" scoped>
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

img {
  width: 3.25rem;
  height: auto;
  overflow: contain;
}

h1 {
  font-size: 1.875rem;
  font-family: 'AppleSDGothicNeo';
  color: #0f4c81;
  margin: 1rem 0 7.5rem;
}

div {
  display: flex;
  width: 100%;
}

button {
  flex: 1;
  margin-right: 1.5rem;
  height: 3.25rem;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'AppleSDGothicNeo';
  color: #ffffff;
  line-height: 3.5rem;

  &.accept {
    background-color: #86a5c0;
  }

  &.refuse {
    background-color: #a5a5a5;
  }
}
</style>
