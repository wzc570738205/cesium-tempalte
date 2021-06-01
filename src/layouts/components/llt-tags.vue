<template>
  <div class="llt-tag aic">
        <!-- 选中的 -->
        <div class="llt-tag-item  cP" 
        :class="currentTag==index?' llt-tag-active':''"
        v-for="(item,index) in tagsData" :key="index">
         <el-dropdown trigger="contextmenu">
      <span class="tag-font"  :style="{paddingRight:index==0?'8px':'4px'}">
        {{item.name}}
            <i @click="handleClose"  v-show="index!=0"
           
             class="el-icon-close llt-tag-icon-close "></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
           
        </div>
        <!-- 未选中 -->
  </div>
</template>

<script setup lang="ts">
import {ref,defineProps,reactive,getCurrentInstance, useContext } from 'vue';
    const internalInstance = getCurrentInstance();//获取当前实例
    const route = internalInstance?.appContext.config.globalProperties.$route;
const context = useContext();
const props=  defineProps({
  currentTag:  {
      type: Number,
      default: 0
    },
  tagsData:{
    type:Array,
     default: []
  },
    //  name:{
    //   type: String,
    //   default: 0
    // },
    // to:{
    //   type: String,
    //   default: ""   
    // }
})
const handleClose =()=>{
    // 删除数组指定索引后返回数据
    let tagsData = JSON.parse(JSON.stringify( props.tagsData))
    tagsData.splice(props.currentTag,1)
    context.emit("handleClose",tagsData );
}
</script>

<style  scoped lang="scss" >
.llt-tag{
    margin: 3px;
    
}
.llt-tag-item .tag-font{
    display: inline-block;
    border: 1px solid #D9D9D9;
    padding: 0 8px;
    padding-right: 4px;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    margin-right: 3px;
}
.llt-tag-icon-close{
   font-size: 12px;
}
.tag-font:hover .llt-tag-icon-close{
   visibility: visible;
}
.llt-tag-item:hover{
    color:rgb(9, 96, 189) ;
}
.llt-tag-active .tag-font{
    background-color: #0960bd;
    color:white  !important ;
}
.llt-tag-active:hover .tag-font{
    color:white  !important ;
}
</style>
