/**
 * window.atob 解码
 * window.btoa 编码
 */

export const useStorageCode = ()=>{
    
    const getStorage = (key:string)=>{
        if(!key){
            console.error("请设置key")
            return
        }
        let value:string = localStorage.getItem(window.btoa(key))||""
        if(!value){
            console.error("所取keys为空")
            return
        }
        return JSON.parse(window.atob(value)) ; 
    }
    const setStorage = (key:string,value:string)=>{
        if(!key){
            console.error("请设置key")
            return
        }
        if(!value){
            console.error("请设置value")
            return
        }
        localStorage.setItem(window.btoa(key),JSON.stringify(window.btoa(key)))
    }
    return {
        getStorage  ,setStorage
    }
}

