<template>
  <div class="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <Heart class="w-3.5 h-3.5" />
      Las Comunidades
    </span>
    <h1 class="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-4 max-w-3xl">
      Los que pagan el costo
    </h1>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-6 leading-relaxed">Praderas de La Loma y comunidades aledañas son áreas mayoritariamente rurales y de bajos recursos. El relleno sanitario se ubicó a 30 metros de viviendas.</p>

    <!-- Invitacion a la Jornada Recorregidora -->
    <figure class="mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
      <ImageZoom :src="invitacionImg" alt="Invitación a la Jornada Recorregidora en el Foro Multicultural de Candiles, 20 de mayo de 2026, donde el presidente municipal prometió asistir pero no lo hizo" imgClass="max-h-96 object-contain" />
      <figcaption class="px-4 py-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900/50">Invitacion a la Jornada Recorregidora donde el presidente municipal prometio asistir — 20 de mayo de 2026</figcaption>
    </figure>

    <!-- Fotos de los sellos de clausura -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
        <ImageZoom :src="clausuraImg" alt="Sellos de clausura colocados en el acceso al relleno sanitario de Corregidora por los regidores municipales el 21 de mayo de 2026" imgClass="h-64 object-cover" />
        <figcaption class="px-4 py-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900/50">Sellos de clausura en el acceso al relleno — 21 de mayo de 2026.</figcaption>
      </figure>
      <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
        <ImageZoom :src="clausuraImg2" alt="Vista general del relleno sanitario clausurado en Praderas de La Loma, Corregidora, durante la inspección de los regidores el 21 de mayo de 2026" imgClass="h-64 object-cover" />
        <figcaption class="px-4 py-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900/50">Vista del relleno sanitario durante la inspeccion — 21 de mayo de 2026.</figcaption>
      </figure>
    </div>

    <!-- Fotos del recorrido (Diario de Querétaro) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
        <ImageZoom :src="recorridoImg1" alt="Vista del relleno sanitario durante el recorrido de los regidores el 21 de mayo de 2026" imgClass="h-56 object-cover" />
        <figcaption class="px-4 py-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900/50">Vista del relleno durante el recorrido de inspeccion. Foto: <a href="https://oem.com.mx/diariodequeretaro/local/relleno-clausurado-en-corregidora-aun-no-tiene-sellos-30080960" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">Armando Vázquez / Diario de Querétaro</a></figcaption>
      </figure>
      <figure class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
        <ImageZoom :src="recorridoImg2" alt="Otra vista del relleno sanitario de Corregidora durante la inspeccion" imgClass="h-56 object-cover" />
        <figcaption class="px-4 py-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900/50">Vista del relleno sanitario. Foto: <a href="https://oem.com.mx/diariodequeretaro/local/relleno-clausurado-en-corregidora-aun-no-tiene-sellos-30080960" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">Armando Vázquez / Diario de Querétaro</a></figcaption>
      </figure>
    </div>

    <!-- Video del periodista -->
    <div class="mb-8 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-black" v-if="videoExists">
      <video controls class="w-full max-h-[500px]" preload="metadata">
        <source :src="videoSrc" type="video/mp4">
        Tu navegador no soporta video.
      </video>
      <div class="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
        <Video class="w-3.5 h-3.5" />
        Reportaje de <a href="https://www.facebook.com/elotroqueretaromx/" target="_blank" rel="noopener" class="text-blue-700 dark:text-blue-400 hover:underline">@elotroqueretaromx</a>
      </div>
    </div>

    <div class="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 px-5 py-4 max-w-3xl mb-8">
      <div class="flex items-start gap-3">
        <AlertTriangle class="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
        <div>
          <h4 class="font-bold text-orange-700 dark:text-orange-400 text-sm mb-1">Contradicción clave</h4>
          <p class="text-sm text-orange-800 dark:text-orange-200/80 leading-relaxed">El municipio califica las viviendas como "irregulares" para cuestionar las quejas, pero el mismo municipio autorizó que un confinamiento de residuos opere junto a esas viviendas. La NOM-083 exige distancias mínimas de seguridad que no se cumplen.</p>
        </div>
      </div>
    </div>

    <p class="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
      <ListChecks class="w-4 h-4 text-blue-600 dark:text-blue-400" />
      Los vecinos reportan:
    </p>
    <ul class="space-y-2 max-w-2xl mb-10">
      <li v-for="r in reports" :key="r" class="text-sm text-gray-600 dark:text-gray-300 pb-2 border-b border-gray-100 dark:border-gray-800 flex items-start gap-3">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0"></span>
        {{ r }}
      </li>
    </ul>

    <!-- Mapa Leaflet -->
    <h3 class="font-display text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
      <MapPin class="w-5 h-5 text-blue-600 dark:text-blue-400" />
      Ubicación del relleno
    </h3>
    <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden h-[350px] sm:h-[450px] relative" ref="mapContainer" id="map"></div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 mb-12">
      <div v-for="(item, i) in markers" :key="i" class="flex items-start gap-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-4 rounded-xl">
        <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold" :class="item.color">{{ i + 1 }}</div>
        <div>
          <div class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ item.name }}</div>
          <div class="text-xs text-gray-400 dark:text-gray-500">{{ item.detail }}</div>
        </div>
      </div>
    </div>

    <div>
      <router-link to="/" class="text-blue-700 dark:text-blue-400 hover:underline text-sm font-medium">← Volver al inicio</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Heart, AlertTriangle, ListChecks, MapPin, Video } from '@lucide/vue'
import ImageZoom from '../components/ImageZoom.vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { usePageMeta } from '../composables/usePageMeta.js'

const base = import.meta.env.BASE_URL
const videoSrc = `${base}video/RellenoSanitarioCorregidora.mp4`
const invitacionImg = `${base}images/recorregidora-invitacion.webp`
const clausuraImg = `${base}images/clausura-relleno-sanitario.webp`
const clausuraImg2 = `${base}images/clausura-relleno-sanitario-1.webp`
const recorridoImg1 = `${base}images/recorrido-basurero-av4.webp`
const recorridoImg2 = `${base}images/recorrido-basurero-av9.webp`
const videoExists = ref(true)
const mapContainer = ref(null)

const markers = [
  { name: 'Praderas de La Loma', detail: 'Comunidad afectada — viviendas a 30 m', color: 'bg-red-500' },
  { name: 'Relleno Sanitario (FSO 3)', detail: 'Confinamiento de residuos en operación', color: 'bg-orange-500' },
  { name: 'CAM El Pueblito', detail: 'Sede de reuniones autoridades-vecinos', color: 'bg-blue-500' },
]

const reports = [
  'Olores fétidos constantes que impiden la vida normal',
  'Proliferación de plagas (moscas, roedores)',
  'Riesgos a la salud, especialmente en niños y adultos mayores',
  'Bloqueos de unidades respondidos con denuncias penales por la empresa',
  'Nula participación en la decisión de instalar el relleno en su zona',
]

onMounted(() => {
  usePageMeta({
    title: 'Las comunidades afectadas — Relleno sanitario de Corregidora',
    description: 'Praderas de La Loma y comunidades aledañas. El relleno sanitario opera a 30 metros de viviendas. Fotos de la clausura, mapa interactivo y video del periodista @elotroqueretaromx.',
    og: { title: 'Comunidades — Mapa, video y fotos del relleno de Corregidora', description: 'El relleno a 30m de viviendas en Praderas de La Loma. Mapa interactivo, video del periodista y fotos de la clausura.', url: 'https://vecinoscorregidora.github.io/relleno-sanitario-corregidora/comunidades', image: 'https://vecinoscorregidora.github.io/relleno-sanitario-corregidora/images/clausura-relleno-sanitario.webp', twitterCard: 'summary_large_image' },
    canonical: 'https://vecinoscorregidora.github.io/relleno-sanitario-corregidora/comunidades'
  })
  const map = L.map('map').setView([20.50678, -100.49628], 14)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map)

  L.marker([20.50678, -100.49628])
    .addTo(map)
    .bindPopup('<b>Relleno Sanitario</b><br>Praderas de La Loma, Corregidora')
    .openPopup()

  L.marker([20.5090, -100.4930])
    .addTo(map)
    .bindPopup('<b>Praderas de La Loma</b><br>Viviendas a 30 m del relleno')

  L.marker([20.5170, -100.5050])
    .addTo(map)
    .bindPopup('<b>CAM El Pueblito</b><br>Centro de Atención Municipal')
})
</script>
