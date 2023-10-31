<template>

  <div class="w-100 m-2 border border-1 bg-secondary"  >
    SHow Object and My Inventory
  </div>
  <InventoryObjectDetailed/>
  <InventoryList/>

</template>

<style scoped>

</style>


<script>
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryList from './InventoryList.vue'


export default {

  components: {
    InventoryObjectDetailed,InventoryList
  },
  
  data : function() {
      return {
        showModalDetails: false
      }
  },
  props: ['session_data'],
  emits: ['closeThisModal'],

created() {
  console.log("APP CREATED")
    },

methods: {
    
    closeModalObjectDetails()
    {
      this.showModalDetails= false
    }

    },

watch : {
      }
}
</script>

