import { Theme } from "./index";
import { SwitchColor } from "../hooks/theme";
import { AppRouteModule } from "../router/types";
import { LoginState } from "./modules/login";

export interface RootState {
    projectName:string,
    BreadcrumbList:Array<AppRouteModule>,
    tagPages:Array<AppRouteModule>,
    currentTag:number,
    menuActiveName:string,
    refresh:boolean,
    theme:Theme,
    themeCurrentNavItem:SwitchColor,
    themeCurrentMenuItem:SwitchColor,
    isFull:boolean,//true 全屏
    themeColor:string[]
}