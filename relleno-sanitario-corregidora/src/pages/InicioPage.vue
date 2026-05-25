<script setup>
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import CaseSection from '../components/CaseSection.vue'
import { FileText, Users, Search, Clock, Building2, TriangleAlert, ArrowRightLeft, UserPlus, ArrowRight, Play, FileArchive, Scale, ShieldAlert, Info } from '@lucide/vue'
const base = import.meta.env.BASE_URL
const invitacionImg = `${base}images/Recorregidora-invitacion.jpeg`
</script>

<template>
  <HeroSection />

  <div class="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
    <!-- Disclaimer -->
    <div class="reveal mt-8 mb-4">
      <div class="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-4 py-3 rounded-xl">
        <Info class="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <p class="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">Este sitio es un registro documental e independiente del proceso ciudadano en torno al relleno sanitario de Corregidora. <strong>No tiene afiliación política ni partidista.</strong> Estamos abiertos al diálogo con todas las partes y a recibir cualquier información que contribuya a esclarecer los hechos. Si tienes datos, documentos o testimonios, <a href="/fuentes" class="underline font-medium">contáctanos</a>.</p>
      </div>
    </div>

    <div class="reveal"><CaseSection /></div>

    <!-- Stats Bar -->
    <div class="reveal reveal-delay-1 grid grid-cols-3 gap-3 sm:gap-4 mt-8 mb-12">
      <div class="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-5 text-center rounded-xl">
        <div class="font-display text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 leading-none">30 m</div>
        <div class="text-[0.6rem] font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500 mt-1">Distancia a viviendas</div>
      </div>
      <div class="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-5 text-center rounded-xl">
        <div class="font-display text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 leading-none">166×</div>
        <div class="text-[0.6rem] font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500 mt-1">Multiplicó su capital</div>
      </div>
      <div class="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-5 text-center rounded-xl">
        <div class="font-display text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 leading-none">4</div>
        <div class="text-[0.6rem] font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500 mt-1">Requisitos incumplidos</div>
      </div>
    </div>

    <!-- Key Findings -->
    <div class="reveal reveal-delay-1 mb-12">
      <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
        <TriangleAlert class="w-3.5 h-3.5" />
        Lo que encontramos
      </span>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="border border-gray-200 dark:border-gray-800 p-5 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 hover:border-orange-300 dark:hover:border-orange-700 transition-colors">
          <div class="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-3"><ArrowRightLeft class="w-4 h-4 text-orange-600 dark:text-orange-400" /></div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">Cambio de giro en 8 días</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">FSO 3 pasó de servicios de agua a confinamiento de residuos peligrosos. Su capital saltó de $60K a $10M.</p>
        </div>
        <div class="border border-gray-200 dark:border-gray-800 p-5 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 hover:border-orange-300 dark:hover:border-orange-700 transition-colors">
          <div class="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-3"><UserPlus class="w-4 h-4 text-orange-600 dark:text-orange-400" /></div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">Socia relámpago</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Kikey Velasco entró como socia el 4 de marzo. Ocho días después, la empresa ya operaba como compañía de residuos.</p>
        </div>
        <div class="border border-gray-200 dark:border-gray-800 p-5 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 hover:border-orange-300 dark:hover:border-orange-700 transition-colors">
          <div class="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-3"><Scale class="w-4 h-4 text-orange-600 dark:text-orange-400" /></div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">Sin requisitos básicos</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">El relleno opera sin luz, agua, teléfono ni distancia mínima a viviendas. Al menos 4 requisitos de la NOM-083 no se cumplen.</p>
        </div>
      </div>
    </div>

    <!-- Testimonios: Acoso en la Jornada Recorregidora -->
    <div class="reveal reveal-delay-2 mb-12">
      <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-red-600 dark:text-red-400 mb-4">
        <ShieldAlert class="w-3.5 h-3.5" />
        Testimonio — 20 de mayo
      </span>

      <div class="border border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10 p-6 rounded-xl">
        <h3 class="font-display text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">"Chepe" Guerrero no se presentó y sus conserteros hostigaron a los vecinos</h3>

        <!-- Invitacion image -->
        <figure class="mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 float-none sm:float-right sm:ml-4 sm:max-w-xs">
          <img :src="invitacionImg" alt="Invitacion Jornada Recorregidora" class="w-full h-auto object-contain max-h-48 mx-auto" loading="lazy" />
          <figcaption class="px-3 py-1.5 text-[0.6rem] text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50">Invitacion al evento donde Chepe prometio asistir</figcaption>
        </figure>

        <div class="space-y-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>El miércoles 20 de mayo, el presidente municipal Josué Guerrero Trápala promocionó la "Jornada Recorregidora" en el Foro Multicultural de Candiles como un espacio de atención ciudadana donde él estaría presente. Tres representantes de Praderas de La Loma asistieron de forma pacífica, sin buscar confrontación, con la intención de dialogar con él sobre la situación del relleno sanitario.</p>

          <p><strong>Guerrero Trápala nunca llegó.</strong> En su lugar, un grupo de conserteros (operadores políticos) — entre ellos <router-link to="/actores" class="text-blue-700 dark:text-blue-400 hover:underline font-medium">José Luis</router-link> y <router-link to="/actores" class="text-blue-700 dark:text-blue-400 hover:underline font-medium">Guillermo Arenas</router-link> — comenzaron a hostigar a los representantes. Les tomaron fotografías sin consentimiento, los siguieron y buscaron provocar una reacción violenta. En un incidente particularmente grave, siguieron a una de las representantes hasta el baño, donde fue confrontada.</p>

          <div class="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 px-4 py-3 my-3">
            <p class="text-xs text-red-700 dark:text-red-300 italic">"No somos delincuentes. Fuimos a dialogar y nos trataron como criminales. Me siguieron hasta el baño. Fue indignante." — Representante de Praderas de La Loma</p>
          </div>

          <p>Finalmente, los representantes lograron reunirse con los regidores <router-link to="/actores" class="text-blue-700 dark:text-blue-400 hover:underline font-medium">Martín Eugenio Uribe Aguilar</router-link> y <router-link to="/actores" class="text-blue-700 dark:text-blue-400 hover:underline font-medium">Ricardo Domínguez Moreno</router-link>, quienes sí los escucharon y se comprometieron a gestionar una inspección en el relleno. También hablaron con el Secretario de Servicios Públicos, <router-link to="/actores" class="text-blue-700 dark:text-blue-400 hover:underline font-medium">Carlos Jiménez Rodríguez</router-link>, quien se limitó a decir que "solo le dijeron que esa era la nueva ubicación del relleno" y la usó, deslindándose de toda responsabilidad.</p>

          <p class="mt-4">
            <router-link to="/cronologia" class="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 hover:underline font-medium text-xs">
              Ver cronología completa <ArrowRight class="w-3 h-3" />
            </router-link>
            <span class="mx-2 text-gray-300 dark:text-gray-600">|</span>
            <router-link to="/actores" class="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 hover:underline font-medium text-xs">
              Ver perfil de los involucrados <ArrowRight class="w-3 h-3" />
            </router-link>
          </p>
        </div>
      </div>
    </div>

    <!-- Quick Nav Cards -->
    <div class="reveal reveal-delay-2 mb-12">
      <span class="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-blue-700 dark:text-blue-400 mb-4">
        <FileText class="w-3.5 h-3.5" />
        Explora la investigación
      </span>

      <div class="grid grid-cols-2 md:grid-cols-6 gap-3">
        <router-link to="/cronologia" class="border border-gray-200 dark:border-gray-800 p-4 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all bg-gray-50/50 dark:bg-gray-900/30 group text-center">
          <Clock class="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
          <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">Cronología</div>
          <div class="text-[0.6rem] text-gray-400 dark:text-gray-500 mt-0.5">15 eventos</div>
        </router-link>

        <router-link to="/empresa" class="border border-gray-200 dark:border-gray-800 p-4 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all bg-gray-50/50 dark:bg-gray-900/30 group text-center">
          <Building2 class="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
          <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">FSO 3</div>
          <div class="text-[0.6rem] text-gray-400 dark:text-gray-500 mt-0.5">Empresa</div>
        </router-link>

        <router-link to="/actores" class="border border-gray-200 dark:border-gray-800 p-4 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all bg-gray-50/50 dark:bg-gray-900/30 group text-center">
          <Users class="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
          <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">Actores</div>
          <div class="text-[0.6rem] text-gray-400 dark:text-gray-500 mt-0.5">9 perfiles</div>
        </router-link>

        <router-link to="/comunidades" class="border border-gray-200 dark:border-gray-800 p-4 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all bg-gray-50/50 dark:bg-gray-900/30 group text-center">
          <Play class="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
          <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">Comunidades</div>
          <div class="text-[0.6rem] text-gray-400 dark:text-gray-500 mt-0.5">Mapa + video</div>
        </router-link>

        <router-link to="/requisitos" class="border border-gray-200 dark:border-gray-800 p-4 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all bg-gray-50/50 dark:bg-gray-900/30 group text-center">
          <Scale class="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
          <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">Requisitos</div>
          <div class="text-[0.6rem] text-gray-400 dark:text-gray-500 mt-0.5">vs Realidad</div>
        </router-link>

        <router-link to="/preguntas" class="border border-gray-200 dark:border-gray-800 p-4 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all bg-gray-50/50 dark:bg-gray-900/30 group text-center">
          <Search class="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
          <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">Preguntas</div>
          <div class="text-[0.6rem] text-gray-400 dark:text-gray-500 mt-0.5">8 abiertas</div>
        </router-link>
      </div>
    </div>

    <!-- Video Teaser -->
    <div class="reveal reveal-delay-3 mb-12">
      <router-link to="/comunidades"
        class="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-blue-300 dark:hover:border-blue-700 transition-all bg-gray-50/50 dark:bg-gray-900/30 group">
        <div class="flex flex-col sm:flex-row items-stretch">
          <div class="relative bg-gray-300 dark:bg-gray-800 sm:w-48 h-32 shrink-0 flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Play class="w-10 h-10 text-white opacity-80 group-hover:scale-110 transition-transform" />
            </div>
            <span class="text-xs text-white/60 absolute bottom-2 right-2 bg-black/50 px-2 py-0.5 rounded">Facebook Reel</span>
          </div>
          <div class="p-4 flex-1">
            <div class="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 mb-1">
              <Play class="w-3.5 h-3.5" />
              Reportaje audiovisual
            </div>
            <h3 class="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">Reportaje de @elotroqueretaromx</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Un periodista local documentó la situación del relleno y las comunidades afectadas. Mira el video completo en la sección Comunidades.</p>
          </div>
          <div class="hidden sm:flex items-center pr-4">
            <ArrowRight class="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </div>
        </div>
      </router-link>
    </div>

    <!-- CTA Buttons -->
    <div class="reveal reveal-delay-3 flex flex-wrap justify-center gap-4 mt-8 mb-16">
      <router-link to="/cronologia" class="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-6 py-3 rounded-lg transition-all duration-200">
        Ver cronología completa
        <ArrowRight class="w-4 h-4" />
      </router-link>
      <router-link to="/requisitos" class="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold px-6 py-3 rounded-lg transition-all duration-200">
        <Scale class="w-4 h-4" />
        Requisitos vs realidad
      </router-link>
      <router-link to="/fuentes" class="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 text-sm font-bold px-6 py-3 rounded-lg transition-all duration-200">
        <FileArchive class="w-4 h-4" />
        Documentos
      </router-link>
    </div>
  </div>
</template>
