<template>
  <div class="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-16">
    <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
      <Users class="w-3.5 h-3.5" />
      Los Actores
    </span>
    <h1 class="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-[-0.02em] text-gray-900 dark:text-gray-50 mb-4 max-w-3xl">
      ¿Quién es quién en esta historia?
    </h1>
    <p class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-10 leading-relaxed">Detrás del relleno sanitario hay una red de actores políticos, empresariales y legales. Estas son las personas clave identificadas hasta ahora.</p>

    <div class="space-y-6 mb-12">
      <!-- Bloque: Empresarios -->
      <div>
        <h3 class="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-3 tracking-wider uppercase border-b border-gray-200 dark:border-gray-800 pb-2">Empresarios</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="p in empresarios" :key="p.name" class="border border-gray-200 dark:border-gray-800 p-6 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-600 shrink-0 overflow-hidden"><User class="w-6 h-6" /></div>
              <div class="flex-1 min-w-0">
                <div class="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-blue-700 dark:text-blue-400 mb-0.5">{{ p.role }}</div>
                <div class="font-display text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{{ p.name }}</div>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ p.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bloque: Gobierno Municipal -->
      <div>
        <h3 class="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-3 tracking-wider uppercase border-b border-gray-200 dark:border-gray-800 pb-2">Gobierno Municipal</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="p in gobierno" :key="p.name" class="border border-gray-200 dark:border-gray-800 p-6 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-600 shrink-0 overflow-hidden"><User class="w-6 h-6" /></div>
              <div class="flex-1 min-w-0">
                <div class="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-blue-700 dark:text-blue-400 mb-0.5">{{ p.role }}</div>
                <div class="font-display text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{{ p.name }}</div>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ p.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bloque: Conserteros (operadores políticos) -->
      <div>
        <figure class="mb-3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 max-w-xs">
          <img :src="invitacionImg" alt="Invitacion Jornada Recorregidora" class="w-full h-auto object-contain max-h-32 mx-auto" loading="lazy" />
          <figcaption class="px-3 py-1 text-[0.55rem] text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50">Invitacion al evento del 20 de mayo donde ocurrio el hostigamiento</figcaption>
        </figure>
        <h3 class="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-3 tracking-wider uppercase border-b border-gray-200 dark:border-gray-800 pb-2">Conserteros (operadores políticos)</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="p in operadores" :key="p.name" class="border border-gray-200 dark:border-gray-800 p-6 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 hover:border-red-200 dark:hover:border-red-800 transition-colors">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-600 shrink-0 overflow-hidden"><UserX class="w-6 h-6" /></div>
              <div class="flex-1 min-w-0">
                <div class="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-red-600 dark:text-red-400 mb-0.5">{{ p.role }}</div>
                <div class="font-display text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{{ p.name }}</div>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ p.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bloque: Autoridades ambientales -->
      <div>
        <h3 class="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-3 tracking-wider uppercase border-b border-gray-200 dark:border-gray-800 pb-2">Autoridades ambientales</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="p in ambientales" :key="p.name" class="border border-gray-200 dark:border-gray-800 p-6 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-600 shrink-0 overflow-hidden"><User class="w-6 h-6" /></div>
              <div class="flex-1 min-w-0">
                <div class="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-blue-700 dark:text-blue-400 mb-0.5">{{ p.role }}</div>
                <div class="font-display text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{{ p.name }}</div>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ p.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <router-link to="/" class="text-blue-700 dark:text-blue-400 hover:underline text-sm font-medium">← Volver al inicio</router-link>
    </div>
  </div>
</template>

<script setup>
import { Users, User, UserX } from '@lucide/vue'
import { onMounted } from 'vue'
import { usePageMeta } from '../composables/usePageMeta.js'
onMounted(() => usePageMeta({
  title: 'Los actores del caso — Relleno sanitario de Corregidora',
  description: 'Empresarios, regidores, conserteros y autoridades ambientales: el mapa de actores detrás del relleno sanitario de Corregidora, Querétaro.',
  og: { title: 'Actores — Quién es quién en el caso del relleno de Corregidora', description: '9 perfiles clave identificados en el conflicto del relleno sanitario de Corregidora.', url: 'https://vecinoscorregidora.github.io/relleno-sanitario-corregidora/actores' },
  canonical: 'https://vecinoscorregidora.github.io/relleno-sanitario-corregidora/actores'
}))
const base = import.meta.env.BASE_URL
const invitacionImg = `${base}images/Recorregidora-invitacion.webp`
const empresarios = [
  { role: 'Dueño de FSO 3 / Administrador Único', name: 'José Rodrigo Urquiza Escobar', detail: 'RFC: UUER751004IP0. Copropietario de FSO 3 (50%). Perfil de negocios que abarca agua, desarrollo inmobiliario y clubes privados. Representante legal de FSO 3.' },
  { role: 'Socia / Apoderada Legal de FSO 3', name: 'Kikey Velasco Merino', detail: 'RFC: VEMK871011B82. Abogada, nacida el 11 oct 1987. Entró como socia el 4 mar 2024, 8 días antes del cambio de objeto social a residuos.' },
]
const gobierno = [
  { role: 'Presidente Municipal de Corregidora', name: 'Josué David "Chepe" Guerrero Trápala', detail: 'Presidente municipal en funciones. Defiende la legalidad del relleno. El 20 de mayo de 2026 promocionó la Jornada Recorregidora en Candiles pero no asistió. Tres representantes que buscaban dialogar con él fueron recibidos por conserteros que los hostigaron.' },
  { role: 'Secretario de Servicios Públicos Municipales', name: 'Carlos Jiménez Rodríguez', detail: 'El 20 de mayo, durante la Jornada Recorregidora, atendió a los representantes de Praderas de La Loma. Declaró que a él solo le informaron que "esa era la nueva ubicación del relleno" y la usó. Se deslindó de cualquier responsabilidad sobre la selección del sitio.' },
  { role: 'Regidor — Comisión de Desarrollo Urbano', name: 'Martín Eugenio Uribe Aguilar', detail: 'Atendió a los representantes el 20 de mayo en Candiles. Al día siguiente acudió al relleno, realizó un recorrido y procesó los trámites para la colocación de sellos de clausura.' },
  { role: 'Regidor', name: 'Ricardo Domínguez Moreno', detail: 'Acompañó a Uribe Aguilar en la atención a los representantes y en la inspección del relleno el 21 de mayo. Apoyó la decisión de clausurar el sitio.' },
  { role: 'Secretaria de Gobierno de Corregidora', name: 'Cristina Fernández de Cevallos', detail: 'Encabezó la reunión con vecinos en CAM El Pueblito en abril. Informó que la empresa operadora presentó denuncias penales contra manifestantes.' },
  { role: 'Ex Presidente Municipal de Corregidora', name: 'Roberto Sosa Pichardo', detail: 'Administración 2021-2024. No renovó concesión a El Paraíso tras incendio de feb 2024. Desvió residuos a Colón.' },
]
const operadores = [
  { role: 'Consertero (presunto hostigamiento)', name: 'José Luis', detail: 'El 20 de mayo de 2026, durante la Jornada Recorregidora en Candiles, este operador político y otros conserteros amedrentaron a los representantes de Praderas de La Loma. Les tomaron fotografías sin consentimiento, buscaron generar conflicto y los siguieron.' },
  { role: 'Consertero (presunto hostigamiento)', name: 'Guillermo Arenas', detail: 'Acompañó a José Luis en el hostigamiento a los representantes el 20 de mayo. Fue identificado por los testigos como uno de los operadores que amedrentaron y siguieron a los representantes durante la Jornada Recorregidora.' },
]
const ambientales = [
  { role: 'Procurador Ambiental del Estado de Querétaro', name: 'José Luis Peña Ríos', detail: 'Confirmó que el relleno tiene autorización vigente hasta agosto 2025. Dijo no haber recibido denuncias formales ambientales.' },
]
</script>
