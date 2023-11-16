<template>
<div    style="width: 350px;" >
    

  <!-- ******************************* -->
  <!--             SHOW STEP 1         -->
  <!-- ******************************* -->
    
  <div v-if="showStep1" >
        <p style="font-size:20px" >Propuesta de Intercambio Recibida</p>
       <!-- TITLE -->
          <div style="font-size:20px" class="d-flex justify-content-between">
              <div>Propuesta válida por: 25 dias </div>
          </div>       
          <div  style="font-size:16px "  class="d-flex justify-content-center">
              Kakito_123 esta interesado en los siguientes objetos:  
          </div>
         
          <!-- LIST PARTNER OBJECT-->
          <div  class="">
              <InventoryObject class="m-1" :showConfirmMode="true"  :showProductDetails="false" /> 
              <InventoryObject class="m-1" :showConfirmMode="true"  :showProductDetails="false" /> 
          </div>
          <!-- END LIST PARTNER OBJECT-->
          
          <div  style="font-size:16px "  class="m-2">
            Y propone cambiarlo por los siguientes objetos: 
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

              <div @click="showAcceptProposal=true; showStep1=false "  class="">
                <button type="button" class="btn btn-success">Acepto</button>
              </div>

              <div @click="showEditProposal=true;  showStep1=false "  class="">
                <i class="text-success bi bi-pencil"></i>
              </div>

              <div @click="showRejectProposal=true;  showStep1=false "  class="">
                <button type="button" class="btn btn-danger">Rechazo</button>
              </div>

            </div>

          </div>
          <!-- END FOOTER -->
    </div>
  <!-- ******************************* -->
  <!--       END SHOW STEP 1           -->
  <!-- ******************************* -->

  <!-- ******************************* -->
  <!--       ACCEPT PROPOSAL FLOW      -->
  <!-- ******************************* -->
    <div v-if="showAcceptProposal" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
        <p style="font-size:20px"> ¿ Esta seguro que desea aceptar este cambio ?</p><br>
        
        <div class="d-flex justify-content-around">
            <button @click="showAcceptProposalConfirmation=true; showAcceptProposal=false;showStep1=false" type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
        </div>
    </div>

    <div v-if="showAcceptProposalConfirmation" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
        <p style="font-size:20px"> Perfecto, ya estamos enviando la notificacion a Kakito_123 que has aceptado el intercambio de objetos. 
          <br> El deberá confirmar en un plazo máximo de 24 horas
        </p>
        
        <br>
        

        <div class="fixed-bottom  d-flex justify-content-center display-1 text-success w-100 bg-dark p-3 " >
            <i class="bi bi-house"></i>
        </div>

    </div>
  <!-- ******************************* -->
  <!--       END ACCEPT PROPOSAL FLOW         -->
  <!-- ******************************* -->




  <!-- ******************************* -->
  <!--         SHOW EDIT PROPOSAL      -->
  <!-- ******************************* -->
    
  <div v-if="showEditProposal" style="width: 350px;">
       <!-- TITLE -->
          <div  style="font-size:16px "  class="d-flex justify-content-center">
              kakito_123 esta interesado en el siguiente objeto/s: 
          </div>
          <!-- LIST PARTNER OBJECT-->
          <div  class="d-flex align-content-stretch flex-wrap">
              <InventoryObject :showDeleteOption="true"  :showProductDetails="true" /> 
              <InventoryObjectEmpty   @click="showPartnerInventory=!showPartnerInventory; showMyInventory=false ;showStep2=false " />
          </div>
          <!-- END LIST PARTNER OBJECT-->

        
          
          <div  style="font-size:16px "  class="m-2">
                Y te ofrece los siguientes objetos
          </div>
           <!-- LIST MY OBJECT  -->
          <div  class="d-flex align-content-stretch flex-wrap">
              <InventoryObject  :showDeleteOption="true" :showProductDetails="true" /> 
              <InventoryObjectEmpty   @click="showMyInventory=!showMyInventory;showPartnerInventory=false ;showStep2=false " />
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

          <div class="d-flex justify-content-between">
              <div>Propuesta válida por: </div>
          
              <div class="w-25">
                  <select class="form-control" id="sel1">
                    <option>1 dia</option>
                    <option>2 dias</option>
                    <option>3 dias</option>
                    <option>4 dias</option>
                  </select>
              </div>
          </div>

          <!-- FOOTER -->
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div   class="d-flex justify-content-center">
                <div @click="showEditProposalSummary=true; showEditProposal = false">
                  <i class="bi bi-caret-right"></i> 
                  <i class="bi bi-caret-right"></i> 
                </div>
              </div>
          </div>
          <!-- END FOOTER -->
      </div>
  <!-- ******************************* -->
  <!--         SHOW EDIT PROPOSAL      -->
  <!-- ******************************* -->
   

  <!-- ******************************* -->
  <!--         SHOW EDIT PROPOSAL  SUMMARY      -->
  <!-- ******************************* -->
    
    <div v-if="showEditProposalSummary" style="width: 350px;">
    
         <!-- TITLE -->
            <div  style="font-size:16px "  class="d-flex justify-content-center">
              Resumen propuesta modificada
            </div>
         
          <br>
          
          <div  style="font-size:16px "  class="d-flex justify-content-center">
              Objeto queinteresan a kakito_123
          </div>
          <!-- LIST PARTNER OBJECT-->
          <div  class="">
              <InventoryObject class="m-1" :showConfirmMode="true"  :showProductDetails="false" /> 
              <InventoryObject class="m-1" :showConfirmMode="true"  :showProductDetails="false" /> 
          </div>
          <!-- END LIST PARTNER OBJECT-->

        
          
          <div  style="font-size:16px "  class="m-2">
                Te ofrece los siguientes objetos:
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
        
          <div style="font-size:20px" class="d-flex justify-content-between">
              <div>Propuesta válida por: 25 dias </div>
          </div>


          <!-- FOOTER -->
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  

            <div class="d-flex justify-content-between">

              <div @click="showStep2=true; showStep3 = false"  class="d-flex justify-content-center">
                <i class="bi bi-skip-start"></i> 
              </div>

              <div @click="showEditProposalSummaryConfirmation=true; showEditProposalSummary = false"  class="d-flex justify-content-center">
                  <i class="bi bi-caret-right"></i> 
                  <i class="bi bi-caret-right"></i> 
                  <i class="bi bi-caret-right"></i> 
              </div>

            </div>

          </div>

    </div>
  <!-- ******************************* -->
  <!--   SHOW EDIT PROPOSAL SUMMARY    -->
  <!-- ******************************* -->

  <!-- ******************************* -->
  <!--  SHOW EDIT PROPOSAL  SUMMARY Confirmation   -->
  <!-- ******************************* -->
    
    <div v-if="showEditProposalSummaryConfirmation" style="width: 350px;">
    
          <!-- TITLE -->
          <br>
          <div style="font-size:20px">
            Modificaciones a la Propuesta de Intercambio Enviada  
          </div>
          <br>

          <div style="font-size:20px">
          </div>
          <br>
          
          <div style="font-size:20px">
            Puede seguir esta propuesta en <text class="text-success">Enviadas</text>
          </div>

          <!-- END FOOTER -->

          <!-- FOOTER -->
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div class="d-flex justify-content-center">
                  <i @click="showStep2=true; showStep1 = false ; showPartnerInventory=false ; showMyInventory=false " class="bi bi-house"></i> 
              </div>
          </div>
          <!-- END FOOTER -->

    </div>
<!-- ******************************* -->
<!--         SHOW EDIT PROPOSAL  SUMMARY    -->
<!-- ******************************* -->


   








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

        showRejectProposal : false ,
        showAcceptProposal : false ,
        showAcceptProposalConfirmation : false ,
        
        showEditProposal : false , 
        showEditProposalSummary : false ,
        showEditProposalSummaryConfirmation : false ,
       
        showStep1 : true , 
        showStep2 : false , 
        showStep3 : false , 
        showStep4 : false , 
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

