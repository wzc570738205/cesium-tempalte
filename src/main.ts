import { createApp,createSSRApp  } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '/@ts/router'
import {setupStore} from '/@ts/store/index';
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/theme-chalk/display.css';
import 'animate.css/animate.min.css';
import './init.scss';
// 国际化
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
// Mount when the route is ready
    // https://next.router.vuejs.org/api/#isready
// const app =createApp(App)//普通
export const app =createSSRApp(App)//普通

app.use(ElementPlus, { locale })//element-plus挂载
setupStore(app)
setupRouter(app)
app.mount('#app')
 
