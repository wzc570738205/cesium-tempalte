<template>
  <div class="w100 h100">
    <div class="white-bg p20 animate__animated animate__fadeInUp animation-delay0">
      <h2>修改当前用户密码</h2>
      <p class="changePassword-content">
        <el-link type="primary" :underline="false">
            修改成功后会自动退出当前登录！
        </el-link>
      </p>
    </div>

    <div>
     
      <!-- 生产依赖 start -->
      <el-card class="box-card animate__animated animate__fadeInUp animation-delay200">
        <el-form
      :model="state.loginValidateForm"
      :ref="loginValidateFormRef"
      class="ruleForm mt30"
    >
      <el-form-item
      label="当前密码"
        prop="username"
        class="mt30"
        :rules="[{ required: true, message: '当前密码不能为空' }]"
      >
        <el-input
          type="text"
          placeholder="输入当前密码"
          v-model.number="state.loginValidateForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        class="mt30"
        label="新密码"
        prop="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
      >
        <el-input
          show-password
          placeholder="输入新密码"
          v-model.number="state.loginValidateForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        class="mt30"
        label="确认密码"
        prop="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
      >
        <el-input
          show-password
          placeholder="输入新密码"
          v-model.number="state.loginValidateForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item class="mt30">
        <el-button type="primary" class="w100" :loading="true" @click="submitForm"
          >确认</el-button
        >
      </el-form-item>
    </el-form>
        
      </el-card>
     
    </div>
  </div>
</template>

<script setup lang="ts">
interface State {
  dependencies: object;
  devDependencies: object;
}
import { ref, reactive, getCurrentInstance, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const internalInstance = getCurrentInstance(); //获取当前实例
const router = useRouter();
const route = useRoute();
const count = ref(0);
const state = reactive({
  loginValidateForm: {
    username: "",
    password: "",
  },
});
let FormRef: any = "";
const loginValidateFormRef = (el: any) => (FormRef = el);
const submitForm = () => {
  FormRef.validate((valid: boolean) => {
    if (valid) {
      alert("submit!");
    } else {
      console.log("error submit!!");
      return false;
    }
  });
};
onMounted(() => {});
/*
  基本数据类型
  引用数据类型（复杂类型） 个人建议 ref初始化变量 
  ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
  ref定义的数据访问的时候要多一个.value
  */
</script>

<style scoped lang="scss">
.changePassword-content {
  margin-top: 10px;
  line-height: 2.5rem;
}
.box-card {
  margin: 15px;
  margin-bottom: 0;
}
</style>
