<script setup>

import FilterForSearchView from '../components/FilterForSearchView.vue'
import SearchResult from '../components/SearchResult.vue'

//import SearchCategoriesLast from '../components/SearchCategoriesLast.vue'
//import SearchCategoriesGames from '../components/SearchCategoriesGames.vue'
//import SearchCategoriesBooks from '../components/SearchCategoriesBooks.vue'
//import SearchCategoriesClothes from '../components/SearchCategoriesClothes.vue'

import InventoryObjectDetailedPublicOffer from '../components/InventoryObjectDetailedPublicOffer.vue'

import NewExchangeProposal_SelectObjectInventory from '../components/NewExchangeProposal_SelectObjectInventory.vue'
import NewExchangeProposal_summary from '../components/NewExchangeProposal_summary.vue'

import NewExchangeProposal_checkBeforeSend from '../components/NewExchangeProposal_checkBeforeSend.vue'
import NewExchangeProposal_sentConfirmation from '../components/NewExchangeProposal_sentConfirmation.vue'

import ShowCategories from '../components/ShowCategories.vue'


import SpinnerLoading from '../components/SpinnerLoading.vue'


import { BKND_CONFIG , CATEGORIES } from '../../config.js'
import axios from 'axios'

</script>

<template>

<div>
  
  <div v-if="!(showObjectDetails || exchangeProposal_showInventory || exchangeProposal_showSummary  || exchangeProposal_checkBeforeSend || exchangeProposal_sentConfirmation) ">
  
  <!-- EDITED 18/07/2024
    <div>
      <FilterForSearchView v-on:filterByText="filterByText" v-on:filterByCategory="filterByCategory"  :session_data="session_data" />
    </div>
     <br>
  -->

    <!-- SHOW RESULT SEARCH-->


<!--
    <div v-if="!showCategories" style="position: absolute; top: 0px;" class="bg-danger">
          

        <button  style="position:absolute ; top:0px ; right:0px " @click="showCategories=true" type="button" class="btn btn-secondary">
                <i style="font-size:26px" class="bi bi-arrow-left-square"></i>
        </button>
        
        <div class="d-flex justify-content-between">
           

            <div class="d-flex justify-content-between">
                <text style="font-size: 25px;" class="m-2">{{titleSearchResult}}</text>
            </div> 

           
        </div>


        <div>
           <SearchResult    v-on:exchangeObject="exchangeObject"  :search_event="search_event" :objects_filtered="objects_filtered" v-on:showPublicObjectDetails="showPublicObjectDetails"  :session_data="session_data" /> 
        </div>
    </div>
-->

    <!-- END SHOW RESULT SEARCH-->


  <div v-if="showCategories">   
      
      

<!-- END NEW OBJECTS -->
      <div v-if="category2display == 0 || category2display == 999  ">
          <hr>
          <text style="font-size: 25px;" @click="selectedCategory(999)" > 
            
            <text v-if="category2display == 999" class="text-warning"> <i class="bi bi-caret-left-fill"></i> ........... 
            </text>
            <text v-else> <i class="bi bi-caret-right-fill"></i>  
            </text>
            Nuevos Objetos
          </text>
        
          <div v-if="category2display != 999" >    
            <br>
            <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]" :limit="6" :session_data=" session_data"/>
          </div>
          <div v-else>    
            <br>
            <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]" :limit="30" :session_data=" session_data"/>
          </div>
      </div>
<!-- END NEW OBJECTS -->

<!-- BOOKS -->
      <div v-if="category2display == 0 || category2display == 2 ">
          <hr>
          <text style="font-size: 25px;" @click="selectedCategory(2)" > 
            
            <text v-if="category2display == 2" class="text-warning"> <i class="bi bi-caret-left-fill"></i> ........... 
            </text>
            <text v-else> <i class="bi bi-caret-right-fill"></i>  
            </text>
            
              Libros 
            
          </text>
        
          <div v-if="category2display != 2" >    
            <br>
            <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[2]" :limit="6" :session_data=" session_data"/>
          </div>
          <div v-else>    
            <br>
            <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[2]" :limit="30" :session_data=" session_data"/>
          </div>
      </div>
<!-- END BOOKS -->


<!-- BOOKS -->
      <div v-if="category2display == 0 || category2display == 7 ">
          <hr>
          <text style="font-size: 25px;" @click="selectedCategory(7)" > 
            
            <text v-if="category2display == 7" class="text-warning"> <i class="bi bi-caret-left-fill"></i> ........... 
            </text>
            <text v-else> <i class="bi bi-caret-right-fill"></i>  
            </text>
              Juegos 
          </text>
        
          <div v-if="category2display != 7" >    
            <br>
            <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[7]" :limit="6" :session_data=" session_data"/>
          </div>
          <div v-else>    
            <br>
            <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[7]" :limit="30" :session_data=" session_data"/>
          </div>
      </div>
<!-- END BOOKS -->


<!-- VESTUARIO -->
      <div v-if="category2display == 0 || category2display == 4 ">
          <hr>
          <text style="font-size: 25px;" @click="selectedCategory(4)" > 
            
            <text v-if="category2display == 4" class="text-warning"> <i class="bi bi-caret-left-fill"></i> ....... 
            </text>
            <text v-else> <i class="bi bi-caret-right-fill"></i>  
            </text>
              Vestuario 
          </text>
        
          <div v-if="category2display != 7" >    
            <br>
            <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[4]" :limit="6" :session_data=" session_data"/>
          </div>
          <div v-else>    
            <br>
            <ShowCategories v-on:showPublicObjectDetails="showPublicObjectDetails" :category="[4]" :limit="30" :session_data=" session_data"/>
          </div>
      </div>
<!-- END VESTUARIO -->


<!--
      <div v-if="category2display == 0 ">

          <SearchCategoriesLast  v-on:exchangeObject="exchangeObject" v-on:filterByCategory="filterByCategory" v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data"/>
      </div>
      
      <div v-if="category2display==7 || category2display == 0">
          <hr>
          <SearchCategoriesGames v-on:exchangeObject="exchangeObject" v-on:filterByCategory="filterByCategory" v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data" />
      </div>

      <div v-if="category2display == 2 || category2display == 0">
          <hr>
          <SearchCategoriesBooks v-on:exchangeObject="exchangeObject" :categoryDisplay="category2display" v-on:selectedCategory="selectedCategory" v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data" /> 
      </div>

      <div v-if="category2display == 4 || category2display == 0">
          <hr>
          <SearchCategoriesClothes v-on:exchangeObject="exchangeObject" v-on:filterByCategory="filterByCategory" v-on:showPublicObjectDetails="showPublicObjectDetails" :session_data="session_data" />
      </div>
-->


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

        titleSearchResult : "" ,

        category2display : 0 
      }

  },

  props: ['session_data', 'textToSearch'],
  emits: ['sessionCreated'],

created() {
   this.search_event = false
     },

methods: {

    selectedCategory(val)
    {
      console.log("Selected category value : "+val)

      if (val == this.category2display)
        {
          this.category2display = 0 
        }
      else 
        {
         this.category2display = val  
        }

      
    },
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

    /*
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
    */

    async filterByCategory(category)
    {
      console.log("Welcome Filter by category :"+category)

     // this.$router.push({ name: 'ViewSearch' })

//      $router.push({ name: 'somewhere', state: { myData } })

      
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
/*
  textToSearch(newval,oldval)
    {
      console.log("textToSearch in ViewSearch newval:"+newval+"   oldval:"+oldval)
      this.filterByText(newval)
    }
*/


      }
}
</script>


