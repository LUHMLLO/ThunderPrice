<template>
<div class="centering-body">

  <form @submit.prevent class="custom-form shadow roundify">


    
   <h2 class="text-bold">Crear cuenta</h2>
   <br>

   <div class="center-this">
        <div class="field-wrapper">
                <input type="text" required v-model="nombre">
                <label>
                    <span>
                        <i class='uil uil-user'></i>
                        <p>Nombre completo</p>
                    </span>
                </label>
        </div>
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
   </div>


   <div class="custom-form-botton-actions">
    <button @click="Funcion_Registrarse" class="custom-form-submit rounded accent-bg">Finalizar</button>
    <router-link to="/logeo" class="custom-form-redirect-link accent-color">ya poseo una cuenta</router-link>
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

          nombre:'',
          email:'',
          password:'',
            
      }
    },

    methods:{

        Funcion_Registrarse: function(){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            () => {
            Swal({ title: "Registro de cuenta exitoso" , text: "la cuenta se ha registrado sin problemas, ya puede comenzar a utilizar la plataforma", icon: "success"})
            },
            (err) =>{
            Swal({ title: "Error!", text: err.message, icon: "error"})
            }
        );
        },

    },


}
</script>