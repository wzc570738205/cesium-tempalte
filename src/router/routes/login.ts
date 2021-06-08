import { AppRouteModule } from "/@ts/router/types";
import { LOGIN } from "/@ts/router/constant";
const LoginRoute: AppRouteModule = {
    path: '/login',
    name: LOGIN,
    component: () => import('/@/views/login/Login.vue'),
    meta: {
      title: "登录",
    }
  };
export default LoginRoute;