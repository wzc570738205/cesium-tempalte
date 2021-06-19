// 首先引入axios和上一步封装的cookie方法
import axios, { AxiosInstance,AxiosRequestConfig,AxiosResponse,AxiosPromise } from 'axios';
import { ElMessage } from 'element-plus'
import { router } from '/@ts/router';
import {enumStatus} from '/@ts/axios/config';

export class Interceptors {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL:(import.meta.env.VITE_BASE_URL as string),
            timeout: 10000
        })
    }
    // 初始化拦截器
    init() {
        // 请求接口拦截器
        this.instance.interceptors.request.use(
            (config:AxiosRequestConfig) => {
                // 判断一下是否有cookie 如果有的话则把cookie放入请求头中
               const key = localStorage.getItem((import.meta.env.VITE_TOKEN_NAME as string))?localStorage.getItem((import.meta.env.VITE_TOKEN_NAME as string)):''
                if (key) {
                    config.headers[(import.meta.env.VITE_TOKEN_NAME as string)] = key;
                }else{
                    router.push("/login")
                }
                config.headers['type'] = 'admin'
                return config
            },
            err => {
                console.error(err)
            }
        )
        
        // 响应拦截器 -1报错，-99服务器错误。-2登录失效，-3 无访问权限
        this.instance.interceptors.response.use(
            (response:AxiosResponse) => {
                
                const res = response.data
                   // 对响应数据做点什么
              if(enumStatus.successStatus.success.includes(res.status)){
                ElMessage.success(res.msg)
              }
              if(enumStatus.successStatus.error.includes(res.status)){
                ElMessage.error(res.msg)
              }

                return res;
            },
            err => {
                if (err.message === "Request failed with status code 500") {
                  console.error('系统错误，请检查API是否正常！');
                  return;
                }
                if(enumStatus.goLoginArr.includes(err.response.data.status)){
                  ElMessage.error(err.response.data.msg)
                  router.push({path:'/login'})
                }
              
                const err2 = { errCode: -110, errMsg: err.message || "Error" };
                return Promise.reject(err2);
              });
            }
        // 返回一下
    getInterceptors() {
      this.init()
        return this.instance
    }
    }
    

    // 请求配置
export class HttpServer {
    axios: any;
    // 获取axios实例
    constructor() {
      this.axios = new Interceptors().getInterceptors();
    }
    // 简单封装一下方法
    request(config: any): AxiosPromise {
      return new Promise((resolve, reject) => {
        this.axios(config).then((res: AxiosResponse) => {
          resolve(res);
        }).catch((err: any) => {
          reject(err)
        });
      });
    }
  }
  
  const http = new HttpServer()
  
  export default http.axios
  