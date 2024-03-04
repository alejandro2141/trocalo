<script setup>
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

        <div class="d-flex justify-content-end m-0 "  > 
                <i @click="closeModal()" class="bi bi-x-lg display-1" ></i>
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
              <div>
              </div>
          </div>
          <br>

          <div  style="font-size:16px "  class="d-flex justify-content-start">
            <div>
              Objeto de tu interes, pertenece a:
               <text class="fw-bold">{{objectYouWant.owner_name }}</text>
            </div>
          </div>
          <!-- LIST PARTNER OBJECT-->
          <div  class="d-flex align-content-stretch flex-wrap">

              <InventoryObject :object=objectYouWant :horizontal_short="true" :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/> 
           
          </div>
          <!-- END LIST PARTNER OBJECT-->
    <br>
          
          <div  style="font-size:16px "  class="d-flex justify-content-start">
                Objetos que ofreces a cambio:
          </div>
          
           <!-- LIST MY OBJECT  -->
          <div  class="d-flex align-content-stretch flex-wrap">
            <div v-for="obj in objectsYouOfferList"  class="d-flex justify-content-start"  > 
              <InventoryObject :object=obj :horizontal_short="true" :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/>
              <div class="text-danger" @click="removeFromObjectsOfferList(obj)"> <i class="bi bi-x-lg "></i> </div>
            </div>

          <div style="width:100px" class="d-flex justify-content-center" >
            <i style="font-size:25px" class="bi bi-plus-lg text-secondary" @click="showMyInventory=!showMyInventory;showPartnerInventory=false "  ></i>
          </div>

          </div>
       

      </div>  

      </div>

          <!-- FOOTER -->
        <!--
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
        -->
          <!-- END FOOTER -->

   

</div>

</template>

<style scoped>

</style>


<script>


export default {

  
  data : function() {
      return {

        objectsOfferList : [] , 
        objectsOfferList_temp : [],
//        objectProposalList : [] ,
//        objectProposalList_temp : [] ,
        DBmyInventoryObjects :[],

        }
  },
  props: ['session_data','objectYouWant','objectsYouOfferList'],
  emits: ['nextStep','closeModal'],

created() {
    console.log("APP CREATED")
    },

methods: {

    closeModal()
    {
        this.$emit('closeModal')
    },


    goToNextStep()
    {
       this.$emit('nextStep',objectsOfferList_temp)
    },


    },

watch : {
      }
}
</script>

