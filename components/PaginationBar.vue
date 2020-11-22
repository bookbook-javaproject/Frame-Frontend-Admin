<template>
  <footer>
    <div class="page-controller" @click="onClickPrev" v-bind:style="prevCursorStyle">
      <span>&lt;</span>
    </div>
    <div class="page" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <form v-show="isShowInput" @submit="changePage">
        <input type="number" required v-bind:max="totalPage" min="1" v-bind:value="currentPage" />
        <button type="submit">변경</button>
      </form>
      <span v-text="currentPage" />
    </div>
    <div class="page-controller" @click="onClickNext" v-bind:style="nextCursorStyle">
      <span>></span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PaginationBar',
  props: ['currentPage', 'totalPage'],
  data() {
    return {
      isShowInput: false,
    };
  },
  computed: {
    prevCursorStyle() {
      return {
        cursor: this.isAvailablePrev ? 'pointer' : 'not-allowed',
      };
    },
    nextCursorStyle() {
      return {
        cursor: this.isAvailableNext ? 'pointer' : 'not-allowed',
      };
    },
    isAvailablePrev() {
      return this.currentPage > 1;
    },
    isAvailableNext() {
      return this.currentPage < this.totalPage;
    },
  },
  methods: {
    changePage(e) {
      e.preventDefault();
      this.setPage(e.target.childNodes[0].value);
    },
    onMouseEnter() {
      this.isShowInput = true;
    },
    onMouseLeave() {
      this.isShowInput = false;
    },
    onClickPrev() {
      if (this.isAvailablePrev) {
        this.setPage(parseInt(this.currentPage) - 1);
      }
    },
    onClickNext() {
      if (this.isAvailableNext) {
        this.setPage(parseInt(this.currentPage) + 1);
      }
    },
    setPage(page) {
      this.$emit('setPage', page);
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.page-controller {
  width: 1.75rem;
  height: 1.75rem;
  color: #a9a9a9;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page {
  position: relative;
  width: 1.75rem;
  height: 1.75rem;
  background-color: #0f4c81;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin: 0 1rem;
  user-select: none;

  > form {
    position: absolute;
    min-width: 1.75rem;
    bottom: calc(1.75rem);
    cursor: default;

    > input {
      height: 1.75rem;
      outline: none;
      padding-left: 4px;
      box-sizing: border-box;
      border: 1px solid #0f4c81;
      margin-bottom: 4px;
    }

    > button {
      width: 100%;
      height: 1.5rem;
      outline: none;
      box-sizing: border-box;
      border: none;
      color: #ffffff;
      background-color: #0f4c81;
      cursor: pointer;
      margin-bottom: 4px;
      border-radius: 4px;
      padding-top: 2px;
    }
  }
}

span {
  width: 100%;
  text-align: center;
  margin-top: 2px;
  font-family: 'AppleSDGothicNeo';
  font-size: 1.125rem;
  word-break: break-all;
}
</style>
