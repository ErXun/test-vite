<template>
  <button @click="toggle" class="ex-switch" :class="{'ex-checked': value}">
    <span></span>
  </button>
</template>

<script lang='ts'>
import { ref } from "vue";

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss">
$h: 22px;
$h1: $h - 4px;
.ex-switch {
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: $h/2;
  background-color: #bfbfbf;
  cursor: pointer;
  position: relative;
  > span {
    width: $h1;
    height: $h1;
    border-radius: $h1 / 2;
    background-color: #fff;
    position: absolute;
    top: 2px;
    left: 3px;
    transition: left 250ms;
  }
  &.ex-checked {
    background-color: #1890ff;
  }
  &.ex-checked > span {
    left: calc(100% - #{$h1} - 3px);
  }
  &:focus {
    outline: none;
  }
}
</style>