import { useCssVar } from "@vueuse/core";
//顶部导航文字颜色
const color = useCssVar("--navColorFont");
export const switchColor = (str:string) => {
    localStorage.setItem("navColorFont",str)
    color.value =str
};
const initTheme = ()=>{
    let navColorFont:string = localStorage.getItem("navColorFont") || "#c48"
    switchColor(navColorFont)
}
export default initTheme