<template>
  <section id="fuentes" class="py-12 sm:py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <FileText class="w-3.5 h-3.5" />
      Fuentes
    </span>
    <h2 class="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-4 max-w-3xl">
      Documentos de contexto
    </h2>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-8 leading-relaxed">Los documentos que forman parte de esta investigación están disponibles para descarga:</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
      <a v-for="d in docs" :key="d.title" :href="d.href" target="_blank" rel="noopener"
         class="border border-gray-200 dark:border-gray-800 p-5 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 bg-gray-50/50 dark:bg-gray-900/30 group">
        <File class="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
        <div class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">{{ d.title }}</div>
        <div class="text-xs text-gray-400 dark:text-gray-500">{{ d.meta }}</div>
      </a>
    </div>

    <h3 class="font-display text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
      <Newspaper class="w-5 h-5 text-blue-600 dark:text-blue-400" />
      Artículos periodísticos
    </h3>
    <ul class="space-y-1">
      <li v-for="s in sources" :key="s.title" class="py-3 border-b border-gray-100 dark:border-gray-800">
        <a :href="s.url" target="_blank" rel="noopener" class="text-blue-700 dark:text-blue-400 hover:underline text-sm font-medium flex items-start gap-2">
          <ExternalLink class="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>{{ s.title }}</span>
        </a>
        <span class="block text-xs text-gray-400 dark:text-gray-500 mt-0.5 ml-5.5">{{ s.source }} — {{ s.date }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { FileText, File, Newspaper, ExternalLink } from '@lucide/vue'
const base = import.meta.env.BASE_URL
const docs = [
  { icon: 'FileText', title: 'Constitución de FSO 3 SA de CV', meta: 'Abr 2019 | RPC', href: `${base}pdfs/01-constitucion-fso3.pdf` },
  { icon: 'FileText', title: 'Modificación de Socios', meta: '4 Mar 2024 | Ordinaria', href: `${base}pdfs/02-modificacion-socios.pdf` },
  { icon: 'FileText', title: 'Cambio de Objeto Social y Aumento de Capital', meta: '12 Mar 2024 | Extraordinaria', href: `${base}pdfs/03-cambio-objeto-social-aumento-capital.pdf` },
  { icon: 'FileText', title: 'Gaceta Municipal de Corregidora', meta: '31 Ene 2025 | Tomo I', href: `${base}pdfs/04-gaceta-municipal-corregidora-ene2025.pdf` },
]
const sources = [
  { title: 'Relleno sanitario en Corregidora cumple con normas federales', url: 'https://www.alertaqronoticias.com/2026/04/23/relleno-sanitario-en-corregidora-cumple-con-normas-federales-y-tiene-permisos-vigentes-afirman-autoridades/', source: 'AlertaQro', date: '23 Abr 2026' },
  { title: 'Corregidora confirma legalidad del relleno sanitario y traslada 150 toneladas diarias', url: 'https://aldialogo.mx/municipio-de-corregidora/2026/05/05/corregidora-confirma-legalidad-del-relleno-sanitario-y-traslada-150-toneladas-diarias-a-queretaro/', source: 'Al Diálogo', date: '5 May 2026' },
  { title: 'Relleno sanitario en Corregidora opera con autorización vigente', url: 'https://inqro.com.mx/2026/04/24/relleno-sanitario-en-corregidora-opera-con-autorizacion-vigente-informa-procurador-ambiental/', source: 'InQro', date: '24 Abr 2026' },
  { title: 'Corregidora proyecta relleno sanitario propio', url: 'https://queretaro.quadratin.com.mx/corregidora-proyecta-relleno-sanitario-propio-antes-de-concluir-la-administracion/', source: 'Quadratín Querétaro', date: '1 Feb 2026' },
  { title: 'Negará Corregidora licencia a relleno El Paraíso', url: 'https://www.publimetro.com.mx/queretaro/2024/02/20/corregidora-no-renovara-licencia-del-relleno-el-paraiso/', source: 'Publimetro', date: '20 Feb 2024' },
]
</script>
