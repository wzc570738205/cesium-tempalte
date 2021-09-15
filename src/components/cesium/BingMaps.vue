<template>
  <div class="cesium1box">
    <div id="cesiumContainer"></div>
 
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, reactive, defineEmits, onMounted } from "vue";
import * as Cesium from "cesium";
/*
基本数据类型
引用数据类型（复杂类型） 个人建议 ref初始化变量 
ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, 
ref定义的数据访问的时候要多一个.value
*/
//https://lbs.amap.com/demo/jsapi-v2/example/thirdlayer/custom-grid-map/
const state = reactive({});
  let tabCesiumRef: any = "";
  const tabCesium = (el: any) => (tabCesiumRef = el);
const init = () => {
  // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiOTJlMzA2ZS1iYTM0LTQzOTktOGU3Yi1iYmJlMzRmNmUwNDciLCJpZCI6NjcyOTEsImlhdCI6MTYzMTY3MzY1OH0.x7V-f8_176ls-NGKWbUuR7fZXXhtjLTGdIYMCEz3uE0";
  var viewer: any = new Cesium.Viewer("cesiumContainer", {
    geocoder: false, // 隐藏搜索
    homeButton: false, // 隐藏主页
    sceneModePicker: false, // 隐藏二三维转换
    baseLayerPicker: false, // 隐藏图层选择控件
    navigationHelpButton: false, // 隐藏帮助按钮
    animation: false, // 隐藏时钟
    timeline: false, // 隐藏时间轴
    fullscreenButton: false, // 隐藏全屏
    vrButton: false, // 隐藏双屏模式
    infoBox: false, // 隐藏点击 entity 信息框
    selectionIndicator: false, // 隐藏点击 entity 绿框
    // 设置底图

    //  imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
    // url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
    // })
    // imageryProvider: new Cesium.UrlTemplateImageryProvider({
    //   url: "http://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
    //   // url:'https://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&size=1&scl=1&style=8&ltype=11'
    // }),
  });
     viewer.imageryLayers.addImageryProvider(new Cesium.BingMapsImageryProvider({
            url : 'https://dev.virtualearth.net',
            mapStyle : Cesium.BingMapsStyle.AERIAL,
            key : 'AkKcF1kUFRsFgy5ajuulG_B4Yc7O2QF7pZpLXclunOJ9DL-Z9GJm_O2mLoAyV66m'
        }));
  // 定位到全国
  // 中国坐标
  let chinaPosition = Cesium.Cartesian3.fromDegrees(
    106.435314,
    35.960521,
    7000000.0
  );
  viewer.camera.flyTo({
    destination: chinaPosition,
    duration: 1, // 飞行时间
    //offset: new Cesium.HeadingPitchRange(0.0, Cesium.Math.toRadians(-20.0)) // 偏移量
  });
};
onMounted(() => {
  setTimeout(() => {
    init();
  }, 1000);
});
</script>

<style  scoped lang="scss" >
.cesium1box {
  position: relative;
  top: 0;
  left: 0; height: 100%;
}
#cesiumContainer {
  height: 100%;
}

</style>
