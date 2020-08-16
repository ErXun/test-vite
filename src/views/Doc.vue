<template>
  <div class="layout">
    <Tobnav class="topnav" />
    <div class="content">
      <aside v-if="asideVisible">
        <ul>
          <li>
            <h3>组件列表</h3>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ul>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang='ts'>
import Tobnav from "../components/Tobnav.vue";
import { inject, Ref } from "vue";

export default {
  components: {
    Tobnav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>
<style scoped lang='scss'>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .tobnav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    display: flex;
    width: 100%;
    padding-top: 58px;
    padding-left: 160px;
    @media (max-width: 500px) {
      padding-left: 0px;
    }
    > aside {
      width: 150px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      background-color: rgb(170, 212, 233);
      padding: 45px 0 10px 15px;
      > ul li {
        margin: 10px 0;
      }
    }
    > main {
      padding: 10px;
      flex-grow: 1;
      background-color: rgb(137, 223, 145);
      overflow: auto;
    }
  }
}
</style>