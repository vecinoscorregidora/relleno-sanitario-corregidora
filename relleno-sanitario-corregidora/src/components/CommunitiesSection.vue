<template>
  <section id="comunidades" class="py-12 sm:py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <Heart class="w-3.5 h-3.5" />
      Las Comunidades
    </span>
    <h2 class="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-4 max-w-3xl">
      Los que pagan el costo
    </h2>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-6 leading-relaxed">Praderas de La Loma y comunidades aledañas son áreas rurales de bajos recursos. El relleno se ubicó a 30 metros de viviendas. Las autoridades llaman "asentamientos irregulares" a las casas de los vecinos afectados.</p>

    <div class="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 px-5 py-4 max-w-3xl mb-8">
      <div class="flex items-start gap-3">
        <AlertTriangle class="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
        <div>
          <h4 class="font-bold text-orange-700 dark:text-orange-400 text-sm mb-1">Contradicción clave</h4>
          <p class="text-sm text-orange-800 dark:text-orange-200/80 leading-relaxed">Mientras el municipio califica las viviendas como "irregulares", el mismo municipio autorizó que un confinamiento de residuos opere junto a esas viviendas. La NOM-083 exige distancias mínimas de seguridad.</p>
        </div>
      </div>
    </div>

    <p class="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
      <ListChecks class="w-4 h-4 text-blue-600 dark:text-blue-400" />
      Los vecinos reportan:
    </p>
    <ul class="space-y-2 max-w-2xl">
      <li v-for="r in reports" :key="r" class="text-sm text-gray-600 dark:text-gray-300 pb-2 border-b border-gray-100 dark:border-gray-800 flex items-start gap-3">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0"></span>
        {{ r }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { Heart, AlertTriangle, ListChecks } from '@lucide/vue'
const reports = [
  'Olores fétidos constantes que impiden la vida normal',
  'Proliferación de plagas (moscas, roedores)',
  'Riesgos a la salud, especialmente en niños y adultos mayores',
  'Bloqueos de unidades respondidos con denuncias penales por la empresa',
  'Nula participación en la decisión de instalar el relleno en su zona',
]
</script>
