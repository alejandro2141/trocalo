<template>
<div  style=""  >
 

    <div v-if="!showSenderConfirmation">

      <div class="w-100 m-2 "  >
      </div>
      <div  style="font-size:20px "  class="d-flex justify-content-center">
              Propuesta de Intercambio
      </div>
      
  <!-- SHOW STEP 1-->
      <div v-if="showStep1" >
          <!-- TITLE -->
          <div  v-if="false" style="font-size:16px "  class="d-flex justify-content-center">
              Objeto de tu interes, pertenece a kakito_123
          </div>

          <!-- LIST PARTNER OBJECT-->
          <div v-if="false" class="d-flex align-content-stretch flex-wrap">
            <InventoryObject   :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/> 
          </div>
          <!-- END LIST PARTNER OBJECT-->
          
          <!-- Your Inventory  -->
          <div class="" >
              <div  style="font-size:16px "  class="m-2">
                Selecciona Objetos que ofreces a cambio
              </div>
              <InventoryList />
          </div>

          <!-- FOOTER -->
          <div class="fixed-bottom display-1 text-success w-100 bg-dark p-3 ">  
              <div class="d-flex justify-content-center">
                  <i @click="showStep2=true; showStep1 = false ; showPartnerInventory=false ; showMyInventory=false " class="bi bi-caret-right"></i> 
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
          <div  style="font-size:16px "  class="d-flex justify-content-center">
              Objeto de tu interes, pertenece a kakito_123
          </div>
          <!-- LIST PARTNER OBJECT-->
          <div  class="d-flex align-content-stretch flex-wrap">
              <InventoryObject :showDeleteOption="true"  :showProductDetails="true" /> 
              <InventoryObjectEmpty   @click="showPartnerInventory=!showPartnerInventory; showMyInventory=false ;showStep2=false " />
          </div>
          <!-- END LIST PARTNER OBJECT-->

        
          
          <div  style="font-size:16px "  class="m-2">
                Objetos seleccionados que ofreces a cambio:
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
          <div v-if="showPartnerInventory && !showStep1" class="position-absolute top-0 start-10 bg-dark" style="width: 350px;">
            <div  style="font-size:16px "  class="m-2">
                Otros objetos del inventario de Kakito_123
                <br>
                <button  @click="showStep2=true; showPartnerInventory=false" type="button" class="btn btn-success">Agregar</button>
            </div>

            <InventoryList />
          </div>


          <!-- LIST MY INVENTORY  -->
          <div v-if="showMyInventory "  class="position-absolute top-0 start-10 bg-dark" style="width: 350px;">
            <div  style="font-size:16px "  class="m-2">
                Otros objetos de tu Inventario
                <br>
                <button  @click="showStep2=true; showMyInventory=false" type="button" class="btn btn-success">Agregar</button>
            </div>
            <InventoryList />
          </div>




 <!-- ******************************* -->
  <!--             SHOW STEP 2         -->
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
              <InventoryObject class="m-1" :showConfirmMode="true"  :showProductDetails="false" /> 
              <InventoryObject class="m-1" :showConfirmMode="true"  :showProductDetails="false" /> 
          </div>
          <!-- END LIST PARTNER OBJECT-->

        
          
          <div  style="font-size:16px "  class="m-2">
                Objetos seleccionados que ofreces a cambio:
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

              <div @click="showStep4=true; showStep3 = false"  class="d-flex justify-content-center">
                  <i class="bi bi-caret-right"></i> 
                  <i class="bi bi-caret-right"></i> 
                  <i class="bi bi-caret-right"></i> 
              </div>

            </div>

          </div>
          <!-- END FOOTER -->
      </div>
  <!-- END SHOW STEP 2-->






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

