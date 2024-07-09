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
 <div  class="m-0"   >

    <text style="font-size: 25px;"> Ultimas novedades </text>
    <br>

    <!-- 1 LIST OBJECT CATEGORIES -->
    <div  class="d-flex flex-wrap"> 
          <div v-for="obj in objects_filtered"  > 
            <InventoryObject @click="showObjectDetailsPublic(obj)" :object=obj  class="m-0"/>
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

        search_params : null ,

      }
  },
  props: ['session_data'],
  emits: ['showPublicObjectDetails'],

created() {
    console.log("APP CREATED")
    this.getObjects(this.search_params)
    console.log("APP CREATED : Objects :"+JSON.stringify(this.objects))
    },

methods: {

    async getObjects(searchParams)
    {
    let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_last",searchParams);
    console.log("/public_search_objects_last Response:"+JSON.stringify(response_json.data))
    this.objects = response_json.data ; 
    this.objects.sort((a, b) => b.id - a.id );
    this.objects_filtered=this.objects ; 
    },
  
    showObjectDetailsPublic(obj)
    {
      console.log("InventoryObjectDetailedPUblicOffer emit to showPublicObjectDetails ")
      this.$emit('showPublicObjectDetails',obj)
    },




    },

watch : {
      }
}
</script>

