<script setup>

import OfReceivedItemList from '../components/OfReceivedItemList.vue'
import OfReceivedItem from     '../components/OfReceivedItem.vue'
import InventoryList  from     '../components/InventoryList.vue'
import ExchangeProposalSent from   '../components/ExchangeProposalSent.vue'

</script>


<template>

<div>

<div v-if="showItemList" >

  <div style="height:20px">
  </div>
  
      <div style="font-size:20px" class="text-secondary w-100 text-center">
       Enviadas
      </div>

    <br>

    <OfReceivedItem  class="m-1" @click="showItemList=false" />
    <OfReceivedItem  class="m-1" />

    <br>
    <text class="text-danger">------------ Finalizadas -----------</text>

    <OfReceivedItem  :ended=true  class="m-1" />
    <OfReceivedItem  :ended=true  class="m-1" />
    <OfReceivedItem  :ended=true  class="m-1" />
    <OfReceivedItem  :ended=true  class="m-1" />
    <OfReceivedItem  :ended=true  class="m-1" />
    <OfReceivedItem  :ended=true  class="m-1" />



</div>

<div v-else >

  <div class="position-absolute top-0 start-10 bg-dark" >
    <div class="d-flex justify-content-end"> <i @click="showItemList=true" class="display-1 bi bi-x-lg"></i>  </div>

    <ExchangeProposalSent v-on:closeExchangeProposalSent="closeExchangeProposalSent" />
  </div>

</div>

</div>


</template>

<style>

</style>


<script>

export default {
  
  data : function() {
      return {
        showItemList : true , 

      }
  },
  props: ['session_data'],
  emits: [],

created() {
    },

methods: {

    closeExchangeProposalSent()
    {
      this.showItemList=true
    }

    },

watch : {
      }
}
</script>


