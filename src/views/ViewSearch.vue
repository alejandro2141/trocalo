<script setup>

import FilterForSearchView from '../components/FilterForSearchView.vue'
import SearchResult from '../components/SearchResult.vue'
import SearchCategoriesLast from '../components/SearchCategoriesLast.vue'
import SearchCategoriesGames from '../components/SearchCategoriesGames.vue'
import SearchCategoriesBooks from '../components/SearchCategoriesBooks.vue'
import SearchCategoriesClothes from '../components/SearchCategoriesClothes.vue'
import InventoryObjectDetailedPublicOffer from '../components/InventoryObjectDetailedPublicOffer.vue'

import NewExchangeProposal_SelectObjectInventory from '../components/NewExchangeProposal_SelectObjectInventory.vue'


import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>


<template>

<div>

  <div v-if="!(showObjectDetails || step1_ExchangeProposal) ">

      <div>
          <FilterForSearchView v-on:filterByText="filterByText" v-on:filterByCategory="filterByCategory"  :session_data="session_data" />
      </div>

      <div>
          <SearchResult  v-on:exchangeObject="exchangeObject" :objects_filtered="objects_filtered" v-on:showPublicObjectDetails="showPublicObjectDetails"  :session_data="session_data" /> 
      </div>
      
      <div>
          <hr>
          <SearchCategoriesLast  v-on:exchangeObject="exchangeObject"  v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data"/>
      </div>
      
      <div>
          <hr>
          <SearchCategoriesGames v-on:exchangeObject="exchangeObject" v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data" />
      </div>
      <div>
          <hr>
          <SearchCategoriesBooks v-on:exchangeObject="exchangeObject" v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data" /> 
      </div>

      <div >
          <hr>
          <SearchCategoriesClothes v-on:exchangeObject="exchangeObject" v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data" />
      </div>

  </div>

  <div v-if="showObjectDetails" >
    <InventoryObjectDetailedPublicOffer  v-on:nextStep="exchangeObject"  v-on:closeModal="showObjectDetails=false" :object=objectToShowDetails  :session_data="session_data" />
  </div>
 

  <div v-if="step1_ExchangeProposal" >
    <NewExchangeProposal_SelectObjectInventory  v-on:nextStep="showProposalSummary"  v-on:closeModal="step1_ExchangeProposal=false" :object=objectToShowDetails  :session_data="session_data" />
  </div>




</div>
</template>

<style>

</style>


<script>

export default {

  
  data : function() {
      return {
        searchParams : {} ,
        objects : [] ,
        objects_filtered : [] ,
        showObjectDetails : false ,
        objectToShowDetails : null , 
        step1_ExchangeProposal : false ,
      }
  },

  props: ['session_data'],
  emits: ['sessionCreated'],

created() {
     },

methods: {

    /*
    async SearchObjects(searchParams)
    {
    let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects",searchParams);
    console.log("/public_search_objects Response:"+JSON.stringify(response_json.data))
    this.objects = response_json.data ; 
    this.objects.sort((a, b) => b.id - a.id );
    this.objects_filtered=this.objects ; 
    },
    */


//comes from object details public offer
    exchangeObject(obj)
    { 
      this.showObjectDetails=false 
      this.step1_ExchangeProposal=true
      console.log("exchange Object in VIewSearch")
    },

    showPublicObjectDetails(obj)
    {
      this.objectToShowDetails=obj
      this.showObjectDetails = true ; 
    },

    async filterByText(text)
    {
      console.log ("Flter by text viewSearch"+text)

      this.searchParams.search_text=text;
      
      let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_by_text",this.searchParams);
      console.log("/public_search_objects_by_text Response:"+JSON.stringify(response_json.data))
      this.objects = response_json.data ; 
      this.objects.sort((a, b) => b.id - a.id );
      this.objects_filtered=this.objects ; 
    },

    async filterByCategory(category)
    {
      console.log ("Flter by category viewSearch"+category)

      this.searchParams.search_categories = category ;     

      let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_by_category",this.searchParams);
      console.log("/public_search_objects_by_category Response:"+JSON.stringify(response_json.data))
      this.objects = response_json.data ; 
      this.objects.sort((a, b) => b.id - a.id );
      this.objects_filtered=this.objects ; 

    },

    showProposalSummary(myobjects)
    {

      console.log('ShowProposalSUmmary')
    },




    },

watch : {



      }
}
</script>


