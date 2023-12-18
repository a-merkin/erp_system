<template>
  <div class="card">
    <div class="icon-wrapper">
      <!-- You can use SVG or an image for the piggy-bank icon -->
    </div>
    <div class="details">
      <div class="label">Прибыль</div>
      <div class="value">1649000 руб</div>
    </div>
  </div>
</template>

<script setup>
// Script setup is a feature of Vue 3 for composition API.
// Your script logic goes here
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  background-color: #333;
  /* Adjust the color to match your card */
  color: white;
  padding: 10px;
  border-radius: 10px;
}

.icon-wrapper {
  background-color: #409eff;
  /* Adjust the icon background color */
  padding: 10px;
  margin-right: 10px;
  border-radius: 50%;
  /* Adjust the size of the icon wrapper as needed */
}

.details {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 12px;
  opacity: 0.7;
  /* Adjust for less opacity to match your card */
}

.value {
  font-size: 24px;
  font-weight: bold;
}</style>
