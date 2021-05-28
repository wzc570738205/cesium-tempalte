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

</style>
