import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '/@ts/router'
import {setupStore} from '/@ts/store/index';
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/theme-chalk/display.css';
import 'animate.css/animate.min.css';
import './init.scss';



// Mount when the route is ready
    // https://next.router.vuejs.org/api/#isready
const app =createApp(App)
console.log('ElementPlus :>> ', ElementPlus);
app.use(ElementPlus)//element-plus挂载
setupStore(app)
setupRouter(app)
app.mount('#app')
