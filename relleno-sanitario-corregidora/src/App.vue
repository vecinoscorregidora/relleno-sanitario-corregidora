<script setup>
import { watchEffect } from 'vue'
import { useDark } from '@vueuse/core'
import { useScrollReveal } from './composables/useScrollReveal'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import CaseSection from './components/CaseSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import CompanySection from './components/CompanySection.vue'
import ActorsSection from './components/ActorsSection.vue'
import CommunitiesSection from './components/CommunitiesSection.vue'
import MapSection from './components/MapSection.vue'
import QuestionsSection from './components/QuestionsSection.vue'
import SourcesSection from './components/SourcesSection.vue'
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
  <div class="min-h-screen text-gray-900 dark:text-gray-100 transition-colors">
    <NavBar />
    <HeroSection />
    <div class="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
      <div class="reveal"><CaseSection /></div>
      <div class="w-12 h-0.5 bg-blue-600 mx-auto my-16 md:my-20"></div>
      <div class="reveal"><TimelineSection /></div>
      <div class="w-12 h-0.5 bg-blue-600 mx-auto my-16 md:my-20"></div>
      <div class="reveal"><CompanySection /></div>
      <div class="w-12 h-0.5 bg-blue-600 mx-auto my-16 md:my-20"></div>
      <div class="reveal"><ActorsSection /></div>
      <div class="w-12 h-0.5 bg-blue-600 mx-auto my-16 md:my-20"></div>
      <div class="reveal"><CommunitiesSection /></div>
      <div class="reveal"><MapSection /></div>
      <div class="w-12 h-0.5 bg-blue-600 mx-auto my-16 md:my-20"></div>
      <div class="reveal"><QuestionsSection /></div>
      <div class="w-12 h-0.5 bg-blue-600 mx-auto my-16 md:my-20"></div>
      <div class="reveal"><SourcesSection /></div>
    </div>
    <AppFooter />
  </div>
</template>
