<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap");

* {
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: rgba(black, 0.8);
  box-sizing: border-box;
}

#app {
  display: flex;
  justify-content: center;
}
</style>
