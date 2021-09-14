declare module '*.vue' {
  //告诉ts .vue 的文件是组件
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "*.json" {
  const jsonValue: any;
  export default jsonValue;
}
