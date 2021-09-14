<template>
  <div>
    <div :ref="echartsMap" id="mainChina"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, reactive, defineEmits, onMounted } from "vue";
import * as echarts from "echarts";
import china from "/@ts/assets/data/100000_full.json";
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
let dataList = [
      {
          name: "南海诸岛",
          value: 100,
          eventTotal:100,
          specialImportant:10,
          import:10,
          compare:10,
          common:40,
          specail:20
        },
        {
          name: "海南省",
          value: 100,
          eventTotal:100,
          specialImportant:10,
          import:10,
          compare:10,
          common:40,
          specail:20
        },
        {
          name: "北京市",
          value: 540
        },
        {
          name: "天津市",
          value: 130
        },
        {
          name: "上海市",
          value: 400
        },
        {
          name: "重庆市",
          value: 750
        },
        {
          name: "河北省",
          value: 130
        },
        {
          name: "河南省",
          value: 830
        },
        {
          name: "云南省",
          value: 110
        },
        {
          name: "辽宁省",
          value: 19
        },
        {
          name: "黑龙江省",
          value: 150
        },
        {
          name: "湖南省",
          value: 690
        },
        {
          name: "安徽省",
          value: 60
        },
        {
          name: "山东省",
          value: 39
        },
        {
          name: "新疆维吾尔自治区",
          value: 4
        },
        {
          name: "江苏省",
          value: 31
        },
        {
          name: "浙江省",
          value: 104
        },
        {
          name: "江西省",
          value: 36
        },
        {
          name: "湖北省",
          value: 52
        },
        {
          name: "广西壮族自治区",
          value: 33
        },
        {
          name: "甘肃省",
          value: 7
        },
        {
          name: "山西省",
          value: 5
        },
        {
          name: "内蒙古自治区",
          value: 778
        },
        {
          name: "陕西省",
          value: 22
        },
        {
          name: "吉林省",
          value: 4
        },
        {
          name: "福建省",
          value: 18
        },
        {
          name: "贵州省",
          value: 5
        },
        {
          name: "广东省",
          value: 98
        },
        {
          name: "青海省",
          value: 1
        },
        {
          name: "西藏自治区",
          value: 0
        },
        {
          name: "四川省",
          value: 44
        },
        {
          name: "宁夏回族自治区",
          value: 4
        },
      
        {
          name: "台湾省",
          value: 3
        },
        {
          name: "香港省",
          value: 5
        },
        {
          name: "澳门省",
          value: 555
        }
      ]
let echartsMapel: any = ref("");
const echartsMap = (e: any) => (echartsMapel.value = e);
const init = () => {
  console.log("echartsMap :>> ", china);
  // 基于准备好的dom，初始化echarts实例
  echarts.registerMap("china", china as any);
  var myChart = echarts.init(echartsMapel.value);
  // 指定图表的配置项和数据
  var options:any = {
    series: [
      {
        type: "map",
        roam: true,
        zoom: 1.5,
        map: "china",
        top: 230,
        tooltip: {
          padding: 8,
          borderWidth: 1,
          borderColor: "#409eff",
          backgroundColor: "rgba(255,255,255,0.7)",
          textStyle: {
            color: "#000000",
            fontSize: 13,
          },
              formatter: function(e, t, n) {
            let data = e.data;
            //模拟数据
            data.specialImportant = Math.random()*1000 | 0;
            data.import = Math.random()*1000 | 0;
            data.compare = Math.random()*1000 | 0;
            data.common = Math.random()*1000 | 0;
            data.specail = Math.random()*1000 | 0;

            let context = `
               <div>
                   <p><b style="font-size:15px;">${data.name}</b>(2020年第一季度)</p>
                   <p class="tooltip_style"><span class="tooltip_left">事件总数</span><span class="tooltip_right">${data.value}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">特别重大事件</span><span class="tooltip_right">${data.specialImportant}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">重大事件</span><span class="tooltip_right">${data.import}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">较大事件</span><span class="tooltip_right">${data.compare}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">一般事件</span><span class="tooltip_right">${data.common}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">特写事件</span><span class="tooltip_right">${data.specail}</span></p>
               </div>
            `
            return context;
          }
        },
      },
    ],
    title: {
      text: "中国各省事件统计",
      left: "center",
      top: 30,
      textStyle: {
        color: "#FFF",
      },
    },
    tooltip : {
        trigger: 'item',
        
    },
  
    visualMap: {
      //地图图例
      show: true,
      left: 26,
      bottom: 40,
      showLabel: true,
      pieces: [
        //根据数据大小，各省显示不同颜色
        {
          gte: 100,
          label: ">= 1000",
          color: "#1f307b",
        },
        {
          gte: 500,
          lt: 999,
          label: "500 - 999",
          color: "#3c57ce",
        },
        {
          gte: 100,
          lt: 499,
          label: "100 - 499",
          color: "#6f83db",
        },
        {
          gte: 10,
          lt: 99,
          label: "10 - 99",
          color: "#9face7",
        },
        {
          lt: 10,
          label: "<10",
          color: "#bcc5ee",
        },
      ],
    },
    
  };
options.series[0]['data'] = dataList;
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(options);
};
const state = reactive({});
onMounted(() => {
  init();
});
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<style  scoped lang="scss" >
#mainChina {
  background-color: rgba($color: #000000, $alpha: 0.6);
  width: 100%;
  height: 800px;
}
</style>
