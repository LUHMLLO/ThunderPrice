import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "notFound" */ './views/notFound.vue')
    },
    {
      path: '/',
      alias: '/inicio',
      name: 'inicio',
      component: () => import(/* webpackChunkName: "logeo" */ './views/Inicio.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    },
    {
      path: '/recovery',
      name: 'recovery',
      component: () => import(/* webpackChunkName: "recovery" */ './views/Recovery.vue')
    },
    {
      path: '/producto/:Producto_id',
      name: 'producto',
      component: () => import(/* webpackChunkName: "producto" */ './views/Producto_detalle.vue')
    },
  ]
})
