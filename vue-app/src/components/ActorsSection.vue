<template>
  <section id="actores">
    <span class="text-xs font-bold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500">Los Actores</span>
    <h2 class="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight mt-2 mb-6 text-gray-900 dark:text-gray-100">¿Quién es quién en esta historia?</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="p in players" :key="p.name" class="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5 rounded-box">
        <div class="text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-amber-500 mb-1">{{ p.role }}</div>
        <div class="font-display text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{{ p.name }}</div>
        <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ p.detail }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const players = [
  { role: 'Dueño de FSO 3 / Administrador Único', name: 'José Rodrigo Urquiza Escobar', detail: 'RFC: UUER751004IP0. Copropietario (50%). Perfil que abarca agua, desarrollo inmobiliario y clubes privados.' },
  { role: 'Socia / Apoderada Legal de FSO 3', name: 'Kikey Velasco Merino', detail: 'RFC: VEMK871011B82. Abogada. Entró como socia días antes del cambio de objeto social. Tiene poder general para pleitos, administración y dominio.' },
  { role: 'Presidente Municipal de Corregidora', name: 'Josué David "Chepe" Guerrero Trápala', detail: 'Defiende la legalidad del relleno. Busca construir relleno municipal propio.' },
  { role: 'Secretaria de Gobierno (Corregidora)', name: 'Cristina Fernández de Cevallos', detail: 'Encabezó reunión con vecinos. Informó denuncias penales de la empresa contra manifestantes.' },
  { role: 'Procurador Ambiental del Estado', name: 'José Luis Peña Ríos', detail: 'Confirmó autorización vigente hasta ago 2025. No ha recibido denuncias formales ambientales.' },
  { role: 'Ex Presidente Municipal de Corregidora', name: 'Roberto Sosa Pichardo', detail: 'No renovó concesión a El Paraíso tras incendio feb 2024. Desvió residuos a Colón.' },
]
</script>
