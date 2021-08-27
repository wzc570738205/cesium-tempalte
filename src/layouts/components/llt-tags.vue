<template>
  <div class="llt-tag aic">
    <!-- 选中的 -->
    <div
      class="llt-tag-item cP"
      :class="currentTag == tagToolIndex ? ' llt-tag-active' : ''"
      @mouseenter="mouseenterTagTool(tagToolIndex)"
      v-for="(item, tagToolIndex) in tagsData"
      :key="tagToolIndex"
    >
      <el-dropdown
        trigger="contextmenu"
        @visible-change="vChange"
        @command="handleTagPageTool"
      >
        <span
          class="tag-font"
          :style="{ paddingRight: tagToolIndex == 0 ? '8px' : '4px' }"
          @click="handleOpen(tagToolIndex, item)"
        >
          {{ item.meta.title }}
          <i
            @click="handleClose(tagToolIndex)"
            v-show="tagToolIndex != 0"
            class="el-icon-close llt-tag-icon-close"
          ></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="(item, index) in state.tagPageToolData"
              :key="index"
              :disabled="item.disabled"
              :command="index"
              >{{ item.name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <!-- 未选中 -->
  </div>
</template>

<script setup lang="ts">
import { store } from "/@ts/store";
import {
  ref,
  reactive,
  getCurrentInstance,
} from "vue";
import type { AppRouteModule } from "/@ts/router/types";
const internalInstance = getCurrentInstance(); //获取当前实例
const route = internalInstance?.appContext.config.globalProperties.$route;
const emit = defineEmits(['handleOpen','handleClose']);
const props = defineProps({
  currentTag: {
    type: Number,
    default: 0,
  },
  tagsData: {
    type: Array,
    default: [],
  },
});

interface TagPageTool {
  disabled: boolean;
  name: string;
}
interface State {
  tagPageToolData: Array<TagPageTool>;
  currentTagIndex: number;
}
const state: State = reactive({
  tagPageToolData: [
    {
      name: "关闭当前页面",
      disabled: false,
    },
    {
      name: "关闭左边页面",
      disabled: false,
    },
    {
      name: "关闭右边边页面",
      disabled: false,
    },
    {
      name: "关闭其他页面",
      disabled: false,
    },
  ],
  currentTagIndex: 0, //当前菜单是否展开
});
const handleOpen = (index: number, routerItem: AppRouteModule) => {
  // 删除数组指定索引后返回数据
  emit("handleOpen", { index, routerItem });
};
//tagpagetool 工具函数
const handleClose = (index: Number) => {
  // 删除数组指定索引后返回数据
  emit("handleClose", index);
};
/**
 * 关闭左边
 */
const closeLeft = (index: number) => {};
/**
 * 关闭右边
 */
const closeRight = (index: number) => {};
const vChange = (bool: boolean) => {
  //每次切换初始化数据在处理是否禁用
  state.tagPageToolData = [
    {
      name: "关闭当前页面",
      disabled: false,
    },
    {
      name: "关闭左边页面",
      disabled: false,
    },
    {
      name: "关闭右边边页面",
      disabled: false,
    },
    {
      name: "关闭其他页面",
      disabled: false,
    },
  ];
  //等于1 说明只有一个标签页 即默认首页
  if (props.tagsData.length == 1) {
    state.tagPageToolData = state.tagPageToolData.map((res) => {
      res.disabled = true;
      return res;
    });
  } else if (props.tagsData.length > 1) {
    //说明在最后一个
    if (state.currentTagIndex == props.tagsData.length - 1) {
      if (props.tagsData.length != 2) {
        state.tagPageToolData[2].disabled = true;
      } else {
        state.tagPageToolData[1].disabled = true;
        state.tagPageToolData[2].disabled = true;
        state.tagPageToolData[3].disabled = true;
      }
    } else if (state.currentTagIndex == 0) {
      //  说明只有俩且在第一个
      state.tagPageToolData[0].disabled = true;
      state.tagPageToolData[1].disabled = true;
    } else if (state.currentTagIndex == 1) {
      //  说明只有俩且在第一个
      state.tagPageToolData[1].disabled = true;
    }
  }
};
//鼠标悬浮tag标签
const mouseenterTagTool = (e: number) => {
  state.currentTagIndex = e;
};
const handleTagPageTool = (index: number) => {
  let data = JSON.parse(JSON.stringify(props.tagsData));
  switch (index) {
    case 0: //关闭当前页面
      handleClose(state.currentTagIndex);
      break;
    case 1: //关闭左边页面
      data.splice(1, state.currentTagIndex - 1);
      break;
    case 2: //关闭右边边页面
      data.splice(state.currentTagIndex + 1);
      break;
    case 3: //关闭其他页面
      if (state.currentTagIndex == 0) {
        data.splice(1);
      } else {
        data = [];
        props.tagsData.forEach((res, index) => {
          if (index == 0 || index == state.currentTagIndex) {
            data.push(res);
          }
        });
      }
      break;
  }
  store.commit("MoreCloseTagPages", data);
};
</script>

<style  scoped lang="scss" >
.llt-tag {
  margin: 3px;
}
.llt-tag-item .tag-font {
  display: inline-block;
  border: 1px solid #d9d9d9;
  padding: 0 8px;
  padding-right: 4px;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  margin-right: 3px;
}
.llt-tag-icon-close {
  font-size: 12px;
}
.llt-tag-icon-close:hover {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 100%;
}

.llt-tag-item:hover {
  color: rgb(9, 96, 189);
}

.llt-tag-active:hover .tag-font {
  color: white !important ;
}
</style>
