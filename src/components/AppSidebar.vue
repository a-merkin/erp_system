<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      style="height: 100%"
    >
      <el-menu-item index="dashboard">
        <el-icon><icon-menu /></el-icon>
        <template #title>Статистика</template>
      </el-menu-item>
      <el-menu-item index="products">
        <el-icon><document /></el-icon>
        <template #title>Товары</template>
      </el-menu-item>
      <el-menu-item index="sellers">
        <el-icon><setting /></el-icon>
        <template #title>Продавцы</template>
      </el-menu-item>
    </el-menu>
</template>

<script setup>
import router from '@/router';

const handleSelect = (item) => {
  router.push(item)
}
</script>

<style lang="scss" scoped>

</style>