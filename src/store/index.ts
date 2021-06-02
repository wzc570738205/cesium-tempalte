
import {  App, InjectionKey } from 'vue';
import Vuex,{ createStore, Store,StoreOptions } from 'vuex';
import {dashboard} from '/@ts/router/routes/menu';
import { AppRouteModule,AppRouteRecordRaw } from '/@ts/router/types';
import {loginModule} from '/@ts/store/modules/login';
import { RootState } from '/@ts/store/root-types';



// 定义 injection key 
export const key: InjectionKey<Store<RootState>> = Symbol()
// 创建一个新的 store 实例 StoreOptions<RootState>
export const store:Store<RootState> = createStore({
    state(){
     return {
       projectName:"llt-admin",
       BreadcrumbList:[],
       tagPages:[
        dashboard.children[0]
       ],
       formatRouteMenuList:[]
     }
    },
    mutations:{
      setFormatRouteMenuList(state:RootState,value:AppRouteModule[]){
        state.formatRouteMenuList=value
      },
      setBreadcrumbList(state:RootState,value:AppRouteModule[]){
        state.BreadcrumbList=value
      },
      setTagPages(state:RootState,value:AppRouteModule){
        state.BreadcrumbList.push(value)
      }
    },
    modules:{
        loginModule
   }
  })
/**
 * 挂载到vue实例函数
 * @param app vue实例
 */
 export function setupStore(app: App<Element>) {
  app.use(store,key);
}