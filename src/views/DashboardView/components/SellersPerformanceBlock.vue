<template>
  <div class="performance-card">
    <header>
      <h2>Производительность торговых агентов</h2>
    </header>
    <section class="salesman-profiles">
      <div class="profile" v-for="salesman in sellersList" :key="salesman.name">
        <div class="avatar"></div>
        <div class="name">{{ salesman.name }}</div>
      </div>
    </section>
    <section class="sales-data">
      <table>
        <thead>
          <tr>
            <th>Продавец</th>
            <th>Прибыль</th>
            <th>Цель</th>
            <th>Цель достигнута(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in sellersList" :key="data.salesman">
            <td>{{ data.name }}</td>
            <td>{{ data.salesAchieved }}</td>
            <td>{{ data.salesTarget }}</td>
            <td style="text-align: center;">{{ data.achievedPercent }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sellersList = ref([
  {
    name: "Мария Иванова",
    salesTarget: 1500000,
    salesAchieved: 1000000,
    performanceRating: 4.7,
    get achievedPercent() {
      const percent = this.salesAchieved / this.salesTarget * 100
      return percent.toFixed()
    }
  },
  {
    name: "Иван Петров",
    salesTarget: 1000000,
    salesAchieved: 950000,
    performanceRating: 4.5,
    get achievedPercent() {
      const percent = this.salesAchieved / this.salesTarget * 100
      return percent.toFixed()
    }
  },
  {
    name: "Елена Кузнецова",
    salesTarget: 1100000,
    salesAchieved: 1000000,
    performanceRating: 4.6,
    get achievedPercent() {
      const percent = this.salesAchieved / this.salesTarget * 100
      return percent.toFixed()
    }
  },
]);

// Add the logic for your component here
</script>

<style scoped>
.performance-card {
  background: #2d2d2d;
  border-radius: 20px;
  color: white;
  padding: 20px;
  max-width: 700px;
  margin: auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.salesman-profiles {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile .avatar {
  border-radius: 50%;
  background-size: cover;
  width: 60px;
  height: 60px;
  border: 2px solid white;
}

.sales-data table {
  width: 100%;
  text-align: left;
}

.sales-data th {
  padding-bottom: 10px;
}

.sales-data td {
  padding: 10px 0;
}

.arrow-button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}
</style>
