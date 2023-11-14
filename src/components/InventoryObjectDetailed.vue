<script setup>
</script>

<template>

<!-- 
<div  class="position-absolute top-50 start-50 translate-middle bg-dark">
-->
<div  class=" mt-0" style="width:350px ; font-size:16px">

    <div class="" style="width: 100%">
    <!--
        <div>
            <text @click="$emit('closeModalObjectDetails')"> x </text>
        </div>
    -->
        <div style="font-size:20px">
            Play station 3 
        </div>
        <div style="font-size:16px">
           De Caquito_123
        </div>
        <div class="bg-secondary" style="width:350px; height:300px">
            IMAGE
        </div>
        
        <div class="d-flex justify-content-start ">
                <div class="bg-secondary m-1 " style="width:60px; height:60px">
                    IMAGE
                </div>
                <div class="bg-secondary m-1" style="width:60px; height:60px">
                    IMAGE
                </div>
                <div class="bg-secondary m-1" style="width:60px; height:60px">
                    IMAGE
                </div>
                <div class="bg-secondary m-1" style="width:60px; height:60px">
                    IMAGE
                </div>
        </div>

        <div >
            No tiene reallados, con solo un control, no tienen juegos y esta desbloqueada
        </div>
        <div class="mt-1" style="font-size:20px">
           Cambiaria por:  
        </div>
        <div>
            xbox con juegos 
            Bicicleta aro 23
            Otros
        </div>
        <div class="mt-1" style="font-size:20px">
           Cambiaria por otros objetos:  Si
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
