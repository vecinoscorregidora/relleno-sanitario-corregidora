<template>
  <section id="fuentes">
    <span class="text-xs font-bold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500">Fuentes</span>
    <h2 class="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight mt-2 mb-4 text-gray-900 dark:text-gray-100">Documentos de contexto</h2>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">Los documentos que forman parte de esta investigación:</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
      <a v-for="d in docs" :key="d.title" :href="d.href" target="_blank" rel="noopener"
         class="block bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-4 rounded-box hover:border-amber-300 dark:hover:border-amber-700 transition-colors">
        <div class="text-2xl mb-2">{{ d.icon }}</div>
        <div class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ d.title }}</div>
        <div class="text-xs text-gray-400 dark:text-gray-500 mt-1">{{ d.meta }}</div>
      </a>
    </div>

    <h3 class="font-display text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Artículos y fuentes hemerográficas</h3>
    <ul class="space-y-1">
      <li v-for="s in sources" :key="s.title" class="py-3 border-b border-gray-200 dark:border-gray-700">
        <a :href="s.url" target="_blank" rel="noopener" class="text-amber-700 dark:text-amber-400 hover:underline text-sm font-medium">{{ s.title }}</a>
        <span class="block text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ s.source }} — {{ s.date }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
const docs = [
  { icon: '📄', title: 'Constitución de FSO 3 SA de CV', meta: 'Abr 2019 | RPC', href: '/relleno-corregidora/pdfs/01-constitucion-fso3.pdf' },
  { icon: '📄', title: 'Modificación de Socios', meta: '4 Mar 2024 | Ordinaria', href: '/relleno-corregidora/pdfs/02-modificacion-socios.pdf' },
  { icon: '📄', title: 'Cambio de Objeto Social y Aumento de Capital', meta: '12 Mar 2024 | Extraordinaria', href: '/relleno-corregidora/pdfs/03-cambio-objeto-social-aumento-capital.pdf' },
  { icon: '📄', title: 'Gaceta Municipal de Corregidora', meta: '31 Ene 2025 | Tomo I', href: '/relleno-corregidora/pdfs/04-gaceta-municipal-corregidora-ene2025.pdf' },
]
const sources = [
  { title: 'Relleno sanitario en Corregidora cumple con normas federales', url: 'https://www.alertaqronoticias.com/2026/04/23/relleno-sanitario-en-corregidora-cumple-con-normas-federales-y-tiene-permisos-vigentes-afirman-autoridades/', source: 'AlertaQro', date: '23 Abr 2026' },
  { title: 'Corregidora confirma legalidad del relleno sanitario y traslada 150 toneladas diarias', url: 'https://aldialogo.mx/municipio-de-corregidora/2026/05/05/corregidora-confirma-legalidad-del-relleno-sanitario-y-traslada-150-toneladas-diarias-a-queretaro/', source: 'Al Diálogo', date: '5 May 2026' },
  { title: 'Relleno sanitario en Corregidora opera con autorización vigente', url: 'https://inqro.com.mx/2026/04/24/relleno-sanitario-en-corregidora-opera-con-autorizacion-vigente-informa-procurador-ambiental/', source: 'InQro', date: '24 Abr 2026' },
  { title: 'Corregidora proyecta relleno sanitario propio', url: 'https://queretaro.quadratin.com.mx/corregidora-proyecta-relleno-sanitario-propio-antes-de-concluir-la-administracion/', source: 'Quadratín Querétaro', date: '1 Feb 2026' },
  { title: 'Negará Corregidora licencia de funcionamiento a relleno sanitario El Paraíso', url: 'https://www.publimetro.com.mx/queretaro/2024/02/20/corregidora-no-renovara-licencia-del-relleno-el-paraiso/', source: 'Publimetro', date: '20 Feb 2024' },
]
</script>
