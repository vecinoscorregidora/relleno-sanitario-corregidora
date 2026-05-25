<template>
  <div class="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <Search class="w-3.5 h-3.5" />
      Líneas de Investigación
    </span>
    <h1 class="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-4 max-w-3xl">
      Preguntas que siguen abiertas
    </h1>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-8 leading-relaxed">Esta investigación documenta lo que está a la vista. Pero hay preguntas que requieren más indagación a través de solicitudes de transparencia, búsqueda en registros públicos y denuncias ciudadanas.</p>

    <div class="space-y-3 mb-8">
      <div v-for="(q, i) in questions" :key="i" class="flex gap-4 border border-gray-200 dark:border-gray-800 p-5 rounded-xl items-start bg-gray-50/50 dark:bg-gray-900/30 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
        <span class="font-display text-xl font-bold text-blue-700 dark:text-blue-400 leading-none shrink-0 w-8">{{ String(i + 1).padStart(2, '0') }}</span>
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">{{ q.q }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ q.detail }}</p>
          <span class="inline-block mt-2 text-[0.6rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded" :class="q.priority === 'Alta' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'">
            Prioridad {{ q.priority }}
          </span>
        </div>
      </div>
    </div>

    <div class="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 px-5 py-4 max-w-3xl">
      <div class="flex items-start gap-3">
        <HelpCircle class="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <div>
          <h4 class="font-bold text-blue-700 dark:text-blue-400 text-sm mb-1">¿Cómo ayudar?</h4>
          <p class="text-sm text-blue-800 dark:text-blue-200/80 leading-relaxed">Si tienes información sobre alguna de estas líneas, puedes compartirla a través de los mecanismos de transparencia del municipio de Corregidora o la Procuraduría Ambiental del Estado de Querétaro.</p>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <router-link to="/" class="text-blue-700 dark:text-blue-400 hover:underline text-sm font-medium">← Volver al inicio</router-link>
    </div>
  </div>
</template>

<script setup>
import { Search, HelpCircle } from '@lucide/vue'
import { onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta.js'
onMounted(() => usePageMeta({
  title: 'Preguntas abiertas — Investigación relleno sanitario Corregidora',
  description: '8 líneas de investigación abiertas sobre el relleno sanitario de Corregidora: cambio de uso de suelo, concesión municipal, impacto ambiental y más.',
  og: { title: 'Preguntas abiertas — Relleno sanitario Corregidora', description: '8 preguntas que siguen sin respuesta sobre el relleno sanitario de Corregidora.', url: 'https://vecinoscorregidora.github.io/relleno-sanitario-corregidora/preguntas' },
  canonical: 'https://vecinoscorregidora.github.io/relleno-sanitario-corregidora/preguntas'
}))
const questions = [
  { q: '¿Quién autorizó el cambio de uso de suelo?', detail: 'El terreno donde opera el relleno requería autorización de cambio de uso de suelo. ¿Qué dependencia lo aprobó y con base en qué estudios? ¿Hay dictamen del COERET?', priority: 'Alta' },
  { q: '¿Hay relación entre la llegada de Kikey Velasco y la concesión?', detail: 'Kikey Velasco Merino entró a FSO 3 el 4 de marzo de 2024. Ocho días después, la empresa cambió su objeto social a residuos y aumentó su capital 166 veces. ¿Sabía ya de la oportunidad de negocio?', priority: 'Alta' },
  { q: '¿Quién otorgó la concesión municipal?', detail: 'El relleno es privado pero requiere autorización municipal. ¿Hubo un proceso de licitación pública? ¿Quién firmó la concesión, cuándo se aprobó en Cabildo y cuáles fueron sus términos?', priority: 'Alta' },
  { q: '¿Qué vínculo hay entre Urquiza Escobar y el gobierno municipal?', detail: 'José Rodrigo Urquiza tiene negocios en agua, desarrollo inmobiliario y clubes privados en la zona. ¿Ha tenido contratos previos con el municipio de Corregidora? ¿Hay familiares en la administración?', priority: 'Alta' },
  { q: '¿La Manifestación de Impacto Ambiental consideró a las comunidades?', detail: 'La MIA fue otorgada por SEDESU con vigencia de 5 años. ¿Incluyó consulta pública con las comunidades aledañas? ¿Consideró la cercanía a viviendas (30 m)? ¿Se puede consultar públicamente?', priority: 'Alta' },
  { q: '¿Hay conflicto de interés en la procuración ambiental?', detail: 'La Procuraduría Ambiental del Estado dice no haber recibido denuncias formales a pesar de la amplia cobertura mediática del conflicto. ¿Hay omisión o existe un filtro institucional que desincentiva las denuncias?', priority: 'Media' },
  { q: '¿El relleno recibe solo residuos sólidos urbanos?', detail: 'El objeto social de FSO 3 incluye explícitamente "residuos peligrosos". La autoridad dice que solo maneja RSU. ¿Hay mecanismos de verificación y monitoreo independiente?', priority: 'Media' },
  { q: '¿Qué pasó con los contratos de la Gaceta Municipal 2025?', detail: 'La Gaceta publica licitaciones por cientos de millones de pesos. ¿Alguna de las empresas contratadas tiene vínculo con FSO 3, José Rodrigo Urquiza o Kikey Velasco?', priority: 'Media' },
]
</script>
