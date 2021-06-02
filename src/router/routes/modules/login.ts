import { AppRouteModule } from "/@ts/router/types";
import { LOGIN } from "../../constant";
import btn from "./btn";
const LoginRoute: AppRouteModule = {
    path: '/login',
    name: LOGIN,
    component: () => import('/@/views/sys/login/Login.vue'),
    meta: {
      title: "登录",
    }
  };
export default LoginRoute;