import { RouteRecordRaw } from "vue-router";
import { LOGIN } from "../../constant";
import btn from "./btn";
const LoginRoute: RouteRecordRaw = {
    path: '/login',
    name: LOGIN,
    component: () => import('/@/views/sys/login/Login.vue'),
    meta: {
      title: "登录",
    }
  };
export default LoginRoute;