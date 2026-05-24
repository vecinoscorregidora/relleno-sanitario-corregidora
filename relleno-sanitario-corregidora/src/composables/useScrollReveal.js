import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const observer = ref(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.value.observe(el))
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })
}
