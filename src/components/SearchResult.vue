<script setup>
import InventoryObject from './InventoryObject.vue'
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import FilterForSearchView from '../components/FilterForSearchView.vue'
import InventoryList from '../components/InventoryList.vue' 
import ExchangeProposal from '../components/ExchangeProposal.vue'
import Article from '../classes/Article.js'
import ShowCategories from '../components/ShowCategories.vue'

import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>

<template>

<div  style="" class="m-0 w-100"   >

  <!-- 
    <text v-if="objects_filtered !=null && objects_filtered.length > 0">
     Resultado de tu busqueda<br>
    </text><text v-if="objects_filtered !=null && objects_filtered.length == 0">
      No encontramos Objetos para tu busqueda<br>
    </text>
  -->


  <div v-if="search_event" class="text-warning text-start m-0">
    <div class="text-warning" v-if="objects_filtered !=null && objects_filtered.length > 0">
          {{objects_filtered.length}} objetos encontrados. 
        <br>
    </div>
    <div v-else class="m-2  d-flex justify-content-start">
      
      <div class="d-flex justify-content-center">
         
          <text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>

          <div style="margin-top: 20px;"> No encontramos objetos</div><text>&nbsp;&nbsp;&nbsp;</text>
          <div> 
            <i class="bi bi-wind" style="font-size:46px;" ></i>
          </div>

      </div>
    </div>
    
  <br>
  </div>


  <div v-else>
   <!--  Objetos que podrian interesarte -->
  </div>
    
  <!--
    <text v-if="objects_filtered !=null && objects_filtered.length == 0">
     No encontramos resultados para tu busqueda<br>
    </text>
  -->
    

    <!-- 1- SHOW PUBLIC OBJECTS ARE AVAILABLE FOR SEARCH-->
    <div v-if="showExchangeProposal==false && showModalDetails==false" >
        
        <div v-if="objects_filtered !=null" class="d-flex flex-wrap"> 
         
          <div v-for="obj in objects_filtered"  > 
            <InventoryObject @click="showObjectDetailsPublic(obj)" :object=obj  class="m-0"/>
          </div>
        
        </div>
    </div>


<RouterLink to="Welcome">
  <div class="fixed-bottom w-100 bg-secondary d-flex justify-content-center">
    <hr>
    <button type="button" class="btn btn-warning m-1"> <i class="bi bi-arrow-left-short"></i> Regresar</button>
  </div>
</RouterLink> 



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
      //  objects : [ ],
      //  objects_filtered : [] ,
      //  search_params : null ,
      }
  },

  props: ['session_data',  'objects_filtered' , 'search_event' , 'title' ],
  emits: ['showObjectDetailsPublic'],

created() {
       },

methods: {

    showObjectDetailsPublic(obj)
    {
      this.$emit('showPublicObjectDetails',obj)
    },

/*
    async getObjects(searchParams)
    {
    let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects",searchParams);
    console.log("/public_search_objects Response:"+JSON.stringify(response_json.data))
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
    */
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

