import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import {setupStore} from './store/index';
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/theme-chalk/display.css';
import 'animate.css/animate.min.css';
import './init.scss';
const app =createApp(App)
app.use(ElementPlus)//element-plus挂载
setupStore(app)
setupRouter(app)
app.mount('#app')
