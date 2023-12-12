<script setup>
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryObject from './InventoryObject.vue'
import InventoryList from './InventoryList.vue'
import InventoryObjectEmpty from './InventoryObjectEmpty.vue'
import ShowSenderTransactionConfirmation from './ShowSenderTransactionConfirmation.vue'

</script>


<template>
<div    style="width: 350px;" >
  <!-- ******************************* -->
  <!--             SHOW STEP 1         -->
  <!-- ******************************* -->
    
  <div v-if="showPaymentStep0" >


    <div class="d-flex justify-content-end"> <i  @click="$emit('close')" class="display-1 bi bi-x-lg"></i>  </div>

        <p style="font-size:20px" >Propuestas de Intercambio ha finalizado sin acuerdo</p>
        

          <div  style="font-size:16px "  class="d-flex justify-content-center">
              Objetos de Kakito_123:  
          </div>
         
        <!-- LIST PARTNER OFFER OBJECT  -->
          <div v-for="obj in partnerOfferObjects"  > 
              <InventoryObject  :horizontal_short='true' :showProductDetails='true'   @click="showModalDetails=true;   objectDetails=obj" :object="obj" class="mb-1"  /> 
          </div>
        <!-- END LIST PARTNER OFFER OBJECT  -->
          
          <div  style="font-size:16px "  class="m-2">
            Tus Objetos : 
          </div>
        
        <!-- LIST MY OFFER OBJECT  -->
           <div v-for="obj in yourOfferObjects"  class="mb-4" > 
              <InventoryObject  :horizontal_short='true' :showProductDetails='true' @click="showModalDetails=true; objectDetails=obj" :object="obj"    class="mb-1" /> 
          </div>
        <!-- END LIST MY OFFER OBJECT  --> 
                
          <!--
          <div class="d-flex justify-content-between">  
            <div class="form-check-label" for="flexCheckChecked">
              Estas Dispuesto a cambiar por otros productos. 
            </div >
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          </div>
        -->
      
        <br>
          <!-- FOOTER -->

          <!-- END FOOTER -->
    </div>

   

    <!-- ******************************* -->
    <!--       CANCEL PROPOSAL FLOW      -->
    <!-- ******************************* -->
    <div v-if="showPaymentStep1" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
        <p style="font-size:20px"> Para proceder con el pago: </p><br>
        
        <div class="d-flex justify-content-around">     
            <button @click="showPaymentStep2=true;showPaymentStep1=false ;" type="button" class="btn btn-success">Siguiente </button>
        </div>
    </div>

    <!-- ******************************************* -->
    <!--       CANCEL CONFRIM PROPOSAL FLOW          -->
    <!-- ******************************************* -->
    <div v-if="showPaymentStep2" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
            <p style="font-size:20px" class="text-center">  Debetransferfir a la siguiente cuenta, enviando un correo a . 
            </p>
        <br>
        <p style="font-size:20px" @click="$emit('close')" class="text-center text-success"> 
          <i class="bi bi-arrow-left-square"></i> Regresar 
        </p>

    </div>

    
     <!-- SPACE FILLER -->
     <p style="height:300px">
    </p>



</div>
</template>

<style scoped>

</style>


<script>

export default {
  
  data : function() {
      return {
        showPaymentStep0 : true ,
        showPaymentStep1 : false,
        showPaymentStep2 : false,
        showPaymentStep3 : false,

        yourOfferObjects  : [ {id:1 , name:"My inv PS 1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                              {id:1 , name:"My bici aro 20", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                              {id:1 , name:"My inv PS 1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            ],

        partnerOfferObjects : [ 
                            {id:1 ,name:"Partner Inv ps1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:2 ,name:"Partner Inv 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                              ],

        }
  },
  props: ['session_data'],
  emits: ['close'],

created() {
  console.log("APP CREATED")
    },

methods: {
    
    closeModalObjectDetails()
    {
      this.showModalDetails= false
    },

    goToMainSearch()
    {
      console.log("goTOMainSearch")
    },

    },

watch : {
      }
}
</script>

