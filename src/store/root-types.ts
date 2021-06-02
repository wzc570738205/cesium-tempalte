import { AppRouteModule } from "../router/types";
import { LoginState } from "./modules/login";

export interface RootState {
    projectName:string,
    BreadcrumbList:Array<AppRouteModule>
}