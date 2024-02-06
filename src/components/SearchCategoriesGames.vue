<script setup>
import InventoryObject from './InventoryObject.vue'
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import FilterForSearchView from '../components/FilterForSearchView.vue'
import InventoryList from '../components/InventoryList.vue' 
import ExchangeProposal from '../components/ExchangeProposal.vue'
import Article from '../classes/Article.js'

import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>

<template>

  <div  style="width:400px" class="m-0"   >

    Categoria de Juguetes <br>


    <!-- 1 LIST OBJECT CATEGORIES -->
    <div v-if="objects_filtered !=null" class="d-flex flex-wrap"> 
          <div v-for="obj in objects_filtered"  > 
         
            <InventoryObject @click="objectDetails=obj ;showModalDetails=true;" :object=obj  class="m-1"/>
          </div>
    </div>

    <!-- 2- Show Object Details-->
    <div v-if="showModalDetails"   class="w-100 position-absolute top-0 start-0 bg-dark " >
      <div class="d-flex justify-content-center">
        <div>
          <div class="w-100" >
                  <div class="d-flex justify-content-end m-1"> 
                  <i @click="showModalDetails=false" class="bi bi-x-lg display-1" ></i>
                  </div>
                  <InventoryObjectDetailed :showMakeOffer=false  :object=objectDetails  v-on:showMyInventory='showMyInventory=true'  v-on:closeModalObjectDetails="closeModalObjectDetails" :session_data="session_data" />
          </div>
          
          
          
          <div v-if="session_data!=null"  class="m-4 pb-4 d-flex justify-content-center" >
              <!-- && session_data.id != objectDetails.owner_id && showModalDetails -->
              <div v-if="session_data.id != objectDetails.owner_id" >
                  <button @click="showExchangeProposal=true ; showModalDetails=false  "   type="button" class="btn btn-primary">Me interesa este Objeto</button>
              </div>
              <div v-else >
                  Este objeto te pertenece
              </div>

          </div>

          <div v-else class="text-secondary d-flex justify-content-center">
            <button   type="button" class="btn btn-secondary">Debe estar registrado <br>para intercambiar &nbsp;&nbsp; <i style="font-size:30px" class="bi bi-key"></i> </button>
          </div> 





        </div>
      </div>
          
     
    </div>

     <!-- 3 Show Exchange Proposal -->
    <div v-if="showExchangeProposal"   class="w-100 position-absolute top-0 start-0 bg-dark " >
      
      <div class="d-flex justify-content-center">
        
        <div class="w-100">
        <!-- DONT NEEDED
          <div class="d-flex justify-content-end m-2 bg-danger"  > 
            <i @click="showExchangeProposal=false ;  showModalDetails=true" class="bi bi-x-lg display-1" ></i>
          </div>
        -->
         
      <!-- FLOW CONTINUES IN Exchange Proposal -->
          <div class="">
            <ExchangeProposal  :session_data="session_data" v-on:emitShowObjectDetails="showExchangeProposal=false ;  showModalDetails=true" :objectProposal=objectDetails />
          </div>
          

        </div>
      </div>

    </div>


</div>
  
</template>

<style scoped>

</style>


<script>
export default {

  data : function() {
      return {
        showModalDetails: false,
        showMyInventory:false ,
        showExchangeProposal : false  ,
        objectDetails : null, 

        //trae desde BKND
                           
        objects : [ ],

        objects_filtered : [] ,

        search_categories : [1,5] ,


      }
  },
  props: ['session_data'],
  emits: ['sessionCreated'],

created() {
    console.log("Search Categories Games")
    
    let jsonRequest = {
        search_categories : this.search_categories
    }

    this.getObjectsCategoryGames(jsonRequest)
    //this.filterByCategory()
    console.log("APP CREATED : Search Categories Games Objects :"+JSON.stringify(this.objects))
    },

methods: {

    async getObjectsCategoryGames(searchParams)
    {
    let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_by_category",searchParams);
    console.log("/public_search_objects_by_category Response:"+JSON.stringify(response_json.data))
    this.objects = response_json.data ; 
    this.objects.sort((a, b) => b.id - a.id );
    this.objects_filtered=this.objects ; 
    },

    
  
    filterByText(ftext)
    {
    console.log("Filter By Text in Search Result:"+ftext)
        if(ftext!=null)
        {
        this.objects_filtered= this.objects_filtered.filter(element =>  element.title.toLowerCase().includes(ftext) );
        }
        else 
        {
        this.objects_filtered=this.objects
        }
    },


    filterByCategory(categories)
    {
      console.log("Filter by category  in searchResults "+categories)
      // this.categories.includes(val)
      if (categories !=null && categories.length>0)
      {  
        this.objects_filtered=this.objects.filter(element =>  ( categories.includes(element.category1) || categories.includes(element.category2) || categories.includes(element.category3) )    ); 
      }
      else 
      {
        this.objects_filtered=this.objects
      }
    },

/*
    closeObjectAndMyInventoryModal()
    {
      console.log("Close inventory List")
      this.showObjectAndMyInventoryModal = false 
    },
    closeModalObjectDetails()
    {
      this.showModalDetails= false
    },
    showObjectAndMyInventory()
    {
      console.log("showObjectAndMyInventory");
      this.showModalDetails = false 
      this.showObjectAndMyInventoryModal = true
    }
*/
    },

watch : {
      }
}
</script>

