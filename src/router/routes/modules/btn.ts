import { RouteRecordRaw } from "vue-router";

const btn:RouteRecordRaw = {
    path:"/btn",
    name:"btn",
    meta:{
        title:"按钮"
    },
   
    component: () => import('/@/views/btn.vue'),
}

export default btn;