<script setup>
import { watchEffect } from 'vue'
import { useDark } from '@vueuse/core'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import CaseSection from './components/CaseSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import CompanySection from './components/CompanySection.vue'
import ActorsSection from './components/ActorsSection.vue'
import CommunitiesSection from './components/CommunitiesSection.vue'
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
</script>

<template>
  <div class="min-h-screen bg-surface text-gray-900 dark:text-gray-100 font-body transition-colors">
    <NavBar />
    <HeroSection />
    <div class="max-w-5xl mx-auto px-4 sm:px-8">
      <CaseSection />
      <div class="w-15 h-0.5 bg-amber-600 dark:bg-amber-500 mx-auto my-12 md:my-16"></div>
      <TimelineSection />
      <div class="w-15 h-0.5 bg-amber-600 dark:bg-amber-500 mx-auto my-12 md:my-16"></div>
      <CompanySection />
      <div class="w-15 h-0.5 bg-amber-600 dark:bg-amber-500 mx-auto my-12 md:my-16"></div>
      <ActorsSection />
      <div class="w-15 h-0.5 bg-amber-600 dark:bg-amber-500 mx-auto my-12 md:my-16"></div>
      <CommunitiesSection />
      <div class="w-15 h-0.5 bg-amber-600 dark:bg-amber-500 mx-auto my-12 md:my-16"></div>
      <QuestionsSection />
      <div class="w-15 h-0.5 bg-amber-600 dark:bg-amber-500 mx-auto my-12 md:my-16"></div>
      <SourcesSection />
    </div>
    <AppFooter />
  </div>
</template>
