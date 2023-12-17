<template>
  <el-table :data="sellers" style="width: 100%">
    <el-table-column prop="name" label="Имя" />
    <el-table-column prop="salesTarget" label="Цели продаж" />
    <el-table-column prop="salesAchieved" label="Достигнутые объемы продаж" />
    <el-table-column prop="performanceRating" label="Рейтинг" />
  </el-table>
</template>

<script setup>
import { useSellersStore } from '@/store/sellers.js'

const { sellers } = useSellersStore()
</script>

<style lang="scss" scoped>

</style>