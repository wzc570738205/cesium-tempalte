interface StatusCode {
    goLoginArr:Array<number>,
    errorStatus:Array<number>,
    successStatus:SuccessStatus,
}
interface SuccessStatus {
    error:Array<number>,
    success:Array<number>,
}
const  enumStatus:StatusCode={
    //需要跳转到登录页面
    goLoginArr:[
        40004,40003
    ],
     //用户错误消息提醒
    errorStatus:[
      400,500
    ],
    //用户没错消息提醒
    successStatus:{
      error:  [
        40002,4000,1001,40001,40005,5000
      ],
      success:[2000]
    }
   
   
}
export {enumStatus}
