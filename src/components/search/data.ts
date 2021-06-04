import type{ AppRouteRecordRaw } from "/@ts/router/types";
/**
 * 
 * @param params 搜索的路由参数
 */
export const useSearchTool = (params: AppRouteRecordRaw[]) => {
    /**
     * 
     * @param str 搜索的key值
     */
    let bool: boolean = false;//节流条件 true 无法搜索
    
    function searchChange(str: string):AppRouteRecordRaw[] {
        let data: AppRouteRecordRaw[] = []//包含的内容
        if(str!==""){
            if (!bool){
                bool = true;//立即执行 节流
                setTimeout(() => {
                    bool = false;
                }, 100);
                for (let index = 0; index < params.length; index++) {
                    const element: AppRouteRecordRaw = params[index];
                    if (element.children) {
                        let dataInclude:AppRouteRecordRaw[] = element.children.filter(res => res.meta.title.indexOf(str) != -1)
                        dataInclude = dataInclude.map((res:AppRouteRecordRaw)=>{
                            let element2:AppRouteRecordRaw = JSON.parse(JSON.stringify(element))
                            element2.children = [res]
                                return element2
                        })
                        data = data.concat(dataInclude)
                    } else {
                        console.log('element.name.indexOf(str) :>> ', element.meta.title.indexOf(str));
                        if (element.meta.title.indexOf(str) != -1) {
                            data.push(element)
                        }
                    }
                }
            } 
        }
      return data
    }
    
    return {
        searchChange
    }
}
