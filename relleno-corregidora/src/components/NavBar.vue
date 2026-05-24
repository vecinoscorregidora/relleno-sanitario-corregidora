<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 border-b"
    :class="isDark ? 'bg-[oklch(0.15_0.01_80)]/90 border-[oklch(0.25_0.01_80)]' : 'bg-white/90 border-gray-200'"
    style="backdrop-filter: blur(12px)"
  >
    <div class="flex items-center justify-between max-w-5xl mx-auto px-4 sm:px-8 h-14">
      <a href="#" class="text-xs font-bold tracking-widest uppercase" :class="isDark ? 'text-amber-500' : 'text-amber-600'">Investigación</a>
      <div class="flex items-center gap-4 sm:gap-6">
        <a v-for="item in ['caso','cronologia','empresa','actores','preguntas','fuentes']" :key="item"
           :href="`#${item}`"
           class="text-[0.7rem] font-medium tracking-widest uppercase hidden sm:block transition-colors"
           :class="isDark ? 'text-gray-400 hover:text-amber-500' : 'text-gray-500 hover:text-amber-600'">
          {{ item }}
        </a>
        <button @click="toggleDark()" class="btn btn-ghost btn-sm">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
      </div>
    </div>
  </nav>
</template>
