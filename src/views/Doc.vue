<template>
  <Tobnav />
  <div class="content">
    <aside v-if="asideVisible">
      <ul>
        <li>
          <h3>组件列表</h3>
        </li>
        <li>
          <router-link to>Switch 组件</router-link>
        </li>
        <li>
          <router-link to>Button 组件</router-link>
        </li>
        <li>
          <router-link to>Dialog 组件</router-link>
        </li>
        <li>
          <router-link to>Tabs 组件</router-link>
        </li>
      </ul>
    </aside>
    <main>main</main>
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
.content {
  display: flex;
  width: 100%;
  > aside {
    width: 30%;
    max-width: 260px;
    min-width: 150px;
    background-color: rgb(170, 212, 233);
    padding: 10px 0 10px 15px;
    > ul li {
      margin: 10px 0;
    }
  }
  > main {
    width: 70%;
  }
}
</style>