<template>
    <div>



  
  <!--================Order Details Area =================-->
  <section class="order_details section-margin--small">
    <div class="container">
      <div class="row mb-5" v-for="(ReciboItem, index) in Recibo" :key="index">
        <div class="col-md-4 col-xl-4">
          <div class="confirmation-card">
            <h3 class="billing-title">Order Info</h3>
            <table class="order-rable">
              <tr>
                <td>Order number</td>
                <td>: 60235</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>: Oct 03, 2017</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>: {{ReciboItem.Recibo_Total}}</td>
              </tr>
              <tr>
                <td>Payment method</td>
                <td>: Check payments</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="col-md-8 col-xl-8">
          <div class="confirmation-card table-responsive">
                <h3 class="billing-title">Order Details</h3>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>Pixelstore fresh Blackberry</p>
                        </td>
                        <td>
                          <h5>x 02</h5>
                        </td>
                        <td>
                          <p>$720.00</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================End Order Details Area =================-->






    </div>
</template>


<script>
import {firebase,db} from '../firebase.js';
//import Swal from 'sweetalert';
export default {
    name:'Confirmation',
    data(){
        return{
            Recibo:[],
        }
    },

    
    created(){
          db.collection('Recibos').where('Comprador_id','==', firebase.auth().currentUser.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
              //console.log(doc.data())
                 const data ={
                   'Recibo_id': doc.data().Recibo_Total,
                   'Recibo_Total': doc.data().Total,
                 }
                 this.Recibo.push(data)
            })
          });      
    },

}
</script>