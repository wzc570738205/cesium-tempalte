import { AppRouteModule } from "../../types";

const btn:AppRouteModule = {
    name:"btn",
    meta:{
        title:"按钮"
    },
    path:"/btn",
    component: () => import('/@/views/btn.vue'),
}

export default btn;