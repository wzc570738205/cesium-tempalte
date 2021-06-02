import { AppRouteModule } from "/@ts/router/types";

const btn:AppRouteModule = {
    path:"/btn",
    name:"btn",
    meta:{
        title:"按钮"
    },
    component: () => import('/@/views/btn.vue'),
}

export default btn;