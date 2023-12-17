import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSellersStore = defineStore('sellers', () => {
  const sellers = ref([
    {
        name: "Алексей Смирнов",
        salesTarget: 1200000,
        salesAchieved: 800000,
        performanceRating: 4.2
    },
    {
        name: "Мария Иванова",
        salesTarget: 1500000,
        salesAchieved: 1300000,
        performanceRating: 4.7
    },
    {
        name: "Иван Петров",
        salesTarget: 1000000,
        salesAchieved: 950000,
        performanceRating: 4.5
    },
    {
        name: "Елена Кузнецова",
        salesTarget: 1100000,
        salesAchieved: 1050000,
        performanceRating: 4.6
    },
    {
        name: "Сергей Новиков",
        salesTarget: 900000,
        salesAchieved: 850000,
        performanceRating: 4.3
    }
  ])

  return { sellers }
})
