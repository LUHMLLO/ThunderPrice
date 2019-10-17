<template class="">
<div class="">






<!--================Single Product Area =================-->
<div class="product_image_area">
<div class="container">
    <div class="row s_product_inner">
        <div class="col-lg-6 d-flex justify-content-center align-items-center">
            <div style="padding:10px; position:relative; width:100%; margin:auto !important;">
                <img class="img-fluid" v-bind:src="Imagen" style="min-width:100%;max-width:100%; object-fit:cover !important; margin:auto !important;">
            </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
            <div class="s_product_text">
                <h3>{{Nombre}}</h3>
                <h2>${{Precio}}</h2>
                <ul class="list mt-4">
                    <li><a class="active" href="#"><span>Category</span>: {{Categoria}}</a></li>
                    <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                </ul>
                    
                <div class="mt-4">
                    <a class="button primary-btn" href="#">Add to Cart</a>               
                </div>


            </div>
        </div>
    </div>
</div>
</div>
<!--================End Single Product Area =================-->


<!--================Product Description Area =================-->
<section class="product_description_area">
    <div class="container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                    aria-selected="false">Specification</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <p>{{Descripcion}}</p>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="table-responsive">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>
                                    <h5>Width</h5>
                                </td>
                                <td>
                                    <h5>128mm</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>Height</h5>
                                </td>
                                <td>
                                    <h5>508mm</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>Depth</h5>
                                </td>
                                <td>
                                    <h5>85mm</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>Weight</h5>
                                </td>
                                <td>
                                    <h5>52gm</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>Quality checking</h5>
                                </td>
                                <td>
                                    <h5>yes</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>Freshness Duration</h5>
                                </td>
                                <td>
                                    <h5>03days</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>When packeting</h5>
                                </td>
                                <td>
                                    <h5>Without touch of hand</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5>Each Box contains</h5>
                                </td>
                                <td>
                                    <h5>60pcs</h5>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        
        </div>
    </div>
</section>
<!--================End Product Description Area =================-->





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
}
</script>