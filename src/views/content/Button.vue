<template>
  <ex-button 
    @click="onClick" 
    @focus="onFocus" 
    @mouseover="onMouseover" 
    size="small">我是按钮</ex-button>
</template>

<script lang='ts'>
import ExButton from "../../libs/ExButton.vue";

export default {
  components: {
    ExButton,
  },
  setup() {
    const onClick = () => {
      console.log("onClick");
    };
    const onFocus = () => {
      console.log("onFocus");
    };
    const onMouseover = () => {
      console.log("onMouseover");
    };
    return { onClick, onFocus, onMouseover };
  },
};
</script>
<style scoped>
</style>