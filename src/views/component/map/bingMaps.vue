<template>
<!-- tablecommon -->
  <div class="commonBoxmp white-bg">
      <el-descriptions class="margin-top" title="带边框列表" :column="3"  border>
    <template #extra>
      <el-button type="primary" size="small">操作</el-button>
    </template>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        地址名
      </template>
      {{state.address.address}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
         <i class="el-icon-location-outline"></i>
        经度
      </template>
      {{state.address.location.longitude}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        纬度
      </template>
     {{state.address.location.latitude}}
    </el-descriptions-item>
  
  </el-descriptions>
   <BingMap  @drag="dragMap" style="height:600px" class="mt20" />
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router'
import BingMap from '/@/components/map/bingMaps.vue'
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
 const count =ref(0);
 const state = reactive({
   address:{
     address:"",
     location:{
       latitude:"",//维度
       longitude:""//经度
     }
   }
 })
const dragMap = (e:any)=>{
state.address =  e
}

</script>

<style  scoped lang="scss" >

</style>
