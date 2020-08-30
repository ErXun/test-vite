<template>
  <div>
    <h1>示例一</h1>
    <ex-button @click="open">dialog</ex-button>
    <ex-dialog v-model:visible="visible" :isCloseOverlay="false" :ok="ok" :cancel="cancel">
      <template v-slot:title>我是标题</template>
      <template v-slot:content>我是内容</template>
    </ex-dialog>

    <h1>示例二</h1>
    <ex-button @click="showDialog">showDialog</ex-button>
  </div>
</template>

<script lang="ts">
import ExButton from "../../libs/ExButton.vue";
import ExDialog from "../../libs/ExDialog.vue";
import { openDialog } from "../../libs/openDialog";
import { ref } from "vue";
export default {
  components: {
    ExButton,
    ExDialog,
  },
  setup() {
    const visible = ref(false);
    const open = () => {
      visible.value = true;
    };
    const ok = () => {
      return true;
    };
    const cancel = () => {};
    const showDialog = () => {
      openDialog({
        title: "我是title",
        content: "我是 content",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { visible, open, ok, cancel, showDialog };
  },
};
</script>
<style scoped>
</style>