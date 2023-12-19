<script setup>
import { VueFinalModal } from "vue-final-modal";
import {ref} from 'vue'

const options = [
  {
    value: 'Option1',
    label: 'ООО "ВИШНЯ"',
  },
  {
    value: 'Option2',
    label: 'ООО "7 ФРУКТОВ"',
  },
  {
    value: 'Option3',
    label: 'ИП Гриднев А.Ю.',
  },
  {
    value: 'Option4',
    label: 'ООО "НАТУР АГРО"',
  },
  {
    value: 'Option5',
    label: 'ИП. Азизова Р.М',
  },
  {
    value: 'Option7',
    label: 'Не выбрано',
    default: true,
  },
]

const value = ref({})
</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
    @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <div class="modal-container">
      <div class="modal">
        <h1 class="text-xl">Покупка продукта "Рис"</h1>
        <el-form>
          <el-form-item label="Поставщик">
            <el-select v-model="value" placeholder="">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Количество">
            <el-input type="number"></el-input>
          </el-form-item>
        </el-form>
        <el-button
          class="mt-1 ml-auto px-2 border rounded-lg"
          @click="emit('confirm')"
          type="primary"
        >
          Отправить заявку на поставку
        </el-button>
      </div>
    </div>
  </VueFinalModal>
</template>

<style scoped>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
}

h1 {
  margin-bottom: 20px;
}
</style>
