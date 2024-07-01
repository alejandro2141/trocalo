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
<div  style=""  >
 

    <div v-if="!showSenderConfirmation">

      <div class="w-100 m-2 "  >
      </div>
     
      
 
  <!-- ******************************* -->
  <!--             SHOW STEP 1         -->
  <!-- ******************************* -->
      <div v-if="showStep1"  class="position-absolute top-0 start-0 bg-dark w-100"  >
          
          <!-- Your Inventory  -->

          <div class="w-100 d-flex justify-content-center">
          <div  style="width:350px"  >
            <div>
      
              <div class="d-flex justify-content-end m-0 "  > 
                <i @click="goToObjectDetails()" class="bi bi-x-lg display-1" ></i>
              </div>

              <div  style="font-size:16px "  class="m-2 w-100">
                Selecciona de tu Inventario para intercambiar 
              </div>
              <br>

              <div class="d-flex flex-wrap ">
                <div v-for="obj in DBmyInventoryObjects"  > 
                  <InventoryObject @click="addRemoveOfferList(obj)" :object=obj  :showProductDetails="false" class="m-1" /> 
                </div>
              </div>


          </div>
        </div>
        
      </div>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>

            <!-- FOOTER -->
            <div v-if="objectsOfferList.length>0" class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div class="d-flex justify-content-center"> 
                    <div  @click="showStep2=true; showStep1 = false ; showPartnerInventory=false ; showMyInventory=false ; objectProposalList.push(objectProposal) " class="border border-2 border-success w-25 text-center">
                        <i class="bi bi-check2 display-4 text-success p-1 m-1"></i>
                    </div>
              </div>
            <!-- 
              <div class="d-flex justify-content-center">
                  <i @click="showStep2=true; showStep1 = false ; showPartnerInventory=false ; showMyInventory=false ; objectProposalList.push(objectProposal) " class="bi bi-caret-right"></i> 
              </div>
              -->
          
          
            </div>
          <!-- END FOOTER -->
      </div>
  <!-- END SHOW STEP 1-->
      


  <!-- ******************************* -->
  <!--             SHOW STEP 2         -->
  <!-- ******************************* -->
    
    <div v-if="showStep2" class="w-100">
       <!-- TITLE -->
      <div  class="w-100 d-flex justify-content-center"  > 
      <div style="width:350px"> 

        <div class="d-flex justify-content-end m-0 "  > 
                <i @click="goToObjectDetails()" class="bi bi-x-lg display-1" ></i>
        </div>

        <br>
          <div class="d-flex justify-content-between">
              <div class="align-self-center" style="font-size:16px " >Propuesta válida por: </div>
          
              <div class="w-25">
                  <select v-model="proposal_duration" class="form-control bg-dark border-white text-white" id="sel1">
                    <option value="30">30 dias</option>
                    <option value="25">25 dias</option>
                    <option value="20">20 dias</option>
                    <option value="15">15 dias</option>
                    <option value="10">10 dias</option>
                    <option value="7">7 dias</option>
                    <option value="5">5 dias</option>
                    <option value="3">3 dias</option>
                   </select>
              </div>
              <div></div>
          </div>
          <br>

          <div  style="font-size:16px "  class="d-flex justify-content-start">
            <div>
              Objeto de tu interes, pertenece a:
               <text class="fw-bold">{{objectProposalList[0].owner_name }}</text>
            </div>
          </div>
          <!-- LIST PARTNER OBJECT-->
          <div  class="d-flex align-content-stretch flex-wrap">


            <div v-for="obj in objectProposalList"  class="d-flex justify-content-start" > 
              <InventoryObject :object=obj :horizontal_short="true" :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/> 
            <!--  <div class="text-danger" @click="removeFromObjectProposalList(obj)"> <i class="bi bi-x-lg "></i> </div> -->
            </div>
          <!--
            <div style="width:100px" class="d-flex justify-content-center" >
                <i style="font-size:25px" class="bi bi-plus-lg text-secondary" @click="showPartnerInventory=!showPartnerInventory; showMyInventory=false ;" ></i>
            </div>
          -->

          </div>
          <!-- END LIST PARTNER OBJECT-->
    <br>
          
          <div  style="font-size:16px "  class="d-flex justify-content-start">
                Objetos que ofreces a cambio:
          </div>
          
           <!-- LIST MY OBJECT  -->
          <div  class="d-flex align-content-stretch flex-wrap">
            <div v-for="obj in objectsOfferList"  class="d-flex justify-content-start"  > 
              <InventoryObject :object=obj :horizontal_short="true" :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/>
              <div class="text-danger" @click="removeFromObjectsOfferList(obj)"> <i class="bi bi-x-lg "></i> </div>
            </div>

          <div style="width:100px" class="d-flex justify-content-center" >
            <i style="font-size:25px" class="bi bi-plus-lg text-secondary" @click="showMyInventory=!showMyInventory;showPartnerInventory=false "  ></i>
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

      </div>  

      </div>

          <!-- FOOTER -->
          <div v-if="!(showMyInventory || showPartnerInventory) && objectsOfferList.length>0 " class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div   class="d-flex justify-content-center">
                <div @click="showStep3=true; showStep2 = false">
                  <i class="bi bi-caret-right"></i> 
                
                </div>
              </div>
          </div>
          <div v-else>
            <div   class="d-flex justify-content-center">
            Selecciona al menos un objeto de tu inventario
            </div>
          </div>


          <!-- END FOOTER -->
      </div>
  <!-- END SHOW STEP 2-->

          <!-- ****************** -->
          <!-- LIST PARTNER  INVENTORY  -->
          <!-- ****************** -->
          <div v-if="showPartnerInventory && !showStep1" class="position-absolute top-0 start-10 bg-dark w-100" style=" height:1700px">
              
            <div class="w-100 d-flex justify-content-center">
              <div style="width:350px">
            
              <div style="" class="d-flex justify-content-end">
                  <i  @click="showPartnerInventory=false;"  style="font-size:50px;" class="display-1 bi bi-x-lg "></i>
              </div>
              <div  style="font-size:16px "  class="m-2">
                  Agrega otros objetos del inventario de{{objectProposalList[0].owner_name }} a esta propuesta de cambio
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
                <div v-for="obj in DBPartnerInventoryObjects"  > 
                  <InventoryObject @click="addRemoveObjectsProposalList_temp(obj)" :object=obj  :showProductDetails="false"  /> 
                </div>
              </div>

                <!-- FOOTER -->
                <div  class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
                    <div   class="d-flex justify-content-center">
                        <div  @click="objectProposalList=objectProposalList.concat(objectProposalList_temp);objectProposalList_temp.length=0;showPartnerInventory=false;" class="border border-2 border-success w-25 text-center">
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
                <i  @click="showMyInventory=false; objectsOfferList_temp.length=0" style="font-size:50px;" class="display-1 bi bi-x-lg "></i>
            </div>

            <div  style="font-size:16px "  class="m-2">
                Mejora tu Propuesta agregando otros objetos de tu Inventario 
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
                  <InventoryObject @click="addRemoveObjectsOfferList_temp(obj)" :object=obj  :showProductDetails="false"  /> 
                </div>
            </div>
          </div>
          </div>

              <!-- FOOTER -->
              <div  class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
                    <div   class="d-flex justify-content-center">
                        <div  @click="showMyInventory=false;objectsOfferList=objectsOfferList.concat(objectsOfferList_temp); objectsOfferList_temp.length=0" class="border border-2 border-success w-25 text-center">
                          <i class="bi bi-check2 display-4 text-success p-1 m-1"></i>
                        </div>   
                    </div>
              </div>


          </div>


  <!-- ******************************* -->
  <!--             SHOW STEP 3         -->
  <!-- ******************************* -->
    
  <div v-if="showStep3" class="w-100">
       <!-- TITLE -->
          
       <div  class="w-100 d-flex justify-content-center"  > 
       <div style="width:350px"> 


          <div style="font-size:20px">
           Revise la propuesta antes de Enviar
          </div>
          <br>

          <div style="font-size:16px">
           El costo recogida y entrega a tu cargo <br>
            $17.000 
          </div>
          <br>
          
          <div style="font-size:16px" class="d-flex justify-content-between">
              <div>Propuesta válida por: {{proposal_duration}} dias </div>
          </div>
          <br>

          <div  style="font-size:16px"  class="d-flex justify-content-start">
            <div>
              Objeto de tu interes, pertenece a  <text class="fw-bold"> {{objectProposalList[0].owner_name }}</text>
            </div>
          </div>
          <!-- LIST PARTNER OBJECT-->
          <div  class="">
          
            <div v-for="obj in objectProposalList"  > 
              <InventoryObject :horizontal_short="true" :showProductDetails="true"  :object=obj    @click="showPartnerObjectDetailed=true"/> 
            </div>
            
          </div>
          <!-- END LIST PARTNER OBJECT-->
        
          <br>
          <div  style="font-size:16px " class="d-flex justify-content-start">
                Objetos seleccionados que ofreces a cambio:
          </div>
           <!-- LIST MY OBJECT  -->
          <div  class="">
            <div v-for="obj in objectsOfferList"  > 
              <InventoryObject  :horizontal_short="true" :showProductDetails="true"  :object=obj   @click="showPartnerObjectDetailed=true"/> 
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
       

      </div>
      </div>

          <!-- FOOTER -->
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  

            <div class="d-flex justify-content-between">

              <div @click="showStep2=true; showStep3 = false"  class="d-flex justify-content-center">
                <i class="bi bi-skip-start"></i> 
              </div>

              <div @click="sendProposal()"  class="d-flex justify-content-center">
                  <text style="font-size:20px">Enviar</text> 
                  <i class="bi bi-caret-right"></i> 
                 
              </div>

            </div>

          </div>
          <!-- END FOOTER -->
      </div>
  <!-- END SHOW STEP 3-->


  <!-- ******************************* -->
  <!--             SHOW STEP 4         -->
  <!-- ******************************* -->
    
  <div v-if="showStep4" class="w-100">

    <div  class="w-100 d-flex justify-content-center"  > 
    <div style="width:350px"> 

       <!-- TITLE -->
          <br>
          <div style="font-size:20px" class="w-100 text-center">
            Propuesta de Intercambio Enviada 
          </div>
          <br>

          <div style="font-size:16px" >
            <p> Caquito_123_xusi  podrá  Aceptar, Rechazar o Editar tu propuesta.</p> 
            <br>
                        
            Si él acepta tu deberas pagar el cargo por Recogida y Entrega<br>
            <div class="text-center"> <text style="font-size:30px">  $ 17.000 </text>
            </div>
          </div>
          <br>
          
          <div style="font-size:16px">
            Desde ahora puedes seguir esta propuesta en <a @click="$router.push({ name: 'ViewProposalsSent' })" class="text-success"> Enviadas</a> 
          </div>

          <!-- END FOOTER -->
          <div style="height:200px"></div>
          <!-- FOOTER -->
          <!-- 
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div class="d-flex justify-content-center">

                <a @click="$router.push({ name: 'searchView' })" class="text-success">
                  <i  class="bi bi-house"></i> 
                </a>
              </div>
          </div>
          -->
          <!-- END FOOTER -->

    </div>
    </div>


      </div>
  <!-- END SHOW STEP 4-->


          <!-- SPACE FILLER -->
          <p style="height:300px">
          </p>



  <!-- ******************************* -->
<!--
  <div v-if="showStep5">

        <div v-if="showPartnerObjectDetailed">
            <InventoryObjectDetailed />
        </div>


     
      <div class="d-flex align-content-stretch flex-wrap">
            <InventoryObject      @click="showMyObjectDetailed=true"/> 
            <InventoryObjectEmpty @click="showMyInventory=!showMyInventory" />
        </div>
     
        <div v-if="showMyObjectDetailed">
          <text @click="showMyObjectDetailed=false">X</text> 
          <InventoryObjectDetailed />
        </div>  
     
        <div v-if="showMyInventory">
            <InventoryList />
        </div>

        <br>

        <div class="form-check">  
          <label class="form-check-label" for="flexCheckChecked">
          Abierto a intercambiar por otros productos. 
          </label>
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        </div>

        <div>
          Esta propuesta será valida por: 
          <div class="w-25">
              <select class="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
          </div>

        </div>

        <br>

        <div>
          $39.000 es el costo de Retiro y despacho de estos productos que usted debera pagar. 
        </div>


        <button @click="showSenderConfirmation=true" type="button" class="btn btn-success">Enviar</button>
        <button type="button" class="btn btn-danger">Cancelar</button>

      </div>

    

    </div>


    <div v-if="showSenderConfirmation" class="position-absolute top-50 start-50 translate-middle bg-dark">
      <text @click="showSenderConfirmation=false">x</text>
      <ShowSenderTransactionConfirmation />
    </div>
-->

</div>
</div>

</template>

<style scoped>

</style>


<script  >


export default {

  
  data : function() {
      return {
        //showModalDetails: false,
        //showYourInventory : false ,
        showPartnerInventory : true ,
        showPartnerObjectDetailed: false ,

        showMyObjectDetailed: false,
        showMyInventory: false, 
        showSenderConfirmation : false ,
        proposal_duration : 30 ,

        showStep1 : true , 
        showStep2 : false , 
        showStep3 : false , 
        showStep4 : false , 

        objectsOfferList : [] , 
        objectsOfferList_temp : [],

        objectProposalList : [] ,
        objectProposalList_temp : [] ,
       
        DBmyInventoryObjects :[],
        /*
        DBPartnerInventoryObjects : [{id:1 ,name:"partner ps1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:2 ,name:"playStation 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:3 ,name:"playStation 3", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:4 ,name:"playStation 4", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:5 ,name:"playStation 5", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:6 ,name:"playStation 6", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:7 ,name:"playStation 7", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                           ],

        DBObjectsYouWant  : [{name:"Microscopio 100x2", description : "Esta en excelentes condiciones" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                             {name:"Soldador estaño electronica", description : "Trae tresp untas de contacto" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            ],
        
        DBObjectsYouOffer  : [{name:"Offer my Microscopio 100x2", description : "Esta en excelentes condiciones" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                             {name:"Soldador estaño electronica", description : "Trae tresp untas de contacto" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            ],
        */


        }
  },
  props: ['session_data','objectProposal'],
  emits: ['closeThisModal','emitShowObjectDetails'],

created() {
    console.log("APP CREATED")
    this.getMyObjects()


    },

methods: {

    async sendProposal()
    {
      console.log("sendProposal");
      this.showStep4=true  
      this.showStep3 = false
    
    let params= { 
            proposal_duration : this.proposal_duration,
            session_data      : this.session_data   ,
            object_wanted     : this.objectProposalList  , 
            objects_offered   : this.objectsOfferList ,
          };


    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/save_proposal", params );
    console.log("/save_proposal Response:"+JSON.stringify(jsonResponse.data))
    
    //this.DBmyInventoryObjects = jsonResponse.data

    
    //this.inventory_objects_filtered=this.inventoryObjects
    },

    
    async getMyObjects()
    {
    let params= {};
    let json_request = 
      {
        session_data : this.session_data,
      }

    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_my_objects", json_request );
    console.log("/private_get_my_objects Response:"+JSON.stringify(jsonResponse.data))
    
    this.DBmyInventoryObjects = jsonResponse.data
    //this.inventory_objects_filtered=this.inventoryObjects
    },


    goToObjectDetails()
    {
      console.log("goto Object Details")
      this.$emit('emitShowObjectDetails');
    },

    addRemoveObjectsProposalList_temp(obj)
    {
      this.objectProposalList_temp.push(obj) 
    },

    addRemoveObjectsOfferList_temp(obj)
    {
      //1st check if already exist
       if ( this.objectsOfferList_temp.findIndex(o => obj.id === o.id) > 0  )
      {//remove the object
        this.objectsOfferList_temp= this.objectsOfferList_temp.filter(element => element.id !== obj.id );
      }
      else 
      {
        this.objectsOfferList_temp.push(obj)
      }
      this.objectsOfferList_temp = this.removeDuplicatedObjects(this.objectsOfferList_temp)
       
    },
    
    removeFromObjectsOfferList(obj)
    {
      this.objectsOfferList= this.objectsOfferList.filter(element => element.id !== obj.id );
    },

    removeFromObjectProposalList(obj)
    {
      this.objectProposalList= this.objectProposalList.filter(element => element.id !== obj.id );
    },

    addRemoveOfferList(obj)
    {
      //1st check if already exist
      if ( this.objectsOfferList.findIndex(o => obj.id === o.id) > 0  )
      {//remove the object
        this.removeFromObjectsOfferList(obj)
      }
      else 
      {
        this.objectsOfferList.push(obj) 
      }

      this.objectsOfferList = this.removeDuplicatedObjects( this.objectsOfferList)

      console.log("Object List : "+this.objectsOfferList);

    },

    removeDuplicatedObjects(obj_list)
    {
      obj_list = obj_list.filter((obj, index) => {
              return index === obj_list.findIndex(o => obj.id === o.id);
      });

      return obj_list ; 
    },

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

