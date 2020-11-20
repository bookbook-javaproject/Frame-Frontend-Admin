<template>
  <div>
    <h1
      class="cursor-effect"
      v-for="(dynamicSentence, index) in dynamicSentences"
      v-bind:key="index"
      v-text="dynamicSentence"
    />
  </div>
</template>

<script>
let milliSeconds = 0;

const sentences = [
  '안녕하세요. 어드민님 관리자 페이지에 오신걸 환영합니다.',
  '공지쓰기, 작가신청목록, 신고목록, 채팅 서비스를 이용하실 수 있습니다.',
];

export default {
  name: 'Welcome',
  data() {
    return {
      dynamicSentences: [],
      audio: null,
    };
  },
  methods: {
    setDynamicSentences(dynamicSentences) {
      this.dynamicSentences = dynamicSentences;
    },
  },
  mounted() {
    this.audio = new Audio(require('../assets/sounds/typing-sound.mp3'));

    for (let i = 0; i < sentences.length; i++) {
      const words = sentences[i].split('');
      for (let j = 0; j < words.length; j++) {
        milliSeconds += 90;
        this.audio.play();

        setTimeout(() => {
          if (i === 0 && j === 0) {
          }

          const dynamicSentencesCopy = [...this.dynamicSentences];
          const sentence = this.dynamicSentences[i];

          dynamicSentencesCopy[i] = sentence
            ? sentence + words[j]
            : '' + words[j];

          this.dynamicSentences = dynamicSentencesCopy;

          if (i === sentence.length - 1 && j === words.length - 1) {
            this.audio.pause();
          }
        }, milliSeconds);
      }
    }
  },
  destroyed() {
    this.audio.currentTime = 0;
    this.audio.pause();

    milliSeconds = 0;

    let timeoutId = window.setTimeout(function () {}, 0);

    while (timeoutId--) {
      window.clearTimeout(timeoutId);
    }
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  flex: 1;
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  width: fit-content;
  overflow: hidden;
  height: auto;
  text-overflow: ellipsis;
  white-space: nowrap;

  & + & {
    margin-top: 1rem;
  }
}

.cursor-effect:last-child {
  display: inline-block;
  animation-name: cursor;
  animation-duration: 0.3s;
  animation-iteration-count: infinite;

  @keyframes cursor {
    0% {
      border-right: 1px solid #fff;
    }
    50% {
      border-right: 1px solid #000;
    }
    100% {
      border-right: 1px solid #fff;
    }
  }
}
</style>
