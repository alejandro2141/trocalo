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

  <div  style="width:400px;" class="m-0"   >

      <text style="font-size: 25px;"> Jugetes </text>
      <br>

      <!-- 1 LIST OBJECT CATEGORIES -->
      <div  class="d-flex flex-wrap"> 
            <div v-for="obj in objects_filtered"  > 
              <InventoryObject @click="showObjectDetailsPublic(obj)" :object=obj  class="m-1"/>
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
        objects : [ ],
        objects_filtered : [] ,
       
      }
  },
  props: ['session_data'],
  emits: ['showPublicObjectDetails'],

created() {
    let jsonRequest = {
        search_categories : [7]
      }

    this.getObjectsCategory(jsonRequest)
    //this.filterByCategory()
    console.log("APP CREATED : Search Categories  :"+JSON.stringify(this.objects))
    },

methods: {

    showObjectDetailsPublic(obj)
    {
      console.log("InventoryObjectDetailedPUblicOffer emit to showPublicObjectDetails ")
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

