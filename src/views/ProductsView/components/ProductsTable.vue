<template>
  <el-table :data="products" style="width: 100%">
    <el-table-column prop="name" label="Имя" />
    <el-table-column prop="price" label="Цена" />
    <el-table-column prop="amount" label="Кол-во товара на складе" />
    <el-table-column label="Кол-во товара в доставке">
      <template #default="scope">
        <div style="display: flex; gap: 10px; align-items: center">
          <el-icon><Van /></el-icon>
          <span>{{ scope.row.expectedArrivals }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="purchaseOrders"
      label="Кол-во доставленного товара"
    />
    <el-table-column label="Операции" width="500">
      <template #default="scope">
        <el-button
          size="small"
          type="success"
          @click="handleEdit(scope.$index, scope.row)"
          >Заявка на продажу</el-button
        >
        <el-button
          size="small"
          type="warning"
          @click="handleBuy(scope.row.name)"
          >Заявка на покупку</el-button
        >
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Изменить</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Удалить</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { useProductsStore } from "@/store/products.js";
import { Van } from "@element-plus/icons-vue";
import { useModal } from 'vue-final-modal'
import ModalProductBuy from '@/components/ModalProductBuy.vue'

const { products } = useProductsStore();

const handleBuy = () => {
  const {open} = useModal({
    component: ModalProductBuy
  })
  open()
}
</script>

<style lang="scss" scoped></style>
