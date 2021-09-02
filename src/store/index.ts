
import {  App, InjectionKey } from 'vue';
import Vuex,{ createStore, Store,StoreOptions } from 'vuex';
import {dashboard} from '/@ts/router/routes/menu';
import { AppRouteModule } from '/@ts/router/types';
import router from '/@ts/router';
import {loginModule} from '/@ts/store/modules/login';
import { RootState } from '/@ts/store/root-types';
import { SwitchColor } from '/@ts/hooks/theme';
// 定义 injection key 
export const key: InjectionKey<Store<RootState>> = Symbol()
// 创建一个新的 store 实例 StoreOptions<RootState>
export interface Theme {
  themeNav:SwitchColor[],
  themeMenu:SwitchColor[],
}
export const theme:Theme = {
  themeNav:[
    {
      ColorFont:"#333",
      ColorBg:"#FFF",
     },
     {
    ColorFont:"#FFF",
    ColorBg:"#009688",
   },
   {
    ColorFont:"#FFF",
    ColorBg:"#383F45",
   },
   {
    ColorFont:"#FFF",
    ColorBg:"#394664",
   },
   {
    ColorFont:"#FFF",
    ColorBg:"#409EFF",
   },
  ],
   themeMenu:[
    {
      ColorFont:"#FFF",
      ColorBg:"#001529",
     },
    {
      ColorFont:"#FFF",
      ColorBg:"#23262E",
     },
    {
    ColorFont:"#FFF",
    ColorBg:"#383F45",
   },
   {
    ColorFont:"#FFF",
    ColorBg:"#394664",
   },
  ]
}
export const themeColor:string[] = ["9","96","189"]
export const store:Store<RootState> = createStore({
    state(){
     return {
       isFull:false,
       projectName:"llt-admin",//项目标题
       BreadcrumbList:[],//面包屑
       tagPages:[dashboard.children[0]],//导航标签页
       currentTag:0,//当前选中的标签索引值
       menuActiveName:dashboard.children[0].name,//当前菜单默认选中菜单
       refresh:false,//刷新状态 false 刷新结束
       theme:theme,//主题配色
       themeCurrentMenuItem:theme.themeMenu[1],
       themeCurrentNavItem:theme.themeNav[0],//当前导航主题配色
       themeColor:themeColor,//这里的初始化的值与 init.scss HTML的值保持一直
     }
    },
    mutations:{
      setThemeColor(state:RootState,value:string[]){
        state.themeColor = value
        document.documentElement.style.setProperty("--color-red", value[0]);
        document.documentElement.style.setProperty("--color-green", value[1]);
        document.documentElement.style.setProperty("--color-blue", value[2]);
        localStorage.setItem("themeColor",JSON.stringify(value))
      },
      setIsFull(state:RootState,value:boolean){
        state.isFull=value;
        localStorage.setItem("isFull",JSON.stringify(value))
      },
      setThemeCurrentNavItem(state:RootState,value:SwitchColor){
        state.themeCurrentNavItem=value
        localStorage.setItem("themeNav",JSON.stringify(value))
      },
      setThemeCurrentMenuItem(state:RootState,value:SwitchColor){
        state.themeCurrentMenuItem=value
        localStorage.setItem("themeMenu",JSON.stringify(value))
      },
      setRefresh(state:RootState){
        state.refresh = true;
        setTimeout(() => {
          state.refresh = false;
        }, 100);
      },
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
        router.push({name:state.tagPages[value-1].name})
      },
      //重新赋值标签页
      MoreCloseTagPages(state:RootState,value:AppRouteModule[]){
        state.tagPages=value
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