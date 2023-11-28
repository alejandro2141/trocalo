
<template>
 
<div class="">
  <div style="height:60px">
  </div>

    <div v-if="showItemList" >
        <OfReceivedItem  class="m-1" @click="showItemList=false" />
        <OfReceivedItem  class="m-1" />
        <OfReceivedItem  class="m-1" />
        <OfReceivedItem  class="m-1" />
        <OfReceivedItem  class="m-1" />
        <OfReceivedItem  class="m-1" />
        <OfReceivedItem  class="m-1" />


        <br>
        <text class="text-danger">------------ Finalizadas -----------</text>

        <OfReceivedItem  :ended=true  class="m-1" />


    </div>

    <div v-else >

      <div class="position-absolute top-0 start-10 bg-dark" >
        <div class="d-flex justify-content-end"> <i @click="showItemList=true" class="display-1 bi bi-x-lg"></i>  </div>
        <ExchangeProposalReceived />
      </div>
    
    </div>
 
</div>

</template>

<style>

</style>


<script>
  
import OfReceivedItemList from '../components/OfReceivedItemList.vue'
import OfReceivedItem from     '../components/OfReceivedItem.vue'
import InventoryList  from     '../components/InventoryList.vue'
import ExchangeProposalReceived from   '../components/ExchangeProposalReceived.vue'


export default {


  components: {
    OfReceivedItemList,OfReceivedItem,InventoryList,ExchangeProposalReceived
  },
  
  data : function() {
      return {
        showItemList:true ,

      }
  },
  props: ['session_data'],
  emits: [],

created() {
    },

methods: {
    },

watch : {
      }
}
</script>


