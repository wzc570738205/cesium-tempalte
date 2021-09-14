<template>
  <div class="analysis ">
    <div class="tablecommon">
      <div class="maxbox"></div>
    </div>
    <router-link to="/login" class="mx15">
        <el-button type="success">登录页</el-button>
    </router-link>
        <el-button @click="dialogVisible = true" type="success">滚动 dialog</el-button>
   <el-dialog
  title="提示"
  v-model="dialogVisible"
  width="30%"
  :before-close="handleClose"
>
    <el-scrollbar height="400px">
    <p class="item" v-for="item in 20" :key="item">{{ item }}</p>
  </el-scrollbar>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </template>
</el-dialog>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,getCurrentInstance,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router'
    const internalInstance = getCurrentInstance();//获取当前实例
    // const route = internalInstance?.appContext.config.globalProperties.$route;
   const router = useRouter()
   const route = useRoute()
    onMounted(()=>{
    })
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
 const dialogVisible =ref(true);
 const state = reactive({
   data:{a:1}
 })


</script>

<style  scoped lang="scss" >
.analysis{
  margin: 20px;
}
.maxbox{
  width: 1600px;
  height: 300px;
  background-color: #fff000;
}
.item{
  height: 50px;
  background-color: #fff000;
  color: red;
  text-align: center;
  margin: 15px 0;
}
</style>
