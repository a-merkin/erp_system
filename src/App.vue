<script setup>
import { RouterView } from 'vue-router'
import AppSidebar from '@/components/AppSidebar.vue'
import { ModalsContainer } from 'vue-final-modal'

</script>

<template>
  <el-container style="height: 100%">
    <el-aside width="200px">
      <AppSidebar />
    </el-aside>
    <el-main style="width: 100%">
      <RouterView />
    </el-main>
  </el-container>
  <ModalsContainer />
</template>

<style scoped>

</style>
