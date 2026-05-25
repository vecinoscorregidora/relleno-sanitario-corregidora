<template>
  <div class="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <Scale class="w-3.5 h-3.5" />
      Requisitos Legales
    </span>
    <h1 class="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-4 max-w-3xl">
      Lo que exige la ley <span class="text-blue-700 dark:text-blue-400">vs.</span> lo que tiene el relleno
    </h1>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-8 leading-relaxed">Para operar un relleno sanitario se requiere cumplir con una serie de normas federales, estatales y municipales. Comparamos lo que marca la ley con lo que realmente existe en el predio de Praderas de La Loma.</p>

    <div class="overflow-x-auto mb-8">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-900/50 border-b-2 border-blue-700 dark:border-blue-400">
            <th class="text-left px-4 py-3 text-[0.6rem] font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 w-1/4">Requisito</th>
            <th class="text-left px-4 py-3 text-[0.6rem] font-bold tracking-wider uppercase text-green-700 dark:text-green-400 w-1/3">Lo que exige la ley</th>
            <th class="text-left px-4 py-3 text-[0.6rem] font-bold tracking-wider uppercase text-red-600 dark:text-red-400 w-1/3">Lo que tiene el relleno</th>
            <th class="text-center px-4 py-3 text-[0.6rem] font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 w-[60px]">Estatus</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, i) in requisitos" :key="i" class="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
            <td class="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100 text-xs sm:text-sm">{{ r.name }}</td>
            <td class="px-4 py-4 text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{{ r.requisito }}</td>
            <td class="px-4 py-4 text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{{ r.realidad }}</td>
            <td class="px-4 py-4 text-center">
              <span class="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold"
                    :class="r.status === '❌' ? 'bg-red-500' : r.status === '⚠️' ? 'bg-yellow-500' : r.status === '❓' ? 'bg-gray-400' : 'bg-green-500'">
                {{ r.status === '❌' ? '✕' : r.status === '⚠️' ? '!' : r.status === '❓' ? '?' : '✓' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Fotos de clausura -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
        <ImageZoom :src="clausuraImg" alt="Sellos de clausura colocados en el relleno sanitario de Corregidora el 21 de mayo de 2026" imgClass="h-56 object-cover" />
        <figcaption class="px-4 py-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900/50">Sellos de clausura colocados en el relleno — 21 mayo 2026. Foto: <a href="https://oem.com.mx/diariodequeretaro/local/relleno-clausurado-en-corregidora-aun-no-tiene-sellos-30080960" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">Armando Vázquez / Diario de Querétaro</a></figcaption>
      </figure>
      <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
        <ImageZoom :src="clausuraImg2" alt="Vista del relleno sanitario clausurado en Praderas de La Loma, Corregidora" imgClass="h-56 object-cover" />
        <figcaption class="px-4 py-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900/50">Vista del relleno durante la inspeccion de los regidores. Foto: <a href="https://oem.com.mx/diariodequeretaro/local/relleno-clausurado-en-corregidora-aun-no-tiene-sellos-30080960" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">Armando Vázquez / Diario de Querétaro</a></figcaption>
      </figure>
    </div>

    <div class="space-y-3 mb-8">
      <div v-for="(n, i) in notas" :key="i" class="flex items-start gap-3 bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 p-4 rounded-xl">
        <Info class="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{{ n }}</p>
      </div>
    </div>

    <div class="mt-12">
      <router-link to="/" class="text-blue-700 dark:text-blue-400 hover:underline text-sm font-medium">← Volver al inicio</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta.js'
import ImageZoom from '../components/ImageZoom.vue'
onMounted(() => usePageMeta({
  title: 'Requisitos legales vs realidad — Relleno sanitario Corregidora',
  description: 'Comparativa de 12 requisitos legales (NOM-083, cambio de uso de suelo, servicios básicos) contra lo que realmente tiene el relleno sanitario de Corregidora.',
  og: { title: 'Requisitos legales vs realidad del relleno de Corregidora', description: 'De 12 requisitos identificados, 4 no se cumplen: falta luz, agua, teléfono y distancia mínima a viviendas.', url: 'https://vecinoscorregidora.github.io/relleno-sanitario-corregidora/requisitos' },
  canonical: 'https://vecinoscorregidora.github.io/relleno-sanitario-corregidora/requisitos'
}))
const base = import.meta.env.BASE_URL
const clausuraImg = `${base}images/clausura-relleno-sanitario.webp`
const clausuraImg2 = `${base}images/clausura-relleno-sanitario-1.webp`
const requisitos = [
  { name: 'Cambio de uso de suelo', requisito: 'Autorización del COERET o SEDESU para cambiar el uso del suelo de agrícola/ejidal a industrial/confinamiento de residuos. Se requiere dictamen técnico y aprobación municipal.', realidad: 'No se ha identificado evidencia pública de que el cambio de uso de suelo haya sido autorizado. El predio está en una zona originalmente rural/agrícola.', status: '❓' },
  { name: 'Distancia mínima a viviendas (NOM-083)', requisito: 'La NOM-083-SEMARNAT-2003 exige una distancia mínima de 500 m a centros de población. Dependiendo del tipo de relleno, la distancia puede variar pero nunca es menor a 200 m.', realidad: 'Las viviendas de Praderas de La Loma están a aproximadamente 30 metros del perímetro del relleno. No cumple la norma.', status: '❌' },
  { name: 'Energía eléctrica', requisito: 'Contrato de suministro eléctrico con CFE para operar maquinaria, bombas de lixiviados, iluminación y sistemas de monitoreo.', realidad: 'El relleno está "en medio del cerro", sin acceso a la red eléctrica. No hay postes de CFE en la zona.', status: '❌' },
  { name: 'Agua potable', requisito: 'Concesión de la CONAGUA para uso de agua. Instalaciones sanitarias para el personal.', realidad: 'No hay red de agua potable en la zona. No se ha identificado concesión de CONAGUA para el predio.', status: '❌' },
  { name: 'Servicio telefónico / internet', requisito: 'Medio de comunicación para reportar emergencias, coordinar operaciones y mantener registros.', realidad: 'La zona no cuenta con cobertura telefónica ni de datos. No hay infraestructura de telecomunicaciones.', status: '❌' },
  { name: 'Geomembrana de impermeabilización', requisito: 'Capa impermeable en la base del relleno para evitar que los lixiviados contaminen el suelo y los mantos acuíferos. Debe cumplir espesor y material especificados en NOM-083.', realidad: 'No hay información pública que confirme la instalación de geomembrana. Los vecinos reportan escurrimientos de lixiviados.', status: '❓' },
  { name: 'Sistema de captación de lixiviados', requisito: 'Red de drenaje y pozos de captación para recolectar y tratar los líquidos percolados (lixiviados). Sistema de recirculación o tratamiento.', realidad: 'No se ha identificado infraestructura visible de captación de lixiviados desde el exterior. Se requiere inspección técnica.', status: '❓' },
  { name: 'Sistema de venteo de biogás', requisito: 'Chimeneas de venteo para liberar controladamente los gases generados por la descomposición de residuos (metano, CO₂). La NOM-083 exige su instalación.', realidad: 'Sin confirmación visual de chimeneas de venteo. Los vecinos reportan olores constantes, lo que sugiere falta de captación de biogás.', status: '❓' },
  { name: 'Manifestación de Impacto Ambiental (MIA)', requisito: 'Estudio técnico aprobado por SEDESU o SEMARNAT que evalúa el impacto ambiental del proyecto. Vigencia de 5 años. Debe incluir consulta pública.', realidad: 'SEDESU otorgó MIA con vigencia de 5 años, según declaraciones del procurador ambiental Peña Ríos. Falta verificar si incluyó consulta a las comunidades aledañas.', status: '⚠️' },
  { name: 'Autorización municipal (concesión/licencia)', requisito: 'Aprobación del Cabildo municipal mediante acta. La concesión debe otorgarse mediante licitación pública y publicarse en la Gaceta Municipal.', realidad: 'Se desconoce si hubo licitación, acta de Cabildo o publicación. El encargado de Servicios Públicos declaró que "solo le dijeron que esa era la nueva ubicación".', status: '❓' },
  { name: 'Registro como generador de residuos', requisito: 'Inscripción en el Registro de Prestadores de Servicios Ambientales de la SEMARNAT para el manejo de residuos sólidos urbanos y de manejo especial.', realidad: 'El gobierno municipal afirma que el relleno está registrado como prestador de servicios ambientales. No se ha podido confirmar de forma independiente.', status: '⚠️' },
  { name: 'Permiso de la CONAGUA', requisito: 'Autorización para evitar afectación a cuerpos de agua nacionales. El predio no debe estar en zona de recarga de acuíferos ni cerca de mantos freáticos.', realidad: 'No se ha identificado permiso de CONAGUA. La zona de Corregidora tiene mantos freáticos sensibles.', status: '❓' },
]
const notas = [
  'De 12 requisitos identificados, al menos 4 no se cumplen (falta de luz, agua, teléfono y distancia a viviendas). El relleno opera sin servicios básicos en una zona rural sin infraestructura.',
  'El cambio de uso de suelo es la pregunta fundamental: si el predio nunca fue autorizado para uso industrial, el resto de los permisos podrían ser nulos o revocables.',
  'Varios requisitos marcados como ❓ requieren acceso a registros públicos (SEDESU, CONAGUA, COERET, Cabildo) para confirmar su cumplimiento. Se han iniciado solicitudes de información.',
]
</script>
