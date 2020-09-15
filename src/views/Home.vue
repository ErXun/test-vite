<template>
  <Tobnav />
  <div class="banner">
    <h1>UI 框架</h1>
    <p class="actions">
      <a href="https://github.com/">GitHub</a>
      <router-link to='/doc'>开始</router-link>
      <div></div>
    </p>
  </div>
</template>

<script lang="ts">
import Tobnav from "../components/Tobnav.vue";
export default {
  components: {
    Tobnav,
  },
};
</script>
<style scoped lang='scss'>
.banner {
  padding: 100px 0;
  background-color: rgb(137, 223, 145);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 10px 0;
    > a {
      display: inline-block;
      margin: 0 8px;
      padding: 0px 8px;
      background-color: rgb(249, 250, 252);
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
    }
  }
}
</style>

