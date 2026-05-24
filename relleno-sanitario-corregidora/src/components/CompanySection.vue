<template>
  <section id="empresa">
    <span class="text-xs font-bold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500">La Empresa</span>
    <h2 class="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight mt-2 mb-4 text-gray-900 dark:text-gray-100">FSO 3 SA de CV: la transformación</h2>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">En cuestión de días, una empresa de agua se convirtió en una de residuos. Los documentos del Registro Público de Comercio muestran un cambio quirúrgico justo cuando el mercado de disposición de residuos en Corregidora se abrió tras el cierre de El Paraíso.</p>

    <div class="flex gap-4 flex-wrap mb-8">
      <div v-for="d in dataPoints" :key="d.label" class="flex-1 min-w-[120px] bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5 text-center rounded-box">
        <div class="font-display text-3xl font-black text-amber-600 dark:text-amber-500 leading-none">{{ d.num }}</div>
        <div class="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400 mt-1">{{ d.label }}</div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div class="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-6 rounded-box relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-amber-600 dark:before:bg-amber-500">
        <h4 class="text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-amber-500 mb-2">Objeto social original (2019)</h4>
        <ul class="space-y-2">
          <li v-for="item in original" :key="item" class="text-sm text-gray-600 dark:text-gray-300 pb-2 border-b border-gray-200 dark:border-gray-700 last:border-0">{{ item }}</li>
        </ul>
      </div>
      <div class="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-6 rounded-box relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-amber-600 dark:before:bg-amber-500">
        <h4 class="text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-amber-500 mb-2">Objeto social modificado (2024)</h4>
        <ul class="space-y-2">
          <li v-for="item in modified" :key="item" class="text-sm pb-2 border-b border-gray-200 dark:border-gray-700 last:border-0" :class="item.includes('Confinamiento') || item.includes('Incineración') ? 'text-amber-700 dark:text-amber-400 font-medium' : 'text-gray-600 dark:text-gray-300'">{{ item }}</li>
        </ul>
      </div>
    </div>

    <h3 class="font-display text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Estructura accionaria</h3>
    <div class="overflow-x-auto">
      <table class="table w-full text-sm">
        <thead>
          <tr class="border-b-2 border-amber-600 dark:border-amber-500 bg-gray-50 dark:bg-gray-800/50">
            <th class="text-xs font-bold tracking-wider uppercase text-amber-600 dark:text-amber-500">Accionista</th>
            <th class="text-xs font-bold tracking-wider uppercase text-amber-600 dark:text-amber-500">RFC</th>
            <th class="text-xs font-bold tracking-wider uppercase text-amber-600 dark:text-amber-500">Acciones</th>
            <th class="text-xs font-bold tracking-wider uppercase text-amber-600 dark:text-amber-500">Capital</th>
            <th class="text-xs font-bold tracking-wider uppercase text-amber-600 dark:text-amber-500">%</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in shareholders" :key="row.name" class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/30">
            <td class="font-medium text-gray-900 dark:text-gray-100">{{ row.name }}</td>
            <td class="text-gray-500 dark:text-gray-400">{{ row.rfc }}</td>
            <td class="text-gray-500 dark:text-gray-400">{{ row.shares }}</td>
            <td class="text-gray-500 dark:text-gray-400">{{ row.capital }}</td>
            <td class="text-gray-500 dark:text-gray-400">{{ row.pct }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
const dataPoints = [
  { num: '$60K', label: 'Capital original (2019)' },
  { num: '$10M', label: 'Capital después del aumento (2024)' },
  { num: '166×', label: 'Multiplicador del capital' },
]
const original = ['Servicios de agua potable y drenaje', 'Perforación de pozos', 'Plantas tratadoras de aguas residuales', 'Saneamiento y alcantarillado']
const modified = ['Recolección y transporte de residuos', 'Confinamiento de residuos peligrosos y no peligrosos', 'Incineración y destrucción de desechos', 'Reciclaje y tratamiento de residuos', 'Concesiones municipales integrales']
const shareholders = [
  { name: 'José Rodrigo Urquiza Escobar', rfc: 'UUER751004IP0', shares: '5,000,000', capital: '$5,000,000', pct: '50%' },
  { name: 'Kikey Velasco Merino', rfc: 'VEMK871011B82', shares: '5,000,000', capital: '$5,000,000', pct: '50%' },
]
</script>
