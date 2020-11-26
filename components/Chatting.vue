<template>
  <div class="chatting-wrapper">
    <aside>
      <header>
        <div>
          <img :src="searchImage" alt="검색이미지" />
          <input type="text" placeholder="검색어를 입력해 주세요" />
        </div>
      </header>
      <ul>
        <receive-chatting-item class="active" />
        <receive-chatting-item />
        <receive-chatting-item />
        <receive-chatting-item />
        <receive-chatting-item />
        <receive-chatting-item />
        <receive-chatting-item />
        <receive-chatting-item />
        <receive-chatting-item />
        <receive-chatting-item />
        <receive-chatting-item />
      </ul>
    </aside>
    <article>
      <header>
        <h1>관리자</h1>
        <span>추후 개발될 예정입니다.</span>
      </header>
      <main ref="chattingArea">
        <time-text />
        <receive-chatting-text />
        <chatting-text />
        <chatting-text />
        <chatting-text />
        <receive-chatting-text />
        <chatting-text />
        <chatting-text />
        <receive-chatting-text />
        <receive-chatting-text />
        <receive-chatting-text />
        <receive-chatting-text />
      </main>
      <footer>
        <chatting-sender />
      </footer>
    </article>
  </div>
</template>

<script>
import ReceiveChattingItem from '~/components/ReceiveChattingItem';
import TimeText from '~/components/TimeText';
import ReceiveChattingText from '~/components/ReceiveChattingText';
import ChattingText from '~/components/ChattingText';
import ChattingSender from '~/components/ChattingSender';
import { searchImage } from '~/assets/images';

export default {
  name: 'Chatting',
  components: {
    'receive-chatting-item ': ReceiveChattingItem,
    'time-text': TimeText,
    'receive-chatting-text': ReceiveChattingText,
    'chatting-text': ChattingText,
    'chatting-sender': ChattingSender,
  },
  data() {
    return {
      searchImage,
    };
  },
  mounted() {
    this.$refs.chattingArea.scrollTo(0, this.$refs.chattingArea.clientHeight);
  },
};
</script>

<style lang="scss" scoped>
.chatting-wrapper {
  height: calc(100vh - 70px);
  width: 100vw;
  display: flex;
  overflow: hidden;
}

aside {
  width: 30vw;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 0;
  border: 1px solid #dbdbdb;
  border-bottom: none;

  > header {
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;
    padding-bottom: 1rem;

    > div {
      background-color: #efefef;
      border-radius: 30px;
      height: 3.375rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1.5rem;

      > img {
        cursor: pointer;
        width: 1.5rem;
        height: auto;
        margin-right: 1.5rem;
      }

      input {
        flex: 1;
        height: 1rem;
        border: none;
        outline: none;
        font-family: 'AppleSDGothicNeo';
        font-size: 1.1rem;
        color: #6f6f6f;
        background-color: transparent;
      }
    }
  }

  ul {
    width: 100%;
    padding: 1rem 0 5rem;
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
  }
}

article {
  width: calc(70vw - 2rem);
  height: 100%;
  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    padding: 1.1rem 0 0.7rem;
    box-sizing: border-box;

    > h1 {
      margin-left: 1.25rem;
      font-size: 1.75rem;
      font-family: 'AppleSDGothicNeo';
      color: #000000;
      margin-right: 0.75rem;
    }

    > span {
      font-family: 'AppleSDGothicNeo';
      font-size: 1rem;
      color: #6f6f6f;
    }
  }

  > main {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    overflow-y: scroll;

    > div + div {
      margin-top: 1.25rem;
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

  footer {
    box-sizing: border-box;
    padding: 1.25rem;
    padding-top: 0;
  }
}
</style>
