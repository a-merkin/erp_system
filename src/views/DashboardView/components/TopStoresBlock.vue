<template>
  <div class="card">
    <div class="header">
      <h2>Самые прибыльные заказчики</h2>
    </div>
    <div class="content">
      <div class="bars">
        <div class="bar" v-for="(store, index) in stores" :key="index" :style="{ width: store.percentage + '%' }">
          <span class="label">{{ store.sales }}K</span>
        </div>
      </div>
      <div class="store-names">
        <div class="store-name" v-for="store in stores" :key="store.name">
          {{ store.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const stores = ref([
  { name: "Пятерочка", sales: 217, percentage: 100 },
  { name: 'Магнит', sales: 191, percentage: 90 },
  { name: 'Everyday', sales: 118, percentage: 55 },
  { name: 'Пышка', sales: 79, percentage: 37 },
  { name: 'Баракат', sales: 76, percentage: 35 },
]);
</script>

<style scoped>
.card {
  background: #2d2d2d;
  border-radius: 10px;
  color: white;
  width: 350px;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  margin: auto;
}

.header {
  margin-bottom: 20px;
}

.content {
  display: flex;
  margin-bottom: 20px;
}

.bars {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
}

.bar {
  background-color: #409eff;
  height: 20px;
  margin-bottom: 5px;
  border-radius: 5px;
  position: relative;
}

.label {
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  background: #222;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 12px;
}

.store-names {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
}

.store-name {
  margin-bottom: 5px;
  font-size: 14px;
}

.axis {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>
