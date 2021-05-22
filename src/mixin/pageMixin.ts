// define a mixin object
import {router} from '../router';
const myMixin = {
        methods: {
            useGoPage (path:string) {
            console.log('router :>> ', router);
            router.push(path);
        }
    }
  }
export default myMixin;