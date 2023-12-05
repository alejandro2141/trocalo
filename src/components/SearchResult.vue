<script setup>
import InventoryObject from './InventoryObject.vue'
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import FilterForSearchView from '../components/FilterForSearchView.vue'
import InventoryList from '../components/InventoryList.vue' 
import ExchangeProposal from '../components/ExchangeProposal.vue'
</script>

<template>

  <div  style="width:400px" class="m-0"   >

    <div style="height:10px">
    </div>


    <div class="m-0 " v-if=" !showModalDetails && !showExchangeProposal ">
        <FilterForSearchView v-on:filterByText="filterByText" v-on:filterByCategory="filterByCategory" />
    </div>
<br>
    
    <!-- 1- SHOW PUBLIC OBJECTS ARE AVAILABLE FOR SEARCH-->
    <div v-if="showExchangeProposal==false && showModalDetails==false" >
        
        <div v-if="objects_filtered !=null" class="d-flex flex-wrap"> 
          <div v-for="obj in objects_filtered"  > 
            <InventoryObject @click="objectDetails=obj ;showModalDetails=true;" :object=obj  class="m-1"/>
          </div>
        </div>

          
        <div style="height:300px">
        </div> 
    
    </div>

    <!-- 2- Show Object Details-->
    <div v-if="showModalDetails"   class="w-100 position-absolute top-0 start-0 bg-dark " >
      <div class="d-flex justify-content-center">
        <div>
          <div class="w-100" >
                  <div class="d-flex justify-content-end m-1"> 
                  <i @click="showModalDetails=false" class="bi bi-x-lg display-1" ></i>
                  </div>
                  <InventoryObjectDetailed :showMakeOffer=false  :object=objectDetails  v-on:showMyInventory='showMyInventory=true'  v-on:closeModalObjectDetails="closeModalObjectDetails" :session_data="session_data" />
          </div>
          
          <div class="m-4 pb-4 d-flex justify-content-center" v-if="showModalDetails">
                  <button v-if="session_data!=null && session_data.user!=null && !showMyInventory" @click="showExchangeProposal=true ; showModalDetails=false  "   type="button" class="btn btn-primary">Me interesa este Objeto</button>
                  <button v-else  type="button" class="btn btn-secondary">Debe estar registrado <br>para intercambiar &nbsp;&nbsp; <i style="font-size:30px" class="bi bi-key"></i> </button>
          </div>    
        </div>
      </div>
          
        <div style="height:200px">
        </div>  
    </div>

     <!-- 3 Show Exchange Proposal -->
    <div v-if="showExchangeProposal"   class="w-100 position-absolute top-0 start-0 bg-dark " >
      
      <div class="d-flex justify-content-center">
        
        <div class="w-100">
        <!-- DONT NEEDED
          <div class="d-flex justify-content-end m-2 bg-danger"  > 
            <i @click="showExchangeProposal=false ;  showModalDetails=true" class="bi bi-x-lg display-1" ></i>
          </div>
        -->
         
          <div class="">
            <ExchangeProposal v-on:emitShowObjectDetails="showExchangeProposal=false ;  showModalDetails=true" :objectProposal=objectDetails />
          </div>
          

        </div>
      </div>

    </div>


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
                           
        objects : [         {id:1 , name:"abcgame 1", description : "Consola en buen estado con 2 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_222"  , otherObj: true , category_1: 1 ,  category_2: 2  }, 
                            {id:2 , name:"bcdesport  2", description : "Consola en buen estado con 3 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_333"  , otherObj: false , category_1: 2  , category_2: 3 }, 
                            {id:3 , name:"efghi 3", description : "Consola en buen estado con 4 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_444" , otherObj: true , category_1: 3  , category_2: 4}, 
                            {id:4 , name:"abhijkl 4", description : "Consola en buen estado con 5 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_555" , otherObj: false, category_1: 4  , category_2: 5} , 
                            {id:5 , name:"AlguienPlay 5", description : "Consola en buen estado con 6 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_6666", otherObj: true, category_1: 5  , category_2: 6}, 
                            {id:6 , name:"AlguienPlay 6", description : "Consola en buen estado con 7 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_7777", otherObj: false, category_1: 6  , category_2: 7}, 
                            {id:7 , name:"AlguienPlay 7", description : "Consola en buen estado con 8 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_8888", otherObj: true, category_1: 7  , category_2: 8}, 
                           ],

        objects_filtered : null ,

      
      }
  },
  props: ['session_data'],
  emits: ['sessionCreated'],

created() {
  console.log("APP CREATED")

    this.objects_filtered=this.objects

    },

methods: {
  
    filterByText(ftext)
    {
    console.log("Filter By Text in Search Result:"+ftext)
        if(ftext!=null)
        {
        this.objects_filtered= this.objects_filtered.filter(element =>  element.name.toLowerCase().includes(ftext) );
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
        this.objects_filtered=this.objects.filter(element =>  categories.includes(element.category_1) ); 
      }
      else 
      {
        this.objects_filtered=this.objects
      }



    },

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

    },

watch : {
      }
}
</script>

