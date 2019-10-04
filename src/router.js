import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import(/* webpackChunkName: "logeo" */ './views/Inicio.vue')
    },
    {
      path: '/logeo',
      name: 'logeo',
      component: () => import(/* webpackChunkName: "logeo" */ './views/formularios/Logeo.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import(/* webpackChunkName: "registro" */ './views/formularios/Registro.vue')
    },
    {
      path: '/recuperacion',
      name: 'recuperacion',
      component: () => import(/* webpackChunkName: "recuperacion" */ './views/formularios/Recuperacion.vue')
    }
  ]
})
