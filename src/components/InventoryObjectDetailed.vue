<script setup>
</script>

<template>

<!-- 
<div  class="position-absolute top-50 start-50 translate-middle bg-dark">
-->
<div  class="" style="width:350px">

    <div class="border border-1" style="width: 100%">
    <!--
        <div>
            <text @click="$emit('closeModalObjectDetails')"> x </text>
        </div>
    -->
        <div>
            Play station 3
        </div>
        <div>
            Caquito_123
        </div>
        <div class="bg-secondary" style="width:300px; height:300px">
            IMAGE
        </div>
        <div>
            No tiene reallados, con solo un control, no tienen juegos y esta desbloqueada
        </div>
        <br>
        <div>
            xbox con juegos 
            Bicicleta aro 23
            Otros
        </div>

    </div> 

  </div>

</template>

<style scoped>

</style>


<script>
//const showForm = ref(false)
import InventoryList from './InventoryList.vue'

export default {

    components: {
        InventoryList
    },
    
    data : function() {
        return {
            showModal:false 
        }
    },

    props: ['session_data','object_details'],
    emits: ['closeModalObjectDetails','showMyInventory'],

  created() {
		console.log("created lala inventory Object detailed")
			},

  methods: {
      },

  watch : {
        }
}
</script>
