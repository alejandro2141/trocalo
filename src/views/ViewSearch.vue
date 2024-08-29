<script setup>

import FilterForSearchView from '../components/FilterForSearchView.vue'
import SearchResult from '../components/SearchResult.vue'
/*
import SearchCategoriesLast from '../components/SearchCategoriesLast.vue'
import SearchCategoriesGames from '../components/SearchCategoriesGames.vue'
import SearchCategoriesBooks from '../components/SearchCategoriesBooks.vue'
import SearchCategoriesClothes from '../components/SearchCategoriesClothes.vue'
*/
import InventoryObjectDetailedPublicOffer from '../components/InventoryObjectDetailedPublicOffer.vue'

import NewExchangeProposal_SelectObjectInventory from '../components/NewExchangeProposal_SelectObjectInventory.vue'
import NewExchangeProposal_summary from '../components/NewExchangeProposal_summary.vue'

import NewExchangeProposal_checkBeforeSend from '../components/NewExchangeProposal_checkBeforeSend.vue'
import NewExchangeProposal_sentConfirmation from '../components/NewExchangeProposal_sentConfirmation.vue'

import SpinnerLoading from '../components/SpinnerLoading.vue'


import { BKND_CONFIG ,PATH_BANNER_IMG, CATEGORIES } from '../../config.js'
import axios from 'axios'

</script>

<template>

<div>

 <!-- START DISPLAY CATEGORIES --> 
<!--
  <div class="d-none d-flex d-lg-inline-block" style="width:990px">
    <hr>
    <div v-for="category in CATEGORIES" class="d-flex d-lg-inline-block" >
                      <text @click="filterByCategory(category.id)" style="font-size:12px" > 
                          <p class="bi text-center"> 
                               {{category.name}} <i class="bi" :class="category.icon" ></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                             
                          </p>
                      </text>    
    </div>
    <hr>
  </div>

-->

    <!-- END DISPLAY CATEGORIES --> 
     
<div  class="">

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
            <text style="font-size: 25px;" class="m-2"></text>
            
            <!-- BUTTON TO CLOSE SEARCH RESULT
            <button  @click="$router.push({ name: 'ViewSearch' }); showCategories=true" type="button" class="btn btn-secondary">
                   <i style="font-size: 35px;" class="bi bi-x-lg"></i>
            </button>  
            -->
        </div>

        <div>
           <SearchResult  :title="'Categoria '+titleSearchResult"  v-on:exchangeObject="exchangeObject"  :search_event="search_event" :objects_filtered="objects_filtered" v-on:showPublicObjectDetails="showPublicObjectDetails"  :session_data="session_data" /> 
        </div>
    </div>
<!-- 
    <div v-else>
            <div v-for="category in CATEGORIES"  >
                <text @click="filterByCategory(category.id)" style="font-size:16px" > 
                  <i class="bi" :class="category.icon" ></i>  {{category.name}} 
                </text> 
                <br>
            </div>
    </div>
-->
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



 <!-- START BANNERS -->
<div v-if="!showObjectDetails" > 
  <!--
  <div style="width: 100%; height: 21px; border-bottom: 0.1px solid white; text-align: start" class="mt-2"  >
      <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Categorias 
      </span>
  </div>
  -->
  <hr>
  <span style="font-size: 21px;  padding: 0 10px; border-radius: 25px" class="bg-dark">
        Categorias 
  </span>
  <br>


<div class="d-flex  flex-wrap" >

  <div class="p-1 m-2 "   style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
    Libros
     <img @click="filterByCategory(2)" class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Books.png'" />
  </div>
   <div class="p-1 m-2 "   style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
     Juegos
     <img @click="filterByCategory(1)" class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Games.png'" />
  </div>
   <div class="p-1 m-2 "   style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
    Juguetes
     <img @click="filterByCategory(7)" class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Juguetes.png'" />
  </div>
   <div class="p-1 m-2 "   style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
    Electrodomesticos
     <img @click="filterByCategory(13)" class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Electrodomesticos.png'" />
  </div>

  <div class="p-1 m-2 "   style="background-color:#000 ; max-height: 350px; max-width: 350px;" > 
    Accesorios
     <img @click="filterByCategory(9)" class="m-0" style="max-height: 320px; max-width: 320px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Accesorios.png'" />
  </div>


  <div class="p-1 m-2 "   style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
    Computacion
     <img @click="filterByCategory(12)" class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Computacion.png'" />
  </div>
   <div class="p-1 m-2 "   style="background-color:#000 ; max-height: 170px; max-width: 170px;" > 
    Deportes
     <img @click="filterByCategory(5)" class="m-0" style="max-height: 130px; max-width: 130px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Deportes.png'" />
  </div>

  <div class="p-1 m-2 "   style="background-color:#000 ; max-height: 350px; max-width: 350px;" > 
    Vestuario
     <img @click="filterByCategory(4)" class="m-0" style="max-height: 320px; max-width: 320px; border-radius: 6px;" :src="PATH_BANNER_IMG+'/Banner_Vestuario.png'" />
  </div>


</div>


</div>

 
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

        titleSearchResult : "",
        category_search : null ,

      }

  },

  props: ['session_data', 'textToSearch','categoryToSearch' ,'category', 'state' ],
  emits: ['sessionCreated'],

created() {
   this.search_event = false
   this.filterByCategory(this.categoryToSearch)
   this.category_search = null
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
      if (cat != null)
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
          return "Recién llegados"
        }
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

      this.titleSearchResult = ""; 
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

    categoryToSearch(newval,oldval)
    {
      console.log("Show category in ViewSearch:"+newval+"   oldval:"+oldval)
      this.filterByCategory(newval)
    }



      }
}
</script>


