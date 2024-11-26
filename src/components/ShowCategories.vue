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
  
    <div v-if="objects_filtered !=null" class="d-flex flex-wrap"> 
          <div v-for="obj in objects_filtered"  > 
            <InventoryObject @click="showObjectDetailsPublic(obj);" :object=obj :size='size' class="mt-2"/>
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
                           
        objects : [ ],
        objects_filtered : [] ,
      }

  },
  props: ['session_data','category','limit','size'],
  emits: ['showPublicObjectDetails'],

created() {
    console.log("Search Categories Games")
    
    let jsonRequest = {
        search_categories : this.category ,
        limited : this.limit
    }

    this.getObjectsCategory(jsonRequest)
    //this.filterByCategory()
    console.log("APP CREATED : Search Categories Games Objects :"+JSON.stringify(this.objects))
    },

methods: {
    
    async getObjectsCategory(searchParams)
    {
    let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_by_category",searchParams);
    console.log("/public_search_objects_by_category Response:"+JSON.stringify(response_json.data))
    this.objects = response_json.data ; 
    this.objects.sort((a, b) => b.id - a.id );
    this.objects_filtered=this.objects ; 
    },

    showObjectDetailsPublic(obj)
    {
      this.$emit('showPublicObjectDetails',obj)
    },



    },

watch : {
      }
}
</script>

