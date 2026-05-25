<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { Sun, Moon } from '@lucide/vue'

const route = useRoute()
const isDark = useDark()
const toggleDark = useToggle(isDark)

const items = [
  { path: '/', label: 'Inicio' },
  { path: '/cronologia', label: 'Cronología' },
  { path: '/empresa', label: 'FSO 3' },
  { path: '/actores', label: 'Actores' },
  { path: '/comunidades', label: 'Comunidades' },
  { path: '/requisitos', label: 'Requisitos' },
  { path: '/preguntas', label: 'Preguntas' },
  { path: '/fuentes', label: 'Fuentes' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 border-b h-14 flex items-center bg-white/95 dark:bg-gray-950/95 border-gray-200 dark:border-gray-800 backdrop-blur-md overflow-x-auto" role="navigation" aria-label="Navegación principal">
    <div class="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 w-full flex items-center justify-between min-w-0">
      <router-link to="/" class="text-xs font-bold tracking-[0.15em] uppercase text-blue-700 dark:text-blue-400 shrink-0">Investigación</router-link>
      <div class="flex items-center gap-0.5 sm:gap-1 overflow-x-auto">
        <router-link v-for="item in items" :key="item.path"
           :to="item.path"
           class="whitespace-nowrap px-2 py-1.5 text-[0.6rem] sm:text-[0.65rem] font-bold tracking-widest uppercase rounded transition-colors"
           :class="route.path === item.path
             ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
             : isDark ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800/50' : 'text-gray-500 hover:text-blue-700 hover:bg-gray-100'">
          {{ item.label }}
        </router-link>
        <button @click="toggleDark()" class="p-2 rounded-lg transition-colors ml-0.5 shrink-0" :class="isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-blue-400' : 'hover:bg-gray-100 text-gray-500 hover:text-blue-700'" aria-label="Cambiar modo claro/oscuro">
          <Sun v-if="isDark" class="w-3.5 h-3.5" />
          <Moon v-else class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </nav>
</template>
