<template>
  <div class="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <Clock class="w-3.5 h-3.5" />
      Cronología
    </span>
    <h1 class="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-4 max-w-3xl">
      Línea de tiempo del caso
    </h1>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-10 leading-relaxed">Todos los eventos documentados desde la creación de FSO 3 hasta la clausura del relleno en mayo 2026.</p>

    <div class="relative pl-10 before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-0 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-800">
      <div v-for="(e, i) in events" :key="i" class="relative mb-10 pl-5 before:content-[''] before:absolute before:-left-[25px] before:top-[6px] before:w-[10px] before:h-[10px] before:rounded-full before:ring-2 before:ring-white dark:before:ring-gray-950"
           :class="e.urgent ? 'before:bg-red-500' : 'before:bg-blue-700 dark:before:bg-blue-400'">
        <div class="text-[0.65rem] font-bold tracking-[0.15em] uppercase mb-1" :class="e.urgent ? 'text-red-600 dark:text-red-400' : 'text-blue-700 dark:text-blue-400'">{{ e.date }}</div>
        <h3 class="font-display text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">{{ e.title }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">{{ e.desc }}</p>
        <p v-if="e.source" class="text-xs text-gray-400 dark:text-gray-500 mt-1 italic">Fuente: {{ e.source }}</p>
      </div>
    </div>

    <!-- Seal photos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl">
      <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
        <img :src="clausuraImg" alt="Sellos de clausura" class="w-full h-48 object-cover" loading="lazy" />
        <figcaption class="px-4 py-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900/50">Sellos colocados el 21 de mayo de 2026</figcaption>
      </figure>
      <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
        <img :src="clausuraImg2" alt="Vista del relleno" class="w-full h-48 object-cover" loading="lazy" />
        <figcaption class="px-4 py-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900/50">Vista del relleno durante la inspeccion</figcaption>
      </figure>
    </div>

    <div class="mt-12">
      <router-link to="/" class="text-blue-700 dark:text-blue-400 hover:underline text-sm font-medium">← Volver al inicio</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta.js'
onMounted(() => usePageMeta({
  title: 'Cronología del caso — Relleno Sanitario Corregidora',
  description: 'Línea de tiempo completa del conflicto del relleno sanitario en Corregidora: desde la creación de FSO 3 en 2019 hasta la clausura en mayo 2026.',
  og: { title: 'Cronología — Relleno Sanitario Corregidora', description: '15 eventos clave documentados sobre el relleno sanitario de Corregidora.', url: 'https://vecinoscorregidora.github.io/relleno-sanitario-corregidora/cronologia' },
  canonical: 'https://vecinoscorregidora.github.io/relleno-sanitario-corregidora/cronologia',
  schema: { '@context': 'https://schema.org', '@type': 'Report', headline: 'Cronología del caso', description: 'Línea de tiempo del conflicto del relleno sanitario en Corregidora', datePublished: '2026-05-24' }
}))
const base = import.meta.env.BASE_URL
const clausuraImg = `${base}images/clausura-relleno-sanitario.webp`
const clausuraImg2 = `${base}images/cluasura-relleno-sanitario-1.webp`
const events = [
  { date: '2 Abr 2019', title: 'Constitución de FSO 3 SA de CV', desc: 'Se constituye en Querétaro ante el notario Sergio Zepeda Guerra. Objeto social: servicios de agua potable, drenaje y saneamiento. Capital social: $60,000 MXN. Socios fundadores: José Rodrigo Urquiza Escobar, Salvador Cofiño Dávila y Alejandro García Ibarra (33.3% c/u).', source: 'Acta constitutiva — RPC Querétaro' },
  { date: '4 Feb 2024', title: 'Incendio en relleno sanitario "El Paraíso"', desc: 'Un incendio de casi dos semanas consume el relleno sanitario que operaba en Corregidora desde 2007. El fuego requiere intervención federal, estatal y municipal para ser sofocado.', source: 'Publimetro — 20 Feb 2024' },
  { date: '20 Feb 2024', title: 'Municipio anuncia que no renovará concesión a El Paraíso', desc: 'El entonces presidente municipal Roberto Sosa Pichardo declara que el relleno El Paraíso no recibirá renovación de licencia de funcionamiento. Los residuos de Corregidora se desvían al relleno de Colón.', source: 'Publimetro — 20 Feb 2024' },
  { date: '4 Mar 2024', title: 'Asamblea de accionistas: salida de socios fundadores', desc: 'Alejandro García Ibarra y Salvador Cofiño Dávila venden la totalidad de sus acciones. Entra Kikey Velasco Merino como nueva socia (50%). José Rodrigo Urquiza Escobar queda como Administrador Único.', source: 'Acta de Asamblea — RPC Querétaro' },
  { date: '12 Mar 2024', title: 'Asamblea Extraordinaria: cambio de objeto social y aumento de capital', desc: 'FSO 3 modifica su objeto social a residuos peligrosos y no peligrosos. El capital social aumenta de $60,000 a $10,000,000 MXN (166 veces).', source: 'Acta de Asamblea Extraordinaria — RPC Querétaro' },
  { date: '29 Abr 2024', title: 'Inscripción de los cambios en el Registro Público de Comercio', desc: 'Tanto la modificación de socios como el cambio de objeto social y aumento de capital quedan formalmente inscritos en el RPC de Querétaro.', source: 'RPC Querétaro' },
  { date: '31 Ene 2025', title: 'Publicación de la Gaceta Municipal de Corregidora', desc: 'Se publican licitaciones públicas por cientos de millones de pesos.', source: 'Gaceta Municipal de Corregidora, Tomo I' },
  { date: '1 Feb 2026', title: 'Municipio proyecta construir su propio relleno sanitario', desc: 'Josué Guerrero Trápala anuncia que buscan construir un relleno sanitario municipal propio. En evaluación técnica.', source: 'Quadratín Querétaro — 1 Feb 2026' },
  { date: 'Abr 2026', title: 'Estalla el conflicto social en Praderas de La Loma', desc: 'Vecinos denuncian que un relleno sanitario privado opera a 30 metros de sus viviendas. Reportan olores, plagas y riesgos a la salud. La empresa presenta denuncias penales contra manifestantes.', source: 'AlertaQro — 23 Abr 2026' },
  { date: '23 Abr 2026', title: 'Autoridades defienden legalidad del relleno', desc: 'Reunión en CAM El Pueblito. El municipio afirma que el relleno cumple NOM-083. Señalan que las viviendas colindantes son "asentamientos irregulares".', source: 'AlertaQro — 23 Abr 2026' },
  { date: '24 Abr 2026', title: 'Procuraduría Ambiental confirma autorización vigente', desc: 'José Luis Peña Ríos informa que el relleno tiene autorización hasta ago 2025 y MIA por 5 años. No han recibido denuncias formales.', source: 'InQro — 24 Abr 2026' },
  { date: '5 May 2026', title: 'Corregidora desvía 150 toneladas diarias a Querétaro', desc: 'Por el conflicto, el municipio desvía sus residuos al relleno de Mompaní.', source: 'Al Diálogo — 5 May 2026' },
  { date: '20 May 2026', title: 'Jornada Recorregidora: Chepe evade a vecinos', desc: 'En el Foro Multicultural de Candiles, el presidente municipal Josué Guerrero Trápala promociona una jornada de atención ciudadana pero no asiste. Tres representantes de Praderas de La Loma asisten para buscar diálogo. Los conserteros José Luis y Guillermo Arenas los amedrentan, les toman fotos y siguen a una de las representantes hasta el baño. Logran reunirse con los regidores Martín Eugenio Uribe Aguilar y Ricardo Domínguez Moreno, quienes se comprometen a gestionar una inspección.', source: 'Testimonio de los representantes — 20 May 2026' },
  { date: '21 May 2026', title: 'Regidores inspeccionan el relleno y ordenan clausura', desc: 'Aproximadamente a la 1 pm, los regidores Uribe Aguilar y Domínguez Moreno acuden al relleno sanitario acompañados de inspectores. Tras el recorrido, concluyen que la situación es insostenible y procesan los trámites para la clausura. En la tarde, los sellos de clausura son colocados en el acceso del relleno.', source: 'Testimonio de los representantes — 21 May 2026' },
  { date: '21 May 2026', title: 'Diario de Querétaro publica: "Relleno clausurado aún no tiene sellos"', desc: 'El Diario de Querétaro reporta que el relleno sanitario de Corregidora está clausurado pero físicamente aún no tiene sellos. La nota fue escrita horas antes de que los sellos fueran colocados.', source: 'Diario de Querétaro — 21 May 2026' },
  { date: '24 May 2026', title: 'Sin cobertura mediática de la clausura', desc: 'Hasta esta fecha, ningún medio de comunicación ha reportado que los sellos de clausura fueron colocados el 21 de mayo. La información solo se conoce por testimonios directos de los vecinos.', source: 'Testimonio de los representantes' },
]
</script>
