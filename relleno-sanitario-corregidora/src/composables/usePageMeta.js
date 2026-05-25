export function usePageMeta(opts) {
  const { title, description, og, canonical, schema } = opts

  document.title = title || 'Relleno Sanitario Corregidora — Investigación'

  function setMeta(name, content) {
    if (!content) return
    let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(name.includes(':') ? 'property' : 'name', name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('description', description)
  setMeta('og:title', og?.title || title)
  setMeta('og:description', og?.description || description)
  setMeta('og:url', og?.url || '')
  setMeta('og:type', og?.type || 'article')
  setMeta('og:image', og?.image || '')
  setMeta('twitter:card', og?.twitterCard || 'summary')
  setMeta('twitter:title', og?.twitterTitle || og?.title || title)
  setMeta('twitter:description', og?.twitterDescription || og?.description || description)

  // Canonical
  if (canonical) {
    let el = document.querySelector('link[rel="canonical"]')
    if (!el) {
      el = document.createElement('link')
      el.setAttribute('rel', 'canonical')
      document.head.appendChild(el)
    }
    el.setAttribute('href', canonical)
  }

  // Schema
  if (schema) {
    let el = document.querySelector('script[type="application/ld+json"]')
    if (!el) {
      el = document.createElement('script')
      el.setAttribute('type', 'application/ld+json')
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(schema)
  }
}
