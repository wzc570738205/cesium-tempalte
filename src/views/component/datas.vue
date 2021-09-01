<template>
  <!-- tablecommon -->
  <div class="commonBoxmp white-bg">
    <el-descriptions title="地图数据" border>
      <el-descriptions-item label="高德地图">
           <el-link type="primary" href="http://datav.aliyun.com/tools/atlas/index.html"
           target="_blank"
           > http://datav.aliyun.com/tools/atlas/index.html</el-link>
         </el-descriptions-item>
    </el-descriptions>
    <div class="mt30">
    </div>
     <el-descriptions title="中华人民共和国行政区划" border>
      <el-descriptions-item label="省级、地级、县级、乡级和村级。">
           <el-link type="primary" href=" https://github.com/modood/Administrative-divisions-of-China"
           target="_blank"
           >  https://github.com/modood/Administrative-divisions-of-China</el-link>
         </el-descriptions-item>
    </el-descriptions>
   
    
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
onMounted(() => {});
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const count = ref(0);
const state = reactive({});
</script>

<style  scoped lang="scss" >
</style>
