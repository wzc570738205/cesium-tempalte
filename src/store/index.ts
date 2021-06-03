
import {  App, InjectionKey } from 'vue';
import Vuex,{ createStore, Store,StoreOptions } from 'vuex';
import {dashboard} from '/@ts/router/routes/menu';
import { AppRouteModule } from '/@ts/router/types';
import router from '/@ts/router';
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
       tagPages:[dashboard.children[0]],
       currentTag:0,
       menuActiveName:dashboard.children[0].name
     }
    },
    mutations:{
      setMenuActiveName(state:RootState,value:string){
        state.menuActiveName=value
      },
      setCurrentTag(state:RootState,value:number){
        state.currentTag=value
      },
      setBreadcrumbList(state:RootState,value:AppRouteModule[]){
        state.BreadcrumbList=value
      },
      setTagPages(state:RootState,value:AppRouteModule){
        state.tagPages.push(value)
        let arr = state.tagPages.map(res=>JSON.stringify(res))
        let setarr  = new Set(arr);
        state.tagPages = Array.from(setarr,x=>JSON.parse(x))
        for (let index = 0; index < state.tagPages.length; index++) {
          const element = state.tagPages[index];
          if(element.name==value.name){
            state.currentTag=index
          }else{
          }
        }
      },
      setCloseTagPages(state:RootState,value:number){
        state.tagPages.splice(value,1)
        router.push({name:state.tagPages[state.tagPages.length-1].name})
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