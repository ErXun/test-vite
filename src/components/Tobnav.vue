<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <div class="toggleMenu" @click="toggleMenu">
      <img src="../assets/menu.png" alt />
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style scoped lang='scss'>
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  background-color: rgb(214, 114, 114);
  display: flex;
  justify-content: space-between;
  z-index: 9;
  > .logo {
    max-width: 6em;
  }
  > .toggleMenu img {
    display: none;
  }
  > .menu {
    display: flex;
    > li {
      margin: 0 1em;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleMenu {
      position: absolute;
      left: 2%;
      top: 30%;
      > img {
        display: block;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>