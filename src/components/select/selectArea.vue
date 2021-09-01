<template>
  <div>
    <el-cascader
      v-model="value"
      :props="{
        value:'code',
        label:'name',
      }"
      :options="area3"
      @change="handleChange"
    ></el-cascader>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive,  } from "vue";
import { area3 } from "/@ts/components/select/san_ji";
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const count = ref(0);
const state = reactive({});
const emit = defineEmits(['handleChange']);

const handleChange = (value: any) => {
  emit('handleChange',value)
};
</script>

<style  scoped lang="scss" >
</style>
