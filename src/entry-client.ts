
 import router from '/@ts/router'
 import {app} from '/@ts/main'
// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')
})