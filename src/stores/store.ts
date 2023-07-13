import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { SolarSystem } from '@/models/SolarSystem'

export const useStore = defineStore('store', () => {
  const solarSytems = ref([new SolarSystem(0, 0)])

  return { solarSytems }
})
 