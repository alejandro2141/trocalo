<script setup  >
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

<div  style="" class="m-0"   >

    <text @click="getMoreObjects();$emit('selectedCategory',2)" style="font-size: 25px;"> 
      Libros 
      <i class="bi bi-caret-right-fill"></i> 
    </text>
    
    <br>

    <!-- 1 LIST OBJECT CATEGORIES -->
    <div v-if="objects_filtered !=null" class="d-flex flex-wrap"> 
          <div v-for="obj in objects_filtered"  > 
            <InventoryObject @click="showObjectDetailsPublic(obj);" :object=obj  class="m-0"/>
          </div>
    </div>

</div>
  
</template>

<style scoped>

</style>


<script  >
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

        search_categories : [2] ,


      }
  },
  props: ['session_data','categoryDisplay'],
  emits: ['showPublicObjectDetails','selectedCategory'],

created() {
    console.log("Search Categories Games")
    
    let jsonRequest = {
        search_categories : this.search_categories
    }

    this.getObjectsCategory(jsonRequest)
    //this.filterByCategory()
    console.log("APP CREATED : Search Categories Games Objects :"+JSON.stringify(this.objects))
    },

methods: {

    async getMoreObjects()
    {
      let jsonRequest = {
        search_categories : this.search_categories,
        limited : 400
        }

        let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_by_category",jsonRequest);
        console.log("/public_search_objects_by_category Response:"+JSON.stringify(response_json.data))
        this.objects = response_json.data ; 
        this.objects.sort((a, b) => b.id - a.id );
        this.objects_filtered=this.objects ;

    },

  showObjectDetailsPublic(obj)
    {
      this.$emit('showPublicObjectDetails',obj)
    },

    async getObjectsCategory(searchParams)
    {
    let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_by_category",searchParams);
    console.log("/public_search_objects_by_category Response:"+JSON.stringify(response_json.data))
    this.objects = response_json.data ; 
    this.objects.sort((a, b) => b.id - a.id );
    this.objects_filtered=this.objects ; 
    },

    },

watch : {
      }
}
</script>

