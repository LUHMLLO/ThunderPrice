<template class="centering-body">
<div class="centering-body">

  <form @submit.prevent class="custom-form shadow roundify">


    
   <h2 class="text-bold">Iniciar sesion</h2>
   <br>

   <div class="field-wrapper">
        <input type="email" required v-model="email">
        <label>
            <span>
                <i class='uil uil-envelope-alt'></i>
                <p>Correo electronico</p>
            </span>
        </label>
   </div>
   <div class="field-wrapper">
        <input type="password" required v-model="password">
        <label>
            <span>
                <i class='uil uil-key-skeleton-alt'></i>
                <p>Contraseña</p>
            </span>
        </label>
   </div>


   <div class="custom-form-botton-actions">
    <button @click="Funcion_Logearse" class="custom-form-submit rounded accent-bg">Entrar</button>
    <router-link to="/recuperacion" class="custom-form-redirect-link accent-color">olvide mi contraseña</router-link>
    <router-link to="/registro" class="custom-form-redirect-link accent-color">no poseo una cuenta</router-link>
   </div>

  </form>

</div>
</template>




<script>
import firebase from '../firebase.js'
import Swal from 'sweetalert';
export default {
    name:'logeo',
    data(){
      return{
          
          email:'',
          password:'',
            
      }
    },

    methods:{

        Funcion_Logearse: function(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            () => {
            Swal({ title: "Inicio de sesion exitoso" , text: "la sesion se ha iniciado sin problemas, ya puede comenzar a utilizar la plataforma", icon: "success"})
            },
            (err) =>{
            Swal({ title: "Error!", text: err.message, icon: "error"})
            }
        );
        },

    },


}
</script>