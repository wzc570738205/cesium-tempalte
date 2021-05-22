import {router} from '../router';
export const useGoPage = (path:string) =>{
    console.log('router :>> ', router);
    router.push(path);

}