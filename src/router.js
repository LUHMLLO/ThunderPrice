import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/logeo',
      name: 'logeo',
      component: () => import(/* webpackChunkName: "logeo" */ './views/Logeo.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import(/* webpackChunkName: "registro" */ './views/Registro.vue')
    },
    {
      path: '/recuperacion',
      name: 'recuperacion',
      component: () => import(/* webpackChunkName: "recuperacion" */ './views/Recuperacion.vue')
    }
  ]
})
