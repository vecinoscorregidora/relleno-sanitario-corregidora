import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'inicio', component: () => import('./pages/InicioPage.vue') },
  { path: '/cronologia', name: 'cronologia', component: () => import('./pages/CronologiaPage.vue') },
  { path: '/empresa', name: 'empresa', component: () => import('./pages/EmpresaPage.vue') },
  { path: '/actores', name: 'actores', component: () => import('./pages/ActoresPage.vue') },
  { path: '/comunidades', name: 'comunidades', component: () => import('./pages/ComunidadesPage.vue') },
  { path: '/requisitos', name: 'requisitos', component: () => import('./pages/RequisitosPage.vue') },
  { path: '/preguntas', name: 'preguntas', component: () => import('./pages/PreguntasPage.vue') },
  { path: '/fuentes', name: 'fuentes', component: () => import('./pages/FuentesPage.vue') },
]

const router = createRouter({
  history: createWebHistory('/relleno-sanitario-corregidora/'),
  routes,
  scrollBehavior() { return { top: 0 } },
})

export default router
