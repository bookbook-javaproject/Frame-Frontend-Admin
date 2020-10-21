<template>
  <footer>
    <div class="prev-page"><span>&lt;</span></div>
    <div class="page"><span>1</span></div>
    <div class="next-page"><span>></span></div>
  </footer>
</template>

<script>
export default {
  name: 'ProgressBar',
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.prev-page {
  width: 1.75rem;
  height: 1.75rem;
  color: #a9a9a9;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.page {
  width: 1.75rem;
  height: 1.75rem;
  background-color: #0f4c81;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  margin: 0 1rem;
}

.next-page {
  width: 1.75rem;
  height: 1.75rem;
  color: #a9a9a9;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

span {
  margin-top: 2px;
  font-family: 'AppleSDGothicNeo';
  font-size: 1.125rem;
}
</style>
