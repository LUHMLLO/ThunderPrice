<template>
    <div>
        
        

        <div class="welcome-box">

            <h1>Bienvenido a Thunder Price</h1>
            <h2>{{usuario}}</h2>
            
            <button @click="Funcion_desloguearse">Cerrar sesion</button>
        </div>





    </div>
</template>

<script>
import firebase from '../firebase.js'
import Swal from 'sweetalert'
export default {
    name: 'inicio',
    data(){
        return{
            usuario: null,
        }
    },

    mounted(){       
        if(firebase.auth().currentUser){
            this.usuario = firebase.auth().currentUser.email
        }
    },

    methods:{
        
        
        Funcion_desloguearse: function(){
           Swal({ title: "Cerrando sesion de "+this.usuario , text: "vuelva pronto!", icon: "warning"})
           .then(() => {
                 firebase.auth().signOut();
               }
            )
        },


        
    }



}
</script>