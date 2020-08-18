<template>
  <div :size="size">
    <!-- 1.绑定全部属性 -->
    <!-- <button v-bind="$attrs"> -->
    <!-- 2.绑定单个属性/方法 -->
    <!-- <button @click="onClick"> -->
    <!-- 3.绑定除 size 之外的属性 -->
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>

<script lang='ts'>
export default {
  inheritAttrs: false,
  setup(props, context) {
    // console.log({ ...props });
    // console.log({ ...context.attrs });
    // 使用 $attrs 或者 context.attrs 获取所有属性
    const { size, ...rest } = context.attrs;
    // const { size, onClick } = context.attrs;
    return { size, rest };
  },
};
</script>
