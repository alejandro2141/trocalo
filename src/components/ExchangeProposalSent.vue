<template>
<div    style="width: 350px;" >
  <!-- ******************************* -->
  <!--             SHOW STEP 1         -->
  <!-- ******************************* -->
    
  <div v-if="showStep1" >
        <p style="font-size:20px" >Propuestas de Intercambio Enviada</p>
       <!-- TITLE -->
          <div style="font-size:20px" class="d-flex justify-content-between">
              <div>Propuesta válida por: 25 dias </div>
          </div>       
          <div  style="font-size:16px "  class="d-flex justify-content-center">
              Te interesan los siguientes objetos de Kakito_123:  
          </div>
         
          <!-- LIST PARTNER OBJECT-->
          <div  class="">
              <InventoryObject class="m-1" :showConfirmMode="true"  :showProductDetails="false" /> 
              <InventoryObject class="m-1" :showConfirmMode="true"  :showProductDetails="false" /> 
          </div>
          <!-- END LIST PARTNER OBJECT-->
          
          <div  style="font-size:16px "  class="m-2">
            Y propones cambiarlos por los siguientes objetos: 
          </div>
           <!-- LIST MY OBJECT  -->
          <div  class="d-flex align-content-stretch flex-wrap">
             <InventoryObject class="m-1" :showConfirmMode="true"  :showProductDetails="false" /> 
             <InventoryObject class="m-1" :showConfirmMode="true"  :showProductDetails="false" /> 
          </div>
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
          <div class="display-1 text-success w-100 bg-dark p-3 ">  

            <div class="d-flex justify-content-between">


              <div @click="showCancelMessage=true;  showStep1=false "  class="">
                <button type="button" class="btn btn-danger">Cancelar Propuesta</button>
              </div>

            </div>

          </div>
          <!-- END FOOTER -->
    </div>

   

    <!-- ******************************* -->
    <!--       ACCEPT PROPOSAL FLOW      -->
    <!-- ******************************* -->
    <div v-if="showCancelMessage" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
        <p style="font-size:20px"> ¿ Esta seguro que desea Cancelar esta oferta ?</p><br>
        
        <div class="d-flex justify-content-around">
            <button @click="showCancelMessage=false ; showAcceptProposal=false;showStep1=true" type="button" class="btn btn-success">Regresar</button>
            <button @click="showCancelMessageConfirmation=true;showCancelMessage=false ; " type="button" class="btn btn-danger">Si deseo Cancelar esta Oferta </button>
        </div>
    </div>

    <!-- ******************************************* -->
    <!--       ACCEPT PROPOSAL FLOW CONFIRMATION     -->
    <!-- ******************************************* -->
    <div v-if="showCancelMessageConfirmation" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
        <p style="font-size:20px"> Propuesta Cancelada  
        </p>
        <br>
        
        <div class="fixed-bottom  d-flex justify-content-center display-1 text-success w-100 bg-dark p-3 " >
            <i class="bi bi-house"></i>
        </div>

    </div>

     <!-- SPACE FILLER -->
     <p style="height:300px">
    </p>



</div>
</template>

<style scoped>

</style>


<script>
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryObject from './InventoryObject.vue'
import InventoryList from './InventoryList.vue'
import InventoryObjectEmpty from './InventoryObjectEmpty.vue'
import ShowSenderTransactionConfirmation from './ShowSenderTransactionConfirmation.vue'


export default {

  components: {
    InventoryObjectDetailed,InventoryList,InventoryObjectEmpty,InventoryObject,ShowSenderTransactionConfirmation
  },
  
  data : function() {
      return {
        showStep1 : true , 
        showCancelMessage : false ,
        showCancelMessageConfirmation : false ,



        }
  },
  props: ['session_data'],
  emits: ['closeThisModal'],

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

