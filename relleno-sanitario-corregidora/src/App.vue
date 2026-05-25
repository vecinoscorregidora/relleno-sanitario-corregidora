<script setup>
import { watchEffect } from 'vue'
import { useDark } from '@vueuse/core'
import { useScrollReveal } from './composables/useScrollReveal'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'

if (localStorage.getItem('vueuse-color-scheme') === null) {
  localStorage.setItem('vueuse-color-scheme', '')
}
const isDark = useDark()
watchEffect(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
})

useScrollReveal()
</script>

<template>
  <div class="min-h-screen text-gray-900 dark:text-gray-100 transition-colors flex flex-col">
    <NavBar />
    <main class="flex-1 pt-14">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
