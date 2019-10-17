<template class="">
<div class="">






  <!--================Single Product Area =================-->
	<div class="product_image_area">
		<div class="container">
			<div class="row s_product_inner">
				<div class="col-lg-6">
                    <div style="padding:10px; position:relative; width:100%; margin:auto !important;">
                        <img class="img-fluid" v-bind:src="Imagen" style="min-width:100%;max-width:100%; object-fit:cover !important; margin:auto !important;">
                    </div>
				</div>
				<div class="col-lg-5 offset-lg-1">
					<div class="s_product_text">
                    <h3>{{Nombre}}</h3>
                    <h2>${{Precio}}</h2>
						<ul class="list">
                            <li><a class="active" href="#"><span>Category:</span>{{Categoria}}</a></li>
							<li><a href="#"><span>Availibility:</span>In Stock</a></li>
						</ul>
                        <p>{{Descripcion}}</p>
						<div class="product_count">
							<a class="button primary-btn" href="#">Add to Cart</a>               
						</div>
						<div class="card_area d-flex align-items-center">
							<a class="icon_btn" href="#"><i class="lnr lnr lnr-diamond"></i></a>
							<a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--================End Single Product Area =================-->






</div>
</template>



<script>
import {db} from '../firebase.js'
export default {
name:'Producto_detalle',
data(){
    return{
        Producto_id: null,
        Imagen:null,
        Nombre:null,
        Precio:null,
        Categoria:null,
        Descripcion:null,
    }
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
beforeRouteEnter(to, from, next){
    db.collection('Productos').where('Producto_id','==',to.params.Producto_id).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
                    //console.log(doc.data())
            next(vm => {
                vm.Producto_id = doc.data().Producto_id
                vm.Nombre = doc.data().Nombre
                vm.Precio = doc.data().Precio
                vm.Imagen = doc.data().Imagen
                vm.Categoria = doc.data().Categoria
                vm.Descripcion = doc.data().Descripcion
            })
        })
    })
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
watch: {
    '$router': 'fetchData'
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    methods: {
        fetchData(){
            db.collection('Productos').where('Producto_id','==',this.$route.params.Producto_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log(doc.data())
                    this.Producto_id = doc.data().Producto_id
                    this.Nombre = doc.data().Nombre
                    this.Precio = doc.data().Precio
                    this.Imagen = doc.data().Imagen
                    this.Categoria = doc.data().Categoria
                    this.Descripcion = doc.data().Descripcion
                })
            })
        }
    },
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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