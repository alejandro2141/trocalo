<script setup>

import FilterForSearchView from '../components/FilterForSearchView.vue'
import SearchResult from '../components/SearchResult.vue'
import SearchCategoriesLast from '../components/SearchCategoriesLast.vue'
import SearchCategoriesGames from '../components/SearchCategoriesGames.vue'
import SearchCategoriesBooks from '../components/SearchCategoriesBooks.vue'
import SearchCategoriesClothes from '../components/SearchCategoriesClothes.vue'
import InventoryObjectDetailedPublicOffer from '../components/InventoryObjectDetailedPublicOffer.vue'

import NewExchangeProposal_SelectObjectInventory from '../components/NewExchangeProposal_SelectObjectInventory.vue'
import NewExchangeProposal_summary from '../components/NewExchangeProposal_summary.vue'

import NewExchangeProposal_checkBeforeSend from '../components/NewExchangeProposal_checkBeforeSend.vue'
import NewExchangeProposal_sentConfirmation from '../components/NewExchangeProposal_sentConfirmation.vue'


import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>


<template>

<div>

  <div v-if="!(showObjectDetails || exchangeProposal_showInventory || exchangeProposal_showSummary  || exchangeProposal_checkBeforeSend || exchangeProposal_sentConfirmation) ">

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
 <!-- Step 1 -->
  <div v-if="exchangeProposal_showInventory" >
    <NewExchangeProposal_SelectObjectInventory  v-on:nextStep="showProposalSummary"  v-on:closeModal="exchangeProposal_showInventory=false" :object=objectToShowDetails  :session_data="session_data" />
  </div>

<!-- Step 2 -->
  <div v-if="exchangeProposal_showSummary" >
    <NewExchangeProposal_summary  v-on:nextStep="showProposalCheckBeforeSend"  v-on:closeModal="exchangeProposal_showSummary=false" :objectYouWant=objectToShowDetails  :objectsYouOfferList=objectsSelectedFromMyInventory   v-on:showMyInventory="exchangeProposal_showSummary=false ; exchangeProposal_showInventory=true" :session_data="session_data" />
  </div>

  <!-- Step 3 Check Before send -->
  <div v-if="exchangeProposal_checkBeforeSend" >
    <NewExchangeProposal_checkBeforeSend  v-on:nextStep="showConfirmationProposalSent" v-on:closeModal="exchangeProposal_checkBeforeSend=false" :proposal_summary=proposal_summary   :session_data="session_data" />
  </div>


  <!-- Step 4 Sent Confirmation -->
  <div v-if="exchangeProposal_sentConfirmation" >
    <NewExchangeProposal_sentConfirmation  v-on:nextStep=""  v-on:closeModal="exchangeProposal_sentConfirmation=false" :proposal_summary=proposal_summary   :session_data="session_data" />
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

        exchangeProposal_showInventory    : false ,
        exchangeProposal_showSummary      : false ,
        exchangeProposal_checkBeforeSend  : false ,
        exchangeProposal_sentConfirmation : false ,
      
        objectsSelectedFromMyInventory : [] ,

        proposal_summary : null ,
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
      this.exchangeProposal_showInventory=true
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
      console.log('ShowProposalSUmmary '+myobjects)
      this.objectsSelectedFromMyInventory = myobjects

      this.exchangeProposal_showInventory = false 
      this.exchangeProposal_showSummary = true 
    },

    showProposalCheckBeforeSend(proposal)
    {
      this.proposal_summary = proposal 
      this.exchangeProposal_showSummary = false 
      this.exchangeProposal_checkBeforeSend = true 

      console.log('Show Check Before Send '+JSON.stringify(this.proposal_summary))
    },

    showConfirmationProposalSent(proposal)
    {
      this.exchangeProposal_checkBeforeSend = false ,
      this.exchangeProposal_sentConfirmation = true 
    }


    },

watch : {



      }
}
</script>


