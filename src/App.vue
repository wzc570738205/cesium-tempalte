<template>
     <div class="w100 h100"  v-loading="false">
        <RouterView  />
     </div>
</template>

<script setup lang="ts">
import { handleError } from "vue-demi";
</script>

<style>
html{
    --color-primary:"#C48"
}
.el-menu-item.is-active {
  color: #fff;
  background-color: var(--color-primary) !important;
}
</style>
