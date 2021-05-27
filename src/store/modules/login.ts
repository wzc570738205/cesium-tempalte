import {Store,Module, ActionContext} from 'vuex';
import { RootState } from '../root-types';
interface LoginState {
    permissionList:Array<number>;
} 
export const loginModule:Module<LoginState,RootState>= {
    namespaced: true,//namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
    state: ():LoginState => ({
      permissionList:[]
    }),
    mutations: {
      increment (state:LoginState) {
        // 这里的 `state` 对象是模块的局部状态
        state.permissionList.push(state.permissionList.length+1)
      }
    },
    getters: {
       
      },
    actions: {
        increment (context:ActionContext<LoginState,RootState>) {
          context.commit('increment')
        }
      }
  }
  