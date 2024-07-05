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
<div>
  <!-- ******************************* -->
  <!--             SHOW STEP 1         -->
  <!-- ******************************* -->
      <div   class="position-absolute top-0 start-0 bg-dark w-100"  >
          
          <!-- Your Inventory  -->

        <div class="w-100 d-flex justify-content-center">
          <div  style="width:350px"  >
            <div>
      
              <div class="d-flex justify-content-between m-0 "  > 
                
                <div>
                  <i style="font-size:45px ;color:rgb(184, 139, 92)" class="bi bi-backpack2"></i>
                </div>

                <div></div>

                <div>
                <i @click="closeModal()" class="bi bi-x-lg display-1" ></i>
                </div>

              </div>

              <div  style="font-size:16px "  class="m-2 w-100 ">
                 Selecciona objetos de tu Inventario para intercambiar 
             </div>
              <br>


              <div  v-if="DBmyInventoryObjects!=null &&  DBmyInventoryObjects.length == 0 " class=" text-warning" >
                <p class="text-center"> <i class="bi bi-exclamation-triangle h1"></i>  </p>
                  
                  Debes subir al menos un objeto a tu inventario para un intercambio. 
              </div>
              
              <div  class="d-flex flex-wrap ">
                <div v-for="obj in DBmyInventoryObjects"  > 
                  <InventoryObject @click="addRemoveObjectsOfferList_temp(obj)" :object=obj  :showProductDetails="false" class="m-1" /> 
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
          <br>
          <br>
          <br>

            <!-- FOOTER -->
        
            <div v-if="objectsOfferList_temp != null && objectsOfferList_temp.length>0" class="fixed-bottom  d-flex justify-content-center  text-success  bg-dark p-3 ">  
              
              <div @click="goToNextStep()" style="width:350px" class="d-flex justify-content-center   "> 
                  
                  <button type="button" style="font-size:36px" class="btn btn-success">Siguiente 
                    <i style="font-size:36px" class="bi bi-caret-right"></i> 
                  </button>
                  
                  <!--                     
                  <div   class="d-flex justify-content-center">
                    <div >
                      
                      <text style="font-size:36px">Siguiente </text>
                      <text>
                          <i style="font-size:36px" class="bi bi-caret-right"></i> 
                      </text>
                    
                    </div>
                  </div>

                -->

                  <!-- 
                    <div  @click="goToNextStep()" class="">
                        <i class="bi bi-check2 display-4 text-success p-1 m-1"> </i> 
                    </div>
                    <text style="font-size:20px" >Siguente</text>
                  -->

                
              </div>



              <br>
            </div>

         
          
          <!-- END FOOTER -->
      </div>
  <!-- END SHOW STEP 1-->
      


</div>
</div>

</template>

<style scoped>

</style>


<script  >


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
  props: ['session_data','objectProposal'],
  emits: ['nextStep'],

created() {
    console.log("APP CREATED")
    this.getMyObjects()


    },

methods: {

    closeModal()
    {
        this.$emit('closeModal')
    },

    goToNextStep()
    {
       this.$emit('nextStep',this.objectsOfferList_temp)
    },

    async getMyObjects()
    {
      let json_request = 
      {
        session_data : this.session_data,
      }

        let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_my_objects", json_request);
        console.log("/private_get_my_objects Response:"+JSON.stringify(jsonResponse.data))
        this.DBmyInventoryObjects = jsonResponse.data
        //this.inventory_objects_filtered=this.inventoryObjects
    },

    removeFromObjectsOfferList(obj)
    {
      this.objectsOfferList= this.objectsOfferList.filter(element => element.id !== obj.id );
    },

    addRemoveObjectsOfferList_temp(obj)
    {

      if(!obj.blocked_due_proposal_accepted)
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
      
      }
      else 
      {
        alert("No se puede seleccionar, pertenece a un intercambio que fue Aceptado")
      }
       
    },

    removeDuplicatedObjects(obj_list)
    {
      obj_list = obj_list.filter((obj, index) => {
              return index === obj_list.findIndex(o => obj.id === o.id);
      });

      return obj_list ; 
    },
    



    /*
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

    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_my_objects", this.session_data);
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
*/



    },

watch : {
      }
}
</script>

