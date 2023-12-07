<script setup>

import OfReceivedItemList from '../components/OfReceivedItemList.vue'
import OfReceivedItem from     '../components/OfReceivedItem.vue'
import OfSentItem from     '../components/OfSentItem.vue'
import InventoryList  from     '../components/InventoryList.vue'
import ExchangeProposalSent from   '../components/ExchangeProposalSent.vue'

</script>


<template>

<div>



  <div style="height:20px">
  </div>
  
  <!--
      <div style="font-size:20px" class="text-secondary w-100 text-center">
       Enviadas
      </div>

    <br>
    -->
   
    <p class="text-white text-center" style="font-size:20px">Enviadas </p>

    <OfSentItem  class="m-1" @click="showItemList=false" />
    <OfSentItem  class="m-1" />

    <br>
    <p class=" text-center" style="font-size:16px">Aceptadas </p>

    <OfSentItem  :accepted=true  class="m-1" />
    <OfSentItem  :accepted=true  class="m-1" />

    <br>
    <p class="text-secondary text-center" style="font-size:16px">Finalizadas </p>
    <div class="text-secondary">
      <OfSentItem  :ended=true  class="m-1" />
      <OfSentItem  :ended=true  class="m-1" />
      <OfSentItem  :ended=true  class="m-1" />
      <OfSentItem  :ended=true  class="m-1" />
      <OfSentItem  :ended=true  class="m-1" />
      <OfSentItem  :ended=true  class="m-1" />
    </div>


  <div style="height:120px">
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


