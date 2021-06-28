import {Store,Module, ActionContext} from 'vuex';
import { RootState } from '../root-types';
export interface LoginState {
    permissionList:Array<number>;
    isLogin:boolean
} 
export const loginModule:Module<LoginState,RootState>= {
    namespaced: true,//namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
    state: ():LoginState => ({
      permissionList:[],
      isLogin:false
    }),
    mutations: {
      increment (state:LoginState,value:number) {
        // 这里的 `state` 对象是模块的局部状态
        state.permissionList.push(value)
      },
      isLogin(state:LoginState){
        let token:string=  localStorage.getItem(import.meta.env.VITE_TOKEN_NAME as string)  as string 
        if(token){
          state.isLogin=true
        }
      }
    },
    getters: {
       
      },
    actions: {
        increment (context:ActionContext<LoginState,RootState>) {
          context.commit('increment')
        },
      }
  }
  