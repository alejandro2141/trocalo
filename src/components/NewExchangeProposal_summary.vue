<script setup  >
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryObject from './InventoryObject.vue'
import InventoryList from './InventoryList.vue'
import InventoryObjectEmpty from './InventoryObjectEmpty.vue'
import ShowSenderTransactionConfirmation from './ShowSenderTransactionConfirmation.vue'

import { BKND_CONFIG,SHIPPING_PRICE } from '../../config.js'
import axios from 'axios'

</script>

<template>
<div  class="position-absolute top-0 start-0 bg-dark w-100"  >

   
       <!-- TITLE -->
      <div  class="w-100 d-flex justify-content-center"  > 
      <div style="width:350px"> 
       
        <div class="d-flex justify-content-end m-0 "  > 
                <i @click="closeModal()" class="bi bi-x-lg display-1" ></i>
        </div>

        <text style="font-size:20px">Resumen propuesta de Intercambio</text><br>

        <br>
          <div class="d-flex justify-content-between">
              <div class="align-self-center" style="font-size:16px " >Tiempo Validez : </div>
          
              <div class="w-25">
                  <select v-model="proposal_duration" class="bg-success text-white form-control  border-success border-2 text-white" id="sel1">
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
              <div>
              </div>
          </div>
          <br>


          <p>
          Costo Retiro y Despacho : <text style="font-size:20px" class="text-warning"> ${{SHIPPING_PRICE}} </text>Clp 
          </p>
          
          <div  style="font-size:16px "  class="d-flex justify-content-start">
            <div>
              Te interesa el objeto de :
               <text class="fw-bold">{{objectYouWant.owner_name }}</text>
            </div>
          </div>
          <!-- LIST PARTNER OBJECT-->
          <div  class="d-flex align-content-stretch flex-wrap">

              <InventoryObject :object=objectYouWant :display_horizontal_short="true" :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/> 
           
          </div>
          <!-- END LIST PARTNER OBJECT-->
    <br>
          
          <div  style="font-size:16px "  class="d-flex justify-content-start">
                Propones Intercambio por tus objetos:
          </div>
          
           <!-- LIST MY OBJECT  -->
          <div  class="d-flex align-content-stretch flex-wrap">
            <div v-for="obj in objectsOfferList_temp"  class="d-flex justify-content-start"  > 
              <InventoryObject :object=obj :display_horizontal_short="true" :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/>
              <div class="text-danger" @click="removeFromObjectsOfferList(obj)"> <i class="bi bi-x-lg "></i> </div>
            </div>
        <!-- 
          <div style="width:100px" class="d-flex justify-content-center" >
            <i style="font-size:25px" class="bi bi-plus-lg text-secondary" @click="$emit('showMyInventory')"  ></i>
          </div>
        -->
          </div>
       

          <div style="height:200px">
          </div>

        </div>  

      </div>

          <!-- FOOTER -->

         <!--
          <div  v-if=" objectsOfferList_temp.length >0 " @click="goToNextStep()" class="fixed-bottom display-1 text-success w-100 bg-dark p-3  border border-2 border-success ">  
              <div   class="d-flex justify-content-center">
                <div>
                  Siguiente <i class="bi bi-caret-right"></i> 
                
                </div>
              </div>
          </div>
          <div v-else>
            <div   class="d-flex justify-content-center">
            Debes seleccionar almenos un objeto de tu inventario para intercambiar
            </div>
          </div>
        -->
      
          <!-- END FOOTER -->

            <!-- FOOTER -->
            <div v-if="objectsOfferList_temp != null && objectsOfferList_temp.length>0" class="fixed-bottom  d-flex justify-content-center  text-success  bg-dark p-3 ">  
              <div  style="width:350px" class="d-flex justify-content-center  "> 
                                  
 
                <button @click="closeModal()" type="button" style="font-size:26px" class="btn btn-success ">
                    <i style="font-size:26px" class="bi bi-caret-left"></i> 
                </button>
                &nbsp;
                <button @click="goToNextStep()" type="button" style="font-size:26px" class="btn btn-success">Siguiente 
                    <i class="bi bi-caret-right-fill"></i>
                    <i style="font-size:26px" class="bi bi-caret-right"></i> 
                    <i style="font-size:26px" class="bi bi-caret-right"></i> 

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

        proposal_duration : 30 , 
        objectsOfferList_temp : [],
        }
  },
  props: ['session_data','objectYouWant','objectsYouOfferList'],
  emits: ['nextStep','closeModal','showMyInventory'],

created() {
    console.log("APP CREATED")

    this.objectsOfferList_temp= this.objectsYouOfferList  
    },

methods: {

    removeFromObjectsOfferList(obj)
    {
      //only remove if there are more than 1 object
      if(this.objectsOfferList_temp.length>1)
      {
        this.objectsOfferList_temp = this.objectsOfferList_temp.filter(element => element.id !== obj.id );
      }
      else 
      {
        alert("No se pueden eliminar mas objetos de este intercambio!!");
      }

     },

    /*
    showMyInventory()
    {
       this.$emit('showMyInventory')
    },
    */

    closeModal()
    {
        this.$emit('closeModal')
    },


    goToNextStep()
    {
        let exchange_proposal = {
            proposal_duration : this.proposal_duration,
            objectYouWant : this.objectYouWant  , 
            objectsYouOfferList : this.objectsOfferList_temp           
        }

       this.$emit('nextStep',exchange_proposal)
       
    },


    },

watch : {
      }
}
</script>

