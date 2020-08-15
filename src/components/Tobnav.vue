<template>
  <div class="topnav">
    <div class="logo">logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang='scss'>
.topnav {
  padding: 15px 20px;
  background-color: rgb(214, 114, 114);
  display: flex;
  justify-content: space-between;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    > li {
      margin: 0 1em;
    }
  }
}
</style>