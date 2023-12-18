<template>
  <div class="main">
  <div class="cards-wrapper">
    <SalesCard />
    <DeliveryCard />
    <RemainingCard />
    <LastMonthCard />
    <AchievementCard />
  </div>
  <div class="chart-wrapper">
    <SalesChart />
  </div>
  </div>
</template>

<script setup>
import SalesChart from './components/SalesChart.vue'
import SalesCard from './components/SalesCard.vue'
import RemainingCard from './components/RemainingCard.vue'
import LastMonthCard from './components/LastMonthCard.vue'
import DeliveryCard from './components/DeliveryCard.vue'
import AchievementCard from './components/AchievementCard.vue'
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.cards-wrapper {
  display: flex;
  justify-content: space-around;
}
</style>