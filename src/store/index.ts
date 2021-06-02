
import {  App, InjectionKey } from 'vue';
import Vuex,{ createStore, Store,StoreOptions } from 'vuex';
import { AppRouteModule } from '/@ts/router/types';
import {loginModule} from '/@ts/store/modules/login';
import { RootState } from '/@ts/store/root-types';
interface State {
    count: number
  }
// 定义 injection key 
export const key: InjectionKey<Store<State>> = Symbol()
// 创建一个新的 store 实例 StoreOptions<RootState>
export const store:Store<RootState> = createStore({
    state(){
     return {
       projectName:"llt-admin",
       BreadcrumbList:[]
     }
    },
    mutations:{
      setBreadcrumbList(state:RootState,value:AppRouteModule[]){
        state.BreadcrumbList=value
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