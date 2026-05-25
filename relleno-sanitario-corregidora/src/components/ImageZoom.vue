<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { X } from '@lucide/vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  imgClass: { type: String, default: '' },
})

const open = ref(false)

function onKeydown(e) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <button type="button" @click="open = true" class="block w-full cursor-zoom-in text-left" :class="imgClass" :aria-label="`Ampliar imagen: ${alt}`">
    <img :src="src" :alt="alt" class="w-full h-full object-cover" loading="lazy" />
  </button>

  <Teleport to="body">
    <transition name="zoom">
      <div v-if="open" class="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4" @click.self="open = false">
        <button @click="open = false" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors" aria-label="Cerrar">
          <X class="w-5 h-5" />
        </button>
        <img :src="src" :alt="alt" class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" @click="open = false" />
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.zoom-enter-active, .zoom-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.zoom-enter-from, .zoom-leave-to { opacity: 0; transform: scale(0.95); }
</style>
