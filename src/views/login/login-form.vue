<template>
  <div class="login-form mxauto white-bg">
    <h1 class="title">登录</h1>
    <el-form
      :rules="rules"
      :model="state.loginValidateForm"
      :ref="loginValidateFormRef"
      class="ruleForm mt30"
    >
      <el-form-item prop="username" class="mt30">
        <el-input
          type="text"
          placeholder="输入账户"
          v-model="state.loginValidateForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item class="mt30" prop="password">
        <el-input
          show-password
          placeholder="输入密码"
          v-model="state.loginValidateForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <div class="mt30 jcb aic">
        <el-checkbox label="记住我"></el-checkbox>
        <el-link type="primary" href="#/btn" target="_blank">忘记密码</el-link>
      </div>
      <el-form-item class="mt30">
        <el-button
          type="primary"
          class="w100"
          :loading="loading"
          @click="submitForm"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  defineProps,
  reactive,
  getCurrentInstance,
  defineComponent,
} from "vue";
import http from "/@ts/axios";
import getmd5 from "/@ts/plugins/md5";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const internalInstance = getCurrentInstance(); //获取当前实例
const refs = internalInstance?.appContext.config.globalProperties;
const rules = {
  username: [
    { required: true, message: "账户不能为空" },
    { min: 5, max: 16, message: "长度在 5 到 16 个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "密码不能为空" },
    { min: 5, max: 16, message: "长度在 5 到 16 个字符", trigger: "blur" },
  ],
};
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/

let loading = ref(false); //登录按钮loading 动画bool值
const state = reactive({
  loginValidateForm: {
    username: "",
    password: "",
  },
});
let FormRef: any = "";
const loginValidateFormRef = (el: any) => (FormRef = el);
/**
 * 用户登录
 */
const submitForm = () => {
  FormRef.validate((valid: boolean) => {
    if (valid) {
      //通过数据校验
      loading.value = true;
      http
        .post("/login/admin", {
          username: state.loginValidateForm.username,
          password: getmd5(state.loginValidateForm.password),
        })
        .then((result: any) => {
          if (result.status == 2000) {
            localStorage.setItem(import.meta.env.VITE_TOKEN_NAME as string, result.token)
            localStorage.setItem(import.meta.env.VITE_USER_INFO_KEY as string, JSON.stringify(result.data))
            router.push("/");
          }
          loading.value = false;
        })
        .catch((err: any) => {});
    } else {
      return false;
    }
  });
};
</script>

<style scoped lang="scss">
.login-form {
  width: 400px;
  position: relative;
  left: 0;
  top: 100px;
  padding: 34px;
  border-radius: 7px;
  .title {
  }
}
.ruleForm {
}
</style>
