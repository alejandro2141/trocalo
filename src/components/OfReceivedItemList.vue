
<template>
 
 <div>
Of received Item List
    <OfReceivedItem />
    <OfReceivedItem />
    <OfReceivedItem />
    <OfReceivedItem />
    <OfReceivedItem />
    <OfReceivedItem />


 </div>

</template>

<style>

</style>


<script>

import OfReceivedItem from '../components/OfReceivedItem.vue'

export default {


  components: {
    OfReceivedItem
  },
  
  data : function() {
      return {

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


