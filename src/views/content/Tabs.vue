<template>
  <div>
    tabs 组件
    <ex-tabs>
      <ex-tab title="tab1">内容1</ex-tab>
      <ex-tab title="tab2">内容2</ex-tab>
      <ex-tab title="tab3">内容3</ex-tab>
    </ex-tabs>
  </div>
</template>

<script lang="ts">
import ExTabs from "../../libs/ExTabs.vue";
import ExTab from "../../libs/ExTab.vue";
export default {
  component: {
    ExTabs,
    ExTab,
  },
};
</script>
<style scoped>
</style>