<script setup  >
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryObject from './InventoryObject.vue'
import InventoryList from './InventoryList.vue'
import InventoryObjectEmpty from './InventoryObjectEmpty.vue'
import ShowSenderTransactionConfirmation from './ShowSenderTransactionConfirmation.vue'

import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>

<template>
<div  class="position-absolute top-0 start-0 bg-dark w-100"  >

   
       <!-- TITLE -->
    <div  class="w-100 d-flex justify-content-center"  > 
      <div style="width:350px"> 
       
          <br>
          
          <div style="font-size:20px" class="w-100 text-center">
            Propuesta de Intercambio Enviada 
          </div>
          <br>

          <div style="font-size:16px" >
            <p>

            <text  v-if="proposal_summary!=null && proposal_summary.objectYouWant!=null" class="fw-bold">  
                {{proposal_summary.objectYouWant.owner_name}}
            </text>
              podrá  Aceptar o Rechazar tu Propuesta.
            
            </p> 
            
                        
            Cuando {{proposal_summary.objectYouWant.owner_name}} acepte,  tendrás 3 dias para pagar el  Retiro y Despacho de los objetos<br>
            <text style="font-size:20px" class="text-warning"> $10.000 </text>Clp <br>
            <br>
            Tan pronto el pago este realizado, el retiro del producto se realizara en tu dirección registrada: 

            <i style="font-size:40px" class="bi bi-geo-alt text-warning"></i>

            <br>{{session_data.address_street}} 
             {{session_data.address_number}}
             {{session_data.address_apartment}} 
             {{session_data.address_zone1}}  
             {{session_data.address_zone2}}
             {{session_data.address_city}}
            <br>{{session_data.address_country}}
            <br>{{session_data.token}} 
            
          </div>
          
          <br>
          
          <div style="font-size:16px">
            Desde ahora puedes seguir esta propuesta en <a @click="$router.push({ name: 'ViewProposalsSent' })" class="text-success"> Enviadas</a> 
          </div>

          <!-- END FOOTER -->
          <div style="height:200px"></div>
       
      </div>  

    </div>

        <!-- FOOTER -->
        <div v-if="true" class="fixed-bottom  d-flex justify-content-center  text-success  bg-dark p-3 ">  
              <div @click="goToNextStep()" style="width:350px" class="d-flex justify-content-center  "> 

                <button type="button" style="font-size:36px" class="btn btn-success">Ir al Inicio 
                   
                </button>

              </div>
              <br>
            </div>
          <!-- END FOOTER -->






</div>

</template>

<style scoped>

</style>


<script  >


export default {

  
  data : function() {
      return {
      
        }
  },
  props: ['session_data','proposal_summary'],
  emits: ['nextStep','closeModal'],

created() {
    console.log("Check Before Send : OBJECTS: "+JSON.stringify(this.proposal_summary) )
    },

methods: {
  
    closeModal()
    {
        this.$emit('closeModal')
    },


    goToNextStep()
    {
      // this.$emit('nextStep',this.proposal_summary)
       this.$emit('closeModal')
    },


    },

watch : {
      }
}
</script>

