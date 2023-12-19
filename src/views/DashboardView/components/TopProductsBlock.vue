<template>
  <div class="card">
    <div class="header">
      <h2>Поставки</h2>
    </div>
    <div class="categories">
      <div class="category" v-for="item in categories" :key="item.name">
        <span class="name">{{ item.name }}</span>
        <div class="progress-bar">
          <div class="progress" :style="{ width: item.achieved / item.total * 100 + '%' }"></div>
        </div>
        <span class="values">{{ item.achieved }}K / {{ item.total }}K</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Here you would import your icons
// import riceIcon from './path-to-icons/rice-icon.svg';
// Repeat for each icon

const categories = ref([
  { name: 'Rice', achieved: 994, total: 1754, icon: 'path-to-rice-icon.svg' },
  { name: 'Vegetables', achieved: 164, total: 570, icon: 'path-to-vegetable-icon.svg' },
  { name: 'Biscuits', achieved: 223, total: 373, icon: 'path-to-biscuit-icon.svg' },
  { name: 'Juice', achieved: 118, total: 167, icon: 'path-to-juice-icon.svg' }
]);

// You can also import and use real icons if you have them.
</script>

<style scoped>
.card {
  background: #333;
  border-radius: 10px;
  padding: 20px;
  color: white;
  width: 500px;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h2 {
  margin: 0;
}

.select-all {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}

.categories {
  display: flex;
  flex-direction: column;
}

.category {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.name {
  flex-grow: 1;
}

.progress-bar {
  background: #555;
  flex-grow: 2;
  height: 10px;
  border-radius: 5px;
  margin: 0 10px;
}

.progress {
  background: orange;
  height: 100%;
  border-radius: 5px;
}

.values {
  white-space: nowrap;
}
</style>
