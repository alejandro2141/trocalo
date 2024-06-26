<script setup  >

import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>


<template>

<div    style="width: 350px;" >

    <div class="d-flex justify-content-between">
      <i style="font-size:36px"  class="bi bi-cash-coin text-warning"></i> 
      <i  @click="$emit('close')" class="display-1 bi bi-x-lg"></i>      
    </div>

    Actualmente contamos con las siguientes formas de pago. 


    <br>
    <br>
    <br>

    <div class="d-flex justify-content-center">
      <div class="border border-2 p-4 w-50 text-center" @click="showTransferData=!showTransferData"> Transferencia </div>
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
        }
  },
  props: ['session_data', 'offer' ],
  emits: ['close'],

created() {
          },

methods: {
        },

watch : {
      }

}
</script>

