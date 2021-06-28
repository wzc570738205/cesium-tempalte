import {Md5} from 'ts-md5/dist/md5';
const getmd5 = (value:string) =>{
return Md5.hashStr(value)
}


export default getmd5