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

import SpinnerLoading from '../components/SpinnerLoading.vue'


import { BKND_CONFIG , CATEGORIES } from '../../config.js'
import axios from 'axios'

</script>

<template>

<div>
  category: {{category}}

  <div v-if="!(showObjectDetails || exchangeProposal_showInventory || exchangeProposal_showSummary  || exchangeProposal_checkBeforeSend || exchangeProposal_sentConfirmation) ">
  
  <!-- EDITED 18/07/2024
    <div>
      <FilterForSearchView v-on:filterByText="filterByText" v-on:filterByCategory="filterByCategory"  :session_data="session_data" />
    </div>
     <br>
  -->

    <!-- SHOW RESULT SEARCH-->

    <div v-if="!showCategories" >
        <div class="d-flex justify-content-between">
            <text style="font-size: 25px;" class="m-2">{{titleSearchResult}}</text>
            
            <!-- BUTTON TO CLOSE SEARCH RESULT
            <button  @click="$router.push({ name: 'ViewSearch' }); showCategories=true" type="button" class="btn btn-secondary">
                   <i style="font-size: 35px;" class="bi bi-x-lg"></i>
            </button>  
            -->
        </div>

        <div>
           <SearchResult    v-on:exchangeObject="exchangeObject"  :search_event="search_event" :objects_filtered="objects_filtered" v-on:showPublicObjectDetails="showPublicObjectDetails"  :session_data="session_data" /> 
        </div>
    </div>

    <!-- END SHOW RESULT SEARCH-->

<!--
  <div v-if="showCategories">   
      <div>

          <SearchCategoriesLast  v-on:exchangeObject="exchangeObject" v-on:filterByCategory="filterByCategory" v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data"/>
      </div>
      
      <div>
          <hr>
          <SearchCategoriesGames v-on:exchangeObject="exchangeObject" v-on:filterByCategory="filterByCategory" v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data" />
      </div>

      <div>
          <hr>
          <SearchCategoriesBooks v-on:exchangeObject="exchangeObject" v-on:filterByCategory="filterByCategory" v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data" /> 
      </div>

      <div >
          <hr>
          <SearchCategoriesClothes v-on:exchangeObject="exchangeObject" v-on:filterByCategory="filterByCategory" v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data" />
      </div>
  </div> 

-->

  </div>

  <div v-if="showObjectDetails" >
    <InventoryObjectDetailedPublicOffer  v-on:nextStep="exchangeObject"  v-on:closeModal="showObjectDetails=false" :object=objectToShowDetails  :session_data="session_data" />
  </div>
 <!-- Step 1 -->
  <div v-if="exchangeProposal_showInventory" >
    <NewExchangeProposal_SelectObjectInventory  v-on:nextStep="showProposalSummary"  v-on:closeModal="exchangeProposal_showInventory=false;showObjectDetails=true" :object=objectToShowDetails  :session_data="session_data" />
  </div>

<!-- Step 2 -->
  <div v-if="exchangeProposal_showSummary" >
    <NewExchangeProposal_summary  v-on:nextStep="showProposalCheckBeforeSend"  v-on:closeModal="exchangeProposal_showSummary=false;showObjectDetails=true" :objectYouWant=objectToShowDetails  :objectsYouOfferList=objectsSelectedFromMyInventory   v-on:showMyInventory="exchangeProposal_showSummary=false ; exchangeProposal_showInventory=true" :session_data="session_data" />
  </div>

  <!-- Step 3 Check Before send -->
  <div v-if="exchangeProposal_checkBeforeSend" >
    <NewExchangeProposal_checkBeforeSend  v-on:nextStep="showConfirmationProposalSent" v-on:closeModal="exchangeProposal_checkBeforeSend=false" :proposal_summary=proposal_summary   :session_data="session_data" />
  </div>


  <!-- Step 4 Sent Confirmation -->
  <div v-if="exchangeProposal_sentConfirmation" >
    <NewExchangeProposal_sentConfirmation  v-on:nextStep=""  v-on:closeModal="exchangeProposal_sentConfirmation=false" :proposal_summary=proposal_summary   :session_data="session_data" />
  </div>


  <SpinnerLoading  :onOff=spinnerOn />
  
  <br>
  <br>
  <br>
  
</div>
</template>

<style>

</style>


<script>

export default {

  
  data : function() {
      return {
        spinnerOn:false ,
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

        search_event : false ,
        showCategories : true ,

        titleSearchResult : ""
      }

  },

  props: ['session_data', 'textToSearch','category'],
  emits: ['sessionCreated'],

created() {
   this.search_event = false
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


    getCategoryName(cat)
    {

        console.log("categorias  :"+cat)
        console.log("categorias largo  :"+cat.length)
        console.log(typeof cat)
       
        if (cat< 100)
        {
        let iconData = CATEGORIES.find((element) => element.id === cat);
        console.log("icon data found:"+JSON.stringify(iconData) )
        return iconData.name
        }
        else 
        {
          return "Ultimas Novedades"
        }

    },


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
      this.spinnerOn=true
      console.log ("Flter by text viewSearch"+text)

      this.searchParams.search_text=text;
      
      let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_by_text",this.searchParams);
      console.log("/public_search_objects_by_text Response:"+JSON.stringify(response_json.data))
      if (response_json.data  != null )
      {
      this.objects = response_json.data ; 
      this.objects.sort((a, b) => b.id - a.id );
      this.objects_filtered=this.objects ;
      }
      else 
      {
        this.objects_filtered=null ;   
      }

      this.search_event = true 
      this.showCategories = false 

      this.spinnerOn=false
      
    },

    async filterByCategory(category)
    {
     
      if (category != null && category !="")
      {
      this.spinnerOn=true
      
      console.log ("Flter by category viewSearch {"+category+"}")
      this.searchParams.search_categories = category ; 
      this.searchParams.limited = 39 ;   

      let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/public_search_objects_by_category",this.searchParams);

      console.log("/public_search_objects_by_category Response:"+JSON.stringify(response_json.data))
      this.objects = response_json.data ; 
      this.objects.sort((a, b) => b.id - a.id );
      this.objects_filtered=this.objects ; 
      this.search_event = true
      this.showCategories = false 

      this.titleSearchResult =  this.getCategoryName(category)


      this.spinnerOn=false

      }
     
    },

    showProposalSummary(myobjects)
    { this.spinnerOn=true
      console.log('ShowProposalSUmmary '+myobjects)
      this.objectsSelectedFromMyInventory = myobjects

      this.exchangeProposal_showInventory = false 
      this.exchangeProposal_showSummary = true 
      this.spinnerOn=false
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

    textToSearch(newval,oldval)
    {
      console.log("textToSearch in ViewSearch newval:"+newval+"   oldval:"+oldval)
      this.filterByText(newval)
    },

    category(newval,oldval)
    {
      console.log("Show category in ViewSearch:"+newval+"   oldval:"+oldval)
      //this.filterByText(newval)
    }



      }
}
</script>


