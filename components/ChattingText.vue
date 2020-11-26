<template>
  <div>
    <p>
      추후 개발 진행될 서비스 입니다.
      <span>2020년10월22일 14시25분</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ChattingText',
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  text-align: right;

  > p {
    position: relative;
    text-align: left;
    background-color: #0f4c81;
    width: fit-content;
    display: inline-block;
    max-width: 50%;
    padding: 1rem;
    font-family: 'AppleSDGothicNeo';
    font-size: 1.25rem;
    color: #ffffff;
    word-break: break-all;
    border-radius: 24px 24px 0 24px;

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
      left: -100px;
    }

    &:hover {
      > span {
        display: block;

        &::after {
          left: 100%;
          top: 50%;
          border-style: solid;
          border-image: initial;
          content: ' ';
          height: 0px;
          width: 0px;
          position: absolute;
          pointer-events: none;
          border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(0, 0, 0);
          border-width: 6px;
          margin-top: -6px;
        }
      }
    }
  }
}
</style>
