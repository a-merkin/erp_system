import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const products = ref([
    {
      name: "Рис",
      price: 70,
      amount: 1000,
      purchaseOrders: 1000,
      expectedArrivals: 1500,
    },
    {
      name: "Картофель",
      price: 30,
      amount: 2000,
      purchaseOrders: 1500,
      expectedArrivals: 1500, // Добавлено новое поле
    },
    {
      name: "Морковь",
      price: 20,
      amount: 1500,
      purchaseOrders: 1000,
      expectedArrivals: 1000, // Добавлено новое поле
    },
    {
      name: "Лук",
      price: 15,
      amount: 1000,
      purchaseOrders: 800,
      expectedArrivals: 800, // Добавлено новое поле
    },
    {
      name: "Огурцы",
      price: 40,
      amount: 1200,
      purchaseOrders: 900,
      expectedArrivals: 900, // Добавлено новое поле
    },
    {
      name: "Помидоры",
      price: 45,
      amount: 1100,
      purchaseOrders: 850,
      expectedArrivals: 850, // Добавлено новое поле
    },
  ]);

  return { products };
});
