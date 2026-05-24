<template>
  <section id="preguntas">
    <span class="text-xs font-bold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500">Líneas de Investigación</span>
    <h2 class="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight mt-2 mb-4 text-gray-900 dark:text-gray-100">Preguntas que siguen abiertas</h2>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">Esta investigación documenta lo que está a la vista. Pero hay preguntas que requieren más indagación:</p>

    <div class="space-y-3">
      <div v-for="(q, i) in questions" :key="i" class="flex gap-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5 rounded-box items-start">
        <span class="font-display text-xl font-black text-amber-600 dark:text-amber-500 leading-none shrink-0">{{ String(i + 1).padStart(2, '0') }}</span>
        <p class="text-sm text-gray-500 dark:text-gray-400"><strong class="block text-gray-900 dark:text-gray-100 font-medium mb-1">{{ q.q }}</strong>{{ q.detail }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
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
