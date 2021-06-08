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
export const initThemeColor =()=>{
    let themeColor:string[] =JSON.parse(localStorage.getItem("themeColor")|| JSON.stringify(store.state.themeColor))  
    document.documentElement.style.setProperty("--color-red",themeColor[0]);
    document.documentElement.style.setProperty("--color-green",themeColor[1]);
    document.documentElement.style.setProperty("--color-blue", themeColor[2]);
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
    switchColorNav(themeNav)//初始化导航
    switchColorMenu(themeMenu)//初始化菜单
    initThemeColor()//初始化导航
}
export default initTheme