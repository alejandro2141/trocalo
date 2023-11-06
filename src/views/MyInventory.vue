
<template>
 
 <div>

    <div v-if="!showNewObjectForm">
        <i  @click="showNewObjectForm=true" class="display-1 bi bi-plus-lg"></i>
        <br>
        <InventoryList />
    </div>
    <div v-else>
      <i  @click="showNewObjectForm=false" class="display-1 bi bi-x-lg"></i>
          <NewObjectForm />
    </div>


 </div>

</template>

<style>

</style>


<script>

import InventoryObject from '../components/InventoryObject.vue'
import InventoryObjectDetailed from '../components/InventoryObjectDetailed.vue'
import InventoryList from '../components/InventoryList.vue' 
import NewObjectForm from '../components/NewObjectForm.vue'



export default {


  components: {
    InventoryObject,InventoryObjectDetailed,InventoryList,NewObjectForm
  },
  
  data : function() {
      return {
        showNewObjectForm : false, 

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


