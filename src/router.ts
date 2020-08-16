import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './views/content/Switch.vue'
import Dialog from './views/content/Dialog.vue'
import Tabs from './views/content/Tabs.vue'
import Button from './views/content/Button.vue'
import DocBase from './views/content/DocBase.vue'

// 初始化 vue-router 4.0
const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: '',
          component: DocBase
        },
        {
          path: 'switch',
          component: Switch
        },
        {
          path: 'dialog',
          component: Dialog
        },
        {
          path: 'tabs',
          component: Tabs
        },
        {
          path: 'button',
          component: Button
        }
      ]
    }
  ]
})