<template>

      <RouterView  />

  
</template>

<script setup lang="ts">

// store
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
