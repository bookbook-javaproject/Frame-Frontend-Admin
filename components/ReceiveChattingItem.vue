<template>
  <li>
    <header>
      <div>
        <h1>김재훈</h1>
        <h2>uchanldee.dev@gmail.com</h2>
      </div>
      <div />
    </header>
    <main>
      <p>ㄴㅁㅇㄹㄴㅁㄹㅁ리ㅏㅇ너러암러ㅏㄴㅇ머ㅏ러미렁니</p>
      <p>오전 10:43</p>
    </main>
  </li>
</template>

<script>
export default {
  name: 'ReceiveChattingItem',
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 1rem;
  box-sizing: border-box;

  &:hover,
  &.active {
    background-color: #e3e3e3;
    border-radius: 12px;
    cursor: pointer;
  }

  & + & {
    margin-top: 0.5rem;
  }
}

header {
  display: flex;
  justify-content: space-between;
}

div {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &:last-child {
    width: 10px;
    height: 10px;
    background-color: #0f4c81;
    border-radius: 50%;
  }
}

h1 {
  font-size: 1.25rem;
  font-family: 'AppleSDGothicNeo';
  color: #000000;
  margin-right: 0.5rem;
}

h2 {
  font-size: 1rem;
  font-family: 'AppleSDGothicNeo';
  color: #6f6f6f;
}

main {
  display: flex;
  justify-content: space-between;

  > p:first-child {
    width: 100%;
    overflow: hidden;
    height: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > p:last-child {
    min-width: 5rem;
    text-align: right;
  }
}
</style>
