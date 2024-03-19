<script setup>

import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>


<template>

<div    style="width: 350px;" >

    <div class="d-flex justify-content-between">
      <i style="font-size:36px"  class="bi bi-cash-coin text-warning"></i> 
      <i  @click="$emit('close')" class="display-1 bi bi-x-lg"></i>      
    </div>

    Iniciamos el proceso de Pago Scanea el codigo QR o algo lindo o datos de transferencia


    <br>
    <br>
    <br>
    <div class="border border-2 p-4 w-50 text-center" @click="showTransferData=!showTransferData"> Transferencia </div>
    
    <div v-if="showTransferData==true"> 
       Nombre:  Juan Morales<br>
       Rut:  13.909.371-2<br>
       Banco:  Banco de Chile<br>
       Tipo:  Cuenta Corriente<br>
       Numero Cta: 9626000<br>
       <br>
       <text>Importante.</text> <br>
       Debe indicar el numero #<b>  {{offer.id}} </b> en el mensaje. 
       <br>
       O puede enviar evidencia de transaccion <b> alejandro2141@gmail.com </b>
       <br>
       O puede enviar evidencia whatsApp a <b>+56975397200</b>
       <br>


       
    </div>
    
    
    <br>

    <div class="border border-2 p-4 w-50 text-center"> WebPay </div>
    

</div>

</template>

<style scoped>

</style>


<script>

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

