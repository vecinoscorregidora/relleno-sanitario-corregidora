<template>
  <section id="mapa" class="py-12 sm:py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <MapPin class="w-3.5 h-3.5" />
      Ubicación
    </span>
    <h2 class="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-4 max-w-3xl">
      El relleno y las comunidades
    </h2>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-6 leading-relaxed">El relleno sanitario se encuentra en la zona de Praderas de La Loma, en el municipio de Corregidora, a escasos 30 metros de viviendas habitadas.</p>

    <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden h-[350px] sm:h-[450px] relative bg-gray-100 dark:bg-gray-900" ref="mapContainer">
      <div class="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm z-0">
        <div class="text-center">
          <MapIcon class="w-10 h-10 mx-auto mb-2 opacity-50" />
          <p>Mapa interactivo — Praderas de La Loma, Corregidora, Qro.</p>
          <p class="text-xs mt-1">Coordenadas: 20.5161° N, 100.4239° O</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
      <div v-for="(item, i) in markers" :key="i" class="flex items-start gap-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-4 rounded-xl">
        <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold" :class="item.color">
          {{ i + 1 }}
        </div>
        <div>
          <div class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ item.name }}</div>
          <div class="text-xs text-gray-400 dark:text-gray-500">{{ item.detail }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin, MapIcon } from '@lucide/vue'
const markers = [
  { name: 'Praderas de La Loma', detail: 'Comunidad afectada — viviendas a 30 m', color: 'bg-red-500' },
  { name: 'Relleno Sanitario (FSO 3)', detail: 'Confinamiento de residuos en operación', color: 'bg-orange-500' },
  { name: 'CAM El Pueblito', detail: 'Sede de reuniones autoridades-vecinos', color: 'bg-blue-500' },
]
</script>
