import { useCssVar } from "@vueuse/core";
import {store, Theme} from '/@ts/store';
//顶部导航文字颜色
const navColorFont = useCssVar("--navColorFont");
//顶部导航背景颜色
const navColorBg = useCssVar("--navColorBg");

export interface SwitchColor {
    ColorFont:string,
    ColorBg:string,
}
export const switchColorNav = (dataColor:SwitchColor) => {
    store.commit("setThemeCurrentNavItem",dataColor)
    navColorFont.value =dataColor.ColorFont
    navColorBg.value =dataColor.ColorBg
};
export const switchColorMenu = (dataColor:SwitchColor) => {
    store.commit("setThemeCurrentMenuItem",dataColor)
};
//顶部导航文字颜色
const initTheme = ()=>{
    // localStorage.setItem("themeNav",JSON.stringify(store.state.theme.themeNav[0]))//这个是 测试使用 
    //获取顶部导航主题
    let themeNav:SwitchColor =JSON.parse(localStorage.getItem("themeNav")|| JSON.stringify(store.state.theme.themeNav[0]))  
    let themeMenu:SwitchColor =JSON.parse(localStorage.getItem("themeMenu")|| JSON.stringify(store.state.theme.themeMenu[0]))  
    //获取本地存储的通栏状态
    let isFull:boolean =JSON.parse(localStorage.getItem("isFull")|| "false")  
    store.commit("setIsFull",isFull)
    switchColorNav(themeNav)
    switchColorMenu(themeMenu)
}
export default initTheme