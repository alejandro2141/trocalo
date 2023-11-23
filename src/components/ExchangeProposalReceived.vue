<template>
<div    style="width: 350px;" >
    

  <!-- ******************************* -->
  <!--             SHOW STEP 1         -->
  <!-- ******************************* -->
    
  <div v-if="showStep1" >
        <p style="font-size:20px" >Propuesta de Intercambio Recibida</p>
       <!-- TITLE -->
          <div style="font-size:20px" class="mb-4 d-flex justify-content-between">
              <div>Propuesta válida por:  25 dias </div>
          </div>       
          
          <div  style="font-size:16px "  class="d-flex justify-content-center">
              Kakito_123 esta interesado en los siguientes objetos:  
          </div>
          <!-- LIST MY OFFER OBJECT  -->
          <div v-for="obj in yourOfferObjects" :key="index" class="mb-4" > 
              <InventoryObject @click="showModalDetails=true; objectDetails=obj" :object="obj"  :showConfirmMode="true"  :showProductDetails="false" class="mb-1" /> 
          </div>
          <!-- END LIST MY OFFER OBJECT  --> 
         
          <div  style="font-size:16px "  class="m-2">
            Y propone cambiarlo por los siguientes objetos: 
          </div>
           <!-- LIST PARTNER OFFER OBJECT  -->
          <div v-for="obj in partnerOfferObjects" :key="index" > 
              <InventoryObject @click="showModalDetails=true; objectDetails=obj" :object="obj"  :showConfirmMode="true"  :showProductDetails="false"  class="mb-1"  /> 
          </div>
          <!-- END LIST PARTNER OFFER OBJECT  -->

          
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
        <!--
          <div  class="d-flex align-content-stretch flex-wrap">
              <InventoryObject :showDeleteOption="true"  :showProductDetails="true" /> 
              <InventoryObjectEmpty   @click="showPartnerInventory=!showPartnerInventory; showMyInventory=false ;showStep2=false " />
          </div>
        -->
          <!-- END LIST PARTNER OBJECT-->

          <!-- LIST MY OBJECT-->
          <div  class="d-flex align-content-stretch flex-wrap">

            <div v-for="obj in yourOfferObjects " :key="index" > 
              <InventoryObject :object=obj  :showProductDetails="true"  class="m-1" @click="showPartnerObjectDetailed=true"/> 
              <div  style="border-radius: 25px;" class="m-1 d-flex justify-content-center text-danger border border-1 border-danger" @click="removeFromObjectProposalList(obj)"> <i class="bi bi-x-lg "></i> </div>
            </div>

            <InventoryObjectEmpty   @click="showMyInventory=!showMyInventory; showMyInventory=false ; showStep2=false " />
          </div>

          
          <div  style="font-size:16px "  class="m-2">
                Y te ofrece los siguientes objetos
          </div>
          <!-- LIST MY OBJECT  -->
          <!--
           <div  class="d-flex align-content-stretch flex-wrap">
              <InventoryObject  :showDeleteOption="true" :showProductDetails="true" /> 
              <InventoryObjectEmpty   @click="showMyInventory=!showMyInventory;showPartnerInventory=false ;showStep2=false " />
          </div>
          -->


          <!-- LIST MY OBJECT-->
          <div  class="d-flex align-content-stretch flex-wrap">

            <div v-for="obj in partnerOfferObjects" :key="index" > 
              <InventoryObject :object=obj :showDeleteOption="true"  :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/> 
              <div class=" d-flex justify-content-center text-danger" @click="removeFromObjectProposalList(obj)"> <i class="bi bi-x-lg "></i> </div>
            </div>

            <InventoryObjectEmpty   @click="showPartnerInventory=!showPartnerInventory; showPartnerInventory=false ; showStep2=false " />
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


   


<!-- Show Object Details-->
<div v-if="showModalDetails" class="position-absolute top-0 start-10 bg-dark" >
                <div class="" >
                        <div class="d-flex justify-content-end"> 
                        <i @click="showModalDetails=false" class="bi bi-x-lg display-1" ></i>
                        </div>
                        <InventoryObjectDetailed :showMakeOffer=false  :object=objectDetails  v-on:showMyInventory='showMyInventory=true'  v-on:closeModalObjectDetails="closeModalObjectDetails" :session_data="session_data" />
                </div>
                
                <div class="m-4 pb-4" v-if="showModalDetails">
                        <button v-if="session_data!=null && session_data.user!=null && !showMyInventory" @click="showExchangeProposal=true ; showModalDetails=false  " type="button" class="btn btn-primary">Hacer oferta por este producto</button>
                        <button v-else  type="button" class="btn btn-secondary">Debe estar registrado para ofertar</button>
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

        showModalDetails:false ,
        objectDetails : null ,

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

        yourOfferObjects  : [    {name:"myplay 1", description : "Consola en buen estado con 2 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_222"  , otherObj: true }, 
                            ],

        partnerOfferObjects : [  {name:"AlguienPlay 1", description : "Consola en buen estado con 2 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_222"  , otherObj: true }, 
                            {name:"AlguienPlay 2", description : "Consola en buen estado con 3 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_333"  , otherObj: false}, 
                            {name:"AlguienPlay 3", description : "Consola en buen estado con 4 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_444" , otherObj: true }, 
                             ],

        DBmyInventoryObjects :[{id:1 , name:"My inv PS 1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:2 , name:"My inv PS 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:3 , name:"My inv PS 3", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:4 , name:"My inv 4", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:5 , name:"My inv 5", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:6 , name:"My inv 6", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:7 , name:"My inv 7", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                           ],
        
        DBPartnerInventoryObjects : [{id:1 ,name:"Partner Inv ps1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:2 ,name:"Partner Inv 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:3 ,name:"Partner Inv 3", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:4 ,name:"Partner Inv 4", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:5 ,name:"Partner Inv 5", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:6 ,name:"Partner Inv 6", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:7 ,name:"Partner Inv 7", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                           ],

      
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

