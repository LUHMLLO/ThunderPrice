<template class="centering-body">
<div class="centering-body">

  <form @submit.prevent class="custom-form shadow roundify">


    
   <h2 class="text-bold">Recuperacion de cuenta</h2>
   <br>

   <div class="field-wrapper">
        <input type="email" required v-model="emailAddress">
        <label>
            <span>
                <i class='uil uil-envelope-alt'></i>
                <p>Correo electronico</p>
            </span>
        </label>
   </div>



   <div class="custom-form-botton-actions">
    <button @click="Funcion_Recuperacion" class="custom-form-submit rounded accent-bg">Enviar</button>
    <router-link to="logeo" class="custom-form-redirect-link accent-color">volver al inicio</router-link>
   </div>

  </form>

</div>
</template>



<script>
import firebase from '../../firebase.js'
import Swal from 'sweetalert';
export default {
    name:'logeo',
    data(){
      return{
            emailAddress:'',
      }
    },

    methods:{
      
        Funcion_Recuperacion: function(){
        firebase.auth().sendPasswordResetEmail(this.emailAddress).then(function() {
            Swal({ title: "Verifica tu correo" , text: "Hemos enviado un link a tu correo para recuperar tu clave", icon: "success"})
            }).catch(function(error) {
            Swal({ title: "Oops !", text: error.message, icon: "error"})
            });
        },

    },


}
</script>