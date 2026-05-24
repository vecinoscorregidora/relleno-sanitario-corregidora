<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon } from '@lucide/vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const items = Object.entries({ caso: 'El Caso', cronologia: 'Cronología', empresa: 'FSO 3', actores: 'Actores', preguntas: 'Preguntas', fuentes: 'Fuentes' }).map(([id, label]) => ({ id, label }))
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 border-b h-14 flex items-center bg-white/95 dark:bg-gray-950/95 border-gray-200 dark:border-gray-800 backdrop-blur-md" role="navigation" aria-label="Navegación principal">
    <div class="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 w-full flex items-center justify-between">
      <a href="#" class="text-xs font-bold tracking-[0.15em] uppercase text-blue-700 dark:text-blue-400">Investigación</a>
      <div class="flex items-center gap-1 sm:gap-2">
        <a v-for="item in items" :key="item.id"
           :href="`#${item.id}`"
           class="hidden sm:inline-block px-3 py-1.5 text-[0.7rem] font-bold tracking-widest uppercase rounded transition-colors"
           :class="isDark ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800/50' : 'text-gray-500 hover:text-blue-700 hover:bg-gray-100'">
          {{ item.label }}
        </a>
        <button @click="toggleDark()" class="p-2 rounded-lg transition-colors" :class="isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-blue-400' : 'hover:bg-gray-100 text-gray-500 hover:text-blue-700'" aria-label="Cambiar modo claro/oscuro">
          <Sun v-if="isDark" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </button>
      </div>
    </div>
  </nav>
</template>
