<template>
  <section id="cronologia">
    <span class="text-xs font-bold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500">Cronología</span>
    <h2 class="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight mt-2 mb-6 text-gray-900 dark:text-gray-100">Línea de tiempo del caso</h2>

    <div class="relative pl-10 before:content-[''] before:absolute before:left-[11px] before:top-1 before:bottom-0 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-700">
      <div v-for="(e, i) in events" :key="i" class="relative mb-8 pl-4 before:content-[''] before:absolute before:-left-[34px] before:top-[6px] before:w-[14px] before:h-[14px] before:rounded-full before:border-2 before:border-amber-600 dark:before:border-amber-500" :class="isDark ? 'before:bg-surface' : 'before:bg-white'">
        <div class="text-xs font-bold tracking-wider uppercase text-amber-600 dark:text-amber-500 mb-1">{{ e.date }}</div>
        <h3 class="font-display text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{{ e.title }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-lg">{{ e.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useDark } from '@vueuse/core'
const isDark = useDark()
const events = [
  { date: 'Abr 2019', title: 'Constitución de FSO 3 SA de CV', desc: 'Se constituye en Querétaro con objeto social de servicios de agua. Capital: $60,000. Socios: Urquiza, Cofiño, García Ibarra (33.3% c/u).' },
  { date: 'Feb 2024', title: 'Incendio en relleno "El Paraíso"', desc: 'Incendio de casi dos semanas consume el relleno que operaba desde 2007. El municipio anuncia que no renovará la concesión.' },
  { date: '4 Mar 2024', title: 'Cambio de socios en FSO 3', desc: 'García Ibarra y Cofiño venden todas sus acciones. Entra Kikey Velasco Merino (50%). Urquiza queda como Administrador Único.' },
  { date: '12 Mar 2024', title: 'Giro total: de agua a basura', desc: 'FSO 3 modifica su objeto social a residuos peligrosos y no peligrosos. Aumenta capital de $60K a $10M.' },
  { date: 'Ene 2025', title: 'Gaceta Municipal: contratos millonarios', desc: 'Se publican licitaciones por cientos de millones de pesos en el municipio de Corregidora.' },
  { date: 'Feb 2026', title: 'Municipio proyecta su propio relleno', desc: 'Josué Guerrero Trápala anuncia plan para construir relleno sanitario municipal. En evaluación técnica.' },
  { date: 'Abr 2026', title: 'Estallido del conflicto social', desc: 'Vecinos de Praderas de La Loma denuncian olores y plagas. El relleno está a 30 metros de viviendas. La empresa presenta denuncias penales.' },
  { date: 'May 2026', title: '150 toneladas diarias a Querétaro', desc: 'Por el conflicto, Corregidora desvía 150 t/día de residuos al relleno de Mompaní. Esperan resolución legal.' },
]
</script>
