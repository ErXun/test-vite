import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Hi from './components/Hi.vue'

// 初始化 vue-router 4.0
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/hi',
      component: Hi
    }
  ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')