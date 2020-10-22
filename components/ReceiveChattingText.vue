<template>
  <div>
    <p>
      PM은 대마고 3학년 김준우 입니다. 그리고 아무말에 대한 답변은 아무말
      입니다.
      <span>2020년10월22일 14시25분</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ReceiveChattingText',
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  text-align: left;

  > p {
    position: relative;
    background-color: #ededed;
    text-align: left;
    width: fit-content;
    display: inline-block;
    max-width: 50%;
    padding: 1rem;
    font-family: 'AppleSDGothicNeo';
    font-size: 1.25rem;
    color: #000000;
    word-break: break-all;
    border-radius: 24px 24px 24px 0;

    > span {
      display: none;
      font-size: 11px;
      color: rgb(255, 255, 255);
      max-width: 80px;
      background: rgb(0, 0, 0);
      padding: 5px;
      position: absolute;
      border-radius: 2px;
      top: 50%;
      transform: translateY(-50%);
      right: -100px;
    }

    &:hover {
      > span {
        display: block;

        &::after {
          right: 100%;
          top: 50%;
          border-style: solid;
          border-image: initial;
          content: ' ';
          height: 0px;
          width: 0px;
          position: absolute;
          pointer-events: none;
          border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0) rgba(0, 0, 0, 0)
            rgb(0, 0, 0, 0);
          border-width: 6px;
          margin-top: -6px;
        }
      }
    }
  }
}
</style>
