<template class="">
<div class="">


  
  <!--================Login Box Area =================-->
	<section class="login_box_area section-margin">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="login_box_img">
						<div class="hover">
							<h4>New to our website?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<router-link class="button button-account" to="/login">Login Now</router-link>					
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="login_form_inner">
						<h3>Account recovery</h3>
						<form class="row login_form" action="#/" id="contactForm" @submit.prevent>
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="name" name="name" placeholder="emailAddress" onfocus="this.placeholder = ''" onblur="this.placeholder = 'emailAddress'"  v-model="emailAddress">
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="button button-login w-100" @click="Funcion_Recuperacion">Send Request</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--================End Login Box Area =================-->

</div>
</template>



<script>
import firebase from '../firebase.js'
import Swal from 'sweetalert';
export default {
    name:'Recovery',
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


};
  import "../assets/vendors/jquery/jquery-3.2.1.min.js";
  import "../assets/vendors/bootstrap/bootstrap.bundle.min.js";
  import "../assets/vendors/owl-carousel/js/owl.carousel.js";
  import "../assets/vendors/skrollr.min.js";
  import "../assets/vendors/nice-select/jquery.nice-select.min.js";
  import "../assets/vendors/jquery.ajaxchimp.min.js";
  import "../assets/vendors/mail-script.js";
  import "../assets/js/main.js"; 
</script>
<style>
    @import"../assets/vendors/bootstrap/bootstrap.min.css";
    @import"../assets/vendors/fontawesome/css/all.min.css";
    @import"../assets/vendors/themify-icons/themify-icons.css";
    @import"../assets/vendors/linericon/style.css";
    @import"../assets/vendors/nice-select/nice-select.css";
    @import"../assets/vendors/nouislider/nouislider.min.css";
    @import"../assets/vendors/owl-carousel/scss/owl.theme.default.css";
    @import"../assets/vendors/owl-carousel/scss/owl.carousel.css";   
    @import"../assets/scss/style.css";
</style>