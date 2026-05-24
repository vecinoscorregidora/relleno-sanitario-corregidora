<script setup>
import { useDark } from '@vueuse/core'
import { ArrowDown } from '@lucide/vue'
const isDark = useDark()
</script>

<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-28 pb-16 overflow-hidden bg-gray-50 dark:bg-gray-950">
    <!-- Background pattern -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style="background-image: radial-gradient(circle at 25px 25px, currentColor 1.5px, transparent 1.5px); background-size: 50px 50px;"></div>
    <div class="absolute inset-0 pointer-events-none" :class="isDark ? 'opacity-30' : 'opacity-10'"
      style="background: radial-gradient(ellipse 70% 50% at 50% 30%, oklch(0.55 0.15 260 / 0.12) 0%, transparent 70%);">
    </div>

    <div class="relative z-10 max-w-4xl mx-auto">
      <div class="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[0.65rem] font-bold tracking-[0.2em] uppercase px-4 py-2 mb-8">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
        Investigación Especial
      </div>

      <h1 class="font-display text-[clamp(2.8rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-gray-900 dark:text-gray-50 mb-4">
        El relleno <span class="text-blue-700 dark:text-blue-400 italic">de nadie</span>
      </h1>

      <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
        Cómo un basurero privado se instaló en medio de comunidades rurales de Corregidora, Querétaro, y quiénes están detrás del negocio.
      </p>

      <div class="flex flex-wrap gap-3 justify-center">
        <a href="#cronologia" class="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-6 py-3 rounded-lg transition-all duration-200">
          Ver cronología
          <ArrowDown class="w-4 h-4" />
        </a>
        <a href="#fuentes" class="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 text-sm font-bold px-6 py-3 rounded-lg transition-all duration-200">
          Documentos
        </a>
      </div>

      <div class="mt-12 flex gap-6 flex-wrap justify-center text-[0.65rem] font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
        <span>24 de mayo, 2026</span>
        <span class="w-px h-3 bg-gray-300 dark:bg-gray-700"></span>
        <span>Investigación de interés público</span>
      </div>
    </div>
  </section>
</template>
