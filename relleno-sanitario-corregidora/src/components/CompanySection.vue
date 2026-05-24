<template>
  <section id="empresa" class="py-12 sm:py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <Building2 class="w-3.5 h-3.5" />
      La Empresa
    </span>
    <h2 class="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-4 max-w-3xl">
      FSO 3 SA de CV: la transformación
    </h2>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-8 leading-relaxed">En cuestión de días, una empresa de agua se convirtió en una de residuos. Los documentos del Registro Público de Comercio muestran un cambio quirúrgico justo cuando el mercado de disposición de residuos en Corregidora se abrió tras el cierre de El Paraíso.</p>

    <div class="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
      <div v-for="d in dataPoints" :key="d.label" class="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-5 text-center rounded-xl">
        <div class="font-display text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400 leading-none">{{ d.num }}</div>
        <div class="text-[0.65rem] font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500 mt-1">{{ d.label }}</div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div class="border border-gray-200 dark:border-gray-800 p-6 rounded-xl bg-gray-50/50 dark:bg-gray-900/30">
        <div class="flex items-center gap-2 mb-3">
          <Droplets class="w-4 h-4 text-blue-500" />
          <h4 class="text-[0.65rem] font-bold tracking-widest uppercase text-blue-700 dark:text-blue-400">Objeto social original (2019)</h4>
        </div>
        <ul class="space-y-2">
          <li v-for="item in original" :key="item" class="text-sm text-gray-600 dark:text-gray-300 pb-2 border-b border-gray-100 dark:border-gray-800 last:border-0 flex items-start gap-2">
            <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 mt-2 shrink-0"></span>
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="border border-gray-200 dark:border-gray-800 p-6 rounded-xl bg-gray-50/50 dark:bg-gray-900/30">
        <div class="flex items-center gap-2 mb-3">
          <Trash2 class="w-4 h-4 text-orange-500" />
          <h4 class="text-[0.65rem] font-bold tracking-widest uppercase text-blue-700 dark:text-blue-400">Objeto social modificado (2024)</h4>
        </div>
        <ul class="space-y-2">
          <li v-for="item in modified" :key="item" class="text-sm pb-2 border-b border-gray-100 dark:border-gray-800 last:border-0 flex items-start gap-2"
              :class="item.includes('Confinamiento') || item.includes('Incineración') ? 'text-orange-700 dark:text-orange-400 font-medium' : 'text-gray-600 dark:text-gray-300'">
            <span class="w-1 h-1 rounded-full mt-2 shrink-0" :class="item.includes('Confinamiento') || item.includes('Incineración') ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'"></span>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <h3 class="font-display text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
      <Users class="w-5 h-5 text-blue-600 dark:text-blue-400" />
      Estructura accionaria
    </h3>
    <div class="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
            <th class="text-left px-4 py-3 text-[0.65rem] font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400">Accionista</th>
            <th class="text-left px-4 py-3 text-[0.65rem] font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 hidden sm:table-cell">RFC</th>
            <th class="text-right px-4 py-3 text-[0.65rem] font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400">Acciones</th>
            <th class="text-right px-4 py-3 text-[0.65rem] font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400">Capital</th>
            <th class="text-right px-4 py-3 text-[0.65rem] font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400">%</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in shareholders" :key="row.name" class="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
            <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{{ row.name }}</td>
            <td class="px-4 py-3 text-gray-400 dark:text-gray-500 hidden sm:table-cell font-mono text-xs">{{ row.rfc }}</td>
            <td class="px-4 py-3 text-right text-gray-600 dark:text-gray-300">{{ row.shares }}</td>
            <td class="px-4 py-3 text-right text-gray-600 dark:text-gray-300 font-medium">{{ row.capital }}</td>
            <td class="px-4 py-3 text-right text-gray-600 dark:text-gray-300">{{ row.pct }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { Building2, Droplets, Trash2, Users } from '@lucide/vue'
const dataPoints = [
  { num: '$60K', label: 'Capital original (2019)' },
  { num: '$10M', label: 'Capital después (2024)' },
  { num: '166×', label: 'Multiplicador' },
]
const original = ['Servicios de agua potable y drenaje', 'Perforación de pozos', 'Plantas tratadoras de aguas residuales', 'Saneamiento y alcantarillado']
const modified = ['Recolección y transporte de residuos', 'Confinamiento de residuos peligrosos y no peligrosos', 'Incineración y destrucción de desechos', 'Reciclaje y tratamiento de residuos', 'Concesiones municipales integrales']
const shareholders = [
  { name: 'José Rodrigo Urquiza Escobar', rfc: 'UUER751004IP0', shares: '5,000,000', capital: '$5,000,000', pct: '50%' },
  { name: 'Kikey Velasco Merino', rfc: 'VEMK871011B82', shares: '5,000,000', capital: '$5,000,000', pct: '50%' },
]
</script>
