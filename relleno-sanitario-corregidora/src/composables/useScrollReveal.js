import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null
  let mutationObserver = null

  function observeElements() {
    document.querySelectorAll('.reveal:not(.observed)').forEach((el) => {
      el.classList.add('observed')
      if (observer) observer.observe(el)
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observeElements()

    mutationObserver = new MutationObserver(observeElements)
    mutationObserver.observe(document.getElementById('app'), {
      childList: true,
      subtree: true,
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
    mutationObserver?.disconnect()
  })
}
