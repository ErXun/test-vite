<template>
  <h1>示例一</h1>
  <ex-button>默认按钮</ex-button>
  <ex-button theme="primary">主要按钮</ex-button>
  <ex-button theme="success">成功按钮</ex-button> 
  <ex-button theme="warning">警告按钮</ex-button> 
</template>

<script lang='ts'>
import ExButton from "../../libs/ExButton.vue";

export default {
  components: {
    ExButton,
  },
};
</script>