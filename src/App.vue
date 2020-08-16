<template>
  <router-view />
</template>

<script lang='ts'>
import { ref, provide } from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    window.onresize = () => {
      const clientWidth = document.documentElement.clientWidth;
      asideVisible.value = clientWidth <= 500 ? false : true;
    };
    provide("asideVisible", asideVisible);
    router.afterEach(() => {
      const clientWidth = document.documentElement.clientWidth;
      if (clientWidth <= 500) {
        asideVisible.value = false;
      }
    });
  },
};
</script>
