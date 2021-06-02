<template>
  <div class="w100 h100 ">
    <div class="white-bg p20 animate__animated animate__fadeInUp animation-delay0">
      <h2>关于</h2>
      <p class="readme-content">
        <el-link type="primary">{{ $store.state.projectName }}</el-link>
        是基于vite + ts + vue3.0 + script setup语法糖 +
        element-plus的后台解决方案，
        基于MIT开源协议。原则上不会限制任何代码用于商用。
      </p>
    </div>

    <div>
      <el-card class="box-card animate__animated animate__fadeInUp animation-delay100">
        <template #header>
          <div class="card-header">
            <h4>项目信息</h4>
          </div>
        </template>
        <el-descriptions class="margin-top" :column="2" border>
          <el-descriptions-item>
            <template #label> 版本 </template>

            <el-tag>1.0.0</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label> gitee </template>
            <el-link
              type="primary"
              target="_blank"
              href="https://gitee.com/blueskyliu/admin-tempalte"
            >
              https://gitee.com/blueskyliu/admin-tempalte</el-link
            >
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
      <!-- 生产依赖 start -->
      <el-card class="box-card animate__animated animate__fadeInUp animation-delay200">
        <template #header>
          <div class="card-header">
            <h4>生产依赖</h4>
          </div>
        </template>
        <el-descriptions class="margin-top" :column="3" border>
          <el-descriptions-item
          v-for="(item,index) in state.dependencies"
          >
         <template #label> {{index}} </template>
              {{item}}
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
      <!-- 开发依赖 start -->
      <el-card class="box-card animate__animated animate__fadeInUp animation-delay300">
        <template #header>
          <div class="card-header">
            <h4>开发依赖</h4>
          </div>
        </template>
        <el-descriptions class="margin-top" :column="3" border>
            <el-descriptions-item
          v-for="(item,index) in state.devDependencies" :key="index"
          >
            <template #label> {{index}} </template>
              {{item}}
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
interface State {
  dependencies:object;
  devDependencies: object;
}
import { ref, reactive, getCurrentInstance, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
// import packageJson from '/@ts/views/sys/readme/data';
import * as packageJson from "../../../../package.json";
const internalInstance = getCurrentInstance(); //获取当前实例
// const route = internalInstance?.appContext.config.globalProperties.$route;
const router = useRouter();
const route = useRoute();
const count = ref(0);

const state: State = reactive({
  dependencies: {}, //生产依赖
  devDependencies: [], //开发依赖
});
//初始化生产 开发信息
function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}
  state.devDependencies= packageJson.devDependencies;
  state.dependencies= packageJson.dependencies;
onMounted(() => {});
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
</script>

<style  scoped lang="scss">
.readme-content {
  margin-top: 10px;
  line-height: 2.5rem;
}
.box-card {
  margin: 15px;
  margin-bottom: 0;
}
</style>
