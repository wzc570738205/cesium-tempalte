import { AppRouteModule } from "../../types";
const LoginRoute: AppRouteModule = {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/sys/login/Login.vue'),
    meta: {
      title: "登录",
    },
  };
export default LoginRoute;