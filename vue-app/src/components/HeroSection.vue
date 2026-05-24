<template>
  <section
    class="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-28 pb-20 overflow-hidden"
    :class="isDark ? 'bg-surface' : 'bg-surface'"
  >
    <div class="absolute inset-0 pointer-events-none" :class="isDark ? 'opacity-40' : 'opacity-20'"
      style="background: radial-gradient(ellipse 80% 60% at 50% 30%, oklch(0.65 0.16 50 / 0.12) 0%, transparent 70%),
             radial-gradient(ellipse 60% 50% at 30% 70%, oklch(0.5 0.1 140 / 0.08) 0%, transparent 60%)">
    </div>
    <div class="badge badge-warning badge-lg font-bold tracking-widest mb-6 text-xs border-0">Investigación Especial</div>
    <h1 class="font-display text-[clamp(2.5rem,7vw,5rem)] font-black leading-[1.1] max-w-4xl mb-3" :class="isDark ? 'text-gray-100' : 'text-gray-900'">
      El relleno <em class="italic not-italic" :class="isDark ? 'text-amber-500' : 'text-amber-600'">de nadie</em>
    </h1>
    <p class="text-[clamp(1rem,2vw,1.25rem)] max-w-xl leading-relaxed" :class="isDark ? 'text-gray-400' : 'text-gray-500'">
      Cómo un basurero privado se instaló en medio de comunidades rurales de Corregidora, Querétaro, y quiénes están detrás del negocio.
    </p>
    <div class="mt-8 flex gap-6 flex-wrap justify-center text-xs" :class="isDark ? 'text-gray-500' : 'text-gray-400'">
      <span>24 de mayo, 2026</span>
      <span>Investigación de interés público</span>
    </div>
  </section>
</template>

<script setup>
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>
