<template>
  <div class="achievement-card">
    <div class="achievement-header">Достижение</div>
    <div class="achievement-content">
      <div class="achievement-percentage">61%</div>
      <div class="achievement-values">1,649K / 2,713K</div>
      <div class="achievement-bar">
        <div class="achievement-bar-fill" :style="{ width: '61%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Here you can define props if you want to pass dynamic data into the component.
// const props = defineProps({
//   percentage: Number,
//   currentValue: String,
//   goalValue: String
// });
</script>

<style scoped>
.achievement-card {
  background-color: #333;
  color: white;
  border-radius: 10px;
  padding: 16px;
  width: fit-content;
}

.achievement-header {
  font-size: 16px;
  opacity: 0.7;
}

.achievement-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.achievement-percentage {
  font-size: 32px;
  font-weight: bold;
}

.achievement-values {
  font-size: 14px;
  opacity: 0.7;
}

.achievement-bar {
  background-color: #555;
  border-radius: 5px;
  height: 10px;
  width: 100%;
}

.achievement-bar-fill {
  background-color: #409eff;
  border-radius: 5px;
  height: 100%;
  /* The width would be dynamic based on the percentage prop */
  /* width: calc(var(--percentage) * 1%); */
}
</style>
