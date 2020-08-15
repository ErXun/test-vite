<template>
  <div>导航</div>
  <router-link to="/">helloworld</router-link> |
  <router-link to="/hi">hi</router-link>
  <router-view />
</template>

<script>


export default {
  name: 'App',
}
</script>
