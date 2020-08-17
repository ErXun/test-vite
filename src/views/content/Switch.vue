<template>
  <!-- <ex-switch :value="checked" @update:value="checked = $event"/> -->
  <ex-switch v-model:value="checked" />
</template>

<script lang='ts'>
import ExSwitch from "../../libs/ExSwitch.vue";
import { ref } from "vue";

export default {
  components: {
    ExSwitch,
  },
  setup() {
    const checked = ref(true);
    return { checked };
  },
};
</script>
