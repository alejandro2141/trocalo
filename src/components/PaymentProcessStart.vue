<script setup  >

import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>


<template>

<div    style="width: 350px;" >

  <div v-if="showSelectPaymentMeans">


      <div class="d-flex justify-content-between">
        <i style="font-size:36px"  class="bi bi-cash-coin text-warning"></i> 
        <i  @click="$emit('close')" class="display-1 bi bi-x-lg"></i>      
      </div>
      Actualmente contamos con las siguientes formas de pago. 
      <br>
      <br>
      <br>
      <button @click="showPaymentOnceDeliver=!showPaymentOnceDeliver ;showTransferData = false ; buttonMsg = 'Contra Entrega' " type="button" class="btn" :class="{ 'btn-success': showPaymentOnceDeliver ,  'btn-secondary': !showPaymentOnceDeliver  }">
        <i class="bi bi-cash-stack "></i>  
        Efectivo contra entrega
      </button>
          <div v-if="showPaymentOnceDeliver==true"> 
            <br>
            Registraremos que el pago se realizará contra entrega del objeto. 
            <br>
          </div>
      <br>
      <br>
      <button @click="showTransferData=!showTransferData; showPaymentOnceDeliver = false ; buttonMsg = 'Transferencia'" type="button" class="btn" :class="{ 'btn-success': showTransferData ,  'btn-secondary': !showTransferData  }">
        <i class="bi bi-bank"></i>  
        Transferencia
      </button>

          <div v-if="showTransferData==true"> 
            <br>
            En un plazo maximo de <text class="text-warning">2 dias</text> <br>
            Usted debera realizar una transaccion a la siguiente cuenta:  
            <br>
            <ul>
              <li> Nombre:  Juan Morales</li>
              <li> Rut:  13.909.371-2</li>
              <li>Banco:  Banco de Chile</li>
              <li>Tipo:  Cuenta Corriente</li>
              <li>Numero Cta: 9626000</li>
              <li>Indicando numero #<b>{{offer.id}}</b> en el mensaje de su transferencia. </li>
           </ul>
          </div>


      <div class="w-100 d-flex text-center m-3" style="position: fixed; bottom:0%;">
          <button @click="sendPaymentMethod(); showSelectPaymentMeans=false"  type="button"  class="btn btn-success">
              Continuar {{buttonMsg}}
          </button>

      </div>


</div>

<!-- PAY TO DELIVER-->
<div v-if="showPaymentOnceDeliver && showSelectPaymentMeans == false ">

  <br>
  <br>
    <p class="text-center">
      <i class="bi bi-emoji-kiss" style="font-size:46px"></i>
    </p>
  <br>
  
  Tu opcion de pago ha sido registrada.  <br>
  Usted debera pagar <text class="text-warning">$ {{offer.amount}} </text> a nuestro Repartidor. 
    <p>
      Desde ahora puede seguir este Intercambio en Enviadas-> En Despacho 
    </p>
  <br>
  <br>
  <br>
  <br>
  <br>
  <p class="text-center">
    <button @click="console.log('redirecto to view proposal'); $router.push({ name: 'Welcome' })"  type="button" class="btn btn-success">Ir al Inicio</button>
  </p>

</div>

<!-- PAY TRANSFER -->
<div v-if="showTransferData  && showSelectPaymentMeans == false">

  <br>
  <br>
    <p class="text-center">
      <i class="bi bi-emoji-kiss" style="font-size:46px"></i>
    </p>
  <br>
  
  Tu opcion de pago ha sido registrada.  <br>
  Usted tiene <text class="text-warning"> 2 dias </text> para  transferir <text class="text-warning">$ {{offer.amount}} </text> a la cuenta indicada. 
  <br>
  Hemos enviado a su correo registrado los datos de transferencia.  
    <p>
      Desde ahora puede seguir este Intercambio en Enviadas-> En Despacho 
    </p>
  <br>
  <br>
  <br>
  <br>
  <br>
  <p class="text-center">
    <button @click="console.log('redirecto to view proposal'); $router.push({ name: 'Welcome' })"  type="button" class="btn btn-success">Ir al Inicio</button>
  </p>

</div>




<!--
    <div class="d-flex justify-content-center">
       <div class="border border-2 p-4 w-50 text-center" @click="showTransferData=!showTransferData">  Transferencia </div>
    </div>

    <div v-if="showTransferData==true"> 
      Debe realizar una transaccion a la siguiente cuenta:  
      <br>

       Nombre:  Juan Morales<br>
       Rut:  13.909.371-2<br>
       Banco:  Banco de Chile<br>
       Tipo:  Cuenta Corriente<br>
       Numero Cta: 9626000<br>
       <br>
       <text>Importante.</text> <br>
       Debe indicar el numero de transacción #<b>  {{offer.id}} </b> en el mensaje de su transferencia. 
       <br>
       Tambien puede enviar información de la transaccion al correo: <b> alejandro2141@gmail.com </b>
       <br>
       o al whatsApp a <b>+56975397200</b>
       <br>
    </div>
    


    <div class="d-flex justify-content-center">
      <div class="border border-2 p-4 w-50 text-center" @click="showTransferData=!showTransferData">  Pago Contra Entrega </div>
    </div>

    <div v-if="showTransferData==true"> 
      Deberá cancelar el monto {{offer.amount}} 
      <br>

       Nombre:  Juan Morales<br>
       Rut:  13.909.371-2<br>
       Banco:  Banco de Chile<br>
       Tipo:  Cuenta Corriente<br>
       Numero Cta: 9626000<br>
       <br>
       <text>Importante.</text> <br>
       Debe indicar el numero de transacción #<b>  {{offer.id}} </b> en el mensaje de su transferencia. 
       <br>
       Tambien puede enviar información de la transaccion al correo: <b> alejandro2141@gmail.com </b>
       <br>
       o al whatsApp a <b>+56975397200</b>
       <br>


       
    </div>


-->

    <!--
    <br>

    <div class="border text-secondary border-2 p-4 w-50 text-center border-secondary"> WebPay </div>
  -->

</div>

</template>

<style scoped>

</style>


<script  >

export default {
  
  data : function() {
      return {
        showTransferData : false ,
        showPaymentOnceDeliver : false ,
        buttonMsg : "" , 
        showSelectPaymentMeans : true ,
        PaymentBankTransfer : false ,
        PaymentOnceDeliver : false ,

        }
  },
  props: ['session_data', 'offer' ],
  emits: ['close'],

created() {
          },

methods: {

      async sendPaymentMethod()
      {
        let payment_type = 0 

        if (this.showTransferData)
        {
          payment_type = 1
        }

        if (this.showPaymentOnceDeliver)
        {
          payment_type = 2
        }

       console.log("Send Payment Method") 
       let json_request = 
        {
          session_data : this.session_data,
          proposal_id  : this.offer.id ,
          payment_type : payment_type   
        }

        let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_update_proposal_payment", json_request);
        console.log("/private_update_proposal_payment Response:"+JSON.stringify(jsonResponse.data))
    
        let response = jsonResponse.data

      },






        },

watch : {
      }

}
</script>

