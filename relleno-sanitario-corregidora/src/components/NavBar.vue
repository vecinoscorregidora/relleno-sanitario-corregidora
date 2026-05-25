<script setup>
import { ref, watch } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { Sun, Moon, Menu, X } from '@lucide/vue'

const route = useRoute()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const sidebarOpen = ref(false)

function closeSidebar() { sidebarOpen.value = false }

watch(() => route.path, closeSidebar)

const items = [
  { path: '/', label: 'Inicio' },
  { path: '/cronologia', label: 'Cronología' },
  { path: '/empresa', label: 'FSO 3' },
  { path: '/actores', label: 'Actores' },
  { path: '/comunidades', label: 'Comunidades' },
  { path: '/requisitos', label: 'Requisitos' },
  { path: '/preguntas', label: 'Preguntas' },
  { path: '/fuentes', label: 'Fuentes' },
]
</script>

<template>
  <!-- Top bar -->
  <nav class="fixed top-0 left-0 right-0 z-50 border-b h-14 flex items-center bg-white/95 dark:bg-gray-950/95 border-gray-200 dark:border-gray-800 backdrop-blur-md" role="navigation" aria-label="Navegación principal">
    <div class="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 w-full flex items-center justify-between">
      <router-link to="/" class="text-xs font-bold tracking-[0.15em] uppercase text-blue-700 dark:text-blue-400 shrink-0" @click="closeSidebar">Inicio</router-link>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-0.5">
        <router-link v-for="item in items" :key="item.path"
           :to="item.path"
           class="px-2.5 py-1.5 text-[0.65rem] font-bold tracking-widest uppercase rounded transition-colors"
           :class="route.path === item.path
             ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
             : isDark ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800/50' : 'text-gray-500 hover:text-blue-700 hover:bg-gray-100'">
          {{ item.label }}
        </router-link>
        <button @click="toggleDark()" class="p-2 rounded-lg transition-colors ml-1 shrink-0" :class="isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-blue-400' : 'hover:bg-gray-100 text-gray-500 hover:text-blue-700'" aria-label="Cambiar modo claro/oscuro">
          <Sun v-if="isDark" class="w-3.5 h-3.5" />
          <Moon v-else class="w-3.5 h-3.5" />
        </button>
      </div>

      <!-- Mobile hamburger + dark toggle -->
      <div class="flex md:hidden items-center gap-1">
        <button @click="toggleDark()" class="p-2 rounded-lg transition-colors" :class="isDark ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'" aria-label="Cambiar modo claro/oscuro">
          <Sun v-if="isDark" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </button>
        <button @click="sidebarOpen = !sidebarOpen" class="p-2 rounded-lg transition-colors" :class="isDark ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'" aria-label="Abrir menú">
          <Menu v-if="!sidebarOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile sidebar backdrop -->
  <transition name="fade">
    <div v-if="sidebarOpen" class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" @click="closeSidebar"></div>
  </transition>

  <!-- Mobile sidebar drawer -->
  <transition name="slide">
    <aside v-if="sidebarOpen" class="fixed top-14 right-0 bottom-0 z-50 w-72 border-l bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 md:hidden overflow-y-auto" role="dialog" aria-label="Menú de navegación">
      <div class="py-4 px-3">
        <router-link v-for="item in items" :key="item.path"
           :to="item.path"
           @click="closeSidebar"
           class="flex items-center gap-3 px-4 py-3 text-sm font-semibold tracking-wider uppercase rounded-xl transition-colors"
           :class="route.path === item.path
             ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
             : isDark ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'">
          <span class="w-1.5 h-1.5 rounded-full shrink-0" :class="route.path === item.path ? 'bg-blue-600 dark:bg-blue-400' : 'bg-transparent'"></span>
          {{ item.label }}
        </router-link>
      </div>
    </aside>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.25s ease; }
.slide-enter-from { transform: translateX(100%); }
.slide-leave-to { transform: translateX(100%); }
</style>
