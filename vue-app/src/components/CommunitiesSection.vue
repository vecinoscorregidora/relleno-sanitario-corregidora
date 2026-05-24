<template>
  <section id="comunidades">
    <span class="text-xs font-bold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500">Las Comunidades</span>
    <h2 class="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight mt-2 mb-4 text-gray-900 dark:text-gray-100">Los que pagan el costo</h2>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-6 leading-relaxed">Praderas de La Loma y comunidades aledañas son áreas rurales de bajos recursos. El relleno se ubicó a 30 metros de viviendas. Las autoridades llaman "asentamientos irregulares" a las casas de los vecinos afectados.</p>

    <div class="alert alert-warning border-l-4 border-amber-600 dark:border-amber-500 rounded-none bg-amber-50 dark:bg-amber-900/20 text-gray-700 dark:text-gray-300 mb-6">
      <h4 class="font-bold text-amber-700 dark:text-amber-400 mb-1">Contradicción clave</h4>
      <p class="text-sm">Mientras el municipio califica las viviendas como "irregulares", el mismo municipio autorizó que un confinamiento de residuos opere junto a esas viviendas. La NOM-083 exige distancias mínimas de seguridad.</p>
    </div>

    <p class="font-medium text-gray-900 dark:text-gray-100 mb-3">Los vecinos reportan:</p>
    <ul class="space-y-2">
      <li v-for="r in reports" :key="r" class="text-sm text-gray-600 dark:text-gray-300 pb-2 border-b border-gray-200 dark:border-gray-700">
        <span class="text-amber-600 dark:text-amber-500 mr-2">—</span>{{ r }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const reports = [
  'Olores fétidos constantes que impiden la vida normal',
  'Proliferación de plagas (moscas, roedores)',
  'Riesgos a la salud, especialmente en niños y adultos mayores',
  'Bloqueos de unidades respondidos con denuncias penales por la empresa',
  'Nula participación en la decisión de instalar el relleno en su zona',
]
</script>
