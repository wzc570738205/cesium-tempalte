<template>
  <div class="llt-tag aic">
        <!-- 选中的 -->
        <div class="llt-tag-item  cP" 
        :class="currentTag==index?' llt-tag-active':''"
        v-for="(item,index) in tagsData" :key="index">
         <el-dropdown trigger="contextmenu">
      <span class="tag-font"  :style="{paddingRight:index==0?'8px':'4px'}"
      @click="handleOpen(index,item)"
      >
        {{item.meta.title}}
            <i @click="handleClose(index)"  v-show="index!=0"
           
             class="el-icon-close llt-tag-icon-close "></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item 
          v-for="(item,index) in state.tagPageToolData"
          :key="index"
          >{{item.name}}</el-dropdown-item>
         
        </el-dropdown-menu>
      </template>
    </el-dropdown>       
        </div>
        <!-- 未选中 -->
  </div>
</template>

<script setup lang="ts">
import {ref,defineProps,reactive,getCurrentInstance, useContext } from 'vue';
import type{ AppRouteModule } from '/@ts/router/types';
    const internalInstance = getCurrentInstance();//获取当前实例
    const route = internalInstance?.appContext.config.globalProperties.$route;
const context = useContext();
const props = defineProps({
  currentTag:  {
      type: Number,
      default: 0
    },
  tagsData:{
    type:Array,
     default: []
  },
})

interface TagPageTool {
  disabled:boolean,
  name:string
}
interface State {
  tagPageToolData:Array<TagPageTool>
}
const state:State = reactive({
tagPageToolData:[
  {
    name:"关闭当前页面",
    disabled:false
  },
   {
    name:"关闭左边页面",
    disabled:false
  },
   {
    name:"关闭右边边页面",
    disabled:false
  },
   {
    name:"关闭其他页面",
    disabled:false
  }
]
})
const handleOpen =(index:number,routerItem:AppRouteModule)=>{
    // 删除数组指定索引后返回数据
    context.emit("handleOpen",{index,routerItem});
}
const handleClose =(index:Number)=>{
    // 删除数组指定索引后返回数据
    context.emit("handleClose",index);
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
.llt-tag-icon-close:hover{
  background-color: rgba(0,0,0,0.3);
  border-radius: 100%;
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
