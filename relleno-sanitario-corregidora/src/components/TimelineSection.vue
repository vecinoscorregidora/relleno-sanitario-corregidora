<template>
  <section id="cronologia" class="py-12 sm:py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <Clock class="w-3.5 h-3.5" />
      Cronología
    </span>
    <h2 class="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-8 max-w-3xl">
      Línea de tiempo del caso
    </h2>

    <div class="relative pl-10 before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-0 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-800">
      <div v-for="(e, i) in events" :key="i" class="relative mb-10 pl-5 before:content-[''] before:absolute before:-left-[25px] before:top-[6px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-blue-700 dark:before:bg-blue-400 before:ring-2 before:ring-white dark:before:ring-gray-950">
        <div class="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-blue-700 dark:text-blue-400 mb-1">{{ e.date }}</div>
        <h3 class="font-display text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{{ e.title }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">{{ e.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Clock } from '@lucide/vue'
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
