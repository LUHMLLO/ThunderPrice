<template>
  <div id="app">
    <BarraDeNavegacion/>
    <router-view class="site-main"/>
    <PieDePagina/>
  </div>
</template>






<script>
export default {
  components:{
    BarraDeNavegacion: () => import('./components/Navegacion.vue'),
    PieDePagina: () => import('./components/Footer.vue'),
  },
  data(){
    return{

    }
  }
};
  </script> 
