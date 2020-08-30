import { createApp, h } from 'vue';
import ExDialog from './ExDialog.vue'
export const openDialog = (options) => {
  const { title, content, ok, cancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  // createApp(ExDialog).mount(div)
  const appDialog = createApp({
    render() {
      return h(ExDialog, {
        visible: true,
        'onUpdate:visible': (newVisible) => {
          if (newVisible === false) {
            // 销毁 appDialog
            appDialog.unmount(div)
            div.remove()
          }
        },
        ok,
        cancel
      }, {
        title, content
      })
    }
  })
  appDialog.mount(div)
}