<template>
  <div class="report-list-main">
    <h1>작가신청 목록</h1>
    <ul v-if="writers.length">
      <writer-item
        v-for="writer of rangedWriters"
        v-bind:key="writer.email"
        v-bind:writer="writer"
        v-on:openModal="openModal"
      />
    </ul>
    <h1 v-else>불러올 리스트가 없습니다.</h1>
    <footer v-if="writers.length">
      <pagination-bar
        v-bind:currentPage="currentPage"
        v-bind:totalPage="totalPage"
        v-on:setPage="onSetChange"
      />
    </footer>
    <accept-apply-writer-modal v-if="isModalOn" v-on:closeModal="closeModal" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

import AcceptApplyWriterModal from '~/components/AcceptApplyWriterModal';
import PaginationBar from '~/components/PaginationBar';
import WriterItem from '~/components/WriterItem';

import { totalPageGetter, rangedWritersGetter } from '~/store/writer/getters';
import { setCurrentPageMutation } from '~/store/writer/mutations';

export default {
  name: 'WriterList',
  components: {
    'pagination-bar': PaginationBar,
    'writer-item': WriterItem,
    'accept-apply-writer-modal': AcceptApplyWriterModal,
  },
  data() {
    return {
      isModalOn: false,
    };
  },
  computed: {
    ...mapState({
      writers: state => state.writer.writers,
      currentPage: state => state.writer.currentPage,
    }),
    ...mapGetters({
      totalPage: totalPageGetter(),
      rangedWriters: rangedWritersGetter(),
    }),
  },
  methods: {
    ...mapMutations({
      setPage: setCurrentPageMutation(),
    }),
    onSetChange(page) {
      this.setPage(page);
    },
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
