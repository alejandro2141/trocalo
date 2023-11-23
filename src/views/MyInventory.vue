<template>
 
 <div>

    <div v-if="!showNewObjectForm">
        <div class="d-flex justify-content-center">
            <i  @click="showNewObjectForm=true" style="font-size:50px;" class=" text-primary bi bi-plus-lg"></i>
        </div>
        <br>
        <InventoryList />
    </div>
    <div v-else  class="position-absolute top-0 start-10 bg-dark" >
        <div style="transition: width 2s;" class="d-flex justify-content-end">
            <i  @click="showNewObjectForm=false" style="font-size:50px;" class="display-1 bi bi-x-lg"></i>
        </div>
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


