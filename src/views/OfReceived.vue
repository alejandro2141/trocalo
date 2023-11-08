
<template>
 
<div>

    <div v-if="showItemList" >
        <OfReceivedItem @click="showItemList=false" />
        <OfReceivedItem />
        <OfReceivedItem />
        <OfReceivedItem />
        <OfReceivedItem />
        <OfReceivedItem />
        
    </div>
    <div v-else >
        <i @click="showItemList=true" class="display-1 bi bi-x-lg"></i>
        <ShowObjectAndMyInventory />
    </div>
 
</div>

</template>

<style>

</style>


<script>
  
import OfReceivedItemList from '../components/OfReceivedItemList.vue'
import OfReceivedItem from '../components/OfReceivedItem.vue'
import InventoryList  from '../components/InventoryList.vue'
import ShowObjectAndMyInventory from '../components/ShowObjectAndMyInventory.vue'

export default {


  components: {
    OfReceivedItemList,OfReceivedItem,InventoryList,ShowObjectAndMyInventory
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


