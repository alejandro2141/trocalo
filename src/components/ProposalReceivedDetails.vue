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
<div    style="width: 350px;" >
    

  <!-- ******************************* -->
  <!--             SHOW STEP 1         -->
  <!-- ******************************* -->
    
  <div v-if="showStep1" >

    <div class="d-flex justify-content-end"> <i  @click="$emit('closeModal')" class="display-1 bi bi-x-lg"></i>  </div>

        <div v-if="offer.negotiation_loop<1" >
            <p style="font-size:20px" >Propuesta de Intercambio Recibida</p>
        </div>

        <div v-else   class="bg-warning text-start opacity-75 text-dark w-100" style="height:50px; border-radius: 10px 10px 10px 10px;" > 
          <text style="font-size:20px " >  &nbsp;&nbsp;contra oferta Recibida </text>
        </div>

       <!-- TITLE -->
          <div style="font-size:20px" class="m-3 d-flex justify-content-center" >
          
            <div class="text-center">
             Tiempo Restante <i style="font-size:30px" class="bi bi-clock-history"> </i> <br>
              <text class="text-warning" style="font-size:30px" >  {{ evaluateRemainingDays(offer.timestamp)}} dias </text>
            </div>
          
          </div>  
          
        

          
          <div  style="font-size:16px "  class="text-start">
            <b>@{{offer.source_owner_name}}</b> se intresa por tu:  
          </div>
          <!-- LIST MY OFFER OBJECT  -->
          <div v-for="obj in yourOfferObjects"  class="mb-4" > 
              <InventoryObject  :display_horizontal_short='true' :showProductDetails='true' @click="showModalDetails=true; showStep1=false; objectDetails=obj" :object="obj"    class="mb-1" /> 
          </div>
          <!-- END LIST MY OFFER OBJECT  --> 
         
          <div  style="font-size:16px "  class="text-start">
            Te propone cambiarlo por: 
          </div>
           <!-- LIST PARTNER OFFER OBJECT  -->
          <div v-for="obj in partnerOfferObjects"  > 
              <InventoryObject  :display_horizontal_short='true' :showProductDetails='true'   @click="showModalDetails=true; showStep1=false ;  objectDetails=obj" :object="obj" class="mb-1"  /> 
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
          <div class=" text-success w-100 bg-dark p-3 ">  

            <div  style="font-size:25px" class="d-flex justify-content-between">

              <div @click="showAcceptProposal=true; showStep1=false "  class="">
                <button type="button" class="btn btn-success p-4">Aceptar </button>
              </div>
            <!-- 
              <div style="" @click="showEditProposal=true;  showStep1=false "  class="border border-1 border-secondary">
                  <button type="button" class="btn btn-secondary">Editar  <i class="bi bi-pencil"></i> <br> Propuesta</button>  
              </div>
            -->
              <div @click="showRejectProposal=true;  showStep1=false "  class="">
                <button type="button" class="btn btn-danger p-4">Rechazar</button>
              </div>

            </div>

            <div  style="font-size:25px" class="mt-2 d-flex justify-content-center">
            
              <button @click="showEditProposal=true; showStep1=false "  type="button" class="btn btn-primary p-4">Contra Ofertar <i class="h3 bi bi-reply-all"></i>
              </button>

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
            <button @click="acceptProposal(offer.id); showAcceptProposalConfirmation=true; showAcceptProposal=false;showStep1=false" type="button" class="btn btn-success">Si, acepto esta propuesta </button>
            <button @click="showAcceptProposalConfirmation=false; showAcceptProposal=false;showStep1=true "   type="button" class="btn btn-danger" > <i class="bi bi-arrow-left-square"></i> Cancelar</button>
        </div>
    </div>

    <div v-if="showAcceptProposalConfirmation" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
        <p style="font-size:20px"> Gracias, ya estamos notificando a <b> @{{offer.source_owner_name}}</b> que has aceptado el intercambio de objetos. 
          <br> El deberá confirmar en un plazo máximo de 3 dias. 
        </p>
        
        <br>

        <div class="d-flex justify-content-center text-success">
              <button type="button"  @click="$emit('closeModal')" class="btn btn-success" style="font-size:25px" >
              <i class="bi bi-arrow-left-square"></i> Regresar
              </button>  
        </div>
        
        <br>

      <!-- 
        <div class="fixed-bottom  d-flex justify-content-center display-1 text-success w-100 bg-dark p-3 " >
           <a @click="$emit('closeExchangeProposalReceived')" >  <i class="text-success bi bi-house"></i> </a>
        </div>
      -->      

    </div>
  <!-- ******************************* -->
  <!--       END ACCEPT PROPOSAL FLOW  -->
  <!-- ******************************* -->



  <!-- ******************************* -->
  <!--       REJECT PROPOSAL FLOW      -->
  <!-- ******************************* -->
  <div v-if="showRejectProposal" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
        <p style="font-size:20px"> ¿ Esta seguro que desea rechazar este cambio ?</p><br>
        
        <div class="d-flex justify-content-around">
         
        <button @click="showRejectProposalConfirmation=false; showRejectProposal=false;showStep1=true" type="button" class="btn btn-success"><i class="bi bi-arrow-left-square"></i>Regresar</button>
        <button @click="cancelProposal(offer.id);showRejectProposalConfirmation=true; showRejectProposal=false;showStep1=false" type="button" class="btn btn-danger">Si, deseo rechazar</button>
        </div>
    </div>

    <div v-if="showRejectProposalConfirmation" class="" style="height: 400px;">
        
        <div style="height: 200px;"></div>
        <br>
        
        <p style="font-size:20px" class="text-center"> Esta Propuesta ha sido rechazada <br>
          <text> Se ha eliminado de tu lista de Propuestas Recibidas </text>
        </p>
        
        <br>
        
        <div class="d-flex justify-content-center text-success">
         <!-- 
          <a style="font-size:25px" @click="$emit('closeModal')" > <i class="bi bi-arrow-left-square"></i>Regresar  </a>
        -->


            <button  type="button" @click="$emit('closeModal')"  class="btn btn-success">
            
              <i class="bi bi-arrow-left-square"></i> Regresar

             </button>



<!--
         <RouterLink    class="p-2"   to="/ViewProposalsReceived">
             <button  type="button" class="btn btn-success">
            
              <i class="bi bi-arrow-left-square"></i> Regresar

             </button>
          </RouterLink>    
-->


        </div>

      <!-- 
        <div class="fixed-bottom  d-flex justify-content-center text-success w-100 bg-dark p-3 " >
           <a @click="$emit('closeExchangeProposalReceived')" > <i style="font-size:60px" class="text-success bi bi-house"></i> </a>
        </div>
      -->

    </div>
  <!-- ******************************* -->
  <!--       END REJECT PROPOSAL  -->
  <!-- ******************************* -->






  <!-- ******************************* -->
  <!--         SHOW EDIT PROPOSAL      -->
  <!-- ******************************* -->
    
  <div v-if="showEditProposal" style="width: 350px;">
       <!-- TITLE -->
          <div  style="font-size:16px "  class="m-2 d-flex justify-content-center">
             Contra Oferta modificando la propuesta
          </div>
          <br>

          <div  style="font-size:16px "  class="d-flex justify-content-start">
            @{{offer.source_owner_name}}  le interesa tu objeto:
          </div>

          <!-- LIST MY OBJECT-->
          <div  class="d-flex align-content-stretch flex-wrap">
            
            <div v-for="obj in yourOfferObjects "  > 
              <div class="d-flex justify-content-start">
                <InventoryObject  :display_horizontal_short='true' :showProductDetails='true' :object=obj  class="m-1" @click="showPartnerObjectDetailed=true"/> 
              </div>
            </div>
          </div>

         <!-- Buttons to add or remove last objects  -->
          <div class="d-flex align-items-start" >
            <div style="width:110px ; height:100px" @click="loadMyInventory();showMyInventory='true';" class="m-1 d-flex justify-content-center border border-1 border-secondary " >
                <i style="font-size:45px" class="m-3 bi bi-plus-lg text-white"></i>
            </div>

            <div  style="width:110px ; height:100px" @click="removeFromYourOfferObjects( yourOfferObjects[yourOfferObjects.length - 1] )" class="m-1 d-flex justify-content-center border border-1 border-secondary text-danger" > <i style="font-size:45px"   class=" bi bi-trash "></i> 
            </div>

        </div>
         <!-- End Buttons  -->


          <div  style="font-size:16px "  class="m-2">
                Y te ofrece los siguientes objetos : 
          </div>
        
          <!-- LIST PARTNER OBJECT -->
          <div  class="d-flex align-content-stretch flex-wrap">

            <div v-for="obj in partnerOfferObjects"  > 
              <div class="d-flex justify-content-start">
                <InventoryObject :display_horizontal_short='true' :showProductDetails='true' :object=obj  @click="showPartnerObjectDetailed=true"/> 
              </div>
            </div>


        <!-- Buttons to add or remove last objects  -->
        <div class="d-flex align-items-start">
            <div style="width:110px ; height:100px" class="m-1 d-flex justify-content-center border border-1 border-secondary " >
                <i style="font-size:45px" class="m-3 bi bi-plus-lg text-white" @click="loadPartnerInventory() ; showPartnerInventory='true'; " ></i>
            </div>

            <div  style="width:110px ; height:100px" class="m-1 d-flex justify-content-center border border-1 border-secondary text-danger" > <i style="font-size:45px" @click="removeFromPartnerOfferObjects(partnerOfferObjects[partnerOfferObjects.length - 1])"  class=" bi bi-trash "></i> 
            </div>

        </div>
        <!-- End Buttons -->




          <br>
          <!-- FOOTER -->
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div   class="d-flex justify-content-center">

                  <button @click="showEditProposal=false ;showStep1=true" type="button" class="btn btn-success" style="font-size: 26px;">
                      <i class="bi bi-caret-left" style="font-size: 26px;"></i>
                  </button> &nbsp; 

                  <button @click="showEditProposalSummary=true; showEditProposal = false" type="button" class="btn btn-success" style="font-size: 26px;">Siguiente 
                      <i class="bi bi-caret-right-fill" style="font-size: 26px;"></i>
                      <i class="bi bi-caret-right" style="font-size: 26px;"></i>
                      <i class="bi bi-caret-right" style="font-size: 26px;"></i>
                  </button>
              </div>
          </div>
          <!-- END FOOTER -->


          </div>


          </div>
  <!-- ******************************* -->
  <!--        END  SHOW EDIT PROPOSAL      -->
  <!-- ******************************* -->



          <!-- ************************** -->
          <!-- LIST PARTNER  INVENTORY    -->
          <!-- ************************** -->
          <div v-if="showPartnerInventory" class="position-absolute top-0 start-10 bg-dark w-100" style=" height:1700px">
              
              <div class="w-100 d-flex justify-content-center">
                <div style="width:350px">
              
                <div style="" class="d-flex justify-content-end">
                    <i  @click="showPartnerInventory=false;"  style="font-size:50px;" class="display-1 bi bi-x-lg "></i>
                </div>
                <div  style="font-size:16px "  class="m-2">
                    Agrega otros objetos del inventario de  @{{offer.source_owner_name}} a esta propuesta de cambio
                     <br>
  
                  <!--
                     <div class="d-flex justify-content-center"> 
                      <div  @click="objectProposalList=objectProposalList.concat(objectProposalList_temp);objectProposalList_temp.length=0;showPartnerInventory=false;" class="border border-2 border-success w-25 text-center">
                          <i class="bi bi-check2 display-4 text-success p-1 m-1"></i>
                      </div>
                    </div>
                  -->
  
  
                  <!--  <button  @click="showStep2=true; showPartnerInventory=false; objectProposalList=objectProposalList.concat(objectProposalList_temp)" type="button" class="btn btn-success">Agregar</button> -->
                </div>
                <!-- <InventoryList /> -->
                <div class="d-flex flex-wrap">
                  <div v-for="obj in DBPartnerInventoryObjects"   > 
                    <InventoryObject :display_horizontal_short='true' @click="addRemoveFromPartnerOfferObjects_temp(obj)" :object=obj  :showProductDetails="false"  /> 
                  </div>
                </div>
  
                  <!-- FOOTER -->
                  <div  class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
                      <div   class="d-flex justify-content-center">
                          <div  @click="showPartnerInventory=false; addToPartnerOfferObjects(partnerOfferObjects_temp);partnerOfferObjects_temp.length=0;" class="border border-2 border-success w-25 text-center">
                            <i class="bi bi-check2 display-4 text-success p-1 m-1"></i>
                          </div>   
                      </div>
                  </div>
  
                </div>
              </div>
    
            </div> 


         <!-- ****************** -->
          <!-- LIST MY INVENTORY  -->
          <!-- ****************** -->
          <div v-if="showMyInventory"  class="position-absolute top-0 start-0 bg-dark w-100" style="height:1700px">

            <div class="w-100 d-flex justify-content-center">
            <div style="width:350px">

              <div style="transition: width 2s;" class="d-flex justify-content-end">
                  <i  @click="showMyInventory=false;" style="font-size:50px;" class="display-1 bi bi-x-lg "></i>
              </div>

              <div  style="font-size:16px "  class="m-2">
                  Agrega mas objetos de tu Inventario
                  <br>
                <!--
                  <div class="d-flex justify-content-center"> 
                      <div  @click="showMyInventory=false;objectsOfferList=objectsOfferList.concat(objectsOfferList_temp); objectsOfferList_temp.length=0" class="border border-2 border-success w-25 text-center">
                          <i class="bi bi-check2 display-4 text-success p-1 m-1"></i>
                      </div>
                  </div>
                -->

                <!-- <button  @click="showStep2=true; showMyInventory=false; objectsOfferList=objectsOfferList.concat(objectsOfferList_temp)" type="button" class="btn btn-success">Agregar</button> -->
              </div>
            <!-- <InventoryList /> -->
              <div class="d-flex flex-wrap">
                  <div v-for="obj in DBmyInventoryObjects"   > 
                    <InventoryObject :display_horizontal_short='true'  @click="addRemoveFromYourOfferObjects_temp(obj)" :object=obj  :showProductDetails="false"  /> 
                  </div>
              </div>
            </div>
            </div>

                <!-- FOOTER -->
                <div  class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
                      <div   class="d-flex justify-content-center">
                          <div  @click="showMyInventory=false; addToMyOfferObjects(yourOfferObjects_temp) ; yourOfferObjects_temp.length=0" class="border border-2 border-success w-25 text-center">
                            <i class="bi bi-check2 display-4 text-success p-1 m-1"></i>
                          </div>   
                      </div>
                </div>
          </div>



  <!-- ******************************* -->
  <!--         SHOW EDIT PROPOSAL  SUMMARY      -->
  <!-- ******************************* -->
    
    <div v-if="showEditProposalSummary" style="width: 350px;">
    
         <!-- TITLE -->
            <div  style="font-size:16px "  class="d-flex justify-content-start">
              Resumen propuesta modificada
            </div>
         
          <div style="font-size:20px" class="mb-4 ">
              <text>Tiempo Restante </text> &nbsp;&nbsp;&nbsp;
              <text class="text-success" style="font-size:40px" >  {{ evaluateRemainingDays(offer.timestamp)}} dias </text>
          </div>  

          <div  style="font-size:16px "  class="d-flex justify-content-start">
              Mis Objetos:  
          </div>
          <!-- LIST MY OBJECT/S  OF proposal-->
       
              <div  class="d-flex align-content-stretch flex-wrap">

                <div v-for="obj in yourOfferObjects "  > 
                  <div class="d-flex justify-content-start">
                    <InventoryObject  :horizontal_short='true' :showProductDetails='true' :object=obj  class="m-1" @click="showPartnerObjectDetailed=true"/> 
                   </div>
                </div>

           
              </div>
          <!--  END -->
       
          
          <div  style="font-size:16px "  class="d-flex justify-content-start">
               Objetos de @{{offer.source_owner_name}}:
          </div>
           
         
          <!-- LIST PARTNER OBJECTS HE OFFER TO CHANGE  -->
          <div  class="d-flex align-content-stretch flex-wrap">

            <div v-for="obj in partnerOfferObjects"  > 
              <div class="d-flex justify-content-start">
                <InventoryObject :horizontal_short='true' :showProductDetails='true' :object=obj  @click="showPartnerObjectDetailed=true"/> 
              </div>
            </div>

          </div>
        <!--
          <div class="d-flex justify-content-between">  
            <div class="form-check-label" for="flexCheckChecked">
              Estas Dispuesto a cambiar por otros productos. 
            </div >
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          </div>
        -->
   

          <!-- FOOTER -->
          <!--
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  

            <div class="d-flex justify-content-between">
 
             <div @click="showEditProposal=true; showEditProposalSummary = false"  class="d-flex justify-content-center">
                <i class="bi bi-skip-start"></i> 
              </div>

              <div @click="sendProposalUpdated();showEditProposalSummaryConfirmation=true; showEditProposalSummary = false"  class="d-flex justify-content-center">
                  <i class="bi bi-caret-right-fill"></i> 
                  <i class="bi bi-caret-right-fill"></i>  
                  <i class="bi bi-caret-right"></i> 
              </div>

            </div>

          </div>
          -->



          <!-- FOOTER -->
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div   class="d-flex justify-content-center">

                  <button @click="showEditProposal=true; showEditProposalSummary = false" type="button" class="btn btn-success" style="font-size: 26px;">
                      <i class="bi bi-caret-left" style="font-size: 26px;"></i>
                  </button> &nbsp; 

                  <button @click="sendProposalUpdated();showEditProposalSummaryConfirmation=true; showEditProposalSummary = false" type="button" class="btn btn-success" style="font-size: 26px;">Siguiente 
                      <i class="bi bi-caret-right-fill" style="font-size: 26px;"></i>
                      <i class="bi bi-caret-right-fill" style="font-size: 26px;"></i>
                      <i class="bi bi-caret-right" style="font-size: 26px;"></i>
                  </button>
              </div>
          </div>
          <!-- END FOOTER -->





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
            Contra oferta envida a @{{offer.source_owner_name}}   
          </div>
          <br>

          <div style="font-size:20px">
          </div>
          <br>
          
         

          <!-- END FOOTER -->

          <!-- FOOTER -->
          <div class="fixed-bottom  text-success w-100 bg-dark p-3 ">  
              <div class="d-flex justify-content-center">
                
                <button @click="$emit('closeModal')" type="button" class="btn btn-success">Continuar</button>
                  <!--
                 <a @click="$router.push({ name: 'ViewSearch' })" > <i style="font-size:40px" class="bi bi-house"></i> </a>-->
              </div>
          </div>
          <!-- END FOOTER -->

    </div>




<!-- ******************************* -->
<!--         SHOW OBJECT DETAILS     -->
<!-- ******************************* -->

<div v-if="showModalDetails" class="position-absolute top-0 start-10 bg-dark" >
                <div class="" >
                        <div class="d-flex justify-content-end"> 
                        <i @click="closeModal()" class="bi bi-x-lg display-1" ></i>
                        </div>
                        <InventoryObjectDetailed :showMakeOffer=false  :object=objectDetails  v-on:showMyInventory='showMyInventory=true'  v-on:closeModalObjectDetails="closeModal()" :session_data="session_data" />
                </div>
              <!--
                <div class="m-4 pb-4" v-if="showModalDetails && session_data.id!=null && session_data.id != object.owner_id">
                        <button v-if="session_data!=null && session_data.user!=null && !showMyInventory" @click="showExchangeProposal=true ; showModalDetails=false  " type="button" class="btn btn-primary">Hacer oferta por este producto</button>
                        <button v-else  type="button" class="btn btn-secondary">Debe estar registrado para ofertar</button>
                </div>   
              -->     
</div>




          <!-- SPACE FILLER -->
          <p style="height:300px">
          </p>



</div>
</template>

<style scoped>

</style>


<script  >

export default {
/*
  components: {
    InventoryObjectDetailed,InventoryList,InventoryObjectEmpty,InventoryObject,ShowSenderTransactionConfirmation
  },
*/  
  data : function() {
      return {

        showModalDetails:false ,
        objectDetails : null ,

        showRejectProposal : false ,
        showAcceptProposal : false ,
        showAcceptProposalConfirmation : false ,
        showRejectProposalConfirmation : false ,
        
        showEditProposal : false , 
        showEditProposalSummary : false ,
        showEditProposalSummaryConfirmation : false ,
       
        showStep1 : true , 
        showStep2 : false , 
        showStep3 : false , 
        showStep4 : false , 

        showMyInventory :false ,
        showPartnerInventory : false ,

        yourOfferObjects_temp    : [] ,
        partnerOfferObjects_temp : [] ,

        yourOfferObjects  : [],

        partnerOfferObjects : [ ],

        DBmyInventoryObjects :[ ],
        
        DBPartnerInventoryObjects : [  ],

        closeModalObjectDetails : false ,

      }
  },
  props: ['session_data','offer'],
  emits: ['closeModal'],

created() {
  console.log("APP CREATED")
  this.loadObjects()
    },

methods: {

    addToMyOfferObjects(newObjects)
    {
      this.yourOfferObjects = this.yourOfferObjects.concat(newObjects)
      this.yourOfferObjects = this.deleteDuplicated(this.yourOfferObjects);
    },

    addToPartnerOfferObjects(newObjects)
    {
      
      this.partnerOfferObjects = this.partnerOfferObjects.concat(newObjects)
      this.partnerOfferObjects = this.deleteDuplicated(this.partnerOfferObjects);
    },

    deleteDuplicated(objList)
    {
      let aux = objList.filter((obj, index) => { return index === objList.findIndex(o => obj.id === o.id); });
      return aux;
    },

    evaluateRemainingDays(timestamp)
    {
        let creationDate = new Date(timestamp)
        let cdate = new Date()

        let days_passed = ( cdate.getTime() - creationDate.getTime() ) / (1000 * 60 * 60 * 24)  ;
        let days_remaining =   this.offer.proposal_days - days_passed
        return Math.floor(days_remaining)
    },

    async sendProposalUpdated()
    {
      let json_request =  { 
        session_data : this.session_data, 
        proposal_original: this.offer , 
        destObjects: this.yourOfferObjects , 
        sourceObjects: this.partnerOfferObjects ,
        }

      console.log("/private_update_proposal REQUEST JSON :"+JSON.stringify(json_request) )
    
    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_update_proposal", json_request);
    console.log("/private_update_proposal  Response:"+JSON.stringify(jsonResponse.data))
    
    },


    async cancelProposal(id)
    {
      let json_request =  { 
        session_data : this.session_data, 
        proposal_id: id 
          }

      console.log("cancelProposal JSON :"+JSON.stringify(json_request) )
    
    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_proposal_cancel", json_request);
    console.log("/private_proposal_cancel  Response:"+JSON.stringify(jsonResponse.data))
    },
  
    async acceptProposal(id)
    {
      let json_request =  { 
        session_data : this.session_data, 
        proposal_id: id 
          }

      console.log("acceptProposal JSON :"+JSON.stringify(json_request) )
    
    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_proposal_accept", json_request);
    console.log("/private_proposal_accept  Response:"+JSON.stringify(jsonResponse.data))
    }, 
    

    async loadObjects()
    {
      
      let objaux= [ this.offer.dest_object1,this.offer.dest_object2,this.offer.dest_object3,this.offer.dest_object4,this.offer.dest_object5,this.offer.source_object1,this.offer.source_object2,this.offer.source_object3,this.offer.source_object4,this.offer.source_object5 ]  

      objaux = objaux.filter(function (el) { return el != null; });

      let json_request =  { 
        session_data : this.session_data, 
        objects_ids: objaux 
          }

      console.log("JSON :"+JSON.stringify(json_request) )
    
    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_objects", json_request);
    console.log("/private_get_objects  Response:"+JSON.stringify(jsonResponse.data))

    this.partnerOfferObjects=[]
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.source_object1));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.source_object2));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.source_object3));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.source_object4));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.source_object5));
    
    this.yourOfferObjects = []
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.dest_object1 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.dest_object2 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.dest_object3 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.dest_object4 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.dest_object5 ));

    this.partnerOfferObjects=this.partnerOfferObjects.filter(elements => { return elements != null;   });
    this.yourOfferObjects=this.yourOfferObjects.filter(elements => { return elements != null;   });
 
    console.log("partnerOfferObjects :"+JSON.stringify(this.partnerOfferObjects) )
    console.log("yourOfferObjects :"+JSON.stringify(this.yourOfferObjects) )
    },


    async loadMyInventory()
    {
    console.log(" LoadMyInventory ")
    let json_request = 
      {
        session_data : this.session_data,
      }
    
    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_my_objects", json_request);
    console.log("/private_get_my_objects  Response:"+JSON.stringify(jsonResponse.data))
    this.DBmyInventoryObjects = jsonResponse.data 
    },

    async loadPartnerInventory()
    {
    console.log(" LoadPartnerInventory ")
   
    let json_request =  { 
        session_data : this.session_data, 
        partner_id: this.offer.user_id_source 
          }
   
    console.log("loadPartnerInventory JSON Request:"+JSON.stringify(json_request));
    
    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_partner_objects", json_request);
    console.log("/private_get_partner_objects  Response:"+JSON.stringify(jsonResponse.data))
    this.DBPartnerInventoryObjects = jsonResponse.data 
    
    },


    addRemoveFromYourOfferObjects_temp(obj)
    {
      this.yourOfferObjects_temp.push(obj) 
      
      this.yourOfferObjects_temp = this.yourOfferObjects_temp.filter((obj, index) => {
              return index === this.yourOfferObjects_temp.findIndex(o => obj.id === o.id);
      });
      console.log("yourOfferObjects_temp:"+this.yourOfferObjects_temp );
    },

    addRemoveFromPartnerOfferObjects_temp(obj)
    {
      this.partnerOfferObjects_temp.push(obj) 
      
      this.partnerOfferObjects_temp = this.partnerOfferObjects_temp.filter((obj, index) => {
              return index === this.partnerOfferObjects_temp.findIndex(o => obj.id === o.id);
      });

    },

    removeFromYourOfferObjects(obj)
    {
      this.yourOfferObjects= this.yourOfferObjects.filter(element => element.id !== obj.id );
    },

    removeFromPartnerOfferObjects(obj)
    {
      this.partnerOfferObjects= this.partnerOfferObjects.filter(element => element.id !== obj.id );
    },

    goToMainSearch()
    {
      console.log("goTOMainSearch")
    },
    
    closeModal()
    {
      //this.showModalDetails= false
      this.showModalDetails=false;
      this.showStep1=true
    },
    

    },

watch : {


      }
}
</script>

