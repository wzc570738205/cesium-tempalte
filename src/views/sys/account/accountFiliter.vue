<template>
  <div class="w100">
    <div class="aic w100">
      <el-input
        v-model="state.search"
        class="mx15"
        size="mini"
        placeholder="搜索部门名称返回结果"
      />
      <el-button icon="el-icon-search" size="mini" type="primary"
        >搜索</el-button
      >
    </div>
    <el-tree
      :props="state.props"
      :data="treeData"
      show-checkbox
      @check-change="handleCheckChange"
    >
    </el-tree>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, reactive, getCurrentInstance } from "vue";
const internalInstance = getCurrentInstance(); //获取当前实例
const route = internalInstance?.appContext.config.globalProperties.$route;

/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
const count = ref(0);
const state = reactive({
   search:"",
  props: {
    label: "name",
    children: "zones",
    isLeaf: "leaf",
  },
});

const props = defineProps({
 
  treeData: {
    type: Array,
    default: [
      {
        name: "销售部",
        leaf: true,
        zones: [
          {
            name: "运营部",
            leaf: true,
            zones: [
              {
                name: "市场部",
                leaf: true,
                zones: [
                  {
                    name: "人事部",
                    leaf: true,
                    zones: [],
                  },
                  {
                    name: "市场部",
                    leaf: true,
                    zones: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "市场部",
        leaf: true,
      },
      {
        name: "人事部",
        leaf: true,
      },
       {
        name: "运营部",
        leaf: true,
      },
    ],
  },
});
/**
 * 共三个参数，依次为：
 * 传递给 data 属性的数组中该节点所对应的对象、
 * 节点本身是否被选中、节点的子树中是否有被选中的节点
 */
const handleCheckChange = (e: any, c: any, b: any) => {
console.log('e,c,b :>> ', e,c,b);
  
};
</script>

<style    lang="scss" >

</style>
