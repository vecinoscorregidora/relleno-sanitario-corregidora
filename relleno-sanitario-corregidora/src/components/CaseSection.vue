<template>
  <section id="caso" class="py-12 sm:py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <FileText class="w-3.5 h-3.5" />
      El Caso
    </span>
    <h2 class="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-6 max-w-3xl">
      Un basurero a <span class="text-blue-700 dark:text-blue-400">30 metros</span> de las casas
    </h2>
    <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mb-6 leading-relaxed">
      En la comunidad de <strong class="text-gray-800 dark:text-gray-200 font-semibold">Praderas de La Loma</strong>, en el municipio de Corregidora, un relleno sanitario privado opera a escasos 30 metros de viviendas habitadas por familias de escasos recursos. Los vecinos denuncian olores fétidos, plagas y riesgos graves a la salud. El gobierno municipal y estatal sostienen que todo es legal.
    </p>
    <p class="text-gray-500 dark:text-gray-400 max-w-3xl mb-6">
      El caso revela una trama de transformación empresarial: en 2024, la empresa <strong class="text-gray-800 dark:text-gray-200 font-semibold">FSO 3 SA de CV</strong> pasó de ser una compañía de servicios de agua a una dedicada al <strong class="text-gray-800 dark:text-gray-200 font-semibold">confinamiento de residuos peligrosos y no peligrosos</strong>, con un aumento de capital de $60,000 a $10,000,000 de pesos, y la entrada de una nueva socia, <strong class="text-gray-800 dark:text-gray-200 font-semibold">Kikey Velasco Merino</strong>, abogada avecindada en el mismo municipio.
    </p>

    <div class="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 px-5 py-4 max-w-3xl">
      <div class="flex items-start gap-3">
        <AlertTriangle class="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
        <div>
          <h4 class="font-bold text-orange-700 dark:text-orange-400 text-sm mb-1">Dato crítico</h4>
          <p class="text-sm text-orange-800 dark:text-orange-200/80 leading-relaxed">El relleno sanitario tiene autorización federal vigente (NOM-083) y permiso de impacto ambiental por 5 años, pero colinda con viviendas irregulares cuyos habitantes no tienen escrituras ni servicios formales. El municipio los califica de "asentamientos irregulares".</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FileText, AlertTriangle } from '@lucide/vue'
</script>
