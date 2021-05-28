<template>
  <div class="login-form mxauto">
      <h1 class="title">登录</h1>
      <el-form :model="state.loginValidateForm" :ref="loginValidateFormRef"
      class="ruleForm mt30">
  <el-form-item
    prop="username"
    class="mt30"
    :rules="[
      { required: true, message: '账户不能为空'},
    ]"
  >
    <el-input type="age" v-model.number="state.loginValidateForm.username" autocomplete="off"></el-input>
  </el-form-item>
    <el-form-item
       class="mt30"
    prop="password"
    :rules="[
      { required: true, message: '账户不能为空'},
    ]"
  >
    <el-input type="age" v-model.number="state.loginValidateForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <div class="mt30 jcb aic">
        <el-checkbox label="记住我"></el-checkbox>
         <el-link type="primary" href="#/btn" target="_blank">忘记密码</el-link>

        
  </div>
  <el-form-item class="mt30">
    <el-button type="primary" class="w100 " @click="submitForm">登录</el-button>

  </el-form-item>
</el-form>
  </div>
</template>

<script setup lang="ts">
import {ref,defineProps,reactive,getCurrentInstance,defineComponent} from 'vue';
    const internalInstance = getCurrentInstance();//获取当前实例
    const refs = internalInstance?.appContext.config.globalProperties;

/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
 const count =ref(0);
 const state = reactive({
     loginValidateForm: {
          username: '',
          password:'',
        }
 })
 let FormRef :any= "";
 const loginValidateFormRef = (el :any)=>FormRef=el
 const submitForm = () => {
     console.log('FormRef :>> ', FormRef);
       FormRef.validate((valid: boolean) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
 defineProps({
  msg:  {
      type: String,
      required: true
    }
})

</script>

<style  scoped lang="scss" >
.login-form{
    width: 400px;
    position: relative;
    left: 0;top:100px;
    .title{
       
    }
}
.ruleForm{
    
}
</style>
