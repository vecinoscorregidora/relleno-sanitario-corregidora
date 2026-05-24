<template>
  <section id="preguntas" class="py-12 sm:py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <Search class="w-3.5 h-3.5" />
      Líneas de Investigación
    </span>
    <h2 class="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-4 max-w-3xl">
      Preguntas que siguen abiertas
    </h2>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-8 leading-relaxed">Esta investigación documenta lo que está a la vista. Pero hay preguntas que requieren más indagación:</p>

    <div class="space-y-3">
      <div v-for="(q, i) in questions" :key="i" class="flex gap-4 border border-gray-200 dark:border-gray-800 p-5 rounded-xl items-start bg-gray-50/50 dark:bg-gray-900/30 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
        <span class="font-display text-xl font-bold text-blue-700 dark:text-blue-400 leading-none shrink-0 w-8">{{ String(i + 1).padStart(2, '0') }}</span>
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">{{ q.q }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ q.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Search } from '@lucide/vue'
const questions = [
  { q: '¿Quién autorizó el cambio de uso de suelo?', detail: 'El terreno requería autorización de cambio de uso de suelo. ¿Qué dependencia lo aprobó y con base en qué estudios?' },
  { q: '¿Hay relación entre la llegada de Kikey Velasco y la concesión?', detail: 'Entró a FSO 3 el 4 mar 2024. Ocho días después, la empresa cambió su objeto a residuos. ¿Sabía ya de la oportunidad de negocio?' },
  { q: '¿Quién otorgó la concesión municipal?', detail: 'El relleno requiere autorización municipal. ¿Hubo licitación? ¿Quién firmó y cuáles fueron sus términos?' },
  { q: '¿Qué vínculo hay entre Urquiza y el gobierno municipal?', detail: 'Tiene negocios en agua, desarrollo inmobiliario y clubes privados. ¿Ha tenido contratos previos con Corregidora?' },
  { q: '¿La MIA consideró a las comunidades?', detail: 'La Manifestación de Impacto Ambiental fue otorgada por 5 años. ¿Incluyó consulta pública? ¿Consideró la cercanía a viviendas?' },
  { q: '¿Hay conflicto de interés en procuración ambiental?', detail: 'La Procuraduría dice no haber recibido denuncias formales pese a cobertura mediática. ¿Omisión o filtro institucional?' },
  { q: '¿El relleno recibe solo residuos urbanos?', detail: 'El objeto social de FSO 3 incluye residuos peligrosos. La autoridad dice que solo maneja RSU. ¿Hay verificación?' },
  { q: '¿Qué pasó con los contratos de la Gaceta Municipal 2025?', detail: 'Contratos por cientos de millones de pesos. ¿Alguna empresa tiene vínculo con FSO 3, Urquiza o Velasco?' },
]
</script>
