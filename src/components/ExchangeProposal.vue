<template>
<div  style=""  >
 

    <div v-if="!showSenderConfirmation">

      <div class="w-100 m-2 "  >
      </div>
     
      
 
  <!-- ******************************* -->
  <!--             SHOW STEP 1         -->
  <!-- ******************************* -->
      <div v-if="showStep1"  class="position-absolute top-0 start-0 bg-dark" >
          
          <!-- Your Inventory  -->
          <div class="" style="width:350px" >
              <div  style="font-size:16px "  class="m-2 w-100">
                Selecciona Objetos que ofreces a cambio
              </div>
              <div class="d-flex flex-wrap">
                <div v-for="obj in DBmyInventoryObjects" :key="index" > 
                  <InventoryObject @click="addRemoveOfferList(obj)" :object=obj  :showProductDetails="false"  /> 
                </div>
              </div>
          </div>

          <!-- FOOTER -->
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div class="d-flex justify-content-center">
                  <i @click="showStep2=true; showStep1 = false ; showPartnerInventory=false ; showMyInventory=false ; objectProposalList.push(objectProposal) " class="bi bi-caret-right"></i> 
              </div>
          </div>
          <!-- END FOOTER -->
      </div>
  <!-- END SHOW STEP 1-->
      


  <!-- ******************************* -->
  <!--             SHOW STEP 2         -->
  <!-- ******************************* -->
    
    <div v-if="showStep2" style="width: 350px;">
       <!-- TITLE -->
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
          <br>

          <div  style="font-size:16px "  class="d-flex justify-content-center">
              Objeto de tu interes, pertenece a kakito_123
          </div>
          <!-- LIST PARTNER OBJECT-->
          <div  class="d-flex align-content-stretch flex-wrap">

            <div v-for="obj in objectProposalList" :key="index" > 
              <InventoryObject :object=obj :showDeleteOption="true"  :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/> 
              <div class=" d-flex justify-content-center text-danger"> <i class="bi bi-x-lg "></i> </div>
            </div>

            <InventoryObjectEmpty   @click="showPartnerInventory=!showPartnerInventory; showMyInventory=false ;" />
          </div>
          <!-- END LIST PARTNER OBJECT-->
    
          
          <div  style="font-size:16px "  class="m-2">
                Objetos seleccionados que ofreces a cambio:
          </div>
           <!-- LIST MY OBJECT  -->
          <div  class="d-flex align-content-stretch flex-wrap">
            <div v-for="obj in objectsOfferList" :key="index" > 
              <InventoryObject :object=obj :showDeleteOption="true"  :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/> 
              <div class="d-flex justify-content-center text-danger" @click="removeFromObjectsOfferList(obj)"> <i class="bi bi-x-lg "></i> </div>
            </div>
              <InventoryObjectEmpty   @click="showMyInventory=!showMyInventory;showPartnerInventory=false " />
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
          <div v-if="!showMyInventory" class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div   class="d-flex justify-content-center">
                <div @click="showStep3=true; showStep2 = false">
                  <i class="bi bi-caret-right"></i> 
                  <i class="bi bi-caret-right"></i> 
                </div>
              </div>
          </div>
          <!-- END FOOTER -->
      </div>
  <!-- END SHOW STEP 2-->

          <!-- LIST Partner INVENTORY -->
          <div v-if="showPartnerInventory && !showStep1" class="position-absolute top-0 start-10 bg-dark" style="width: 350px; height:1700px">
              <div style="transition: width 2s;" class="d-flex justify-content-end">
                  <i  @click="showPartnerInventory=false; objectProposalList=objectProposalList.concat(objectProposalList_temp);objectProposalList_temp.length=0 " style="font-size:50px;" class="display-1 bi bi-x-lg"></i>
              </div>
              <div  style="font-size:16px "  class="m-2">
                  Agrega otros objetos del inventario de Kakito_123 a esta propuesta de cambio
                   <br>
                <!--  <button  @click="showStep2=true; showPartnerInventory=false; objectProposalList=objectProposalList.concat(objectProposalList_temp)" type="button" class="btn btn-success">Agregar</button> -->
              </div>
              <!-- <InventoryList /> -->
              <div class="d-flex flex-wrap">
                <div v-for="obj in DBPartnerInventoryObjects" :key="index"  > 
                  <InventoryObject @click="addRemoveObjectsProposalList_temp(obj)" :object=obj  :showProductDetails="false"  /> 
                </div>
              </div>
          </div>

          <!-- LIST MY INVENTORY  -->
          <div v-if="showMyInventory"  class="position-absolute top-0 start-10 bg-dark" style="width: 350px; height:1700px">
            <div style="transition: width 2s;" class="d-flex justify-content-end">
                <i  @click="showMyInventory=false;objectsOfferList=objectsOfferList.concat(objectsOfferList_temp); objectsOfferList_temp.length=0" style="font-size:50px;" class="display-1 bi bi-x-lg"></i>
            </div>
            <div  style="font-size:16px "  class="m-2">
                Mejora tu Propuesta agregando otros objetos de tu Inventario
                <br>
               <!-- <button  @click="showStep2=true; showMyInventory=false; objectsOfferList=objectsOfferList.concat(objectsOfferList_temp)" type="button" class="btn btn-success">Agregar</button> -->
            </div>
          <!-- <InventoryList /> -->
            <div class="d-flex flex-wrap">
                <div v-for="obj in DBmyInventoryObjects" :key="index"  > 
                  <InventoryObject @click="addRemoveObjectsOfferList_temp(obj)" :object=obj  :showProductDetails="false"  /> 
                </div>
            </div>

          </div>


  <!-- ******************************* -->
  <!--             SHOW STEP 3         -->
  <!-- ******************************* -->
    
  <div v-if="showStep3" style="width: 350px;">
       <!-- TITLE -->
          <br>
          <div style="font-size:20px">
           Costo recogida y entrega $17.000 a tu cargo. 
          </div>
          <br>
          
          <div  style="font-size:16px "  class="d-flex justify-content-center">
              Objeto de tu interes, pertenece a kakito_123
          </div>
          <!-- LIST PARTNER OBJECT-->
          <div  class="">
          
            <div v-for="obj in objectProposalList" :key="index" > 
              <InventoryObject :object=obj   :showConfirmMode=true :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/> 
            </div>
            
          </div>
          <!-- END LIST PARTNER OBJECT-->
        
          
          <div  style="font-size:16px "  class="m-2">
                Objetos seleccionados que ofreces a cambio:
          </div>
           <!-- LIST MY OBJECT  -->
          <div  class="">
            <div v-for="obj in objectsOfferList" :key="index" > 
              <InventoryObject :object=obj  :showConfirmMode=true :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/> 
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
        
          <div style="font-size:20px" class="d-flex justify-content-between">
              <div>Propuesta válida por: 25 dias </div>
          </div>


          <!-- FOOTER -->
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  

            <div class="d-flex justify-content-between">

              <div @click="showStep2=true; showStep3 = false"  class="d-flex justify-content-center">
                <i class="bi bi-skip-start"></i> 
              </div>

              <div @click="showStep4=true; showStep3 = false"  class="d-flex justify-content-center">
                  <i class="bi bi-caret-right"></i> 
                  <i class="bi bi-caret-right"></i> 
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
    
  <div v-if="showStep4" style="width: 350px;">
       <!-- TITLE -->
          <br>
          <div style="font-size:20px">
            Propuesta de Intercambio Enviada  
          </div>
          <br>

          <div style="font-size:20px">
            Si Caquito_123_xusi  acepta el intercambio Usted debera pagar el cargo por Recogida y Entrega  $ 17.000
          </div>
          <br>
          
          <div style="font-size:20px">
            Puede seguir esta propuesta en <a href="/OfSent" class="text-success"> Enviadas</a> 
          </div>

          <!-- END FOOTER -->

          <!-- FOOTER -->
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div class="d-flex justify-content-center">

                <a href="/" class="text-success">
                  <i  class="bi bi-house"></i> 
                </a>
              </div>
          </div>
          <!-- END FOOTER -->

      </div>
  <!-- END SHOW STEP 4-->


          <!-- SPACE FILLER -->
          <p style="height:300px">
          </p>



  <!-- ******************************* -->
        <div v-if="showStep5">

      <!-- Show Object Details  -->  
        <div v-if="showPartnerObjectDetailed">
            <InventoryObjectDetailed />
        </div>


      <!-- Desire Object + Plus -->
      <div class="d-flex align-content-stretch flex-wrap">
            <InventoryObject      @click="showMyObjectDetailed=true"/> 
            <InventoryObjectEmpty @click="showMyInventory=!showMyInventory" />
        </div>
      <!-- Show Object Details  -->  
        <div v-if="showMyObjectDetailed">
          <text @click="showMyObjectDetailed=false">X</text> 
          <InventoryObjectDetailed />
        </div>  
      <!-- Show Inventory Partner -->
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
        //showModalDetails: false,
        //showYourInventory : false ,
        showPartnerInventory : true ,
        showPartnerObjectDetailed: false ,

        showMyObjectDetailed: false,
        showMyInventory: false, 
        showSenderConfirmation : false ,

        showStep1 : true , 
        showStep2 : false , 
        showStep3 : false , 
        showStep4 : false , 

        objectsOfferList : [] , 
        objectsOfferList_temp : [],

        objectProposalList : [] ,
        objectProposalList_temp : [] ,
       

        DBmyInventoryObjects :[{id:1 , name:"My PS 1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:2 , name:"My PS 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:3 , name:"My PS 3", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:4 , name:"My PS 4", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:5 , name:"My PS 5", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:6 , name:"My PS 6", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:7 , name:"My PS 7", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                           ],
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



        }
  },
  props: ['session_data','objectProposal'],
  emits: ['closeThisModal'],

created() {
  console.log("APP CREATED")
    },

methods: {

    addRemoveObjectsProposalList_temp(obj)
    {
      this.objectProposalList_temp.push(obj) 
    },

    addRemoveObjectsOfferList_temp(obj)
    {
      this.objectsOfferList_temp.push(obj) 
    },
    
    removeFromObjectsOfferList(obj)
    {
      //let aux= this.objectsOfferList.find(elem => elem.id ==  obj.id  )
      this.objectsOfferList= this.objectsOfferList.filter(element => element.id !== obj.id );
     
      //console.log("remove "+JSON.stringify(aux))
    },

    addRemoveOfferList(obj)
    {
      this.objectsOfferList.push(obj) 
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

