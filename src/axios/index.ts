// 首先引入axios和上一步封装的cookie方法
import axios, { AxiosInstance,AxiosRequestConfig,AxiosResponse,AxiosPromise } from 'axios';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
const router = useRouter()


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
        ElMessage.error("123")
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
                if(res.code==-1 || res.code==-99 ){
                  ElMessage.error(res.message)
                }
                if(res.code==-2){
                    ElMessage.error(res.message)
                  localStorage.clear()
                  router.push("/login")
                }
                if(res.code==-3){
                    ElMessage.error(res.message)
                }
                return res;
            },
            err => {
                if (err.message === "Request failed with status code 500") {
                  console.error('系统错误，请检查API是否正常！');
                  return;
                }
                let code = -110;
                if (err && err.response && err.response.status) {
                  code = err.response.status;
                  // 登陆过期
                  if (code === 401 || code === -3) {
                   localStorage.clear()
                    
                  }
                } else {
                  console.error(err.message);
                }
                const err2 = { errCode: -110, errMsg: err.message || "Error" };
                return Promise.resolve(err2);
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
  
  export default http
  