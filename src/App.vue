<template>
   <RouterView />
</template>

<script setup>
import { defineComponent} from 'vue'
import HelloWorld from '/@/components/HelloWorld.vue'
import {useGoPage} from '/@/hooks/route'
function goTest() {
  useGoPage("/btn")
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
