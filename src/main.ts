import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '/@ts/router'
import {setupStore} from '/@ts/store/index';
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/display.css';//1.1.0-beta.10 版本
import 'element-plus/dist/index.css'//1.1.0-beta.10 版本
import 'vue-cropper/dist/index.css'//剪接
import 'animate.css/animate.min.css';
import './init.scss';
// 国际化
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
// Mount when the route is ready
    // https://next.router.vuejs.org/api/#isready
const app =createApp(App)
app.use(ElementPlus, { locale })//element-plus挂载
setupStore(app)
setupRouter(app)
app.mount('#app')
